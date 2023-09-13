<?php

namespace App\Http\Controllers\Api\movistar\porta;

use App\Http\Controllers\Controller;
use App\Models\PortaTeleventas;
use Illuminate\Http\Request;
use Carbon\Carbon;

class PortaTeleventasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $portaTeleventa = PortaTeleventas::all();
        return response()->json($portaTeleventa);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $portaTeleventa = new PortaTeleventas();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $portaTeleventa->numero = $request->numero;
        $portaTeleventa->documento = $request->documento;
        $portaTeleventa->nombres = $request->nombres;
        $portaTeleventa->apellidos = $request->apellidos;
        $portaTeleventa->correo = $request->correo;
        $portaTeleventa->departamento = $request->departamento;
        $portaTeleventa->id_ciudad = $request->id_ciudad;
        $portaTeleventa->barrio = $request->barrio;
        $portaTeleventa->direccion = $request->direccion;
        $portaTeleventa->nip = $request->nip;
        $portaTeleventa->tipocliente = $request->tipocliente;
        $portaTeleventa->planadquiere = $request->planadquiere;
        $portaTeleventa->segmento = $request->segmento;
        $portaTeleventa->ncontacto = $request->ncontacto;
        $portaTeleventa->imei = $request->imei;
        $portaTeleventa->fvc = $request->fvc;
        $portaTeleventa->fentrega = $request->fentrega;
        $portaTeleventa->fexpedicion = $request->fexpedicion;
        $portaTeleventa->fnacimiento = $request->fnacimiento;
        $portaTeleventa->origen = $request->origen;
        $portaTeleventa->ngrabacion = $request->ngrabacion;
        $portaTeleventa->selector = $request->selector;
        $portaTeleventa->orden = $request->orden;
        $portaTeleventa->confronta = $request->confronta;
        $portaTeleventa->likewize = $request->likewize;
        $portaTeleventa->observaciones = $request->observaciones;
        $portaTeleventa->agente = $request->agente;
        $portaTeleventa->revisados = $request->revisados;
        $portaTeleventa->estadorevisado = $request->estadorevisado;
        $portaTeleventa->obs2 = $request->obs2;
        $portaTeleventa->backoffice = $request->backoffice;


        $portaTeleventa->hora = $hora;
        $portaTeleventa->dia = $fecha;

        $portaTeleventa->save();
        return response()->json($portaTeleventa);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $portaTeleventa = PortaTeleventas::find($id);

        return response()->json($portaTeleventa);
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
        $portaTeleventa = PortaTeleventas::findorFail($request->id);

        $portaTeleventa->revisados = $request->revisados;
        $portaTeleventa->estadorevisado = $request->estadorevisado;
        $portaTeleventa->obs2 = $request->obs2;
        $portaTeleventa->backoffice = $request->backoffice;

        $portaTeleventa->save();

        return response()->json($portaTeleventa);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $portaTeleventa = PortaTeleventas::destroy($id);
return response()->json($portaTeleventa);
    }
}
