<?php

namespace App\Http\Controllers\Api\movistar;

use App\Http\Controllers\Controller;
use App\Models\Phoenxies;
use Illuminate\Http\Request;
use Carbon\Carbon;

class PhoenixController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $phoenix = Phoenxies::all();
        return response()->json($phoenix);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $phoenix = new Phoenxies();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $phoenix->numero = $request->numero;
        $phoenix->documento = $request->documento;
        $phoenix->nombres = $request->nombres;
        $phoenix->apellidos = $request->apellidos;
        $phoenix->correo = $request->correo;
        $phoenix->departamento = $request->departamento;
        $phoenix->id_ciudad = $request->id_ciudad;
        $phoenix->barrio = $request->barrio;
        $phoenix->direccion = $request->direccion;
        $phoenix->nip = $request->nip;
        $phoenix->tipocliente = $request->tipocliente;
        $phoenix->ncontacto = $request->ncontacto;
        $phoenix->planadquiere = $request->planadquiere;
        $phoenix->tipoPagos = $request->tipoPagos;
        $phoenix->modelo = $request->modelo;
        $phoenix->ngrabacion = $request->ngrabacion;
        $phoenix->orden = $request->orden;
        $phoenix->EqComprado = $request->EqComprado;
        $phoenix->ComEquipo = $request->ComEquipo;
        $phoenix->ValEquipo = $request->ValEquipo;
        $phoenix->confronta = $request->confronta;
        $phoenix->observaciones = $request->observaciones;
        $phoenix->selector = $request->selector;
        $phoenix->agente = $request->agente;
        $phoenix->revisados = $request->revisados;
        $phoenix->estadorevisado = $request->estadorevisado;
        $phoenix->obs2 = $request->obs2;
        $phoenix->backoffice = $request->backoffice;
        $phoenix->hora = $hora;
        $phoenix->dia = $fecha;


        $phoenix->save();
        return response()->json($phoenix);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $phoenix = Phoenxies::find($id);

        return response()->json($phoenix);
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
        $phoenix = Phoenxies::findorFail($request->id);

        $phoenix->revisados = $request->revisados;
        $phoenix->estadorevisado = $request->estadorevisado;
        $phoenix->obs2 = $request->obs2;
        $phoenix->backoffice = $request->backoffice;

        $phoenix->save();

        return response()->json($phoenix);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $phoenix = Phoenxies::destroy($id);
        return response()->json($phoenix);
    }
}
