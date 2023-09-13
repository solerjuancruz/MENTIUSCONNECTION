<?php

namespace App\Http\Controllers\Api\movistar\upgrade;

use App\Http\Controllers\Controller;
use App\Models\UpgradeDigitals;
use Illuminate\Http\Request;
use Carbon\Carbon;

class UpgradeDigitalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $upgradeDigital = UpgradeDigitals::all();

        return response()->json($upgradeDigital);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $upgradeDigital = new UpgradeDigitals();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $upgradeDigital->numero = $request->numero;
        $upgradeDigital->nombres = $request->nombres;
        $upgradeDigital->documento = $request->documento;
        $upgradeDigital->correo = $request->correo;
        $upgradeDigital->fventa = $request->fventa;
        $upgradeDigital->corte = $request->corte;
        $upgradeDigital->selector = $request->selector;
        $upgradeDigital->planhistorico = $request->planhistorico;
        $upgradeDigital->planventa = $request->planventa;
        $upgradeDigital->segmento = $request->segmento;
        $upgradeDigital->activacion = $request->activacion;
        $upgradeDigital->ngrabacion = $request->ngrabacion;
        $upgradeDigital->confronta = $request->confronta;
        $upgradeDigital->orden = $request->orden;
        $upgradeDigital->observacion = $request->observacion;
        $upgradeDigital->agente = $request->agente;
        $upgradeDigital->revisados = $request->revisados;
        $upgradeDigital->estadorevisado = $request->estadorevisado;
        $upgradeDigital->obs2 = $request->obs2;
        $upgradeDigital->backoffice = $request->backoffice;

        $upgradeDigital->hora = $hora;
        $upgradeDigital->dia = $fecha;

        $upgradeDigital->save();
        return response()->json($upgradeDigital);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $upgradeDigital = UpgradeDigitals::find($id);

        return response()->json($upgradeDigital);
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
        $upgradeDigital = UpgradeDigitals::findorFail($request->id);

        $upgradeDigital->revisados = $request->revisados;
        $upgradeDigital->estadorevisado = $request->estadorevisado;
        $upgradeDigital->obs2 = $request->obs2;
        $upgradeDigital->backoffice = $request->backoffice;

        $upgradeDigital->save();

        return response()->json($upgradeDigital);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $upgradeDigital = UpgradeDigitals::destroy($id);

        return response()->json($upgradeDigital);
    }
}
