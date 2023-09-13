<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/usuario/pruebas', 'UserController@pruebas');

Route::resource('/users', App\Http\Controllers\UserController::class);

/* Route::get('api/usersA', [UserController::class, 'index']); */

/* Route::post('/api/register', 'App\Http\Controllers\UserController@register'); */

Route::post('/api/login', 'App\Http\Controllers\UserController@login');