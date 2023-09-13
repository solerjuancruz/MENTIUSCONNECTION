<?php

namespace App\Http\Controllers\Api\movistar\fija;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FijaTeleventas;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class FijaTeleventasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $fijaTeleventa = FijaTeleventas::all();
        return response()->json($fijaTeleventa);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fijaTeleventa = new FijaTeleventas();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $fijaTeleventa->nombres = $request->nombres;
        $fijaTeleventa->documento = $request->documento;
        $fijaTeleventa->fexpedicion = $request->fexpedicion;
        $fijaTeleventa->correo = $request->correo;
        $fijaTeleventa->departamento = $request->departamento;
        $fijaTeleventa->id_ciudad = $request->id_ciudad;
        $fijaTeleventa->barrio = $request->barrio;
        $fijaTeleventa->direccion = $request->direccion;
        $fijaTeleventa->estrato = $request->estrato;
        $fijaTeleventa->ngrabacion = $request->ngrabacion;
        $fijaTeleventa->ncontacto = $request->ncontacto;
        $fijaTeleventa->producto = $request->producto;
        $fijaTeleventa->segmento = $request->segmento;
        $fijaTeleventa->FOX = $request->FOX;
        $fijaTeleventa->HBO = $request->HBO;
        $fijaTeleventa->cds_movil = $request->cds_movil;
        $fijaTeleventa->cds_fija = $request->cds_fija;
        $fijaTeleventa->Paquete_Adultos = $request->Paquete_Adultos;
        $fijaTeleventa->Decodificador = $request->Decodificador;
        $fijaTeleventa->Svas_lineas = $request->Svas_lineas;
        $fijaTeleventa->velocidad = $request->velocidad;
        $fijaTeleventa->tecnologia = $request->tecnologia;
        $fijaTeleventa->orden = $request->orden;
        $fijaTeleventa->selector = $request->selector;
        $fijaTeleventa->confronta = $request->confronta;
        $fijaTeleventa->observacion = $request->observacion;
        $fijaTeleventa->agente = $request->agente;

        $fijaTeleventa->hora = $hora;
        $fijaTeleventa->dia = $fecha;
        

        $fijaTeleventa->save();
        return response()->json($fijaTeleventa);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $fijaTeleventa = FijaTeleventas::find($id);
        return response()->json($fijaTeleventa);
    }
    public function edit($id)
    {
        $fijaTeleventa = FijaTeleventas::findOrFail($id);

        return response()->json($fijaTeleventa);
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
        $fijaTeleventa = FijaTeleventas::findorFail($request->id);

        $fijaTeleventa->revisados = $request->revisados;
        $fijaTeleventa->estadorevisado = $request->estadorevisado;
        $fijaTeleventa->obs2 = $request->obs2;
        $fijaTeleventa->backoffice = $request->backoffice;

        $fijaTeleventa->save();

        return response()->json($fijaTeleventa);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $fijaTeleventa = FijaTeleventas::destroy($id);
        return response()->json($fijaTeleventa);
    }
}
