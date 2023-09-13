import React, { useState } from "react";
import axios from "axios";
export default function PhoenixCreate({ onClose }) {
  const [formData, setFormData] = useState({
    numero: "",
    documento: "",
    nombres: "",
    apellidos: "",
    correo: "",
    departamento: "",
    id_ciudad: "",
    barrio: "",
    direccion: "",
    nip: "",
    tipocliente: "",
    ncontacto: "",
    planadquiere: "",
    tipoPagos: "",
    modelo: "",
    ngrabacion: "",
    orden: "",
    EqComprado:"",
    ComEquipo: "",
    ValEquipo:"",
    confronta: "",
    observaciones: "",
    selector: "",
    agente: "Phoenix",
    revisados: "",
    estadorevisado: "",
    obs2: "",
    backoffice: "",
    hora: "",
    dia: "",
    created_at: "",
    updated_at: "",
  });

  const [showModal, setShowModal] = useState(false);

  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/phoenix",
        formData
      );
      console.log(response.data);
      setShowModal(true);
    } catch (error) {
      console.error(error.response);
    }
  };
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  return (
    <div className="containerMovistar">
      <center>
        <img />
        <h3 aline="center">PHOENIX</h3>
      </center>
      <div className="card">
        <div className="card-body">
          <form onSubmit={formSubmit} className="form-horizontal">
            <br />
            <div className="container-movistar-phoenix">
              <div className="general-form">
                <div className="items-form">
                  <input
                    type="hidden"
                    id="agente"
                    name="agente"
                    defaultValue={formData.agente}
                  />
                </div>
                <div className="items-form">
                  <input
                    type="hidden"
                    id="revisados"
                    name="revisados"
                    defaultValue={formData.revisados}
                  />
                </div>
                <div className="items-form">
                  <input
                    type="hidden"
                    id="dia"
                    name="dia"
                    className="form-control-new"
                    placeholder="hora"
                    defaultValue={formData.dia}
                    required
                  />
                </div>
                <div className="items-form">
                  <input
                    type="hidden"
                    id="hora"
                    name="hora"
                    className="form-control-new"
                    placeholder="hora"
                    defaultValue={formData.hora}
                    required
                  />
                </div>
                <div className="items-form">
                  <label htmlFor="numero"></label>
                  <input
                    type="number"
                    id="numero"
                    name="numero"
                    className="form-control-new"
                    placeholder="Numero Celular"
                    min="1"
                    onChange={handleInputChange}
                    value={formData.numero}
                    required
                  />
                </div>
                <div className="items-form">
                  <label htmlFor="documento"></label>
                  <input
                    type="number"
                    id="documento"
                    name="documento"
                    className="form-control-new"
                    placeholder="Documento de identidad"
                    min="1"
                    onChange={handleInputChange}
                    value={formData.documento}
                    required
                  />
                </div>
                <div className="items-form">
                  <label htmlFor="nombres"></label>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    className="form-control-new"
                    placeholder="Nombres"
                    onChange={handleInputChange}
                    value={formData.nombres}
                    required
                  />
                </div>
                <div className="items-form">
                  <label htmlFor="apellidos"></label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    className="form-control-new"
                    placeholder="Apellidos"
                    onChange={handleInputChange}
                    value={formData.apellidos}
                    required
                  />
                </div>
                <div className="items-form">
                  <label htmlFor="correo"></label>
                  <input
                    type="mail"
                    id="correo"
                    name="correo"
                    className="form-control-new"
                    placeholder="Ingrese correo electronico ejemplo@gmail.com"
                    onChange={handleInputChange}
                    value={formData.correo}
                    required
                  />
                </div>
                <div className="items-form">
                  <p>Seleccione una Opción</p>
                </div>
                <div className="items-form">
                  <label
                    className="form-check-label j2-chek"
                    htmlFor="selector1"
                  >
                    Leads
                  </label>
                  <input
                    className="j-chek"
                    type="radio"
                    name="Leads"
                    id="selector1"
                    onChange={handleInputChange}
                    value={formData.selector}
                    required
                  />
                </div>
                <div className="items-form">
                  <label
                    className="form-check-label j2-chek"
                    htmlFor="selector2"
                  >
                    BBDD
                  </label>
                  <input
                    className="j-chek"
                    type="radio"
                    name="BBDD"
                    id="selector2"
                    onChange={handleInputChange}
                    value={formData.selector}
                  />
                </div>
                <div className="items-form">
                  <label
                    className="form-check-label j2-chek"
                    htmlFor="selector3"
                  >
                    #654
                  </label>
                  <input
                    className="j-chek"
                    type="radio"
                    name="#654"
                    id="selector3"
                    onChange={handleInputChange}
                    value={formData.selector}
                    required
                  />
                </div>
                <div className="items-form">
                  <label
                    className="form-check-label j2-chek"
                    htmlFor="selector4"
                  >
                    Whatsapp
                  </label>
                  <input
                    className="j-chek"
                    type="radio"
                    name="Whatsapp"
                    id="selector4"
                    onChange={handleInputChange}
                    value={formData.selector}
                    required
                  />
                </div>

                <div className="items-form">
                  <label htmlFor="Tipificacion_detalle_1"></label>
                  <select
                    name="departamento"
                    id="Tipificacion_detalle_1"
                    className="form-control"
                    onChange={handleInputChange}
                    value={formData.departamento}
                  >
                    <option value={"dep 1"}>dep 1</option>
                    <option value={"dep 2"}>dep 2</option>
                  </select>
                </div>
                {/* <div className="items-form">
                  <label htmlFor=""></label>
                  <input hidden />
                </div> */}
                <div className="items-form">
                  <label htmlFor="Tipificacion_detalle_2"></label>
                  <select
                    name="id_ciudad"
                    id="Tipificacion_detalle_2"
                    className="form-control"
                  >
                    <option value={"ciudad 1"}>ciudad 1</option>
                    <option value={"ciudad 2"}>ciudad 2</option>
                  </select>
                </div>
                {/* <div className="items-form">
                  <label htmlFor=""></label>
                  <input hidden />
                </div> */}
                <div className="items-form">
                  <label htmlFor="barrio"></label>
                  <input
                    type="text"
                    id="barrio"
                    name="barrio"
                    className="form-control-new"
                    placeholder="Barrio"
                    onChange={handleInputChange}
                    value={formData.barrio}
                    required
                  />
                </div>
                <div className="items-form">
                  <label htmlFor="direccion"></label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    className="form-control-new"
                    placeholder="Direccion"
                    onChange={handleInputChange}
                    value={formData.direccion}
                    required
                  />
                </div>
                <div className="items-form">
                  <label htmlFor="nip"></label>
                  <input
                    type="number"
                    id="nip"
                    name="nip"
                    className="form-control-new"
                    placeholder="NIP"
                    min="1"
                    onChange={handleInputChange}
                    value={formData.nip}
                    required
                  />
                </div>
                <div className="items-form">
                  <label htmlFor="tipocliente"></label>
                  <select
                    name="tipocliente"
                    id="tipocliente"
                    className="form-control-new"
                    onChange={handleInputChange}
                    value={formData.tipocliente}
                    required
                  >
                    <option>Tipo de cliente</option>

                    <option value={"cliente 1"}>cliente 1</option>
                    <option value={"cliente 2"}>cliente 2</option>
                  </select>
                </div>
                <div className="items-form">
                  <label htmlFor="ncontacto"></label>
                  <input
                    type="number"
                    id="ncontacto"
                    name="ncontacto"
                    className="form-control-new"
                    placeholder="Numero de contacto"
                    min="1"
                    onChange={handleInputChange}
                    value={formData.ncontacto}
                    required
                  />
                </div>
                <div className="items-form">
                  <label htmlFor="modelo"></label>
                  <select
                    name="modelo"
                    id="modelo"
                    className="form-control-new"
                    onChange={handleInputChange}
                    value={formData.modelo}
                    required
                  >
                    <option value={"Modelos 1"}>Modelos 1</option>
                    <option value={"modelos 2"}>modelos 2</option>
                  </select>
                </div>
                <div className="items-form">
                  <label htmlFor="planadquiere"></label>
                  <select
                    name="planadquiere"
                    id="planadquiere"
                    className="form-control-new"
                    onChange={handleInputChange}
                    value={formData.modelo}
                    required
                  >
                    <option value={"tipo plan"}>Tipo Plan</option>
                    <option value={"tipoP"}>tipoP</option>
                  </select>
                </div>
                <div className="items-form">
                  <label htmlFor="ngrabacion"></label>
                  <input
                    type="number"
                    id="ngrabacion"
                    name="ngrabacion"
                    className="form-control-new"
                    placeholder="Numero de grabacion"
                    min="1"
                    onChange={handleInputChange}
                    value={formData.ngrabacion}
                    required
                  />
                </div>
                <div className="items-form">
                  <label htmlFor="tipoPagos"></label>
                  <select
                    name="tipoPagos"
                    id="tipoPagos"
                    className="form-control-new"
                    onChange={handleInputChange}
                    value={formData.tipoPagos}
                    required
                  >
                    <option value={" Tipo Pago 1"}>Tipo Pago 1</option>
                    <option value={" tipo pago 2"}>tipo pago 2 </option>
                  </select>
                </div>
                <div className="items-form">
                  <label htmlFor="orden"></label>
                  <input
                    type="number"
                    id="orden"
                    name="orden"
                    className="form-control-new"
                    placeholder="Numero de Orden"
                    onChange={handleInputChange}
                    value={formData.orden}
                    required
                  />
                </div>
                <br />
                <div className="items-form">
                  <label htmlFor="EqComprado"></label>
                  <select
                    name="EqComprado"
                    id="EqComprado"
                    className="form-control-new"
                    onChange={handleInputChange}
                    value={formData.EqComprado}
                    required
                  >
                    <option value={"Equipo comprado"}>Equipo comprado</option>
                    <option value={"IPhone"}>IPhone</option>
                    <option value={"Samsung"}>Samsung</option>
                    <option value={"Xiaomi"}>Xiaomi</option>
                    <option value={"Honor"}>Honor</option>
                    <option value={"Oppo"}>Oppo</option>
                    <option value={"Vivo"}>Vivo</option>
                    <option value={"Realme"}>Realme</option>
                    <option value={"Motorola"}>Motorola</option>
                    <option value={"Huawei"}>Huawei</option>
                    <option value={"Nokia"}>Nokia</option>
                    <option value={"ZTE"}>ZTE</option>
                    <option value={"LG"}>LG</option>
                    <option value={"Alcatel"}>Alcatel</option>
                  </select>
                </div>

                <div className="items-form">
                  <label htmlFor="ComEquipo"></label>
                  <input
                    type="text"
                    id="ComEquipo"
                    name="ComEquipo"
                    className="form-control-new"
                    placeholder="Complemento Equipo"
                    onChange={handleInputChange}
                    value={formData.ComEquipo}
                    required
                  />
                </div>

                <div className="items-form">
                  <label htmlFor="ValEquipo"></label>
                  <input
                    type="number"
                    id="ValEquipo"
                    name="ValEquipo"
                    className="form-control-new"
                    placeholder="Valor Equipo"
                    onChange={handleInputChange}
                    value={formData.ValEquipo}
                    required
                  />
                </div>
                <div className="col-sm-4 col-form-label">
                  <label htmlFor="confronta">Confronta</label>
                  <input
                    type="file"
                    id="confronta"
                    name="confronta"
                    className="form-control-new"
                    onChange={handleInputChange}
                    value={formData.confronta}
                  />
                </div>
                <div className="form-group col-md-8">
                  <br />
                  <label htmlFor="observaciones"></label>
                  <textarea
                    id="observaciones"
                    name="observaciones"
                    className="form-control-new"
                    rows="3"
                    placeholder="Observaciones"
                    onChange={handleInputChange}
                    value={formData.observaciones}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-info btn-sm">
                  Enviar
                </button>
                <button
                  type="button"
                  className="btn btn-info btn-sm"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  VALIDAR
                </button>
                <br />
                <a
                  className="btn btn-info btn-sm"
                  aria-pressed="true"
                  title="Backoffice"
                >
                  Perdida
                </a>
                <a
                  className="btn btn-info btn-sm"
                  aria-pressed="true"
                  title="Backoffice"
                >
                  Backoffice
                </a>
              </div>
              {/* <!-- espacio pop-up patinadores --> */}

              {/*  {/* <!-- Modal --> 
                                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="card card-login card-hidden mb-3">
                                                        <div className="card-header card-header-info text-center">
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <h4 className="card-title"><strong>Login</strong></h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-description text-center">Bienvenidos al Gestor de ventas movistar <br/>Ingresa tus datos </p>

                                                            <div className="bmd-form-group{{ $errors->has('email') ? ' has-danger' : '' }}">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">
                                                                            <i className="material-icons">account_circle</i>
                                                                        </span>
                                                                    </div>
                                                                    <input type="username" name="username" className="form-control" placeholder="Usuario" autofocus />
                                                                </div>
                                                            </div>

                                                            <div className="bmd-form-group{{ $errors->has('password') ? ' has-danger' : '' }} mt-3">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">
                                                                            <i className="material-icons">lock_outline</i>
                                                                        </span>
                                                                    </div>
                                                                    <input type="password" name="password" id="password" className="form-control" placeholder="Contraseña" required autocomplete="current-password" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-footer justify-content-center">
                                                            <button type="submit" className="btn btn-info btn-link btn-info">ENTRAR</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
            </div>
          </form>
          {/* Modal */}
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>
                  <strong>¡Éxito!</strong>
                </h2>
                <p>Los datos se han cargado correctamente.</p>
                <button
                  onClick={() => {
                    setShowModal(false);
                    onClose(); // Llamar a la función onClose para cerrar el componente
                  }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
