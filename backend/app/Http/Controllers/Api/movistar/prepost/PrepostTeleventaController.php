<?php

namespace App\Http\Controllers\Api\movistar\prepost;

use App\Http\Controllers\Controller;
use App\Models\PrepostTeleventas;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class PrepostTeleventaController extends Controller
{
    
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            $prepostTeleventas = PrepostTeleventas::all();
            return response()->json($prepostTeleventas);
        }
    
        /**
         * Store a newly created resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @return \Illuminate\Http\Response
         */
        public function store(Request $request)
        {
            $prepostTeleventas = new PrepostTeleventas();
            $hora = Carbon::now()->format('H:i:s');
            $fecha = Carbon::today();
    
    
            $prepostTeleventas->numero = $request->numero;
            $prepostTeleventas->nombres = $request->nombres;
            $prepostTeleventas->documento = $request->documento;
            $prepostTeleventas->fexpedicion = $request->fexpedicion;
            $prepostTeleventas->tipocliente = $request->tipocliente;
            $prepostTeleventas->correo = $request->correo;
            $prepostTeleventas->departamento = $request->departamento;
            $prepostTeleventas->id_ciudad = $request->id_ciudad;
            $prepostTeleventas->barrio = $request->barrio;
            $prepostTeleventas->direccion = $request->direccion;
            $prepostTeleventas->corte = $request->corte;
            $prepostTeleventas->planventa = $request->planventa;
            $prepostTeleventas->segmento	 = $request->segmento	;
            $prepostTeleventas->activacion = $request->activacion;
            $prepostTeleventas->numero_grabacion = $request->numero_grabacion;
            $prepostTeleventas->confronta = $request->confronta;
            $prepostTeleventas->token = $request->token;
            $prepostTeleventas->selector = $request->selector;
            $prepostTeleventas->orden = $request->orden;
            $prepostTeleventas->observaciones = $request->observaciones;
            $prepostTeleventas->agente = $request->agente;
            $prepostTeleventas->revisados = $request->revisados;
            $prepostTeleventas->estadorevisado = $request->estadorevisado;
            $prepostTeleventas->obs2 = $request->obs2;
            $prepostTeleventas->backoffice = $request->backoffice;
            $prepostTeleventas->hora = $hora;
            $prepostTeleventas->dia = $fecha;
    
    
            $prepostTeleventas->save();
            return response()->json($prepostTeleventas);
        }
    
        /**
         * Display the specified resource.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function show($id)
        {
            $prepostTeleventas = PrepostTeleventas::find($id);
    
            return response()->json($prepostTeleventas);
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
            $prepostTeleventas = PrepostTeleventas::findorFail($request->id);
    
            $prepostTeleventas->revisados = $request->revisados;
            $prepostTeleventas->estadorevisado = $request->estadorevisado;
            $prepostTeleventas->obs2 = $request->obs2;
            $prepostTeleventas->backoffice = $request->backoffice;
    
            $prepostTeleventas->save();
    
            return response()->json($prepostTeleventas);
        }
    
        /**
         * Remove the specified resource from storage.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function destroy($id)
        {
            $prepostTeleventas = PrepostTeleventas::destroy($id);
            return response()->json($prepostTeleventas);
        }
}
