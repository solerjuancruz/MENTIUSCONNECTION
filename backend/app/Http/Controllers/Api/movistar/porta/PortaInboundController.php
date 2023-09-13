<?php

namespace App\Http\Controllers\Api\movistar\porta;

use App\Http\Controllers\Controller;
use App\Models\PortaInbounds;
use Illuminate\Http\Request;
use Carbon\Carbon;

class PortaInboundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $portaInbound = PortaInbounds::all();

        return response()->json($portaInbound);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $portaInbound = new PortaInbounds();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $portaInbound->numero = $request->numero;
        $portaInbound->documento = $request->documento;
        $portaInbound->nombres = $request->nombres;
        $portaInbound->apellidos = $request->apellidos;
        $portaInbound->correo = $request->correo;
        $portaInbound->departamento = $request->departamento;
        $portaInbound->id_ciudad = $request->id_ciudad;
        $portaInbound->barrio = $request->barrio;
        $portaInbound->direccion = $request->direccion;
        $portaInbound->nip = $request->nip;
        $portaInbound->tipocliente = $request->tipocliente;
        $portaInbound->planadquiere = $request->planadquiere;
        $portaInbound->segmento = $request->segmento;
        $portaInbound->ncontacto = $request->ncontacto;
        $portaInbound->imei = $request->imei;
        $portaInbound->fvc = $request->fvc;
        $portaInbound->fentrega = $request->fentrega;
        $portaInbound->fexpedicion = $request->fexpedicion;
        $portaInbound->fnacimiento = $request->fnacimiento;
        $portaInbound->origen = $request->origen;
        $portaInbound->ngrabacion = $request->ngrabacion;
        $portaInbound->selector = $request->selector;
        $portaInbound->orden = $request->orden;
        $portaInbound->confronta = $request->confronta;
        $portaInbound->observaciones = $request->observaciones;
        $portaInbound->agente = $request->agente;
        $portaInbound->revisados = $request->revisados;
        $portaInbound->estadorevisado = $request->estadorevisado;
        $portaInbound->obs2 = $request->obs2;
        $portaInbound->backoffice = $request->backoffice;


        $portaInbound->hora = $hora;
        $portaInbound->dia = $fecha;

        $portaInbound->save();
        return response()->json($portaInbound);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $portaInbound = PortaInbounds::find($id);

        return response()->json($portaInbound);
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
        $portaInbound = PortaInbounds::findorFail($request->id);

        $portaInbound->revisados = $request->revisados;
        $portaInbound->estadorevisado = $request->estadorevisado;
        $portaInbound->obs2 = $request->obs2;
        $portaInbound->backoffice = $request->backoffice;

        $portaInbound->save();

        return response()->json($portaInbound);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $portaInbound = PortaInbounds::destroy($id);

        return response()->json($portaInbound);
    }
}
