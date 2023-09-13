import React, { useState } from "react";
import axios from "axios";

export default function PortaInboundCreate({ onClose }) {
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
    agente: "PORTAINBOUND",
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
        "http://localhost:8000/api/portainbound",
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
        <img id="topInicio" className="cambioLogo" />
        <h3>PORTABILIDAD-INBOUND</h3>
      </center>
      <form onSubmit={formSubmit} className="form-horizontal">
        <div className="container-movistar-portainbound">
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
                defaultValue={formData.hora}
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
              <label htmlFor=""></label>
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
              <label htmlFor="documento"></label>
              <input
                type="number"
                id="documento"
                name="documento"
                className="form-control"
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
              <label htmlFor="correos"></label>
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
              <label htmlFor="departamento"></label>
              <select
                name="departamento"
                id="Tipificacion_detalle_1"
                className="form-control"
                onChange={handleInputChange}
                value={formData.departamento}
              >
                <option>item 1</option>
                <option>item 2</option>
              </select>
            </div>
          {/*   <div className="items-form">
              <label htmlFor=""></label>
              <input hidden />
            </div> */}
            <div className="items-form">
              <label htmlFor="id_ciudad"></label>
              <select
                name="id_ciudad"
                id="Tipificacion_detalle_2"
                className="form-control"
                onChange={handleInputChange}
                value={formData.id_ciudad}>
              <option >Ciudad 1</option>
              <option >Ciudad 2</option>
              </select>
            </div>
           {/*  <div className="items-form">
              <label htmlFor=""></label>
              <input hidden />
            </div> */}
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
              <label htmlFor="tipocliente"></label>
              <select
                name="tipocliente"
                id="tipocliente"
                className="form-control"
                onChange={handleInputChange}
                value={formData.tipocliente}
                required
              >
                <option>value 1</option>
                <option>value 2</option>
                <option>value 3</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="planadquiere"></label>
              <select
                name="planadquiere"
                id="planadquiere"
                className="form-control"
                onChange={handleInputChange}
                value={formData.planadquiere}
                required
              >
                <option>lorem ipsum 1</option>
                <option>lorem ipsum 2</option>
                <option>lorem ipsum 3</option>
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
                onChange={handleInputChange}
                value={formData.imei}
                min="1"
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
                defaultValue={formData.segmento}
                hidden
              />
            </div>
            {/* <div className="items-form">
              <label htmlFor=""></label>
              <input
                className="form-check-input"
                type="text"
                name="selector"
                id="selector1"
                value="null"
                hidden
              />
            </div> */}
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
              <select
                name="origen"
                id="origen"
                className="form-control"
                onChange={handleInputChange}
                value={formData.origen}
                required
              >
                <option>item 1</option>
                <option>item 2</option>
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
           {/*  <div className="items-form">
              <div className="btn btn-info btn-sm formulario-inicial">
                Enviar
              </div>
            </div> */}
            <div className="items-form">
              <button type="submit" className="btn btn-info btn-sm">
                Enviar
              </button>
            </div>
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
