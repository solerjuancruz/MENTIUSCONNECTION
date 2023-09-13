<?php

namespace App\Http\Controllers\Api\tiempo;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Tiempos;
use Carbon\Carbon;


class InicioTurnoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tiempo = Tiempos::all();
        
        return response()->json($tiempo);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tiempo = new Tiempos();
        $ingreso = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $tiempo->llave = $request->llave;
        $tiempo->nombre = $request->nombre;
        $tiempo->cedula = $request->cedula;
        $tiempo->fecha = $fecha;
        $tiempo->ingreso = $ingreso;        

        $tiempo->save();   

        return response()->json($tiempo);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
 /*    public function show($id)
    {
        $tiempo = Tiempos::find($id);     
        
        $tiempo->save();    
    } */
    public function show($id)
{
    $tiempo = Tiempos::find($id);

    if (!$tiempo) {
        return response()->json(['message' => 'Registro no encontrado'], 404);
    }

    return response()->json($tiempo);
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
        //
    }
}
