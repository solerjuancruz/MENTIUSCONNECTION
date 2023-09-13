import React, {useState} from "react";
import axios from "axios";

export default function Rechazos( {onClose}) {
  const [formData, setFormData] = useState({
    numero_de_celular: "",
    nombres: "",
    documento: "",
    causal: "",
    linea: "",
    departamento: "",
    id_ciudad: "",
    claro: "",
    tigo: "",
    directv: "",
    wow: "",
    barrio: "",
    otros: "",
    modalidad: "Rechazos",
    frechazo: "",
    imgrechazo: "",
    observacion: "",
    hora: "",
    dia: "",
    agente: "Rechazos",
    created_at: "",
    updated_at: "",
  });

  const [showModal, setShowModal] = useState(false);

  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/rechazo",
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
        <h3 aline="center">RECHAZOS</h3>
      </center>
      <form onSubmit={formSubmit} className="form-horizontal">
        <br />
        <div className="container-movistar-upgradeDigital">
          <div className="general-form">
            <div className="items-form">
              <label></label>
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
              <input
                type="number"
                id="numero_de_celular"
                name="numero_de_celular"
                className="form-control"
                placeholder="Numero de celular"
                min="1"
                onChange={handleInputChange}
                value={formData.numero_de_celular}
                required
              />
            </div>
            <div className="items-form">
              <input
                type="text"
                id="nombres"
                name="nombres"
                className="form-control"
                placeholder="Nombres y Apellidos del Cliente"
                onChange={handleInputChange}
                value={formData.nombres}
                required
              />
            </div>
            <div className="items-form">
              <input
                type="number"
                id="documento"
                name="documento"
                className="form-control"
                placeholder="Documento"
                min="1"
                onChange={handleInputChange}
                value={formData.documento}
                required
              />
            </div>
            <div className="items-form">
              <select name="causal" id="causal" className="form-control" onChange={handleInputChange}
                value={formData.causal} required>
                <option value={"Rechazo1"}>Causales de Rechazo 1</option>
                <option value={"Rechazo2"}>Causales de Rechazo 2</option>
              </select>
            </div>
            <div className="items-form">
              <select name="linea" id="linea" className="form-control" onChange={handleInputChange}
                value={formData.linea} required>
                <option value={"Linea1"}>Linea 1</option>
                <option value={"Linea2"}>Linea 2</option>
              </select>
            </div>
            <div className="items-form">
              <select
                name="departamento"
                id="Tipificacion_detalle_1"
                className="form-control" onChange={handleInputChange}
                value={formData.departamento} >
                <option value={"Dep1"}>Dep 1</option>
                <option value={"Dep2"}>Dep 2</option>
              </select>
            </div>
            {/* <div className="items-form">
              <input hidden />
            </div> */}
            <div className="items-form">
              <select
                name="id_ciudad"
                id="Tipificacion_detalle_2"
                className="form-control"
                onChange={handleInputChange}
                value={formData.id_ciudad}
              >
                <option value={"Ciudad1"}>Ciudad 1</option>
                <option value={"Ciudad2"}>Ciudad 2</option>
              </select>
            </div>
            {/* <div className="items-form">
              <input hidden />
            </div> */}
            <div className="items-form">
              <label htmlFor="competencia">Competencia</label>
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                onChange={handleInputChange}
                value={formData.claro}
                name="claro"
                id="claro"
              />
              <label className="form-check-label j2-chek" htmlFor="claro">
                Claro
              </label>
            </div>

            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                onChange={handleInputChange}
                value={formData.tigo}
                name="tigo"
                id="tigo"
              />
              <label className="form-check-label j2-chek" htmlFor="tigo">
                Tigo
              </label>
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                onChange={handleInputChange}
                value={formData.directv}
                name="directv"
                id="directv"
              />
              <label className="form-check-label j2-chek" htmlFor="directv">
                Directv
              </label>
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                onChange={handleInputChange}
                value={formData.wow}
                name="wow"
                id="wow"
              />
              <label className="form-check-label j2-chek" htmlFor="wow">
                Wow
              </label>
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                onChange={handleInputChange}
                value={formData.barrio}
                name="barrio"
                id="barrio"
              />
              <label className="form-check-label j2-chek" htmlFor="barrio">
                Servicio de barrio
              </label>
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                onChange={handleInputChange}
                value={formData.otros}
                name="otros"
                id="otros"
              />
              <label className="form-check-label j2-chek" htmlFor="otros">
                Otros
              </label>
            </div>
            <div className="items-form">
              <label htmlFor="competencia">Modalidad de Gesti&oacute;n</label>
            </div>

            <div className="items-form">
              <input
                className="j-chek"
                type="radio"
                onChange={handleInputChange}
                value={formData.modalidad}
                name="modalidad"
                id="modalidad1"
              />
              <label className="form-check-label j2-chek" htmlFor="modalidad1">
                C2C
              </label>
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="radio"
                onChange={handleInputChange}
                value={formData.modalidad}
                name="modalidad"
                id="modalidad2"
              />
              <label className="form-check-label j2-chek" htmlFor="modalidad2">
                OUTBOUND
              </label>
            </div>

            <div className="items-form">
              <label htmlFor="frechazo">Fecha de Rechazo</label>
              <input
                type="date"
                id="frechazo"
                name="frechazo"
                className="form-control"
                placeholder="Fecha del rechazo"
                onChange={handleInputChange}
                value={formData.frechazo}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="imgrechazo">Pantallazo Rechazo</label>
              <input
                type="file"
                id="imgrechazo"
                name="imgrechazo"
                className="form-control"
                placeholder="confronta"
                onChange={handleInputChange}
                value={formData.imgrechazo}
              />
            </div>
            <div className="items-form">
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

            <div className="card-footer">
              <button type="submit" className="btn btn-info btn-sm">
                Enviar
              </button>
              <a
                className="btn btn-info btn-sm"
                aria-pressed="true"
                title="Backoffice"
              >
                Backoffice
              </a>
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
