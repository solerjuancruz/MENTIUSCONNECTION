import React, { useState } from "react";
import axios from "axios";

export default function FijaDigitalCreate({ onClose }) {
  const [formData, setFormData] = useState({
    nombres: "",
    documento: "",
    fexpedicion: "",
    correo: "",
    departamento: "",
    id_ciudad: "",
    barrio: "",
    direccion: "",
    estrato: "",
    ngrabacion: "",
    ncontacto: "",
    producto: "",
    segmento: "FijaDigital",
    FOX: "",
    HBO: "",
    cds_movil: "",
    cds_fija: "",
    Paquete_Adultos: "",
    Decodificador: "",
    Svas_lineas: "",
    velocidad: "",
    tecnologia: "",
    orden: "",
    selector: "",
    confronta: "",
    observacion: "",
    agente: "FijaDigital",
    revisados: "",
    estadorevisado: "",
    obs2: "",
    backoffice: "",
    hora: "",
    dia: "",
    created_at: "",
    updated_at: "",
    patinador: "",
  });

  const [showModal, setShowModal] = useState(false);

  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/fijadigital",
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
        <h3 aline="center">FIJA DIGITAL</h3>
      </center>
      <button
        className="btn btn-info float-lg-right m-2"
        onClick={() => {
          onClose();
        }}
      >
        atrás
      </button>

      <form onSubmit={formSubmit} className="form-horizontal">
        <div className="container-movistar-fijadigital">
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
              <label htmlFor="correo"></label>
              <input
                type="mail"
                id="correo"
                name="correo"
                className="form-control"
                placeholder="Correo Electronico"
                onChange={handleInputChange}
                required
                value={formData.correo}
              />
            </div>
            <div className="items-form">
              <p>Seleccione una Opción</p>
              {/*  <input type="text" /> */}
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
                value={"Leads"}
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
                value={"BBDD"}
                onChange={handleInputChange}
              />
            </div>
            <div className="items-form">
              <label htmlFor="Tipificacion_detalle_1">departamento</label>
              <select
                name="departamento"
                id="Tipificacion_detalle_1"
                className="form-control"
                value={formData.departamento}
                onChange={handleInputChange}
              >
                <option value={"cundimarca"}>cundimarca</option>
                <option value={"antioquia"}>antioquia</option>
                <option value={"atlantico"}>atlantico</option>
              </select>
            </div>
            {/* <div className="items-form">
                              <label htmlFor=""></label>
                              <input />
                            </div> */}
            <div className="items-form">
              <label htmlFor="Tipificacion_detalle_2">Ciudad</label>
              <select
                name="id_ciudad"
                id="Tipificacion_detalle_2"
                className="form-control"
                value={formData.id_ciudad}
                onChange={handleInputChange}
              >
                <option value={"bogota"}>bogota</option>
                <option value={"medellin"}>medellin</option>
                <option value={"barranquilla"}>barranquilla</option>
              </select>
            </div>
            {/* <div className="items-form">
              <label htmlFor=""></label>
              <input />
            </div> */}
            <div className="items-form">
              <label htmlFor="barrio">Barrio</label>
              <input
                type="text"
                id="barrio"
                name="barrio"
                className="form-control"
                placeholder="Barrio"
                value={formData.barrio}
                onChange={handleInputChange}
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
                value={formData.direccion}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="estrato">estrato</label>
              <br />
              <select
                name="estrato"
                id="estrato"
                className="form-control"
                required
                value={formData.estrato}
                onChange={handleInputChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
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
                value={formData.ngrabacion}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="ncontacto"></label>
              <input
                type="number"
                id="ncontacto"
                name="ncontacto"
                className="form-control"
                placeholder="Numero de contacto"
                value={formData.ncontacto}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="producto">producto</label>
              <br />
              <select
                name="producto"
                id="producto"
                className="form-control"
                value={formData.producto}
                onChange={handleInputChange}
                required
              >
                <option>movistar</option>
                <option>claro</option>
              </select>
            </div>
            <div className="items-form">
              <label>Adicionales</label>
              {/* <br />
              <input type="" /> */}
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                name="FOX"
                id="FOX"
                value={formData.FOX}
                onChange={handleInputChange}
              />
              <label className="form-check-label j2-chek" htmlFor="FOX">
                FOX
              </label>
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                name="HBO"
                id="HBO"
                value={formData.HBO}
                onChange={handleInputChange}
              />
              <label className="form-check-label j2-chek" htmlFor="HBO">
                HBO
              </label>
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                name="cds_movil"
                id="cds_movil"
                value={formData.cds_movil}
                onChange={handleInputChange}
              />
              <label className="form-check-label j2-chek" htmlFor="cds_movil">
                Cds Movil
              </label>
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                name="cds_fija"
                id="cds_fija"
                value={formData.cds_fija}
                onChange={handleInputChange}
              />
              <label className="form-check-label j2-chek" htmlFor="cds_fija">
                Cds Fija
              </label>
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                name="Paquete_Adultos"
                id="Paquete_Adultos"
                value={formData.Paquete_Adultos}
                onChange={handleInputChange}
              />
              <label
                className="form-check-label j2-chek"
                htmlFor="Paquete_Adultos"
              >
                Paquete Adultos
              </label>
            </div>
            <div className="items-form">
              <input
                className="j-chek"
                type="checkbox"
                name="Decodificador"
                id="Decodificador"
                value={formData.Decodificador}
                onChange={handleInputChange}
              />
              <label
                className="form-check-label j2-chek"
                htmlFor="Decodificador"
              >
                Decodificador
              </label>
            </div>
            <div className="items-form">
              <label className="form-check-label j2-chek" htmlFor="Svas_lineas">
                Svas Linea
              </label>
              <input
                className="j-chek"
                type="checkbox"
                name="Svas_lineas"
                id="Svas_lineas"
                value={formData.Svas_lineas}
                onChange={handleInputChange}
              />
            </div>
            <div className="items-form">
              <label htmlFor="velocidad">Velocidad</label>
              <select
                name="velocidad"
                id="velocidad"
                className="form-control"
                required
                value={formData.velocidad}
                onChange={handleInputChange}
              >
                <option>rapido</option>
                <option>lento</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="tecnologia">Tecnologia</label>
              <select
                name="tecnologia"
                id="tecnologia"
                className="form-control"
                value={formData.tecnologia}
                onChange={handleInputChange}
                required
              >
                <option>movil</option>
                <option>portatil</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="orden">Numero de Orden</label>
              <input
                type="number"
                id="orden"
                name="orden"
                className="form-control"
                value={formData.orden}
                onChange={handleInputChange}
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
                value={formData.confronta}
                onChange={handleInputChange}
                /* required */
              />
            </div>
            <div className="items-form">
              <label htmlFor=""></label>
              <textarea
                id="observacion"
                name="observacion"
                className="form-control"
                rows="3"
                placeholder="Observaciones"
                value={formData.observacion}
                onChange={handleInputChange}
                required
              ></textarea>
              <div className="items-form">
                <input
                  type="hidden"
                  id="dia"
                  name="dia"
                  className="form-control"
                  placeholder="dia"
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
            </div>
            <div className="items-form">
              <button type="submit" className="btn btn-info btn-sm">
                Enviar
              </button>
            </div>
            <div className="items-form">
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
  );
}
