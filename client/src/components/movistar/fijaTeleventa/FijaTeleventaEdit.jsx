export default function FijaTeleventaEdit() {
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <img src="{{ asset('img/pngegg.png') }}" float="left" height="120" width="300" />
                            <h3 aline="center">Editar Gestion Fija</h3>
                        </center>
                        <div className="card">
                            <div className="card-body">
                                <form name="f1" action="{{ route('fijateleventa.update', $fijas->id) }}" method="POST"
                                    enctype="multipart/form-data" className="form-horizontal">
                                    {/* @csrf
                                    @method('PATCH') */}
                                    <div className="container-movistar-fijadigital">
                                        <div className="general-form">
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="backoffice" name="backoffice" value="{{ Auth::user()->cedula }}" />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="selector" name="selector" value="{{old('selector', $fijas->selector)}}" />
                                            </div>
                                            <div className="items-form">
                                                <label for="nombres" style="color: black;">Nombres</label>
                                                <input type="text" className="form-control-new" id="nombres" placeholder="Nombres"
                                                    name="nombres" value="{{ old('nombres', $fijas->nombres) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="documento" style="color: black;">Documento</label>
                                                <input type="number" className="form-control-new" id="documento"
                                                    placeholder="Documento" name="documento"
                                                    value="{{ old('documento', $fijas->documento) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="fexpedicion" style="color: black;">Fecha de expedicion</label>
                                                <input type="date" className="form-control-new" id="fexpedicion"
                                                    placeholder="Fecha de expedicion" name="fexpedicion"
                                                    value="{{ old('fexpedicion', $fijas->fexpedicion) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="correo" style="color: black;">Correo Electronico</label>
                                                <input type="text" className="form-control-new" id="correo" placeholder="Correo"
                                                    name="correo" value="{{ old('correo', $fijas->correo) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="departamento" style="color: black;">Departamento</label>
                                                <input type="text" className="form-control-new" id="departamento"
                                                    placeholder="Departamento" name="departamento"
                                                    value="{{ old('departamento', $fijas->departamento) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ciudad" style="color: black;">Ciudad</label>
                                                <input type="text" className="form-control-new" id="id_ciudad" placeholder="ciudad"
                                                    name="id_ciudad" value="{{ old('id_ciudad', $fijas->id_ciudad) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="barrio" style="color: black;">Barrio</label>
                                                <input type="text" className="form-control-new" id="barrio" placeholder="barrio"
                                                    name="barrio" value="{{ old('barrio', $fijas->barrio) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="direccion" style="color: black;">Direccion</label>
                                                <input type="text" className="form-control-new" id="direccion"
                                                    placeholder="direccion" name="direccion"
                                                    value="{{ old('direccion', $fijas->direccion) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="estrato" style="color: black;">Estrato</label>
                                                <input type="number" className="form-control-new" id="estrato"
                                                    placeholder="Estrato" name="estrato"
                                                    value="{{ old('estrato', $fijas->estrato) }}" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ngrabacion" style="color: black;">Numero de grabacion</label>
                                                <input type="number" className="form-control-new" id="ngrabacion"
                                                    placeholder="Numero de grabacion" name="ngrabacion"
                                                    value="{{ old('ngrabacion', $fijas->ngrabacion) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ncontacto" style="color: black;">Numero de contacto</label>
                                                <input type="number" className="form-control-new" id="ncontacto"
                                                    placeholder="Numero de contacto" name="ncontacto"
                                                    value="{{ old('ncontacto', $fijas->ncontacto) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="producto" style="color: black;">Producto</label>
                                                <input type="text" className="form-control-new" id="producto"
                                                    placeholder="Producto" name="producto"
                                                    value="{{ old('producto', $fijas->producto) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="fox" style="color: black;">Fox</label>
                                                <input type="text" className="form-control-new" id="fox"
                                                    placeholder="0" name="fox" value="{{ old('fox', $fijas->FOX) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="hbo" style="color: black;">Hbo</label>
                                                <input type="text" className="form-control-new" id="hbo"
                                                    placeholder="0" name="hbo" value="{{ old('hbo', $fijas->HBO) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="cds_movil" style="color: black;">Cds movil</label>
                                                <input type="text" className="form-control-new" id="cds_movil"
                                                    placeholder="0" name="cds_movil"
                                                    value="{{ old('cds_movil', $fijas->cds_movil) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="cds_fija" style="color: black;">Cds fija</label><input
                                                    type="text" className="form-control-new" id="cds_fija"
                                                    placeholder="0" name="cds_fija"
                                                    value="{{ old('cds_fija', $fijas->cds_fija) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="Paquete_Adultos" style="color: black;">P adultos</label>
                                                <input type="text" className="form-control-new" id="Paquete_Adultos"
                                                    placeholder="0" name="Paquete_Adultos"
                                                    value="{{ old('deco', $fijas->Paquete_Adultos) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="Decodificador" style="color: black;">Deco</label>
                                                <input type="text" className="form-control-new" id="Decodificador"
                                                    placeholder="0" name="Decodificador"
                                                    value="{{ old('Decodificador', $fijas->Decodificador) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="svas_lineas" style="color: black;">Svas l.</label>
                                                <input type="text" className="form-control-new" id="svas_lineas"
                                                    placeholder="0" name="svas_lineas"
                                                    value="{{ old('svas_lineas', $fijas->Svas_lineas) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="velocidad" style="color: black;">Velocidad</label>
                                                <input type="text" className="form-control-new" id="velocidad"
                                                    placeholder="Velocidad" name="velocidad"
                                                    value="{{ old('velocidad', $fijas->velocidad) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="tecnologia" style="color: black;">Tecnologia</label>
                                                <input type="text" className="form-control-new" id="tecnologia"
                                                    placeholder="Tecnologia" name="tecnologia"
                                                    value="{{ old('tecnologia', $fijas->tecnologia) }}"
                                                    style="border-radius: 10px" />
                                            </div>

                                            <br /><br /><br />
                                            <div className="items-form">
                                                <label for="orden" style="color: black;">Numero de Orden</label>
                                                <input type="text" className="form-control-new" id="orden"
                                                    placeholder="orden" name="orden" value="{{ old('orden', $fijas->orden) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="observacion" style="color: black;">Observacion</label>
                                                <input type="text" className="form-control-new" id="observacion"
                                                    placeholder="observacion" name="observacion"
                                                    value="{{ old('observacion', $fijas->observacion) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="">Estado</label>
                                                <select name="revisados" id="revisados" className="form-control"
                                                    style="border-radius: 10px;margin-top:-10px" required />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input hidden />
                                            </div>
                                            <div className="items-form">
                                                <label for="">Sub Estado</label>
                                                <select name="estadorevisado" id="estadorevisado" className="form-control"
                                                    style="border-radius: 10px;margin-top:-10px" required />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input hidden />
                                            </div>
                                            <div className="items-form">
                                                <span><label for="confronta" style="color: black;">Confronta</label><br />
                                                    <a href="{{ asset('storage') . '/' . $fijas->confronta }}"><img
                                                        src="{{ asset('storage') . '/' . $fijas->confronta }}" alt=""
                                                        height="130" width="300" style="border-radius: 10px" /></a>
                                                </span>
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <textarea className="form-control-new" id="obs2" name="obs2" rows="3"
                                                    placeholder="Observaciones BackOficce"></textarea>
                                            </div>
                                            <div className="items-form">
                                                <input className="btn btn-lg btn-info btn-sm" type="submit" value="Enviar"
                                                    style="border-radius: 10px" onclick="md.showNotification('top','right')" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
