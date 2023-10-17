import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FijaDigitalEdit({ idRecord, onClose }) {
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
    FOX: false,
    HBO: false,
    cds_movil: false,
    cds_fija: false,
    Paquete_Adultos: false,
    Decodificador: false,
    Svas_lineas: false,
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
    patinador: "0",
  });

  useEffect(() => {
    if (idRecord) {
      setFormData({
        nombres: idRecord.nombres,
        documento: idRecord.documento,
        fexpedicion: idRecord.fexpedicion,
        correo: idRecord.correo,
        departamento: idRecord.departamento,
        id_ciudad: idRecord.id_ciudad,
        barrio: idRecord.barrio,
        direccion: idRecord.direccion,
        estrato: idRecord.estrato,
        ngrabacion: idRecord.ngrabacion,
        ncontacto: idRecord.ncontacto,
        producto: idRecord.producto,
        segmento: idRecord.segmento,
        FOX: idRecord.FOX,
        HBO: idRecord.HBO,
        cds_movil: idRecord.cds_movil,
        cds_fija: idRecord.cds_fija,
        Paquete_Adultos: idRecord.Paquete_Adultos,
        Decodificador: idRecord.Decodificador,
        Svas_lineas: idRecord.Svas_lineas,
        velocidad: idRecord.velocidad,
        tecnologia: idRecord.tecnologia,
        orden: idRecord.orden,
        selector: idRecord.selector,
        confronta: idRecord.confronta,
        observacion: idRecord.observacion,
        agente: idRecord.agente,
        revisados: idRecord.revisados,
        estadorevisado: idRecord.estadorevisado,
        obs2: idRecord.obs2,
        backoffice: idRecord.backoffice,
        hora: idRecord.hora,
        dia: idRecord.dia,
        created_at: idRecord.created_at,
        updated_at: idRecord.updated_at,
        patinador: idRecord.patinador,
      });
    }
  }, [idRecord]);

  const [showModal, setShowModal] = useState(false);

  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8000/api/fijadigital/${idRecord.id}`,
        formData
      );
      console.log(response.data);
      setShowModal(true);
    } catch (error) {
      console.error(data.error);
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
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-info float-lg-right m-2"
              onClick={onClose}
            >
              atrás
            </button>
            <center>
              <img />
              <h3>Editar Gestion Fija</h3>
            </center>

            <div className="card">
              <div className="card-body">
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
                        <label
                          className="form-check-label j2-chek"
                          htmlFor="selector1"
                        >
                          Leads
                        </label>
                        <input
                          className="j-chek"
                          type="radio"
                          name="selector"
                          id="selector1"
                          value="Leads" // Valor que debe coincidir con el valor en idRecord
                          checked={formData.selector === "Leads"}
                          onChange={handleInputChange}
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
                          name="selector"
                          id="selector2"
                          value="BBDD" // Valor que debe coincidir con el valor en idRecord
                          checked={formData.selector === "BBDD"}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="Tipificacion_detalle_1">
                          departamento
                        </label>
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
                          <option value={"1"}>1</option>
                          <option value={"2"}>2</option>
                          <option value={"3"}>3</option>
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
                          <option value={"movistar"}>movistar</option>
                          <option value={"claro"}>claro</option>
                        </select>
                      </div>
                      <div className="items-form">
                        <label>Adicionales</label>
                      </div>
                      <div className="items-form">
                        <input
                          className="j-chek"
                          type="checkbox"
                          name="FOX"
                          id="FOX"
                          checked={formData.FOX}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label j2-chek"
                          htmlFor="FOX"
                        >
                          FOX
                        </label>
                      </div>
                      <div className="items-form">
                        <input
                          className="j-chek"
                          type="checkbox"
                          name="HBO"
                          id="HBO"
                          checked={formData.HBO}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label j2-chek"
                          htmlFor="HBO"
                        >
                          HBO
                        </label>
                      </div>
                      <div className="items-form">
                        <input
                          className="j-chek"
                          type="checkbox"
                          name="cds_movil"
                          id="cds_movil"
                          checked={formData.cds_movil}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label j2-chek"
                          htmlFor="cds_movil"
                        >
                          Cds Movil
                        </label>
                      </div>
                      <div className="items-form">
                        <input
                          className="j-chek"
                          type="checkbox"
                          name="cds_fija"
                          id="cds_fija"
                          checked={formData.cds_fija}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label j2-chek"
                          htmlFor="cds_fija"
                        >
                          Cds Fija
                        </label>
                      </div>
                      <div className="items-form">
                        <input
                          className="j-chek"
                          type="checkbox"
                          name="Paquete_Adultos"
                          id="Paquete_Adultos"
                          checked={formData.Paquete_Adultos}
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
                          checked={formData.Decodificador}
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
                        <label
                          className="form-check-label j2-chek"
                          htmlFor="Svas_lineas"
                        >
                          Svas Linea
                        </label>
                        <input
                          className="j-chek"
                          type="checkbox"
                          name="Svas_lineas"
                          id="Svas_lineas"
                          checked={formData.Svas_lineas}
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
                          <option value={"rapido"}>rapido</option>
                          <option value={"lento"}>lento</option>
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
                          <option value={"movil"}>movil</option>
                          <option value={"portatil"}>portatil</option>
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
                        <label htmlFor="observacion"></label>
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
                        <button type="submit" className="btn btn-info btn-md m-2">
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
                      <p>Los datos se han Editado correctamente.</p>
                      <button
                        onClick={() => {
                          setShowModal(false);
                          onClose();
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
        </div>
      </div>
    </div>
  );
}
