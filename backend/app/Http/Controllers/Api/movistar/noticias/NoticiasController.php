<?php

namespace App\Http\Controllers\Api\movistar\noticias;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Noticias;

class NoticiasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $noticia = Noticias::all();

        return response()->json($noticia);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $noticia = new Noticias();

        $noticia->description = $request->description;
        $noticia->title = $request->title;
        $noticia->imagen = $request->imagen;

        $noticia->save();

        return response()->json($noticia);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $noticia = Noticias::findOrFail($id);

        return response()->json($noticia);
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
        $noticia = Noticias::findOrFail($request->id);

        $noticia->description = $request->description;
        $noticia->title = $request->title;
        $noticia->imagen = $request->imagen;

        $noticia->save();

        return response()->json($noticia);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $noticia = Noticias::destroy($id);

        return response()->json($noticia);
    }
}
