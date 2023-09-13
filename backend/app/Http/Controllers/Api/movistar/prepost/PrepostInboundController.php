<?php

namespace App\Http\Controllers\Api\movistar\prepost;

use App\Http\Controllers\Controller;
use App\Models\PrepostInbounds;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class PrepostInboundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prepostInbound = PrepostInbounds::all();
        return response()->json($prepostInbound);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $prepostInbound = new PrepostInbounds();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();


        $prepostInbound->numero = $request->numero;
        $prepostInbound->nombres = $request->nombres;
        $prepostInbound->documento = $request->documento;
        $prepostInbound->fexpedicion = $request->fexpedicion;
        $prepostInbound->tipocliente = $request->tipocliente;
        $prepostInbound->correo = $request->correo;
        $prepostInbound->departamento = $request->departamento;
        $prepostInbound->id_ciudad = $request->id_ciudad;
        $prepostInbound->barrio = $request->barrio;
        $prepostInbound->direccion = $request->direccion;
        $prepostInbound->corte = $request->corte;
        $prepostInbound->planventa = $request->planventa;
        $prepostInbound->segmento	 = $request->segmento	;
        $prepostInbound->activacion = $request->activacion;
        $prepostInbound->numero_grabacion = $request->numero_grabacion;
        $prepostInbound->confronta = $request->confronta;
        $prepostInbound->token = $request->token;
        $prepostInbound->selector = $request->selector;
        $prepostInbound->orden = $request->orden;
        $prepostInbound->observaciones = $request->observaciones;
        $prepostInbound->agente = $request->agente;
        $prepostInbound->revisados = $request->revisados;
        $prepostInbound->estadorevisado = $request->estadorevisado;
        $prepostInbound->obs2 = $request->obs2;
        $prepostInbound->backoffice = $request->backoffice;
        $prepostInbound->hora = $hora;
        $prepostInbound->dia = $fecha;


        $prepostInbound->save();
        return response()->json($prepostInbound);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $prepostInbound = PrepostInbounds::find($id);

        return response()->json($prepostInbound);
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
        $prepostInbound = PrepostInbounds::findorFail($request->id);

        $prepostInbound->revisados = $request->revisados;
        $prepostInbound->estadorevisado = $request->estadorevisado;
        $prepostInbound->obs2 = $request->obs2;
        $prepostInbound->backoffice = $request->backoffice;

        $prepostInbound->save();

        return response()->json($prepostInbound);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $prepostInbound = PrepostInbounds::destroy($id);
        return response()->json($prepostInbound);
    }
}
