export default function PortaTeleventasEdit() {
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <img src="{{ asset('img/pngegg.png') }}" float="left" height="120" width="300" />
                            <h3 aline="center">Editar Gestion de Portabilidad</h3>
                        </center>
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <form name="f1" action="{{ route('portatelev.update', $portatelev->id) }}" method="POST"
                                        enctype="multipart/form-data" className="form-horizontal">
                                        {/*  @csrf
                                        @method('PATCH') */}
                                        <div className="container-movistar-portateleventas">
                                            <div className="general-form">
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="hidden" id="backoffice" name="backoffice"
                                                        value="{{ Auth::user()->cedula }}" />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="hidden" name="agente" id="agente" value="{{ old('numero', $portatelev->agente) }}" />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="hidden" name="segmento" id="segmento" value="{{ old('numero', $portatelev->segmento) }}" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="number" style="color: black;">Numero</label>
                                                    <input type="number" className="form-control-new" id="numero"
                                                        placeholder="Numero" name="numero"
                                                        value="{{ old('numero', $portatelev->numero) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="documento" style="color: black">Documento</label>
                                                    <input type="number" className="form-control-new" id="documento"
                                                        placeholder="Documento" name="documento"
                                                        value="{{ old('documento', $portatelev->documento) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="nombres" style="color: black">Nombres</label>
                                                    <input type="text" className="form-control-new" id="nombres"
                                                        placeholder="Nombres" name="nombres"
                                                        value="{{ old('nombres', $portatelev->nombres) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="apellidos" style="color: black">Apellidos</label>
                                                    <input type="text" className="form-control-new" id="apellidos"
                                                        placeholder="Apellidos" name="apellidos"
                                                        value="{{ old('apellidos', $portatelev->apellidos) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="correo" style="color: black">Correo</label>
                                                    <input type="text" className="form-control-new" id="correo"
                                                        placeholder="Correo" name="correo"
                                                        value="{{ old('correo', $portatelev->correo) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="selector" style="color: black">Selector</label>
                                                    <input type="text" className="form-control-new" id="selector"
                                                        placeholder="Selector" name="selector"
                                                        value="{{ old('selector', $portatelev->selector) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="departamento" style="color: black">Departamento</label>
                                                    <input type="text" className="form-control-new" id="departamento"
                                                        placeholder="Departamento" name="departamento"
                                                        value="{{ old('departamento', $portatelev->departamento) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="id_ciudad" style="color: black">Ciudad</label>
                                                    <input type="text" className="form-control-new" id="id_ciudad"
                                                        placeholder="ciudad" name="id_ciudad"
                                                        value="{{ old('id_ciudad', $portatelev->id_ciudad) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="barrio" style="color: black">Barrio</label>
                                                    <input type="text" className="form-control-new" id="barrio"
                                                        placeholder="barrio" name="barrio" value="{{ $portatelev->barrio }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="direccion" style="color: black">Direccion</label>
                                                    <input type="text" className="form-control-new" id="direccion"
                                                        placeholder="direccion" name="direccion"
                                                        value="{{ old('direccion', $portatelev->direccion) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="nip" style="color: black">Nip</label>
                                                    <input type="number" className="form-control-new" id="nip"
                                                        placeholder="Nip" name="nip"
                                                        value="{{ old('nip', $portatelev->nip) }}" style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="tipocliente" style="color: black">Tipo cliente</label>
                                                    <input type="text" className="form-control-new" id="tipocliente"
                                                        placeholder="tipo cliente" name="tipocliente"
                                                        value="{{ old('tipocliente', $portatelev->tipocliente) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="planadquiere" style="color: black">Plan adquiere</label>
                                                    <input type="number" className="form-control-new" id="planadquiere"
                                                        placeholder="plan adquiere" name="planadquiere"
                                                        value="{{ old('planadquiere', $portatelev->planadquiere) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="ncontacto" style="color: black">Numero de contacto</label>
                                                    <input type="number" className="form-control-new" id="ncontacto"
                                                        placeholder="numero de contacto" name="ncontacto"
                                                        value="{{ old('ncontacto', $portatelev->ncontacto) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="imei" style="color: black;">Imei</label>
                                                    <input type="number" className="form-control-new" id="imei"
                                                        placeholder="Imei" name="imei"
                                                        value="{{ old('imei', $portatelev->imei) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="ngrabacion" style="color: black;">Numero de grabacion</label>
                                                    <input type="number" className="form-control-new" id="ngrabacion"
                                                        placeholder="Numero de grabacion" name="ngrabacion"
                                                        value="{{ old('ngrabacion', $portatelev->ngrabacion) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="fvc" style="color: black;">FVC</label>
                                                    <input type="date" className="form-control-new" id="fvc"
                                                        placeholder="fvc" name="fvc"
                                                        value="{{ old('fvc', $portatelev->fvc) }}" style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="fentrega" style="color: black;">Fecha de entrega</label>
                                                    <input type="date" className="form-control-new" id="fentrega"
                                                        placeholder="Fecha de entrega" name="fentrega"
                                                        value="{{ old('fentrega', $portatelev->fentrega) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="fexpedicion" style="color: black;">Fecha de expedicion</label>
                                                    <input type="date" className="form-control-new" id="fexpedicion"
                                                        placeholder="Fecha de expedicion" name="fexpedicion"
                                                        value="{{ old('fexpedicion', $portatelev->fexpedicion) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="fnacimiento" style="color: black;">Fecha de nacimiento</label>
                                                    <input type="date" className="form-control-new" id="fnacimiento"
                                                        placeholder="Fecha de nacimiento" name="fnacimiento"
                                                        value="{{ old('fnacimiento', $portatelev->fnacimiento) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="origen" style="color: black;">Origen de la migracion</label>
                                                    <input type="text" className="form-control-new" id="origen"
                                                        placeholder="Origen" name="origen"
                                                        value="{{ old('origen', $portatelev->origen) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="orden" style="color: black;">Numero de Orden</label>
                                                    <input type="number" className="form-control-new" id="orden"
                                                        placeholder="Numero de Orden" name="orden"
                                                        value="{{ old('orden', $portatelev->orden) }}"
                                                        style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="ngrabacion" style="color: black;">Observaciones</label>
                                                    <input type="text" className="form-control-new" id="observaciones"
                                                        name="observaciones" placeholder="Observaciones"
                                                        value="{{ old('observaciones', $portatelev->observaciones) }}"
                                                        style="border-radius: 10px" />
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
                                                    <label></label>
                                                    <input type="hidden" name="confronta" id="confronta" value="{{ old('numero', $portatelev->confronta) }}" />
                                                </div>
                                                <div className="items-form">
                                                    <span><label for="confronta" style="color: black;">Confronta</label><br />
                                                        <a href="{{ asset('storage') . '/' . $portatelev->confronta }}"><img
                                                            src="{{ asset('storage') . '/' . $portatelev->confronta }}"
                                                            alt="" height="130" width="300"
                                                            style="border-radius: 10px" /></a>
                                                    </span>
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="hidden" name="likewize" id="likewize" value="{{ old('numero', $portatelev->likewize) }}" />
                                                </div>
                                                <div className="items-form">
                                                    <span><label for="likewize" style="color: black;">LikeWize</label><br />
                                                        <a href="{{ asset('storage') . '/' . $portatelev->likewize }}"><img
                                                            src="{{ asset('storage') . '/' . $portatelev->likewize }}"
                                                            alt="" height="130" width="300"
                                                            style="border-radius: 10px" /></a>
                                                    </span>
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <textarea className="form-control-new" id="obs2" name="obs2" rows="3"
                                                        placeholder="Observaciones BackOficce" style="border-radius: 10px"></textarea>
                                                </div>

                                                <div className="items-form">
                                                    <label></label>
                                                    <input className="btn btn-info btn-sm" type="submit" value="Enviar"
                                                        style="border-radius: 10px; margin-left:20px"
                                                        onclick="md.showNotification('top','right')" />
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
        </div >
    );
}
