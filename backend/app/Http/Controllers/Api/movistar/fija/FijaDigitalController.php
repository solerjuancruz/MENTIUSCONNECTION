<?php

namespace App\Http\Controllers\Api\movistar\fija;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Fijadigitals;
use Carbon\Carbon;


class FijaDigitalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $fijadigital = Fijadigitals::all();
        
        return response()->json($fijadigital);
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
        $fijadigital = new Fijadigitals();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $fijadigital->nombres = $request->nombres;
        $fijadigital->documento = $request->documento;
        $fijadigital->fexpedicion = $request->fexpedicion;
        $fijadigital->correo = $request->correo;
        $fijadigital->departamento = $request->departamento;
        $fijadigital->id_ciudad = $request->id_ciudad;
        $fijadigital->barrio = $request->barrio;
        $fijadigital->direccion = $request->direccion;
        $fijadigital->estrato = $request->estrato;
        $fijadigital->ngrabacion = $request->ngrabacion;
        $fijadigital->ncontacto = $request->ncontacto;
        $fijadigital->producto = $request->producto;
        $fijadigital->segmento = $request->segmento;
        $fijadigital->FOX = $request->FOX;
        $fijadigital->HBO = $request->HBO;
        $fijadigital->cds_movil = $request->cds_movil;
        $fijadigital->cds_fija = $request->cds_fija;
        $fijadigital->Paquete_Adultos = $request->Paquete_Adultos;
        $fijadigital->Decodificador = $request->Decodificador;
        $fijadigital->Svas_lineas = $request->Svas_lineas;
        $fijadigital->velocidad = $request->velocidad;
        $fijadigital->tecnologia = $request->tecnologia;
        $fijadigital->orden = $request->orden;
        $fijadigital->selector = $request->selector;
        $fijadigital->confronta = $request->confronta;
        $fijadigital->observacion = $request->observacion;
        $fijadigital->agente = $request->agente;
        
        $fijadigital->hora = $hora;
        $fijadigital->dia = $fecha;
        

        $fijadigital->save();   

        return response()->json($fijadigital);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $fijadigital = Fijadigitals::find($id);     
        
        return response()->json($fijadigital);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $fijadigital=Fijadigitals::findOrFail($id);
        
        return response()->json($fijadigital);
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
        $fijadigital = Fijadigitals::findorFail($request->id); 
/* 
        $fijadigital->revisados = $request->revisados;
        $fijadigital->estadorevisado = $request->estadorevisado;
        $fijadigital->obs2 = $request->obs2;
        $fijadigital->backoffice = $request->backoffice;
        
        $fijadigital->save();  */  
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();
        $fijadigital->nombres = $request->nombres;
        $fijadigital->documento = $request->documento;
        $fijadigital->fexpedicion = $request->fexpedicion;
        $fijadigital->correo = $request->correo;
        $fijadigital->departamento = $request->departamento;
        $fijadigital->id_ciudad = $request->id_ciudad;
        $fijadigital->barrio = $request->barrio;
        $fijadigital->direccion = $request->direccion;
        $fijadigital->estrato = $request->estrato;
        $fijadigital->ngrabacion = $request->ngrabacion;
        $fijadigital->ncontacto = $request->ncontacto;
        $fijadigital->producto = $request->producto;
        $fijadigital->segmento = $request->segmento;
        $fijadigital->FOX = $request->FOX;
        $fijadigital->HBO = $request->HBO;
        $fijadigital->cds_movil = $request->cds_movil;
        $fijadigital->cds_fija = $request->cds_fija;
        $fijadigital->Paquete_Adultos = $request->Paquete_Adultos;
        $fijadigital->Decodificador = $request->Decodificador;
        $fijadigital->Svas_lineas = $request->Svas_lineas;
        $fijadigital->velocidad = $request->velocidad;
        $fijadigital->tecnologia = $request->tecnologia;
        $fijadigital->orden = $request->orden;
        $fijadigital->selector = $request->selector;
        $fijadigital->confronta = $request->confronta;
        $fijadigital->observacion = $request->observacion;
        $fijadigital->agente = $request->agente;
        
        $fijadigital->hora = $hora;
        $fijadigital->dia = $fecha;
        

        $fijadigital->save(); 

        return response()->json($fijadigital);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       $fijadigital = Fijadigitals::destroy($id);

       return response()->json($fijadigital);
    }
}
