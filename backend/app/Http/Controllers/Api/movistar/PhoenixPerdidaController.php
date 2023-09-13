<?php

namespace App\Http\Controllers\Api\movistar;

use App\Http\Controllers\Controller;
use App\Models\Phoenxies;
use App\Models\PhoenxiPedidas;
use Illuminate\Http\Request;
use Carbon\Carbon;

class PhoenixPerdidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $phoenixperdida = PhoenxiPedidas::all();
        return response()->json($phoenixperdida);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $phoenixperdida = new PhoenxiPedidas();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $phoenixperdida->numero = $request->numero;
        $phoenixperdida->documento = $request->documento;
        $phoenixperdida->nombres = $request->nombres;
        $phoenixperdida->apellidos = $request->apellidos;
        $phoenixperdida->correo = $request->correo;
        $phoenixperdida->departamento = $request->departamento;
        $phoenixperdida->id_ciudad = $request->id_ciudad;
        $phoenixperdida->barrio = $request->barrio;
        $phoenixperdida->direccion = $request->direccion;
        $phoenixperdida->nip = $request->nip;
        $phoenixperdida->tipocliente = $request->tipocliente;
        $phoenixperdida->ncontacto = $request->ncontacto;
        $phoenixperdida->planadquiere = $request->planadquiere;
        $phoenixperdida->tipoPagos = $request->tipoPagos;
        $phoenixperdida->modelo = $request->modelo;
        $phoenixperdida->ngrabacion = $request->ngrabacion;
        $phoenixperdida->orden = $request->orden;
        $phoenixperdida->confronta = $request->confronta;
        $phoenixperdida->observaciones = $request->observaciones;
        $phoenixperdida->selector = $request->selector;
        $phoenixperdida->agente = $request->agente;
        $phoenixperdida->revisados = $request->revisados;
        $phoenixperdida->estadorevisado = $request->estadorevisado;
        $phoenixperdida->obs2 = $request->obs2;
        $phoenixperdida->backoffice = $request->backoffice;
        $phoenixperdida->hora = $hora;
        $phoenixperdida->dia = $fecha;


        $phoenixperdida->save();
        return response()->json($phoenixperdida);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $phoenixperdida = PhoenxiPedidas::find($id);

        return response()->json($phoenixperdida);
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
        $phoenixperdida = PhoenxiPedidas::findorFail($request->id);

        $phoenixperdida->revisados = $request->revisados;
        $phoenixperdida->estadorevisado = $request->estadorevisado;
        $phoenixperdida->obs2 = $request->obs2;
        $phoenixperdida->backoffice = $request->backoffice;

        $phoenixperdida->save();

        return response()->json($phoenixperdida);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $phoenixperdida = PhoenxiPedidas::destroy($id);
        return response()->json($phoenixperdida);
    }
}
