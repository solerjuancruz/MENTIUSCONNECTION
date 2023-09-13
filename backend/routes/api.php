<?php

/* INICIO TIEMPOS */

use App\Http\Controllers\Api\fija\FijaInboundController as FijaFijaInboundController;
use App\Http\Controllers\Api\fija\FijaTeleventasController as FijaFijaTeleventasController;
use App\Http\Controllers\Api\movistar\CoberturaController;
use App\Http\Controllers\Api\movistar\CreatePlanController;
use App\Http\Controllers\Api\Tiempo\InicioTurnoController;
use App\Http\Controllers\Api\Tiempo\InicioBreackController;
use App\Http\Controllers\Api\Tiempo\FinBreackController;
use App\Http\Controllers\Api\Tiempo\InicioAlmuerzoController;
use App\Http\Controllers\Api\Tiempo\FinAlmuerzoController;
use App\Http\Controllers\Api\Tiempo\InicioCapacitacionController;
use App\Http\Controllers\Api\Tiempo\FinCapacitacionController;
use App\Http\Controllers\Api\Tiempo\InicioPausasController;
use App\Http\Controllers\Api\Tiempo\FinPausasController;
use App\Http\Controllers\Api\Tiempo\InicioDañoController;
use App\Http\Controllers\Api\Tiempo\FinDañoController;
use App\Http\Controllers\Api\Tiempo\InicioEvaluacionController;
use App\Http\Controllers\Api\Tiempo\FinEvaluacionController;
use App\Http\Controllers\Api\Tiempo\InicioRetroController;
use App\Http\Controllers\Api\Tiempo\FinRetroController;
use App\Http\Controllers\Api\Tiempo\InicioReunionController;
use App\Http\Controllers\Api\Tiempo\FinReunionController;
use App\Http\Controllers\Api\Tiempo\InicioBañoController;
use App\Http\Controllers\Api\Tiempo\FinBañoController;
use App\Http\Controllers\Api\Tiempo\InicioCalamidadController;
use App\Http\Controllers\Api\Tiempo\FinCalamidadController;
use App\Http\Controllers\Api\Tiempo\InicioEmeMedicaController;
use App\Http\Controllers\Api\Tiempo\FinEmeMedicaController;
use App\Http\Controllers\Api\Tiempo\FinTurnoController;

/* FIN TIEMPOS */

/* INICIO MOVISTAR */

//FIJA
use App\Http\Controllers\Api\movistar\fija\FijaDigitalController;
use App\Http\Controllers\Api\movistar\fija\FijaInboundController;
use App\Http\Controllers\Api\movistar\fija\FijaTeleventasController;
use App\Http\Controllers\Api\movistar\LineaNuevaController;
//NOTICIAS

use App\Http\Controllers\Api\movistar\noticias\NoticiasController;
use App\Http\Controllers\Api\movistar\PhoenixController;
use App\Http\Controllers\Api\movistar\PhoenixPerdidaController;
use App\Http\Controllers\Api\movistar\porta\PortaDigitalController;
use App\Http\Controllers\Api\movistar\porta\PortaInboundController;
use App\Http\Controllers\Api\movistar\porta\PortaTeleventasController;
use App\Http\Controllers\Api\movistar\prepost\PrepostDigitalController;
use App\Http\Controllers\Api\movistar\prepost\PrepostInboundController;
use App\Http\Controllers\Api\movistar\prepost\PrepostTeleventaController;
use App\Http\Controllers\Api\movistar\RechazosController;
use App\Http\Controllers\Api\movistar\upgrade\UpgradeDigitalController;
use App\Http\Controllers\Api\movistar\upgrade\UpgradeInboundController;
use App\Http\Controllers\Api\movistar\upgrade\UpgradeTeleventasController;
use App\Models\CreatePlan;
/* FIN  MOVISTAR */

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/* INICIO TIEMPOS */
Route::controller(InicioTurnoController::class)->group(function () {
    Route::get('/inicioturnos', 'index');
    Route::get('/inicioturno/{id}', 'show');
    Route::post('/inicioturno', 'store');
});

Route::controller(InicioBreackController::class)->group(function () {
    Route::put('/iniciobreack/{id}', 'update');
});

Route::controller(FinBreackController::class)->group(function () {
    Route::put('/finbreack/{id}', 'update');
});

Route::controller(InicioAlmuerzoController::class)->group(function () {
    Route::put('/inicioalmuerzo/{id}', 'update');
});

Route::controller(FinAlmuerzoController::class)->group(function () {
    Route::put('/finalmuerzo/{id}', 'update');
});

Route::controller(InicioCapacitacionController::class)->group(function () {
    Route::put('/iniciocapa/{id}', 'update');
});

Route::controller(FinCapacitacionController::class)->group(function () {
    Route::put('/fincapa/{id}', 'update');
});

Route::controller(InicioPausasController::class)->group(function () {
    Route::put('/iniciopausas/{id}', 'update');
});

Route::controller(FinPausasController::class)->group(function () {
    Route::put('/finpausas/{id}', 'update');
});

