export default function LineaNuevaCreate() {
    return (
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <center>
                            <img src="{{ asset('img/pngegg.png') }}" float="left" height="120" width="300" />
                            <h3 aline="center">LINEA NUEVA</h3>
                        </center>
                        <div class="card">
                            <div class="card-body">
                                @if (session('success'))
                                <div class="alert alert-success" role="success">
                                    {/*  {{ session('success') }} */}
                                </div>
                                @endif
                                <form action="{{ url('/lineanueva') }}" method="POST" enctype="multipart/form-data"
                                    class="form-horizontal">
                                    {/*  {{ csrf_field() }} */}
                                    <br/>
                                        <div className="container-movistar-lineanueva">
                                            <div className="general-form">
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="hidden" id="agente" name="agente" value="{{ $user_id }}" />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="hidden" id="revisados" name="revisados" value="Nuevo" />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="hidden" id="dia" name="dia" class="form-control" placeholder="hora"
                                                        value="{{ $date }}" required />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="hidden" id="hora" name="hora" class="form-control" placeholder="hora"
                                                        value="{{ $hora }}" required />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="number" id="numero" name="numero" class="form-control"
                                                        placeholder="Nuevo Numero" min="1" onkeypress="return num(event)" required style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="number" id="documento" name="documento" class="form-control"
                                                        placeholder="Documento de identidad" min="1" onkeypress="return num(event)"
                                                        required style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="text" id="nombres" name="nombres" class="form-control"
                                                        placeholder="Nombres" onkeypress="return check(event)" required style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="text" id="apellidos" name="apellidos" class="form-control"
                                                        placeholder="Apellidos" onkeypress="return check(event)" required style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input type="mail" id="correo" name="correo" class="form-control"
                                                        placeholder="Ingrese correo electronico ejemplo@gmail.com" required style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="" style="color: black;">Seleccione una Opción</label>
                                                    <input type="" />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input class="j-chek" type="radio" name="selector" id="selector1"
                                                        value="leads" required />
                                                    <label class="form-check-label j2-chek" for="selector1" style="color: black;">Leads</label>
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input class="j-chek" type="radio" name="selector" id="selector2"
                                                        value="BBDD" />
                                                    <label class="form-check-label j2-chek" for="selector2" style="color: black;">BBDD</label>
                                                </div>
                                                {/* {{-- Ciudad departamento --}} */}
                                                <div className="items-form">
                                                    <label></label>
                                                    <select name="departamento" id="Tipificacion_detalle_1" class="form-control" style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input hidden />
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <select name="id_ciudad" id="Tipificacion_detalle_2" class="form-control" style="border-radius: 10px" />
                                                    <option value="">Ciudad</option>
                                                </div>
                                                <div className="items-form">
                                                    <label></label>
                                                    <input hidden />
                                                </div>
                                                {/*  {{-- fin ciudad departamento --}} */}
                                                <div className="items-form">
                                                    <input type="text" id="barrio" name="barrio" class="form-control"
                                                        placeholder="Barrio" required style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <input type="text" id="direccion" name="direccion" class="form-control"
                                                        placeholder="Direccion" required style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <select name="tipocliente" id="tipocliente" class="form-control" required>
                                                        <option value="0" style="border-radius: 10px">Tipo de cliente</option>
                                                        @foreach ($tipoclientes as $tipocliente)
                                                        <option value="{{ $tipocliente->nombre }}">
                                                            {/* {{ $tipocliente-> nombre}} */}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                                <div className="items-form">
                                                    <label for="ncontacto" style="color: black;">Numero de Contacto</label>
                                                    <input type="number" id="ncontacto" name="ncontacto" class="form-control" min="1"
                                                        onkeypress="return num(event)" required style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="ngrabacion" style="color: black;">Numero de Grabacion</label>
                                                    <input type="number" id="ngrabacion" name="ngrabacion" class="form-control"
                                                        min="1" onkeypress="return num(event)" required style="border-radius: 10px" />
                                                </div>
                                                <div className="items-form">
                                                    <label for="orden" style="color: black;">Orden</label>
                                                    <input type="number" id="orden" name="orden" class="form-control" required style="border-radius: 10px" onkeypress="return num(event)" />
                                                </div>
                                                <div class="col-sm-6 col-form-label">
                                                    <label for="confronta" style="color: black;">Confronta</label>
                                                    <input type="file" id="confronta" name="confronta" class="form-control" required style="border-radius: 10px" />
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label></label>
                                                    <textarea id="observaciones" name="observaciones" class="form-control" rows="3"
                                                        placeholder="Observaciones" required style="border-radius: 10px"></textarea>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <label></label>
                                                <button type="submit" class="btn btn-info btn-sm" style="border-radius: 10px">Enviar</button>

                                                {/*   @can('Supervisor-lineanueva') */}
                                                <a href="{{ url('/lineanuevaperdida') }}" class="btn btn-info btn-sm"
                                                    aria-pressed="true" title="Backoffice"
                                                    style="width: 100px;border-radius: 10px">Perdida</a>
                                                {/* @endcan */}

                                                {/* @can('back-lineanueva') */}
                                                <a href="{{ url('/lineanueva') }}" class="btn btn-info btn-sm"
                                                    aria-pressed="true" title="Backoffice"
                                                    style="width: 100px;border-radius: 10px">Backoffice</a>
                                                {/*  @endcan */}
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
