<?php

namespace App\Http\Controllers\Api\movistar;

use App\Http\Controllers\Controller;
use App\Models\Rechazos;
use Illuminate\Http\Request;
use Carbon\Carbon;

class RechazosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rechazos = Rechazos::all();
        return response()->json($rechazos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rechazos = new Rechazos();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $rechazos->numero_de_celular = $request->numero_de_celular;
        $rechazos->nombres = $request->nombres;
        $rechazos->documento = $request->documento;
        $rechazos->causal = $request->causal;
        $rechazos->linea = $request->linea;
        $rechazos->departamento = $request->departamento;
        $rechazos->id_ciudad = $request->id_ciudad;
        $rechazos->claro = $request->claro;
        $rechazos->tigo = $request->tigo;
        $rechazos->directv = $request->directv;
        $rechazos->wow = $request->wow;
        $rechazos->barrio = $request->barrio;
        $rechazos->otros = $request->otros;
        $rechazos->modalidad = $request->modalidad;
        $rechazos->frechazo = $request->frechazo;
        $rechazos->imgrechazo = $request->imgrechazo;
        $rechazos->observacion = $request->observacion;
        $rechazos->hora = $hora;
        $rechazos->dia = $fecha;
        $rechazos->agente = $request->agente;


        $rechazos->save();
        return response()->json($rechazos);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $rechazos = Rechazos::find($id);

        return response()->json($rechazos);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $rechazos = Rechazos::destroy($id);

        return response()->json($rechazos);
    }
}
