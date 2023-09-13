<?php

namespace App\Http\Controllers\Api\movistar;

use App\Http\Controllers\Controller;
use App\Models\Coberturas;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class CoberturaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cobertura = Coberturas::all();
        return response()->json($cobertura);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $cobertura = new Coberturas();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $cobertura->departamento = $request->departamento;
        $cobertura->ciudad = $request->ciudad;
        $cobertura->direccion = $request->direccion;
        $cobertura->nomenclatura = $request->nomenclatura;
        $cobertura->numero_nomenclatura_uno = $request->numero_nomenclatura_uno;
        $cobertura->letra_nomenclatura_uno = $request->letra_nomenclatura_uno;
        $cobertura->nomenclatura_dos = $request->nomenclatura_dos;
        $cobertura->numero_nomenclatura_dos = $request->numero_nomenclatura_dos;
        $cobertura->letra_nomenclatura_dos = $request->letra_nomenclatura_dos;
        $cobertura->numero_nomenclatura_tres = $request->numero_nomenclatura_tres;
        $cobertura->complemento_uno = $request->complemento_uno;
        $cobertura->complemento_dos = $request->complemento_dos;
        $cobertura->numero_complemento_uno = $request->numero_complemento_uno;
        $cobertura->numero_complemento_dos = $request->numero_complemento_dos;
        $cobertura->cable = $request->cable;
        $cobertura->hora = $hora;
        $cobertura->dia = $fecha;

        $cobertura->save();
        return response()->json($cobertura);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cobertura = Coberturas::find($id);
        return response()->json($cobertura);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cobertura = Coberturas::destroy($id);
        return response()->json($cobertura);
    }
}
