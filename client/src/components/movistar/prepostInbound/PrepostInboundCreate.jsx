import React, { useState } from "react";
import axios from "axios";

export default function PrepostInboundCreate() {
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
    segmento: "prepostInbound",
    activacion: "",
    numero_grabacion: "",
    confronta: "",
    token: "",
    selector: "",
    orden: "",
    observaciones: "",
    agente: "prepostInbound",
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
        "http://localhost:8000/api/prepostinbound",
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
        <h3>PRE POST INBOUND</h3>
      </center>
      <form onSubmit={formSubmit} class="form-horizontal">
        <div className="container-movistar-prepostinbound">
          <div className="general-form">
            <div className="items-form">
              <input
                type="hidden"
                id="revisados"
                name="revisados"
                class="form-control"
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
                class="form-control"
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
                class="form-control"
                placeholder="hora"
                defaultValue={formData.hora}
                 required
              />
            </div>
            <div className="items-form">
              <label htmlFor="number"></label>
              <input
                type="number"
                id="numero"
                name="numero"
                class="form-control"
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
                class="form-control"
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
                class="form-control"
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
                class="form-control"
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
                class="form-control"
                onChange={handleInputChange}
                value={formData.tipocliente}
                required
              >
                <option>cliente</option>
                <option>cliente</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="correo"></label>
              <input
                type="mail"
                id="correo"
                name="correo"
                class="form-control"
                placeholder="Ingrese correo electronico ejemplo@gmail.com"
                onChange={handleInputChange}
                value={formData.correo}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="selector"></label>
              <input
                class="form-check-input"
                type="text"
                name="selector"
                id="selector1"
                onChange={handleInputChange}
                value={formData.selector}
                hidden
              />
            </div>
            <div className="items-form">
              <label htmlFor="departamento"></label>
              <select
                name="departamento"
                id="Tipificacion_detalle_1"
                class="form-control"
                onChange={handleInputChange}
                value={formData.departamento}
              />
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
                class="form-control"
              />
              <option value="">Ciudad</option>
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
                class="form-control"
                placeholder="Barrio"
                onChange={handleInputChange}
                value={formData.barrio}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor=""></label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                class="form-control"
                placeholder="Direccion"
                onChange={handleInputChange}
                value={formData.direccion}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="corte"></label>
              <select name="corte" id="corte" class="form-control" 
              onChange={handleInputChange}
              value={formData.corte}
              required>
                <option>corte</option>
                <option>corte</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="planventa"></label>
              <select
                name="planventa"
                id="planventa"
                class="form-control"
                required
              >
                <option>venta</option>
                <option>venta</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="activacion">Activación</label>
              <select
                name="activacion"
                id="activacion"
                class="form-control"
                onChange={handleInputChange}
                value={formData.activacion}
                required
              >
                <option>activacion</option>
                <option>activacion</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="token">Token</label>
              <input
                type="number"
                id="token"
                name="token"
                class="form-control"
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
                class="form-control"
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
                class="form-control"
                placeholder="Numero de Grabacion"
                onChange={handleInputChange}
                value={formData.numero}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="confronta">Confronta</label>
              <input
                type="file"
                id="confronta"
                name="confronta"
                class="form-control"
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
                class="form-control"
                rows="3"
                placeholder="Observaciones"
                onChange={handleInputChange}
                value={formData.observaciones}
                required
              ></textarea>
            </div>
            <div className="items-form">
              <button type="submit" class="btn btn-info btn-sm">
                Enviar
              </button>
            </div>
            <div className="items-form">
              <label htmlFor="segmento"></label>
              <input
                type="text"
                id="segmento"
                name="segmento"
                class="form-control"
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
  );
}
