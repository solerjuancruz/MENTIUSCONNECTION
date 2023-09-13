<?php

namespace App\Http\Controllers\Api\tiempo;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Tiempos;
use Carbon\Carbon;

class FinCalamidadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        //
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
        $tiempo = Tiempos::findorFail($request->id); 
        $hora = Carbon::now()->format('H:i:s');
        
        $tiempo->calamidadout = $hora;

        $horaInicio = \Carbon\Carbon::parse($tiempo->calamidad);
        $horaFin = \Carbon\Carbon::parse($tiempo->calamidadout);
        
        $tiempofinal = $horaInicio->diffInMinutes($horaFin);

        $tiempo->timecalamidad = $tiempofinal;

        $tiempo->save();   

        return response()->json($tiempo);
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
