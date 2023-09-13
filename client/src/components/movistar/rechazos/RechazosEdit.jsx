import React from "react";

export default function RechazosEdit() {
  return (          
               <div class="containerMovistar">
                    <center>
                        <img/>
                        <h3 aline="center">Ver Registros Rechazados</h3>
                    </center>
                        <form name="f1" class="form-horizontal">
                            <div className="container-movistar-upgradeDigital">
                                <div className="general-form">
                                  <div className="items-form">
                                        <label for="numero_de_celular" >Numero de Celular</label>
                                        <input type="number" class="form-control-new" id="numero_de_celular" placeholder="Numero de Celular" name="numero_de_celular" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="nombres" >Nombre</label>
                                        <input type="text" class="form-control-new" id="nombres" placeholder="nombres" name="nombres" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="documento" >Documento</label>
                                        <input type="number" class="form-control-new" id="documento" placeholder="documento" name="documento" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="causal" >Causal</label>
                                        <input type="text" class="form-control-new" id="causal" placeholder="Causal" name="causal" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="linea">Linea</label>
                                        <input type="text" class="form-control" id="linea" placeholder="linea" name="linea" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="departamento">Departamento</label>
                                        <input type="text" class="form-control-new" id="departamento" placeholder="Departamento" name="departamento" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="id_ciudad">Ciudad</label>
                                        <input type="text" class="form-control-new" id="id_ciudad" placeholder="Ciudad" name="id_ciudad" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="claro">Claro</label>
                                        <input type="text" class="form-control-new" id="claro" name="claro" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="tigo">Tigo</label>
                                        <input type="text" class="form-control-new" id="tigo" name="tigo" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="directv">Direct tv</label>
                                        <input type="text" class="form-control-new" id="directv" name="directv" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="wow">Wow</label>
                                        <input type="text" class="form-control-new" id="wow" name="wow" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="barrio">S. de Barrio</label>
                                        <input type="text" class="form-control-new" id="barrio" name="barrio" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="otro">Otro</label>
                                        <input type="text" class="form-control-new" id="otro" name="otro" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="modalidad">Modalidad</label>
                                        <input type="text" class="form-control-new" id="modalidad" placeholder="Modalidad" name="modalidad" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="frechazo">fecha rechazo</label>
                                        <input type="date" class="form-control-new" id="frechazo" placeholder="fecha rechazo" name="frechazo" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="observacion">Observacion</label>
                                        <input type="text" class="form-control-new" id="observacion" placeholder="observacion" name="observacion" value=""/>
                                    </div>
                                    <div className="items-form">
                                        <label for="imgrechazo">Imagen del Rechazo</label>
                                        <span>
                                            <a><img/></a>
                                        </span>
                                    </div>
                                <input class="btn btn-info btn-sm" type="submit" value="EDITAR"/>  
                                <a  class="btn btn-danger btn-sm" role="button" aria-pressed="true" >VOLVER</a>
                             </div>
                            </div>
                         </form>
                    </div>
  );
}