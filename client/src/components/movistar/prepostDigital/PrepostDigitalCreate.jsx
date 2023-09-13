import React, { useState } from "react";
import axios from "axios";

export default function PrepostDigitalCreate({ onClose }) {
  const [formData, setFormData] = useState({
    numero: "",
    nombres: "",
    documento: "",
    fexpedicion: "",
    tipocliente:"",
    correo: "",
    departamento: "",
    id_ciudad: "",
    barrio: "",
    direccion: "",
    corte: "",
    planventa: "",
    segmento: "prepostDigital",
    activacion: "",
    numero_grabacion: "",
    confronta: "",
    token: "",
    selector: "",
    orden: "",
    observaciones: "",
    agente: "prepostDigital",
    revisados: "",
    estadorevisado: "",
    obs2: "",
    backoffice: "",
    hora: "",
    dia: "",
    updated_at: "",
    created_at: "",
  });

  const [showModal, setShowModal] = useState(false);

  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/prepostdigital",
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
        <h3 aline="center">PRE POST DIGITAL</h3>
      </center>
      <div className="card">
        <form onSubmit={formSubmit} className="form-horizontal">
          <div className="container-movistar-prepostdigital">
            <div className="general-form">
              <div className="items-form">
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
                  id="dia"
                  name="dia"
                  className="form-control"
                  placeholder="hora"
                  defaultValue={formData.dia}
                  required
                />
              </div>
              <div className="items-form">
                <label htmlFor=""></label>
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
                  placeholder="Numero Celular"
                  min="1"
                  onChange={handleInputChange}
                  value={formData.numero}
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
                <label htmlFor="fexpedicion">Fecha de expedicion</label>
                <input
                  type="date"
                  id="fexpedicion"
                  name="fexpedicion"
                  className="form-control"
                  placeholder="Fecha de venta"
                  onChange={handleInputChange}
                  value={formData.fexpedicion}
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
                  <option value="cliente 1">cliente 1</option>
                  <option value="cliente 2">cliente 2</option>
                </select>
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
                <label className="form-check-label j2-chek" htmlFor="selector1">
                  Leads
                </label>
                <input
                  className="j-chek"
                  type="radio"
                  name="selector"
                  id="selector1"
                  onChange={handleInputChange}
                  value={formData.selector}
                  required
                />
              </div>
              <div className="items-form">
                <label className="form-check-label j2-chek" htmlFor="selector2">
                  BBDD
                </label>
                <input
                  className="j-chek"
                  type="radio"
                  name="selector"
                  id="selector2"
                  onChange={handleInputChange}
                  value={formData.selector}
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
                  <option value="dep 1">dep 1</option>
                  <option value="dep 2">dep 2</option>
                </select>
              </div>

              {/* <div className="items-form">
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
                  value={formData.id_ciudad}
                  >
                  <option value="ciudad 1">ciudad 1</option>
                  <option value="ciudad 2">ciudad 2</option>
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
                <label htmlFor="corte"></label>
                <select
                  name="corte"
                  id="corte"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.corte}
                  required
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>
              </div>
              <div className="items-form">
                <label htmlFor="planventa"></label>
                <select
                  name="planventa"
                  id="planventa"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.planventa}
                  required
                >
                  <option value="venta 1">venta 1</option>
                  <option value="venta 2">venta 2</option>
                </select>
              </div>
              <div className="items-form">
                <label htmlFor="activacion">Activación</label>
                <select
                  name="activacion"
                  id="activacion"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.activacion}
                  required
                >
                  <option value="activacion 1">activacion 1</option>
                  <option value="activacion 2">activacion 2</option>
                </select>
              </div>
              <div className="items-form">
                <label htmlFor="token">Token</label>
                <input
                  type="number"
                  id="token"
                  name="token"
                  className="form-control"
                  placeholder="Token"
                  min="1"
                  onChange={handleInputChange}
                  value={formData.token}
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
                  placeholder="Numero de Orden"
                  onChange={handleInputChange}
                  value={formData.orden}
                  required
                />
              </div>
               <div className="items-form">
                <label htmlFor="numero_grabacion">Numero de Grabacion</label>
                <input
                  type="number"
                  id="numero_grabacion"
                  name="numero_grabacion"
                  className="form-control"
                  placeholder="Numero de Grabacion"
                  onChange={handleInputChange}
                  value={formData.numero_grabacion}
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
    </div>
  );
}
