<?php

namespace App\Http\Controllers\Api\movistar\upgrade;

use App\Http\Controllers\Controller;
use App\Models\UpgradeTeleventas;
use Illuminate\Http\Request;
use Carbon\Carbon;

class UpgradeTeleventasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $upgradeTeleventas = UpgradeTeleventas::all();

        return response()->json($upgradeTeleventas);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $upgradeTeleventas = new UpgradeTeleventas();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $upgradeTeleventas->numero = $request->numero;
        $upgradeTeleventas->nombres = $request->nombres;
        $upgradeTeleventas->documento = $request->documento;
        $upgradeTeleventas->correo = $request->correo;
        $upgradeTeleventas->fventa = $request->fventa;
        $upgradeTeleventas->corte = $request->corte;
        $upgradeTeleventas->selector = $request->selector;
        $upgradeTeleventas->planhistorico = $request->planhistorico;
        $upgradeTeleventas->planventa = $request->planventa;
        $upgradeTeleventas->segmento = $request->segmento;
        $upgradeTeleventas->activacion = $request->activacion;
        $upgradeTeleventas->ngrabacion = $request->ngrabacion;
        $upgradeTeleventas->confronta = $request->confronta;
        $upgradeTeleventas->orden = $request->orden;
        $upgradeTeleventas->observacion = $request->observacion;
        $upgradeTeleventas->agente = $request->agente;
        $upgradeTeleventas->revisados = $request->revisados;
        $upgradeTeleventas->estadorevisado = $request->estadorevisado;
        $upgradeTeleventas->obs2 = $request->obs2;
        $upgradeTeleventas->backoffice = $request->backoffice;

        $upgradeTeleventas->hora = $hora;
        $upgradeTeleventas->dia = $fecha;

        $upgradeTeleventas->save();
        return response()->json($upgradeTeleventas);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $upgradeTeleventas = UpgradeTeleventas::find($id);

        return response()->json($upgradeTeleventas);
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
        $upgradeTeleventas = UpgradeTeleventas::findorFail($request->id);

        $upgradeTeleventas->revisados = $request->revisados;
        $upgradeTeleventas->estadorevisado = $request->estadorevisado;
        $upgradeTeleventas->obs2 = $request->obs2;
        $upgradeTeleventas->backoffice = $request->backoffice;

        $upgradeTeleventas->save();

        return response()->json($upgradeTeleventas);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $upgradeTeleventas = UpgradeTeleventas::destroy($id);
        return response()->json($upgradeTeleventas);
    }
}
