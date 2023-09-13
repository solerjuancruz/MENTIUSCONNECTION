import React, { useState } from "react";
import axios from "axios";

export default function PortaDigitalCrete({ onClose }) {
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
    planadquiere: "",
    segmento: "",
    ncontacto: "",
    imei: "",
    fvc: "",
    fentrega: "",
    fexpedicion: "",
    fnacimiento: "",
    origen: "",
    ngrabacion: "",
    selector: "",
    orden: "",
    confronta: "",
    observaciones: "",
    agente: "PORTADIGITAL",
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
        "http://localhost:8000/api/portadigital",
        formData
      );
      console.log(response.data);
      setShowModal(true);
    } catch (error) {
      console.error(error);
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
        <h3 aline="center">PORTABILIDAD DIGITAL</h3>
        <br />
      </center>

      <form onSubmit={formSubmit} className="form-horizontal">
        <div className="container-movistar-portaiDigital">
          <div className="general-form">
             <div className="items-form">
              <label htmlFor="agente"></label>
              <input
                type="hidden"
                id="agente"
                name="agente"
                defaultValue={formData.agente}
              />
            </div>
            <div className="items-form">
              <label htmlFor="dia"></label>
              <input
                type="hidden"
                id="dia"
                name="dia"
                className="form-control"
                placeholder="hora"
               defaultValue={formData.dia}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="hora"></label>
              <input
                type="hidden"
                id="hora"
                name="hora"
                className="form-control"
                placeholder="hora"
                defaultValue={formData.hora}
                required
              />
            </div> 
            <div className="items-form">
              <label htmlFor="revisados"></label>
              <input
                type="hidden"
                id="revisados"
                name="revisados"
                className="form-control"
                defaultValue={formData.revisados}
                required
              />
            </div>

            <div className="items-form">
              <label htmlFor="numero"></label>
              <input
                type="number"
                id="numero"
                name="numero"
                className="form-control"
                placeholder="Numero Celular"
                min="1"
                onChange={handleInputChange}
                value={formData.numero}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="documento"></label>|
              <input
                type="number"
                id="documento"
                name="documento"
                className="form-control"
                placeholder="Documento de identidad"
                onChange={handleInputChange}
                value={formData.documento}
                min="1"
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="nombres"></label>
              <input
                type="text"
                id="nombres"
                name="nombres"
                className="form-control"
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
                className="form-control"
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
                className="form-control"
                placeholder="Ingrese correo electronico ejemplo@gmail.com"
                onChange={handleInputChange}
                value={formData.correo}
                required
              />
            </div>
            <div className="items-form">
              <p>Seleccione una Opción</p>
              <br />
              <label className="form-check-label j2-chek" htmlFor="Leads">
                Leads
              </label>
              <input
                className="j-chek"
                type="radio"
                name="Leads"
                id="BBDD"
                value={formData.selector}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="items-form">
              <label className="form-check-label j2-chek" htmlFor="BBDD">
                BBDD
              </label>
              <input
                className="j-chek"
                type="radio"
                name="BBDD"
                id="BBDD"
                onChange={handleInputChange}
                value={formData.selector}
              />
            </div>

            {/*   {{-- Ciudad departamento --}} */}
            <div className="items-form">
              <label htmlFor="departamento">Departamento</label>
              <select
                name="departamento"
                id="Tipificacion_detalle_1"
                className="form-control"
                onChange={handleInputChange}
                value={formData.departamento}
              >
                <option>departamento 1</option>
                <option>departamento 2</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="id_ciudad">Ciudad</label>
              <select
                name="id_ciudad"
                id="Tipificacion_detalle_2"
                className="form-control"
                onChange={handleInputChange}
                value={formData.id_ciudad}
              >
              <option>Ciudad 1</option>
              <option>Ciudad 2</option>
              </select>
            </div>
            {/*  {{-- fin ciudad departamento --}}   */}
            <div className="items-form">
              <label htmlFor="barrio"></label>
              <input
                type="text"
                id="barrio"
                name="barrio"
                className="form-control"
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
                className="form-control"
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
                className="form-control"
                placeholder="NIP"
                min="1"
                onChange={handleInputChange}
                value={formData.nip}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="tipocliente">Tipo de cliente</label>
              <select
                name="tipocliente"
                id="tipocliente"
                className="form-control"
                onChange={handleInputChange}
                value={formData.tipocliente}
                required
              >
                <option>Tipo de cliente</option>
                <option>cliente</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="planadquiere">plan Adquiere</label>
              <select
                name="planadquiere"
                id="planadquiere"
                className="form-control"
                onChange={handleInputChange}
                value={formData.planadquiere}
                required
              >
                <option>Plan que adquire</option>
                <option>item 1</option>
                <option>item 2</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="ncontacto"></label>
              <input
                type="number"
                id="ncontacto"
                name="ncontacto"
                className="form-control"
                placeholder="Numero de contacto"
                min="1"
                onChange={handleInputChange}
                value={formData.ncontacto}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="imei"></label>
              <input
                type="number"
                id="imei"
                name="imei"
                className="form-control"
                placeholder="Imei"
                min="1"
                onChange={handleInputChange}
                value={formData.imei}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="segmento"></label>
              <input
                type="text"
                id="segmento"
                name="segmento"
                className="form-control"
                placeholder="segmento"
                onChange={handleInputChange}
                value={formData.segmento}
                hidden
              />
            </div>
            <div className="items-form">
              <label htmlFor="fvc">FVC</label>
              <input
                type="date"
                id="fvc"
                name="fvc"
                className="form-control"
                placeholder="FVC"
                onChange={handleInputChange}
                value={formData.fvc}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="fentrega">Fecha Entrega</label>
              <input
                type="date"
                id="fentrega"
                name="fentrega"
                className="form-control"
                placeholder="Fecha de entrega"
                onChange={handleInputChange}
                value={formData.fentrega}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="fexpedicion">Fecha Expedición</label>
              <input
                type="date"
                id="fexpedicion"
                name="fexpedicion"
                className="form-control"
                placeholder="Fecha de expedición"
                onChange={handleInputChange}
                value={formData.fexpedicion}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="fnacimiento">Fecha Nacimiento</label>
              <input
                type="date"
                id="fnacimiento"
                name="fnacimiento"
                className="form-control"
                placeholder="Fecha de Nacimiento"
                onChange={handleInputChange}
                value={formData.fnacimiento}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="confronta">Confronta</label>
              <input
                type="file"
                id="confronta"
                name="confronta"
                className="form-control"
                placeholder="confronta"
                onChange={handleInputChange}
                value={formData.confronta}
              />
            </div>
            <div className="items-form">
              <label htmlFor="origen"></label>
              <select
                name="origen"
                id="origen"
                className="form-control"
                onChange={handleInputChange}
                value={formData.origen}
                required
              >
                <option>lorem ipsum</option>
                <option>lorem ipsum</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="ngrabacion"></label>
              <input
                type="number"
                id="ngrabacion"
                name="ngrabacion"
                className="form-control"
                placeholder="Numero de grabacion"
                min="1"
                onChange={handleInputChange}
                value={formData.ngrabacion}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="orden"></label>
              <input
                type="number"
                id="orden"
                name="orden"
                className="form-control"
                placeholder="Numero de Orden"
                onChange={handleInputChange}
                value={formData.orden}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="observaciones"></label>
              <textarea
                id="observaciones"
                name="observaciones"
                className="form-control"
                rows="3"
                placeholder="Observaciones"
                onChange={handleInputChange}
                value={formData.observaciones}
                required
              ></textarea>
            </div>
            <div className="items-form">
              <button type="submit" className="btn btn-info btn-sm">
                Enviar
              </button>
            </div>
            {/*  <!-- espacio pop-up patinadores --> */}

            {/* <!-- Modal --> */}
            {/*  <div
              className="modal-overlay"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-overlay " role="document">
                <div className="modal-content">
                  <div className="card card-login card-hidden mb-3">
                    <div className="card-header card-header-info text-center">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h4 className="card-title">
                        <strong>login</strong>
                      </h4>
                    </div>
                    <div className="card-body">
                      <p className="card-description text-center">
                      Bienvenidos al Gestor de ventas movistar
                        <br />
                        Ingresa tus datos.
                      </p>

                      <div className="bmd-form-group{{ $errors->has('email') ? ' has-danger' : '' }}">
                        <div className="general-form">
                          <div className="items-form">
                            <span className="input-group-text">
                              <i className="material-icons">account_circle</i>
                            </span>
                          </div>
                          <div className="items-form">
                            <label htmlFor=""></label>
                            <input
                              type="username"
                              name="username"
                              className="form-control"
                              placeholder="Usuario"
                              autofocus
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bmd-form-group{{ $errors->has('password') ? ' has-danger' : '' }} mt-3">
                        <div className="general-form">
                          <div className="items-form">
                            <span className="input-group-text">
                              <i className="material-icons">lock_outline</i>
                            </span>
                          </div>
                          <div className="items-form">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              className="form-control"
                              placeholder="Contraseña"
                              required
                              autocomplete="current-password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-info btn-link btn-info"
                      >
                        ENTRAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
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
  );
}
