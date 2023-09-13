<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CorsMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        $response->header('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen (cambiar * por el dominio específico si es necesario)
        $response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Permitir métodos HTTP específicos
        $response->header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization'); // Permitir cabeceras específicas

        return $response;
    }
}
