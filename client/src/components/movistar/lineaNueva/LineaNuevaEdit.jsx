export default function LineaNuevaEdit() {
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <img src="{{ asset('img/pngegg.png') }}" float="left" height="120" width="300" />
                            <h3 aline="center">Editar Gestion Linea Nueva</h3>
                        </center>
                        <div className="card">
                            <div className="card-body">
                                <form name="f1" action="{{ route('lineanueva.update', $lineanuevas->id) }}" method="POST"
                                    enctype="multipart/form-data" className="form-horizontal">
                                    {/*  @csrf
                                    @method('PATCH') */}
                                    <div className="container-movistar-lineanueva">
                                        <div className="general-form">
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="backoffice" name="backoffice" value="{{ Auth::user()->cedula }}" />
                                            </div>
                                            <div className="items-form">
                                                <label for="number" style="color: black;">Numero</label>
                                                <input type="number" className="form-control-new" id="numero" placeholder="Numero"
                                                    name="numero" value="{{ old('numero', $lineanuevas->numero) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="documento" style="color: black;">Documento</label>
                                                <input type="number" className="form-control-new" id="documento" placeholder="Documento"
                                                    name="documento" value="{{ old('documento', $lineanuevas->documento) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="nombres" style="color: black;">Nombres</label>
                                                <input type="text" className="form-control-new" id="nombres" placeholder="Nombres"
                                                    name="nombres" value="{{ old('nombres', $lineanuevas->nombres) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="apellidos" style="color: black;">Apellidos</label>
                                                <input type="text" className="form-control-new" id="apellidos" placeholder="Apellidos"
                                                    name="apellidos" value="{{ old('apellidos', $lineanuevas->apellidos) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="correo" style="color: black;">Correo</label>
                                                <input type="text" className="form-control-new" id="correo" placeholder="Correo"
                                                    name="correo" value="{{ old('correo', $lineanuevas->correo) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="selector" style="color: black;">Selector</label>
                                                <input type="text" className="form-control-new" id="selector" placeholder="Selector"
                                                    name="selector" value="{{ old('selector', $lineanuevas->selector) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="departamento" style="color: black;">Departamento</label>
                                                <input type="text" className="form-control-new" id="departamento"
                                                    placeholder="Departamento" name="departamento"
                                                    value="{{ old('departamento', $lineanuevas->departamento) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="id_ciudad" style="color: black;">Ciudad</label>
                                                <input type="text" className="form-control-new" id="id_ciudad" placeholder="ciudad"
                                                    name="id_ciudad" value="{{ old('id_ciudad', $lineanuevas->id_ciudad) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="barrio" style="color: black;">Barrio</label>
                                                <input type="text" className="form-control-new" id="barrio" placeholder="barrio"
                                                    name="barrio" value="{{ old('barrio', $lineanuevas->barrio) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="direccion" style="color: black;">Direccion</label>
                                                <input type="text" className="form-control-new" id="direccion" placeholder="direccion"
                                                    name="direccion" value="{{ old('direccion', $lineanuevas->direccion) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="tipocliente" style="color: black;">Tipo cliente</label>
                                                <input type="text" className="form-control-new" id="tipocliente"
                                                    placeholder="tipo cliente" name="tipocliente"
                                                    value="{{ old('tipocliente', $lineanuevas->tipocliente) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ncontacto" style="color: black;">Numero de contacto</label>
                                                <input type="number" className="form-control-new" id="ncontacto"
                                                    placeholder="numero de contacto" name="ncontacto"
                                                    value="{{ old('ncontacto', $lineanuevas->ncontacto) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ngrabacion" style="color: black;">Numero de grabacion</label>
                                                <input type="number" className="form-control-new" id="ngrabacion"
                                                    placeholder="Numero de grabacion" name="ngrabacion"
                                                    value="{{ old('ngrabacion', $lineanuevas->ngrabacion) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="orden" style="color: black;">Numero de Orden</label>
                                                <input type="number" className="form-control-new" id="orden"
                                                    placeholder="Numero de Orden" name="orden"
                                                    value="{{ old('orden', $lineanuevas->orden) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ngrabacion" style="color: black;">Observaciones</label>
                                                <input type="text" className="form-control-new" id="observaciones" name="observaciones"
                                                    placeholder="Observaciones"
                                                    value="{{ old('observaciones', $lineanuevas->observaciones) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="">Estado</label>
                                                <select name="revisados" id="revisados" className="form-control" style="border-radius: 10px;margin-top:-10px" required />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input hidden />
                                            </div>
                                            <div className="items-form">
                                                <label for="">Sub Estado</label>
                                                <select name="estadorevisado" id="estadorevisado" className="form-control" style="border-radius: 10px;margin-top:-10px" required />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input hidden />
                                            </div>
                                            <div className="items-form">
                                                <span><label for="confronta" style="color: black;">Confronta</label><br />
                                                    <a href="{{ asset('storage') . '/' . $lineanuevas->confronta }}"><img
                                                        src="{{ asset('storage') . '/' . $lineanuevas->confronta }}" alt=""
                                                        height="130" width="300" style="border-radius: 10px" /></a>
                                                </span>
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="confronta" name="confronta" value="{{$lineanuevas->confronta}}" />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <textarea className="form-control-new" id="obs2" name="obs2" rows="3"
                                                    placeholder="Observaciones BackOficce"></textarea>
                                            </div>
                                            <div className="items-form">
                                                <input className="btn btn-info btn-sm" type="submit" value="EDITAR" style="border-radius: 10px" onclick="md.showNotification('top','right')" />
                                                <a href="{{ route('lineanueva.index') }}" className="btn btn-danger btn-sm"
                                                    role="button" aria-pressed="true" style="border-radius: 10px">VOLVER</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
