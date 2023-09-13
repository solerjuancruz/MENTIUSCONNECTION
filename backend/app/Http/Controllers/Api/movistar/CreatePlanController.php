<?php

namespace App\Http\Controllers\Api\movistar;

use App\Http\Controllers\Controller;
use App\Models\CreatePlan;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class CreatePlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $createPlan = CreatePlan::all();

        return response()->json($createPlan);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $createPlan = new CreatePlan();
        $hora = Carbon::now()->format('H:i:s');
        $fecha = Carbon::today();

        $createPlan->planadquiere = $request->planadquiere;
        $createPlan->hora = $hora;
        $createPlan->dia = $fecha;

        $createPlan->save();

        return response()->json($createPlan);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $createPlan = CreatePlan::find($id);

        return response()->json($createPlan);
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
        $createPlan = CreatePlan::findorFail($request->id);
        return response()->json($createPlan);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $createPlan = CreatePlan::destroy($id);
        return response()->json($createPlan);
    }
}
