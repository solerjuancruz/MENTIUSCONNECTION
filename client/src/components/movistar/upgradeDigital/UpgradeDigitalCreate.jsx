import React, { useState } from "react";
import axios from "axios";

export default function UpgradeDigitalCreate({ onClose }) {
  const [formData, setFormData] = useState({
    numero: "",
    nombres: "",
    documento: "",
    correo: "",
    fventa: "",
    corte: "",
    selector: "",
    planhistorico: "",
    planventa: "",
    segmento: "upgradeDigital",
    activacion: "",
    ngrabacion: "",
    confronta: "",
    orden: "",
    observacion: "",
    agente: "upgradeDigital",
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
        "http://localhost:8000/api/upgradedigital",
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
        <h3>UP GRADE DIGITAL</h3>
      </center>
      <form onSubmit={formSubmit} className="form-horizontal">
        <div className="container-movistar-upgradeDigital">
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
                placeholder="dia"
                defaultValue={formData.dia}
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
              />
            </div>
            <div className="items-form">
              <label htmlFor="revisados"></label>
              <input
                type="hidden"
                id="revisados"
                name="revisados"
                className="form-control"
                placeholder="NUEVO"
                defaultValue={formData.revisados}
              />
            </div>

            <div className="items-form">
              <label htmlFor="nombres"></label>
              <input
                type="text"
                id="nombres"
                name="nombres"
                className="form-control"
                placeholder="Nombres y Apellidos"
                onChange={handleInputChange}
                value={formData.nombres}
              />
            </div>
            <div className="items-form">
              <label htmlFor="documento"></label>
              <input
                type="number"
                id="documento"
                name="documento"
                className="form-control"
                placeholder="Documento"
                min="1"
                onChange={handleInputChange}
                value={formData.documento}
              />
            </div>
            <div className="items-form">
              <label htmlFor="correo"></label>
              <input
                type="mail"
                id="correo"
                name="correo"
                className="form-control"
                placeholder="Correo Electronico"
                onChange={handleInputChange}
                value={formData.correo}
              />
            </div>
            <div className="items-form">
              <label htmlFor="fventa">Fecha de venta</label>
              <input
                type="date"
                id="fventa"
                name="fventa"
                className="form-control"
                placeholder="Fecha de venta"
                onChange={handleInputChange}
                value={formData.fventa}
              />
            </div>
            <div className="items-form">
              <label htmlFor="numero"></label>
              <input
                type="number"
                id="numero"
                name="numero"
                className="form-control"
                placeholder="Numero de celular"
                min="1"
                onChange={handleInputChange}
                value={formData.numero}
              />
            </div>
            <div className="items-form">
              <label htmlFor="corte"></label>
              <select name="corte" id="corte" className="form-control" 
              onChange={handleInputChange}
              value={formData.corte}
              required>
                <option>corte 1</option>
                <option>corte 2</option>
              </select>
            </div>
            <div className="items-form">
              <p>Seleccione una Opción</p>
            </div>
            <div className="items-form">
              <label className="form-check-label j2-chek" htmlFor="selector1">
                Leads
              </label>
              <input
                className="j-chek"
                type="radio"
                name="selector"
                id="selector1"
                value={formData.selector}
                onChange={handleInputChange}
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
                value={formData.selector}
                onChange={handleInputChange}
              />
            </div>

            <div className="items-form">
              <label htmlFor="planhistorico"></label>
              <select
                name="planhistorico"
                id="planhistorico"
                className="form-control"
                onChange={handleInputChange}
                value={formData.planhistorico}
                required
              >
                <option> historico 1</option>
                <option> historico 2</option>
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
                <option>venta 1</option>
                <option>venta 2</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="activacion">Activacion</label>
              <select
                name="activacion"
                id="activacion"
                className="form-control"
                onChange={handleInputChange}
                value={formData.activacion}
                required
              >
                <option> activacion 1</option>
                <option> activacion 2</option>
              </select>
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
              <label htmlFor="observacion"></label>
              <textarea
                id="observacion"
                name="observacion"
                className="form-control"
                rows="3"
                placeholder="Observaciones"
                onChange={handleInputChange}
                value={formData.observacion}
              ></textarea>
            </div>
           
            <div className="items-form">
              <label htmlFor="segmento"></label>
              <input
                type="text"
                id="segmento"
                name="segmento"
                className="form-control"
                placeholder="segmento"
                defaultValue={FormData.segmento}
                hidden
              />
            </div>
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
