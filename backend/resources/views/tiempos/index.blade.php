<form action="{{ route('Tiempos.update', $tiempo->id)}" method="post" enctype="multipart/form-data" class="form-horizontal">
    @csrf
    @method('PUT')
    <h1 id="clock" style="font-size: 20px; margin-left:41px"></h1>
    <input type="" id="breakin" name="breakin" class="form-control"  required hidden>

    <input type='submit' class="botones text-white btn btn-info" value='Inicio' style="margin-left:100px" onclick="finalizarbreak()">

    {{--function de finalizar turno --}}
    
</form>