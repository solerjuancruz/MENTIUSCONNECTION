export default function PhoenixEdit() {
    return (
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <center>
                            <img src="{{ asset('img/pngegg.png') }}" float="left" height="120" width="300" />
                            <h3 aline="center">Editar Gestion de Phoenix</h3>
                        </center>
                        <div class="card">
                            <div class="card-body">
                                <form name="f1" action="{{ route('phoenix.update', $phoenixes->id) }}" method="POST"
                                    enctype="multipart/form-data" class="form-horizontal">
                                    {/*  @csrf
                                    @method('PATCH') */}

                                    <div className="container-movistar-phoenix">
                                        <div className="general-form">
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="backoffice" name="backoffice" value="{{ Auth::user()->cedula }}" />
                                            </div>
                                            <div className="items-form">
                                                <label for="number" style="color: black;">Numero</label>
                                                <input type="number" class="form-control-new" id="numero" placeholder="Numero"
                                                    name="numero" value="{{ old('numero', $phoenixes->numero) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="documento" style="color: black;">Documento</label>
                                                <input type="number" class="form-control-new" id="documento" placeholder="Documento"
                                                    name="documento" value="{{ old('documento', $phoenixes->documento) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="nombres" style="color: black;">Nombres</label>
                                                <input type="text" class="form-control-new" id="nombres" placeholder="Nombres"
                                                    name="nombres" value="{{ old('nombres', $phoenixes->nombres) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="apellidos" style="color: black;">Apellidos</label>
                                                <input type="text" class="form-control-new" id="apellidos" placeholder="Apellidos"
                                                    name="apellidos" value="{{ old('apellidos', $phoenixes->apellidos) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="correo" style="color: black;">Correo</label>
                                                <input type="text" class="form-control-new" id="correo" placeholder="Correo"
                                                    name="correo" value="{{ old('correo', $phoenixes->correo) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">/
                                                <label for="selector" style="color: black;">Selector</label>
                                                <input type="text" class="form-control-new" id="selector" placeholder="Selector"
                                                    name="selector" value="{{ old('selector', $phoenixes->selector) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="departamento" style="color: black;">Departamento</label>
                                                <input type="text" class="form-control-new" id="departamento"
                                                    placeholder="Departamento" name="departamento"
                                                    value="{{ old('departamento', $phoenixes->departamento) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ciudad" style="color: black;">Ciudad</label>
                                                <input type="text" class="form-control-new" id="id_ciudad" placeholder="ciudad"
                                                    name="id_ciudad" value="{{ old('id_ciudad', $phoenixes->id_ciudad) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="barrio" style="color: black;">Barrio</label>
                                                <input type="text" class="form-control-new" id="barrio" placeholder="barrio"
                                                    name="barrio" value="{{ old('barrio', $phoenixes->barrio) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="direccion" style="color: black;">Direccion</label>
                                                <input type="text" class="form-control-new" id="direccion" placeholder="direccion"
                                                    name="direccion" value="{{ old('direccion', $phoenixes->direccion) }}" />
                                            </div>
                                            <div className="items-form">
                                                <label for="nip" style="color: black;">Nip</label>
                                                <input type="number" class="form-control-new" id="nip" placeholder="Nip" name="nip"
                                                    value="{{ old('nip', $phoenixes->nip) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="tipocliente" style="color: black;">Tipo cliente</label>
                                                <input type="text" class="form-control-new" id="tipocliente"
                                                    placeholder="tipo cliente" name="tipocliente"
                                                    value="{{ old('tipocliente', $phoenixes->tipocliente) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ncontacto" style="color: black;">Numero de contacto</label>
                                                <input type="number" class="form-control-new" id="ncontacto"
                                                    placeholder="numero de contacto" name="ncontacto"
                                                    value="{{ old('ncontacto', $phoenixes->ncontacto) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="imei" style="color: black;">Modelo</label>
                                                <input type="text" class="form-control-new" id="modelo" placeholder="modelo"
                                                    name="modelo" value="{{ old('modelo', $phoenixes->modelo) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="planadquiere" style="color: black;">Tipo de Planes</label>
                                                <input type="text" class="form-control-new" id="planadquiere"
                                                    placeholder="Tipo de Planes" name="planadquiere"
                                                    value="{{ old('planadquiere', $phoenixes->planadquiere) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="tipoPagos" style="color: black;">Tipo de Pago</label>
                                                <input type="text" class="form-control-new" id="tipoPagos"
                                                    placeholder="Tipo de Pago" name="tipoPagos"
                                                    value="{{ old('tipoPagos', $phoenixes->tipoPagos) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ngrabacion" style="color: black;">Numero de grabacion</label>
                                                <input type="number" class="form-control-new" id="ngrabacion"
                                                    placeholder="Numero de grabacion" name="ngrabacion"
                                                    value="{{ old('ngrabacion', $phoenixes->ngrabacion) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="orden" style="color: black;">Numero de Orden</label>
                                                <input type="number" class="form-control-new" id="orden"
                                                    placeholder="Numero de Orden" name="orden"
                                                    value="{{ old('orden', $phoenixes->orden) }}" style="border-radius: 10px" />
                                            </div>

                                            <div className="items-form">
                                                <label for="EqComprado" style="color: black;">Equipo Comprado</label>
                                                <input type="text" class="form-control-new" id="EqComprado"
                                                    placeholder="Equipo Comprado" name="EqComprado"
                                                    value="{{ old('EqComprado', $phoenixes->EqComprado) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ComEquipo" style="color: black;">Complemento Equipo</label>
                                                <input type="text" class="form-control-new" id="ComEquipo"
                                                    placeholder="Complemento Equipo" name="ComEquipo"
                                                    value="{{ old('ComEquipo', $phoenixes->ComEquipo) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ValEquipo" style="color: black;">Valor Equipo</label>
                                                <input type="number" class="form-control-new" id="ValEquipo"
                                                    placeholder="Valor Equipo" name="ValEquipo"
                                                    value="{{ old('ValEquipo', $phoenixes->ValEquipo) }}" style="border-radius: 10px" />
                                            </div>

                                            <div className="items-form">
                                                <label for="ngrabacion" style="color: black;">Observaciones</label>
                                                <input type="text" class="form-control-new" id="observaciones" name="observaciones"
                                                    placeholder="Observaciones"
                                                    value="{{ old('observaciones', $phoenixes->observaciones) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="">Estado</label>
                                                <select name="revisados" id="revisados" class="form-control" style="border-radius: 10px;margin-top:-10px" required />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input hidden />
                                            </div>
                                            <div className="items-form">
                                                <label for="">Sub Estado</label>
                                                <select name="estadorevisado" id="estadorevisado" class="form-control" style="border-radius: 10px;margin-top:-10px" required />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input hidden />
                                            </div>
                                            <div className="items-form">
                                                <span><label for="confronta" style="color: black;">Confronta</label><br />
                                                    <a href="{{ asset('storage') . '/' . $phoenixes->confronta }}"><img
                                                        src="{{ asset('storage') . '/' . $phoenixes->confronta }}" alt=""
                                                        height="130" width="300" style="border-radius: 10px" /></a>
                                                </span>
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <textarea class="form-control-new" id="obs2" name="obs2" rows="3"
                                                    placeholder="Observaciones BackOficce"></textarea>
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input class="btn btn-info btn-sm" type="submit" value="EDITAR" style="border-radius: 10px" onclick="md.showNotification('top','right')" />
                                                <a href="{{ route('phoenix.index') }}" class="btn btn-danger btn-sm"
                                                    role="button" aria-pressed="true" style="border-radius: 10px" >VOLVER</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}