Route::controller(InicioDañoController::class)->group(function () {
    Route::put('/iniciodaño/{id}', 'update');
});

Route::controller(FinDañoController::class)->group(function () {
    Route::put('/findaño/{id}', 'update');
});

Route::controller(InicioEvaluacionController::class)->group(function () {
    Route::put('/inicioeva/{id}', 'update');
});

Route::controller(FinEvaluacionController::class)->group(function () {
    Route::put('/fineva/{id}', 'update');
});

Route::controller(InicioRetroController::class)->group(function () {
    Route::put('/inicioretro/{id}', 'update');
});

Route::controller(FinRetroController::class)->group(function () {
    Route::put('/finretro/{id}', 'update');
});

Route::controller(InicioReunionController::class)->group(function () {
    Route::put('/inicioreu/{id}', 'update');
});

Route::controller(FinReunionController::class)->group(function () {
    Route::put('/finreu/{id}', 'update');
});

Route::controller(InicioBañoController::class)->group(function () {
    Route::put('/iniciobaño/{id}', 'update');
});

Route::controller(FinBañoController::class)->group(function () {
    Route::put('/finbaño/{id}', 'update');
});

Route::controller(InicioCalamidadController::class)->group(function () {
    Route::put('/iniciocalamidad/{id}', 'update');
});

Route::controller(FinCalamidadController::class)->group(function () {
    Route::put('/fincalamidad/{id}', 'update');
});

Route::controller(InicioEmeMedicaController::class)->group(function () {
    Route::put('/inicioemer/{id}', 'update');
});

Route::controller(FinEmeMedicaController::class)->group(function () {
    Route::put('/finemer/{id}', 'update');
});

Route::controller(FinTurnoController::class)->group(function () {
    Route::put('/finturno/{id}', 'update');
});

/* FIN TIEMPOS */

/* INICIO MOVISTAR */

Route::controller(FijaDigitalController::class)->group(function () {

    Route::get('/fijadigitals', 'index');
    Route::post('/fijadigital', 'store');
    Route::get('/fijadigital/{id}', 'show');
    Route::put('/fijadigital/{id}', 'update');
    Route::delete('/fijadigital/{id}', 'destroy');
});

Route::controller(FijaInboundController::class)->group(function () {

    Route::get('/fijainbounds', 'index');
    Route::post('/fijainbound', 'store');
    Route::get('/fijainbound/{id}', 'show');
    Route::put('/fijainbound/{id}', 'update');
    Route::delete('/fijainbound/{id}', 'destroy');
});

Route::controller(FijaTeleventasController::class)->group(function () {

    Route::get('/fijateleventas', 'index');
    Route::post('/fijateleventa', 'store');
    Route::get('/fijateleventa/{id}', 'show');
    Route::put('/fijateleventa/{id}', 'update');
    Route::delete('/fijateleventa/{id}', 'destroy');
});

/* FIN MOVISTAR FIJA*/

/* INICIO MOVISTAR PORTA*/

//porta digital

Route::controller(PortaDigitalController::class)->group(function () {

    Route::get('/portadigitals', 'index');
    Route::post('/portadigital', 'store');
    Route::get('/portadigital/{id}', 'show');
    Route::put('/portadigital/{id}', 'update');
    Route::delete('/portadigital/{id}', 'destroy');
});
//porta inbound

Route::controller(PortaInboundController::class)->group(function () {

    Route::get('/portainbounds', 'index');
    Route::post('/portainbound', 'store');
    Route::get('/portainbound/{id}', 'show');
    Route::put('/portainbound/{id}', 'update');
    Route::delete('/portainbound/{id}', 'destroy');
});

//porta televentas

Route::controller(PortaTeleventasController::class)->group(function () {

    Route::get('/portateleventas', 'index');
    Route::post('/portateleventa', 'store');
    Route::get('/portateleventa/{id}', 'show');
    Route::put('/portateleventa/{id}', 'update');
    Route::delete('/portateleventa/{id}', 'destroy');
});

/* FIN MOVISTAR PORTA*/

/* INICIO NOTICIAS */

Route::controller(NoticiasController::class)->group(function () {

    Route::get('/news', 'index');
    Route::post('/new', 'store');
    Route::get('/new/{id}', 'show');
    Route::put('/new/{id}', 'update');
    Route::delete('/new/{id}', 'destroy');
});

/* FIN NOTICIAS */

/* INICIO UPGRADE MOVISTAR*/
//upgrade digital

Route::controller(UpgradeDigitalController::class)->group(function () {

    Route::get('/upgradedigitals', 'index');
    Route::post('/upgradedigital', 'store');
    Route::get('/upgradedigital/{id}', 'show');
    Route::put('/upgradedigital/{id}', 'update');
    Route::delete('/upgradedigital/{id}', 'destroy');
});

//upgrade inbound


Route::controller(UpgradeInboundController::class)->group(function () {

    Route::get('/upgradeinbounds', 'index');
    Route::post('/upgradeinbound', 'store');
    Route::get('/upgradeinbound/{id}', 'show');
    Route::put('/upgradeinbound/{id}', 'update');
    Route::delete('/upgradeinbound/{id}', 'destroy');
});

