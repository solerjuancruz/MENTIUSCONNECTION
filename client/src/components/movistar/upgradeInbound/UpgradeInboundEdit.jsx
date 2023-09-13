export default function UpgradeInboundEdit() {
    return (
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <center>
                            <img src="{{ asset('img/pngegg.png') }}" float="left" height="120" width="300" />
                            <h3 aline="center">Editor de Gestion upgradeinbo</h3>
                        </center>
                        <div class="card">
                            <div class="card-body">
                                <form name="f1" action="{{ route('upgradeinbo.update', $upgradeinbo->id) }}" method="POST"
                                    enctype="multipart/form-data" class="form-horizontal">
                                    {/* @csrf
                                    @method('PATCH') */}
                                    <div className="container-movistar-upgradeinbound">
                                        <div className="general-form">
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="backoffice" name="backoffice" value="{{ Auth::user()->cedula }}" />
                                            </div>
                                            <div className="items-form">
                                                <label for="nombres" style="color: black;">Nombres</label>
                                                <input type="text" class="form-control-new" id="nombres" placeholder="Nombres"
                                                    name="nombres" value="{{ old('nombres', $upgradeinbo->nombres) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="documento" style="color: black;">Numero</label>
                                                <input type="number" class="form-control-new" id="documento"
                                                    placeholder="documento" name="documento"
                                                    value="{{ old('documento', $upgradeinbo->documento) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="correo" style="color: black;">Correo</label>
                                                <input type="text" class="form-control-new" id="correo"
                                                    placeholder="Correo Electronico" name="correo"
                                                    value="{{ old('correo', $upgradeinbo->correo) }}" />
                                            </div>
                                            <div className="items-form">
                                                <label for="selector" style="color: black;">Selector</label>
                                                <input type="text" class="form-control-new" id="selector" placeholder="Selector"
                                                    name="selector" value="{{ old('selector', $upgradeinbo->selector) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="fventa" style="color: black;">Fecha de venta</label>
                                                <input type="date" class="form-control-new" id="fventa" placeholder="fventa"
                                                    name="fventa" value="{{ old('fventa', $upgradeinbo->fventa) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="number" style="color: black;">Numero</label>
                                                <input type="number" class="form-control-new" id="numero" placeholder="Numero"
                                                    name="numero" value="{{ old('numero', $upgradeinbo->numero) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="corte" style="color: black;">Corte</label>
                                                <input type="number" class="form-control-new" id="corte" placeholder="Corte"
                                                    name="corte" value="{{ old('corte', $upgradeinbo->corte) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="planhistorico" style="color: black;">Plan historico</label>
                                                <input type="text" class="form-control-new" id="planhistorico"
                                                    placeholder="Plan historico" name="planhistorico"
                                                    value="{{ old('planhistorico', $upgradeinbo->planhistorico) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="planventa" style="color: black;">Plan venta</label>
                                                <input type="number" class="form-control-new" id="planventa"
                                                    placeholder="Plan venta" name="planventa"
                                                    value="{{ old('planventa', $upgradeinbo->planventa) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="activacion" style="color: black;">Activacion</label>
                                                <input type="text" class="form-control-new" id="activacion"
                                                    placeholder="Activacion" name="activacion"
                                                    value="{{ old('activacion', $upgradeinbo->activacion) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="ngrabacion" style="color: black;">Numero de grabacion</label>
                                                <input type="number" class="form-control-new" id="ngrabacion"
                                                    placeholder="numero de grabacion" name="ngrabacion"
                                                    value="{{ old('ngrabacion', $upgradeinbo->ngrabacion) }}"
                                                    style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="orden" style="color: black;">Numero de Orden</label>
                                                <input type="number" class="form-control-new" id="orden"
                                                    placeholder="numero de Orden" name="orden"
                                                    value="{{ old('orden', $upgradeinbo->orden) }}" style="border-radius: 10px" />
                                            </div>
                                            <div className="items-form">
                                                <label for="observacion" style="color: black;">Observacion</label>
                                                <input type="text" class="form-control-new" id="observacion"
                                                    placeholder="observacion" name="observacion"
                                                    value="{{ old('observacion', $upgradeinbo->observacion) }}"
                                                    style="border-radius: 10px" />
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
                                                <label for="confronta" style="color: black;">Confronta</label>
                                                <span>
                                                    <a href="{{ asset('storage') . '/' . $upgradeinbo->confronta }}"><img
                                                        src="{{ asset('storage') . '/' . $upgradeinbo->confronta }}"
                                                        alt="" height="130" width="260"
                                                        style="border-radius: 10px" /></a>
                                                </span>
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <textarea class="form-control-new" id="obs2" name="obs2" rows="3"
                                                    placeholder="Observaciones BackOficce" style="border-radius: 10px"></textarea>
                                            </div>
                                            <div className="items-form">
                                                <input class="btn btn-info btn-sm" type="submit" value="Enviar"
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
