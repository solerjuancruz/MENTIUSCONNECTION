<?php

namespace App\Http\Controllers\Api\movistar\prepost;

use App\Http\Controllers\Controller;
use App\Models\PrepostDigitals;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class PrepostDigitalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prepostDigital = PrepostDigitals::all();
        return response()->json($prepostDigital);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $prepostDigital = new PrepostDigitals();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();


        $prepostDigital->numero = $request->numero;
        $prepostDigital->nombres = $request->nombres;
        $prepostDigital->documento = $request->documento;
        $prepostDigital->fexpedicion = $request->fexpedicion;
        $prepostDigital->tipocliente = $request->tipocliente;
        $prepostDigital->correo = $request->correo;
        $prepostDigital->departamento = $request->departamento;
        $prepostDigital->id_ciudad = $request->id_ciudad;
        $prepostDigital->barrio = $request->barrio;
        $prepostDigital->direccion = $request->direccion;
        $prepostDigital->corte = $request->corte;
        $prepostDigital->planventa = $request->planventa;
        $prepostDigital->segmento	 = $request->segmento	;
        $prepostDigital->activacion = $request->activacion;
        $prepostDigital->numero_grabacion = $request->numero_grabacion;
        $prepostDigital->confronta = $request->confronta;
        $prepostDigital->token = $request->token;
        $prepostDigital->selector = $request->selector;
        $prepostDigital->orden = $request->orden;
        $prepostDigital->observaciones = $request->observaciones;
        $prepostDigital->agente = $request->agente;
        $prepostDigital->revisados = $request->revisados;
        $prepostDigital->estadorevisado = $request->estadorevisado;
        $prepostDigital->obs2 = $request->obs2;
        $prepostDigital->backoffice = $request->backoffice;
        $prepostDigital->hora = $hora;
        $prepostDigital->dia = $fecha;


        $prepostDigital->save();
        return response()->json($prepostDigital);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $prepostDigital = PrepostDigitals::find($id);

        return response()->json($prepostDigital);
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
        $prepostDigital = PrepostDigitals::findorFail($request->id);

        $prepostDigital->revisados = $request->revisados;
        $prepostDigital->estadorevisado = $request->estadorevisado;
        $prepostDigital->obs2 = $request->obs2;
        $prepostDigital->backoffice = $request->backoffice;

        $prepostDigital->save();

        return response()->json($prepostDigital);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $prepostDigital = PrepostDigitals::destroy($id);
        return response()->json($prepostDigital);
    }
}
