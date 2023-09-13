<?php

namespace App\Http\Controllers\Api\movistar\upgrade;

use App\Http\Controllers\Controller;
use App\Models\UpgradeInbounds;
use Illuminate\Http\Request;
use Carbon\Carbon;

class UpgradeInboundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $upgradeInbound = UpgradeInbounds::all();

        return response()->json($upgradeInbound);//
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $upgradeInbound = new UpgradeInbounds();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $upgradeInbound->numero = $request->numero;
        $upgradeInbound->nombres = $request->nombres;
        $upgradeInbound->documento = $request->documento;
        $upgradeInbound->correo = $request->correo;
        $upgradeInbound->fventa = $request->fventa;
        $upgradeInbound->corte = $request->corte;
        $upgradeInbound->selector = $request->selector;
        $upgradeInbound->planhistorico = $request->planhistorico;
        $upgradeInbound->planventa = $request->planventa;
        $upgradeInbound->segmento = $request->segmento;
        $upgradeInbound->activacion = $request->activacion;
        $upgradeInbound->ngrabacion = $request->ngrabacion;
        $upgradeInbound->confronta = $request->confronta;
        $upgradeInbound->orden = $request->orden;
        $upgradeInbound->observacion = $request->observacion;
        $upgradeInbound->agente = $request->agente;
        $upgradeInbound->revisados = $request->revisados;
        $upgradeInbound->estadorevisado = $request->estadorevisado;
        $upgradeInbound->obs2 = $request->obs2;
        $upgradeInbound->backoffice = $request->backoffice;

        $upgradeInbound->hora = $hora;
        $upgradeInbound->dia = $fecha;

        $upgradeInbound->save();
        return response()->json($upgradeInbound);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $upgradeInbound = UpgradeInbounds::find($id);

        return response()->json($upgradeInbound);
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
        $upgradeInbound = UpgradeInbounds::findorFail($request->id);

        $upgradeInbound->revisados = $request->revisados;
        $upgradeInbound->estadorevisado = $request->estadorevisado;
        $upgradeInbound->obs2 = $request->obs2;
        $upgradeInbound->backoffice = $request->backoffice;

        $upgradeInbound->save();

        return response()->json($upgradeInbound);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $upgradeInbound = UpgradeInbounds::destroy($id);
        return response()->json($upgradeInbound);
    }
}
