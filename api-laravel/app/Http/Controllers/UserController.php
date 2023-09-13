<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use League\CommonMark\Extension\CommonMark\Node\Inline\Code;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Helpers\JwtAuth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Response;

class UserController extends Controller
{

    public function pruebas(){
        return 'Pruebas desde controller user';
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         // Obtener todos los usuarios
         $users = User::all();

         // Devolver respuesta JSON con la lista de usuarios
          return response()->json([
             'status' => 'success',
             'code' => 200,
             'users' => $users
         ]); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return ;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

       // Obtener los datos del usuario por POST
       $json = $request->input('json', null);
       $params = json_decode($json); // OBJETO
       $params_array = json_decode($json, true); // ARRAY

       if (!empty($params) && !empty($params_array)) {
           // LIMPIAR DATOS
           $params_array = array_map('trim', $params_array);

           // VALIDAR LOS DATOS
           $validate = Validator::make($params_array, [
               'name' => 'required|alpha',
               'surname' => 'required|alpha',
               'email' => 'required|email|unique:users',
               'password' => 'required'
           ]);

           if ($validate->fails()) {
               // LA VALIDACIÓN HA FALLADO
               $data = array(
                   'status' => 'error',
                   'code' => 400,
                   'message' => 'El usuario no se ha creado',
                   'errors' => $validate->errors()
               );
           } else {
               // VALIDACIÓN PASADA CORRECTAMENTE

               // CIFRAR CONTRASEÑA
               $pwd = bcrypt($params->password);

               // CREAR USUARIO
               $user = new User();
               $user->name = $params_array['name'];
               $user->surname = $params_array['surname'];
               $user->email = $params_array['email'];
               $user->password = $pwd;
               $user->role = 'ROLE_USER';

               // GUARDAR USUARIO
               $user->save();

               $data = array(
                   'status' => 'success',
                   'code' => 200,
                   'message' => 'El usuario se ha creado correctamente',
                   'user' => $user
               );
           }
       } else {
           $data = array(
               'status' => 'error',
               'code' => 404,
               'message' => 'Los datos enviados no son correctos'
           );
       }

       return response()->json($data, $data['code']);
    }

    /**Login.*/
    public function login(Request $request){
        
 // Recibir datos por POST
 $json = $request->input('json', null);
 $params_array = json_decode($json, true);

 // VALIDAR LOS DATOS
 $validate = Validator::make($params_array, [
     'email' => 'required|email',
     'password' => 'required'
 ]);

 if ($validate->fails()) {
     // LA VALIDACIÓN HA FALLADO
     $login = array(
         'status' => 'error',
         'code' => 400,
         'message' => 'El usuario no ha podido iniciar sesión',
         'errors' => $validate->errors()
     );
 } else {

     // Buscar al usuario en la base de datos por su email
     $user = User::where('email', $params_array['email'])->first();

     if ($user) {
         // Crear una instancia de JwtAuth
         $jwtAuth = new JwtAuth();

         // Verificar las credenciales y obtener el token
         $token = $jwtAuth->signup($user->email, $params_array['password']);

         if (isset($token['status']) && $token['status'] == 'error') {
             // Ocurrió un error al generar el token
             $login = array(
                 'status' => 'error',
                 'code' => 401,
                 'message' => 'Credenciales incorrectas'
             );
         } else {
             // Autenticación exitosa
             $login = array(
                 'status' => 'success',
                 'code' => 200,
                 'token' => $token
             );
         }
     } else {
         // El usuario no fue encontrado en la base de datos
         $login = array(
             'status' => 'error',
             'code' => 401,
             'message' => 'Credenciales incorrectas'
         );
     }
 }

 return response()->json($login, $login['code']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
           // Obtener el usuario por su ID
           $user = User::find($id);

           if ($user) {
               return response()->json([
                   'status' => 'success',
                   'code' => 200,
                   'user' => $user
               ]);
           } else {
               return response()->json([
                   'status' => 'error',
                   'code' => 404,
                   'message' => 'Usuario no encontrado'
               ]);
           }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $token = $request->header('Authorization');

        // Verificar si el token es válido
        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($token);

        if ($checkToken) {
            // Recoger datos por POST
            $json = $request->input('json', null);
            $params_array = json_decode($json, true);

            // Validar datos
            $validate = Validator::make($params_array, [
                'name' => 'required|alpha',
                'surname' => 'required|alpha',
                'email' => 'required|email|unique:users,email,' . $id
            ]);

            if ($validate->fails()) {
                // La validación ha fallado
                $data = array(
                    'status' => 'error',
                    'code' => 400,
                    'message' => 'Los datos enviados no son válidos',
                    'errors' => $validate->errors()
                );
            } else {
                // Quitar campos que no quiero actualizar
                unset($params_array['id']);
                unset($params_array['role']);
                unset($params_array['password']);
                unset($params_array['created_at']);

                // Actualizar usuario en la base de datos
                $user = User::where('id', $id)->update($params_array);

                $data = array(
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'Usuario actualizado correctamente',
                    'user' => $params_array
                );
            }
        } else {
            $data = array(
                'status' => 'error',
                'code' => 400,
                'message' => 'Token de autorización inválido'
            );
        }

        return response()->json($data, $data['code']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Obtener el usuario por su ID
        $user = User::find($id);

        if ($user) {
            // Eliminar el usuario
            $user->delete();

            return response()->json([
                'status' => 'success',
                'code' => 200,
                'message' => 'Usuario eliminado correctamente'
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'code' => 404,
                'message' => 'Usuario no encontrado'
            ]);
        }
    }
}
