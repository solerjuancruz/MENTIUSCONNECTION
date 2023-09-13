<?php

namespace App\Http\Controllers\Api\movistar\fija;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Fijainbounds;
use Carbon\Carbon;

class FijaInboundController extends Controller
{
    
    public function index()
    {
        $fijainbound = Fijainbounds::all();
        
        return response()->json($fijainbound);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fijainbound = new Fijainbounds();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $fijainbound->nombres = $request->nombres;
        $fijainbound->documento = $request->documento;
        $fijainbound->fexpedicion = $request->fexpedicion;
        $fijainbound->correo = $request->correo;
        $fijainbound->departamento = $request->departamento;
        $fijainbound->id_ciudad = $request->id_ciudad;
        $fijainbound->barrio = $request->barrio;
        $fijainbound->direccion = $request->direccion;
        $fijainbound->estrato = $request->estrato;
        $fijainbound->ngrabacion = $request->ngrabacion;
        $fijainbound->ncontacto = $request->ncontacto;
        $fijainbound->producto = $request->producto;
        $fijainbound->segmento = $request->segmento;
        $fijainbound->FOX = $request->FOX;
        $fijainbound->HBO = $request->HBO;
        $fijainbound->cds_movil = $request->cds_movil;
        $fijainbound->cds_fija = $request->cds_fija;
        $fijainbound->Paquete_Adultos = $request->Paquete_Adultos;
        $fijainbound->Decodificador = $request->Decodificador;
        $fijainbound->Svas_lineas = $request->Svas_lineas;
        $fijainbound->velocidad = $request->velocidad;
        $fijainbound->tecnologia = $request->tecnologia;
        $fijainbound->orden = $request->orden;
        $fijainbound->selector = $request->selector;
        $fijainbound->confronta = $request->confronta;
        $fijainbound->observacion = $request->observacion;
        $fijainbound->agente = $request->agente;
        
        $fijainbound->hora = $hora;
        $fijainbound->dia = $fecha;
        

        $fijainbound->save();   

        return response()->json($fijainbound);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $fijainbound = Fijainbounds::findOrFail($request->id); 

        $fijainbound->revisados = $request->revisados;
        $fijainbound->estadorevisado = $request->estadorevisado;
        $fijainbound->obs2 = $request->obs2;
        $fijainbound->backoffice = $request->backoffice;      
       

        $fijainbound->save();   

        return response()->json($fijainbound);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $fijainbound = Fijainbounds::destroy($id);

       return response()->json($fijainbound);
    }
}
