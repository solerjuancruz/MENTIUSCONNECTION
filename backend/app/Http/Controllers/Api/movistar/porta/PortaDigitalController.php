<?php

namespace App\Http\Controllers\Api\movistar\porta;

use App\Http\Controllers\Controller;
use App\Models\PortaDigitals;
use Illuminate\Http\Request;
use Carbon\Carbon;

class PortaDigitalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $portaDigital = PortaDigitals::all();

        return response()->json($portaDigital);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $portaDigital = new PortaDigitals();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $portaDigital->numero = $request->numero;
        $portaDigital->documento = $request->documento;
        $portaDigital->nombres = $request->nombres;
        $portaDigital->apellidos = $request->apellidos;
        $portaDigital->correo = $request->correo;
        $portaDigital->departamento = $request->departamento;
        $portaDigital->id_ciudad = $request->id_ciudad;
        $portaDigital->barrio = $request->barrio;
        $portaDigital->direccion = $request->direccion;
        $portaDigital->nip = $request->nip;
        $portaDigital->tipocliente = $request->tipocliente;
        $portaDigital->planadquiere = $request->planadquiere;
        $portaDigital->segmento = $request->segmento;
        $portaDigital->ncontacto = $request->ncontacto;
        $portaDigital->imei = $request->imei;
        $portaDigital->fvc = $request->fvc;
        $portaDigital->fentrega = $request->fentrega;
        $portaDigital->fexpedicion = $request->fexpedicion;
        $portaDigital->fnacimiento = $request->fnacimiento;
        $portaDigital->origen = $request->origen;
        $portaDigital->ngrabacion = $request->ngrabacion;
        $portaDigital->selector = $request->selector;
        $portaDigital->orden = $request->orden;
        $portaDigital->confronta = $request->confronta;
        $portaDigital->observaciones = $request->observaciones;
        $portaDigital->agente = $request->agente;
        $portaDigital->revisados = $request->revisados;
        $portaDigital->estadorevisado = $request->estadorevisado;
        $portaDigital->obs2 = $request->obs2;
        $portaDigital->backoffice = $request->backoffice;


        $portaDigital->hora = $hora;
        $portaDigital->dia = $fecha;
        
        $portaDigital->save();
        return response()->json($portaDigital);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $portaDigital = PortaDigitals::find($id);
        return response()->json($portaDigital);
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
        $portaDigital = PortaDigitals::findorFail($request->id);

        $portaDigital->revisados = $request->revisados;
        $portaDigital->estadorevisado = $request->estadorevisado;
        $portaDigital->obs2 = $request->obs2;
        $portaDigital->backoffice = $request->backoffice;

        $portaDigital->save();

        return response()->json($portaDigital);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $portaDigital = PortaDigitals::destroy($id);
        
        return response()->json($portaDigital);
    }
}
