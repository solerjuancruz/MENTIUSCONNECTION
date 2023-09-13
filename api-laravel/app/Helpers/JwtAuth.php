<?php

namespace App\Helpers;

use Firebase\JWT\JWT;
use App\Models\User;

class JwtAuth
{

    private $key;

    public function __construct()
    {
        $this->key = 'esto_es_una_clave_super_secreta-99887766';
    }

    public function signup($email, $password, $getToken = null)
    {
        // Buscar si existe el usuario con el correo electrónico proporcionado
        $user = User::where('email', $email)->first();

        if ($user && password_verify($password, $user->password)) {
            // Generar el token con los datos del usuario identificado
            $token = array(
                'sub'       => $user->id,
                'email'     => $user->email,
                'name'      => $user->name,
                'surname'   => $user->surname,
                'iat'       => time(),
                'exp'       => time() + (7 * 24 * 60 * 60)
            );

            $jwt = JWT::encode($token, $this->key);

            // Devolver los datos decodificados o el token, en función de un parámetro
            if (is_null($getToken)) {
                $data = $jwt;
            } else {
                $data = $token;
            }
        } else {
            // La contraseña proporcionada no coincide con la almacenada en la base de datos o el usuario no fue encontrado
            $data = array(
                'status'  => 'error',
                'message' => 'Credenciales incorrectas'
            );
        }

        return $data;
    }

    public function checkToken($jwt, $getIdentity = false)
    {
        $auth = false;

        try {
            $decoded = JWT::decode($jwt, $this->key, ['HS256']);
        } catch (\Firebase\JWT\ExpiredException $e) {
            $auth = false;
        } catch (\Throwable $e) {
            $auth = false;
        }

        if (!empty($decoded) && is_object($decoded) && isset($decoded->sub)) {
            $auth = true;
        }

        if ($getIdentity) {
            return $decoded;
        }

        return $auth;
    }
}