// upgrade Televentas


Route::controller(UpgradeTeleventasController::class)->group(function () {

    Route::get('/upgradeteleventas', 'index');
    Route::post('/upgradeteleventa', 'store');
    Route::get('/upgradeteleventa/{id}', 'show');
    Route::put('/upgradeteleventa/{id}', 'update');
    Route::delete('/upgradeteleventa/{id}', 'destroy');
});
/* FIN UPGRADE MOVISTAR*/
/* INICIO LINEA NUEVA MOVISTAR*/
Route::controller(LineaNuevaController::class)->group(function () {
    Route::get('/lineanuevas', 'index');
    Route::post('/lineanueva', 'store');
    Route::get('/lineanueva/{id}', 'show');
    Route::put('/lineanueva/{id}', 'update');
    Route::delete('/lineanueva/{id}', 'destroy');
});
/* FIN LINEA NUEVA MOVISTAR*/

/* INICIO RECHAZOS MOVISTAR*/


Route::controller(RechazosController::class)->group(function () {

    Route::get('/rechazos', 'index');
    Route::post('/rechazo', 'store');
    Route::get('/rechazo/{id}', 'show');
    Route::put('/rechazo/{id}', 'update');
    Route::delete('/rechazo/{id}', 'destroy');
});
/* FIN RECHAZOS MOVISTAR*/
/* INICIO PHOENIX MOVISTAR*/
Route::controller(PhoenixController::class)->group(function () {

    Route::get('/phoenixies', 'index');
    Route::post('/phoenix', 'store');
    Route::get('/phoenix/{id}', 'show');
    Route::put('/phoenix/{id}', 'update');
    Route::delete('/phoenix/{id}', 'destroy');
});
/* FIN PHOENIX MOVISTAR*/

/* INICIO PHOENIX PERDIDA MOVISTAR*/
Route::controller(PhoenixPerdidaController::class)->group(function () {
    Route::get('/phoenixiesperdida', 'index');
    Route::post('/phoenixperdida', 'store');
    Route::get('/phoenixperdida/{id}', 'show');
    Route::put('/phoenixperdida/{id}', 'update');
    Route::delete('/phoenixperdida/{id}', 'destroy');
});
/* FIN PHOENIX PERDIDA MOVISTAR*/
/* INICIO PREPOST DIGITAL MOVISTAR*/
Route::controller(PrepostDigitalController::class)->group(function () {
    Route::get('/prepostdigitals', 'index');
    Route::post('/prepostdigital', 'store');
    Route::get('/prepostdigital/{id}', 'show');
    Route::put('/prepostdigital/{id}', 'update');
    Route::delete('/prepostdigital/{id}', 'destroy');
});
/* FIN PREPOST DIGITAL MOVISTAR*/
/* INICIO PREPOST INBOUND MOVISTAR*/
Route::controller(PrepostInboundController::class)->group(function () {
    Route::get('/prepostinbounds', 'index');
    Route::post('/prepostinbound', 'store');
    Route::get('/prepostinbound/{id}', 'show');
    Route::put('/prepostinbound/{id}', 'update');
    Route::delete('/prepostinbound/{id}', 'destroy');
});
/* FIN PREPOST INBOUND MOVISTAR*/

/* INICIO PREPOST TELEVENTAS MOVISTAR*/
Route::controller(PrepostTeleventaController::class)->group(function () {
    Route::get('/prepostteleventas', 'index');
    Route::post('/prepostteleventa', 'store');
    Route::get('/prepostteleventa/{id}', 'show');
    Route::put('/prepostteleventa/{id}', 'update');
    Route::delete('/prepostteleventa/{id}', 'destroy');
});
/* FIN PREPOST TELEVENTAS MOVISTAR*/
/* INICIO CREATEPLAN MOVISTAR*/
Route::controller(CreatePlanController::class)->group(function () {
    Route::get('/createplans', 'index');
    Route::post('/createplan', 'store');
    Route::get('/createplan/{id}', 'show');
    Route::put('/createplan/{id}', 'update');
    Route::delete('/createplan/{id}', 'destroy');
});
/* FIN CREATEPLAN MOVISTAR*/

/* INICIO COBERTURA MOVISTAR*/
Route::controller(CoberturaController::class)->group(function () {
    Route::get('/coberturas', 'index');
    Route::post('/cobertura', 'store');
    Route::get('/cobertura/{id}', 'show');
    Route::put('/cobertura/{id}', 'update');
    Route::delete('/cobertura/{id}', 'destroy');
});

/* FIN COBERTURA MOVISTAR*/





/* Route::controller(TiemposController::class)->group(function(){

    Route::get('/tiempos', 'index');
    Route::post('/tiempo', 'store');
    Route::get('/tiempo/{id}', 'show');
    Route::put('/tiempo/{id}', 'update');
    Route::delete('/tiempo/{id}', 'destroy');
}); */
