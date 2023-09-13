export default function PhoenixPerdidaEdit() {
    return (
       
                    <div class="containerMovistar">
                        <center>
                            <img />
                            <h3 aline="center">Editar Gestion de Phoenix</h3>
                        </center>
                        <div class="card">
                            <div class="card-body">
                                <form name="f1" class="form-horizontal">
                                    <div className="container-movistar-phoenixperdida">
                                        <div className="general-form">
                                            <div className="items-form">
                                                <label></label>
                                                <input type="hidden" id="backoffice" name="backoffice"  />
                                            </div>
                                            <div className="items-form">
                                                <label for="number" >Numero</label>
                                                <input type="number" class="form-control-new" id="numero" placeholder="Numero"
                                                    name="numero"   />
                                            </div>
                                            <div className="items-form">
                                                <label for="documento" >Documento</label>
                                                <input type="number" class="form-control-new" id="documento" placeholder="Documento"
                                                    name="documento"   />
                                            </div>
                                            <div className="items-form">
                                                <label for="nombres" >Nombres</label>
                                                <input type="text" class="form-control-new" id="nombres" placeholder="Nombres"
                                                    name="nombres"   />
                                            </div>
                                            <div className="items-form">
                                                <label for="apellidos" >Apellidos</label>
                                                <input type="text" class="form-control-new" id="apellidos" placeholder="Apellidos"
                                                    name="apellidos"   />
                                            </div>
                                            <div className="items-form">
                                                <label for="correo" >Correo</label>
                                                <input type="text" class="form-control-new" id="correo" placeholder="Correo"
                                                    name="correo"   />
                                            </div>
                                            <div className="items-form">
                                                <label for="selector" >Selector</label>
                                                <input type="text" class="form-control-new" id="selector" placeholder="Selector"
                                                    name="selector"  />
                                            </div>
                                            <div className="items-form">
                                                <label for="departamento" >Departamento</label>
                                                <input type="text" class="form-control-new" id="departamento"
                                                    placeholder="Departamento" name="departamento"
                                                   />
                                            </div>
                                            <div className="items-form">
                                                <label for="ciudad" >Ciudad</label>
                                                <input type="text" class="form-control-new" id="id_ciudad" placeholder="ciudad"
                                                    name="id_ciudad"   />
                                            </div>
                                            <div className="items-form">
                                                <label for="barrio" >Barrio</label>
                                                <input type="text" class="form-control-new" id="barrio" placeholder="barrio"
                                                    name="barrio"  />
                                            </div>
                                            <div className="items-form">
                                                <label for="direccion" >Direccion</label>
                                                <input type="text" class="form-control-new" id="direccion" placeholder="direccion"
                                                    name="direccion"  />
                                            </div>
                                            <div className="items-form">
                                                <label for="nip" >Nip</label>
                                                <input type="number" class="form-control-new" id="nip" placeholder="Nip" name="nip"
                                                     />
                                            </div>
                                            <div className="items-form">
                                                <label for="tipocliente" >Tipo cliente</label>
                                                <input type="text" class="form-control-new" id="tipocliente"
                                                    placeholder="tipo cliente" name="tipocliente"
                                                      />
                                            </div>
                                            <div className="items-form">
                                                <label for="ncontacto" >Numero de contacto</label>
                                                <input type="number" class="form-control-new" id="ncontacto"
                                                    placeholder="numero de contacto" name="ncontacto"
                                                      />
                                            </div>
                                            <div className="items-form">
                                                <label for="imei" >Modelo</label>
                                                <input type="text" class="form-control-new" id="modelo" placeholder="modelo"
                                                    name="modelo"   />
                                            </div>
                                            <div className="items-form">
                                                <label for="planadquiere" >Tipo de Planes</label>
                                                <input type="text" class="form-control-new" id="planadquiere"
                                                    placeholder="Tipo de Planes" name="planadquiere"
                                                      />
                                            </div>
                                            <div className="items-form">
                                                <label for="tipoPagos" >Tipo de Pago</label>
                                                <input type="text" class="form-control-new" id="tipoPagos"
                                                    placeholder="Tipo de Pago" name="tipoPagos"
                                                      />
                                            </div>
                                            <div className="items-form">
                                                <label for="ngrabacion" >Numero de grabacion</label>
                                                <input type="number" class="form-control-new" id="ngrabacion"
                                                    placeholder="Numero de grabacion" name="ngrabacion"
                                                      />
                                            </div>
                                            <div className="items-form">
                                                <label for="orden" >Numero de Orden</label>
                                                <input type="number" class="form-control-new" id="orden"
                                                    placeholder="Numero de Orden" name="orden"
                                                     />
                                            </div>
                                            <div className="items-form">
                                                <label for="ngrabacion" >Observaciones</label>
                                                <input type="text" class="form-control-new" id="observaciones" name="observaciones"
                                                    placeholder="Observaciones"
                                                      />
                                            </div>
                                            <div className="items-form">
                                                <label for="">Estado</label>
                                                <select name="revisados" id="revisados" class="form-control" required >
                                                <option value="">PERDIDA</option>
                                                <option value="RECUPERADA">RECUPERADA</option>
                                                </select>
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <input hidden />
                                            </div>
                                            <div className="items-form">
                                                <span><label for="confronta" >Confronta</label><br />
                                                    <a ><img/></a>
                                                </span>
                                            </div>
                                            <div className="items-form">
                                                <label></label>
                                                <textarea class="form-control-new" id="obs2" name="obs2" rows="3"
                                                    placeholder="Observaciones BackOficce"></textarea>
                                            </div>
                                            <div className="items-form">
                                                <input class="btn btn-info btn-sm" type="submit" value="EDITAR"  />
                                                <a  class="btn btn-danger btn-sm"
                                                    role="button" aria-pressed="true" >VOLVER</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
    );
}
