export default function UpgradeTeleventasEdit() {
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <img/>
                            <h3>Editor de Gestion upgradetelev</h3>
                        </center>
                        <div className="card">
                            <div className="card-body">
                                <form name="f1" className="form-horizontal">
                                    <div className="container-movistar-upgradeteleventas">
                                        <div className="general-form">
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="backoffice" name="backoffice" value="{{ Auth::user()->cedula }}" />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="agente" name="agente" value="{{ $upgradetelev->agente }}" />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="segmento" name="segmento" value="{{ $upgradetelev->segmento }}" />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="confronta" name="confronta" value="{{ $upgradetelev->confronta }}" />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="hora" name="hora" value="{{ $upgradetelev->hora }}" />
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="dia" name="dia" value="{{ $upgradetelev->dia }}" />
                                            </div>
                                            <div className="items-form">
                                                <label for="nombres" style="color: black;">Nombres</label>
                                                <input type="text" className="form-control-new" id="nombres" placeholder="Nombres"
                                                    name="nombres" value="{{ old('nombres', $upgradetelev->nombres) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="documento" style="color: black;">Numero</label>
                                                <input type="number" className="form-control-new" id="documento"
                                                    placeholder="documento" name="documento"
                                                    value="{{ old('documento', $upgradetelev->documento) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="correo" style="color: black;">Correo</label>
                                                <input type="text" className="form-control-new" id="correo"
                                                    placeholder="Correo Electronico" name="correo"
                                                    value="{{ old('correo', $upgradetelev->correo) }}" />
                                            </div>
                                            <div className="items-form">
                                                <label for="selector" style="color: black;">Selector</label>
                                                <input type="text" className="form-control-new" id="selector" placeholder="Selector"
                                                    name="selector" value="{{ old('selector', $upgradetelev->selector) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="fventa" style="color: black;">Fecha de venta</label>
                                                <input type="date" className="form-control-new" id="fventa" placeholder="fventa"
                                                    name="fventa" value="{{ old('fventa', $upgradetelev->fventa) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="number" style="color: black;">Numero</label>
                                                <input type="number" className="form-control-new" id="numero" placeholder="Numero"
                                                    name="numero" value="{{ old('numero', $upgradetelev->numero) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="corte" style="color: black;">Corte</label>
                                                <input type="number" className="form-control-new" id="corte" placeholder="Corte"
                                                    name="corte" value="{{ old('corte', $upgradetelev->corte) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="planhistorico" style="color: black;">Plan historico</label>
                                                <input type="text" className="form-control-new" id="planhistorico"
                                                    placeholder="Plan historico" name="planhistorico"
                                                    value="{{ old('planhistorico', $upgradetelev->planhistorico) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="planventa" style="color: black;">Plan venta</label>
                                                <input type="number" className="form-control-new" id="planventa"
                                                    placeholder="Plan venta" name="planventa"
                                                    value="{{ old('planventa', $upgradetelev->planventa) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="activacion" style="color: black;">Activacion</label>
                                                <input type="text" className="form-control-new" id="activacion"
                                                    placeholder="Activacion" name="activacion"
                                                    value="{{ old('activacion', $upgradetelev->activacion) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ngrabacion" style="color: black;">Numero de grabacion</label>
                                                <input type="number" className="form-control-new" id="ngrabacion"
                                                    placeholder="numero de grabacion" name="ngrabacion"
                                                    value="{{ old('ngrabacion', $upgradetelev->ngrabacion) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="orden" style="color: black;">Numero de Orden</label>
                                                <input type="number" className="form-control-new" id="orden"
                                                    placeholder="numero de Orden" name="orden"
                                                    value="{{ old('orden', $upgradetelev->orden) }}" style="border-radius: 10px" />
                                            </div>

                                            <div className="items-form">
                                                <label for="observacion" style="color: black;">Observacion</label>
                                                <input type="text" className="form-control-new" id="observacion"
                                                    placeholder="observacion" name="observacion"
                                                    value="{{ old('observacion', $upgradetelev->observacion) }}"
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
                                                <label for="confronta" style="color: black;">Confronta</label>
                                                <span>
                                                    <a href="{{ asset('storage') . '/' . $upgradetelev->confronta }}"><img
                                                        src="{{ asset('storage') . '/' . $upgradetelev->confronta }}"
                                                        alt="" height="130" width="260"
                                                        style="border-radius: 10px" /></a>
                                                </span>
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <textarea className="form-control-new" id="obs2" name="obs2" rows="3"
                                                    placeholder="Observaciones BackOficce" style="border-radius: 10px"></textarea>
                                            </div>
                                            <div className="items-form">
                                                <input className="btn btn-info btn-sm" type="submit" value="Enviar"
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
