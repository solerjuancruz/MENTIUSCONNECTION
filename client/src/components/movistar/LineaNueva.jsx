import React, { useState } from "react";
import axios from "axios";

export default function LineaNueva({ onClose }) {
  const [formData, setFormData] = useState({
    numero: "1",
    documento: "",
    nombres: "",
    apellidos: "",
    correo: "",
    departamento: "",
    id_ciudad: "",
    barrio: "",
    direccion: "",
    tipocliente: "",
    ncontacto: "",
    selector: "",
    ngrabacion: "",
    orden: "",
    confronta: "",
    observaciones: "",
    agente: "movistar",
    revisados: "",
    estadorevisado: "",
    obs2: "",
    backoffice: "",
    created_at: "",
    updated_at: "",
    hora: "",
    dia: "",
  });

  const [showModal, setShowModal] = useState(false);

  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/lineanueva",
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
        <h3 aline="center">LINEA NUEVA</h3>
      </center>
      <form onSubmit={formSubmit} className="form-horizontal">
        <br />
        <div className="container-movistar-lineanueva">
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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
                placeholder="Nuevo Numero"
                min="1"
                defaultValue={formData.hora}
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
            </div>
            <div className="items-form">
              <label htmlFor="selector1"></label>
              <input
                className="j-chek"
                type="radio"
                name="selector"
                id="selector1"
                onChange={handleInputChange}
                value={formData.selector}
                required
              />
              <label className="form-check-label j2-chek" htmlFor="selector1">
                Leads
              </label>
            </div>
            <div className="items-form">
              <label htmlFor="selector2"></label>
              <input
                className="j-chek"
                type="radio"
                name="selector"
                id="selector2"
                onChange={handleInputChange}
                value={formData.selector}
              />
              <label className="form-check-label j2-chek" htmlFor="selector2">
                BBDD
              </label>
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
                <option value={"dep 3"}>dep 3</option>
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
                onChange={handleInputChange}
                value={formData.id_ciudad}
              >
                <option value={"ciudad 1"}>Ciudad 1</option>
                <option value={"ciudad 2"}>Ciudad 2</option>
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
              <label htmlFor="tipocliente"></label>
              <select
                name="tipocliente"
                id="tipocliente"
                className="form-control"
                onChange={handleInputChange}
                value={formData.tipocliente}
                required
              >
                <option value={"cliente 1"}>cliente 1</option>
                <option value={"cliente 2"}>cliente 2</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="ncontacto">Numero de Contacto</label>
              <input
                type="number"
                id="ncontacto"
                name="ncontacto"
                className="form-control"
                min="1"
                onChange={handleInputChange}
                value={formData.ncontacto}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="ngrabacion">Numero de Grabacion</label>
              <input
                type="number"
                id="ngrabacion"
                name="ngrabacion"
                className="form-control"
                min="1"
                onChange={handleInputChange}
                value={formData.ngrabacion}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="orden">Orden</label>
              <input
                type="number"
                id="orden"
                name="orden"
                className="form-control"
                onChange={handleInputChange}
                value={formData.orden}
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
                onChange={handleInputChange}
                value={formData.confronta}
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
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-info btn-sm">
              Enviar
            </button>
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
