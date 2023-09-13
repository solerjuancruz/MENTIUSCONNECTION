<?php

namespace App\Http\Controllers\Api\movistar;

use App\Http\Controllers\Controller;
use App\Models\LineasNuevas;
use Illuminate\Http\Request;
use Carbon\Carbon;

class LineaNuevaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lineasNuevas = LineasNuevas::all();
        return response()->json($lineasNuevas);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $lineasNuevas = new LineasNuevas();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $lineasNuevas->numero = $request->numero;
        $lineasNuevas->documento = $request->documento;
        $lineasNuevas->nombres = $request->nombres;
        $lineasNuevas->apellidos = $request->apellidos;
        $lineasNuevas->correo = $request->correo;
        $lineasNuevas->departamento = $request->departamento;
        $lineasNuevas->id_ciudad = $request->id_ciudad;
        $lineasNuevas->barrio = $request->barrio;
        $lineasNuevas->direccion = $request->direccion;
        $lineasNuevas->tipocliente = $request->tipocliente;
        $lineasNuevas->ncontacto = $request->ncontacto;
        $lineasNuevas->selector = $request->selector;
        $lineasNuevas->ngrabacion = $request->ngrabacion;
        $lineasNuevas->orden = $request->orden;
        $lineasNuevas->confronta = $request->confronta;
        $lineasNuevas->observaciones = $request->observaciones;
        $lineasNuevas->agente = $request->agente;
        $lineasNuevas->revisados = $request->revisados;
        $lineasNuevas->estadorevisado = $request->estadorevisado;
        $lineasNuevas->obs2 = $request->obs2;
        $lineasNuevas->backoffice = $request->backoffice;
        $lineasNuevas->hora = $hora;
        $lineasNuevas->dia = $fecha;


        $lineasNuevas->save();
        return response()->json($lineasNuevas);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $lineasNuevas = LineasNuevas::find($id);
        return response()->json($lineasNuevas);
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
        $lineasNuevas = LineasNuevas::findorFail($request->id);

        $lineasNuevas->revisados = $request->revisados;
        $lineasNuevas->estadorevisado = $request->estadorevisado;
        $lineasNuevas->obs2 = $request->obs2;
        $lineasNuevas->backoffice = $request->backoffice;

        $lineasNuevas->save();

        return response()->json($lineasNuevas);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $lineasNuevas = LineasNuevas::destroy($id);
        return response()->json($lineasNuevas);
    }
}
