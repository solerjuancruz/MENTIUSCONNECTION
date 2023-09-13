import React, { useState, useEffect } from "react";
import axios from "axios";


export default function FijaDigitalEdit(props) {
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
    FOX: "0",
    HBO: "0",
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
    patinador: "0",
  });

  useEffect(() => {
    // Verifica si props.recordId está definido
    if (props.recordId) {
      axios
        .get(`http://localhost:8000/api/fijadigital/${props.recordId}`)
        .then((response) => {
          // Actualiza el estado con los datos del registro
          setFormData({
            nombres: response.data.nombres,
            documento: response.data.documento,
            fexpedicion: response.data.fexpedicion,
            correo: response.data.correo,
            departamento: response.data.departamento,
            id_ciudad: response.data.id_ciudad,
            barrio: response.data.barrio,
            direccion: response.data.direccion,
            estrato: response.data.estrato,
            ngrabacion: response.data.ngrabacion,
            ncontacto: response.data.ncontacto,
            producto: response.data.producto,
            segmento: response.data.segmento,
            FOX: response.data.FOX,
            HBO: response.data.HBO,
            cds_movil: response.data.cds_movil,
            cds_fija: response.data.cds_fija,
            Paquete_Adultos: response.data.Paquete_Adultos,
            Decodificador: response.data.Decodificador,
            Svas_lineas: response.data.Svas_lineas,
            velocidad: response.data.velocidad,
            tecnologia: response.data.tecnologia,
            orden: response.data.orden,
            selector: response.data.selector,
            confronta: response.data.confronta,
            observacion: response.data.observacion,
            agente: response.data.agente,
            revisados: response.data.revisados,
            estadorevisado: response.data.estadorevisado,
            obs2: response.data.obs2,
            backoffice: response.data.backoffice,
            hora: response.data.hora,
            dia: response.data.dia,
            created_at: response.data.created_ata,
            updated_at: response.data.updated_at,
            patinador: response.data.patinador,
          });
        })
        .catch((error) => {
          console.error("Error al obtener datos para editar:", error);
        });
    }
  }, [props.recordId]);

  const [showModal, setShowModal] = useState(false);

  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8000/api/fijadigital/${props.recordId}`,
        formData
      );
      console.log(response.data);
      setShowModal(true);
    } catch (error) {
      console.error(response.error);
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <center>
              <img />
              <h3>Editar Gestion Fija</h3>
            </center>
            <div className="card">
              <div className="card-body">
               {/*  <form onSubmit={formSubmit} className="form-horizontal">
                  <div className="container-movistar-fijadigital">
                    <div className="general-form">
                      <div className="items-form">
                        <input
                          type="hidden"
                          id="backoffice"
                          name="backoffice"
                          defaultValue={formData.backoffice}
                        />
                      </div>
                      <div className="items-form">
                        <input type="hidden" id="selector" name="selector" defaultValue={formData.selector}/>
                      </div>

                      <div className="items-form">
                        <label htmlFor="nombres">Nombres</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="nombres"
                          placeholder="Nombres"
                          name="nombres"
                          onChange={handleInputChange}
                          value={formData.nombres}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="documento">Documento</label>
                        <input
                          type="number"
                          className="form-control-new"
                          id="documento"
                          placeholder="Documento"
                          name="documento"
                          onChange={handleInputChange}
                          value={formData.documento}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="fexpedicion">Fecha de expedicion</label>
                        <input
                          type="date"
                          className="form-control-new"
                          id="fexpedicion"
                          placeholder="Fecha de expedicion"
                          name="fexpedicion"
                          onChange={handleInputChange}
                          value={formData.fexpedicion}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="correo">Correo Electronico</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="correo"
                          placeholder="Correo"
                          name="correo"
                          onChange={handleInputChange}
                          value={formData.correo}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="departamento">Departamento</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="departamento"
                          placeholder="Departamento"
                          name="departamento"
                          onChange={handleInputChange}
                          value={formData.departamento}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="id_ciudad"
                          placeholder="ciudad"
                          name="id_ciudad"
                          onChange={handleInputChange}
                          value={formData.id_ciudad}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="barrio">Barrio</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="barrio"
                          placeholder="barrio"
                          name="barrio"
                          onChange={handleInputChange}
                          value={formData.barrio}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="direccion">Direccion</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="direccion"
                          placeholder="direccion"
                          name="direccion"
                          onChange={handleInputChange}
                          value={formData.direccion}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="estrato">Estrato</label>
                        <input
                          type="number"
                          className="form-control-new"
                          id="estrato"
                          placeholder="Estrato"
                          name="estrato"
                          onChange={handleInputChange}
                          value={formData.estrato}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="ngrabacion">Numero de grabacion</label>
                        <input
                          type="number"
                          className="form-control-new"
                          id="ngrabacion"
                          placeholder="Numero de grabacion"
                          name="ngrabacion"
                          onChange={handleInputChange}
                          value={formData.ngrabacion}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="ncontacto">Numero de contacto</label>
                        <input
                          type="number"
                          className="form-control-new"
                          id="ncontacto"
                          placeholder="Numero de contacto"
                          name="ncontacto"
                          onChange={handleInputChange}
                          value={formData.ncontacto}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="producto">Producto</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="producto"
                          placeholder="Producto"
                          name="producto"
                          onChange={handleInputChange}
                          value={formData.producto}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="fox">Fox</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="fox"
                          placeholder="0"
                          name="fox"
                          onChange={handleInputChange}
                          value={formData.FOX}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="hbo">Hbo</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="hbo"
                          placeholder="0"
                          name="hbo"
                          onChange={handleInputChange}
                          value={formData.HBO}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="cds_movil">Cds movil</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="cds_movil"
                          placeholder="0"
                          name="cds_movil"
                          onChange={handleInputChange}
                          value={formData.cds_movil}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="cds_fija">Cds fija</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="cds_fija"
                          placeholder="0"
                          name="cds_fija"
                          onChange={handleInputChange}
                          value={formData.cds_fija}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="Paquete_Adultos">P adultos</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="Paquete_Adultos"
                          placeholder="0"
                          name="Paquete_Adultos"
                          onChange={handleInputChange}
                          value={formData.Paquete_Adultos}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="Decodificador">Deco</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="Decodificador"
                          placeholder="0"
                          name="Decodificador"
                          onChange={handleInputChange}
                          value={formData.Decodificador}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="svas_lineas">Svas l.</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="svas_lineas"
                          placeholder="0"
                          name="svas_lineas"
                          onChange={handleInputChange}
                          value={formData.Svas_lineas}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="velocidad">Velocidad</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="velocidad"
                          placeholder="Velocidad"
                          name="velocidad"
                          onChange={handleInputChange}
                          value={formData.velocidad}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="tecnologia">Tecnologia</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="tecnologia"
                          placeholder="Tecnologia"
                          name="tecnologia"
                          onChange={handleInputChange}
                          value={formData.tecnologia}
                        />
                      </div>

                      <br />
                      <br />
                      <br />
                      <div className="items-form">
                        <label htmlFor="orden">Numero de Orden</label>
                        <input
                          type="number"
                          className="form-control-new"
                          id="orden"
                          placeholder="orden"
                          name="orden"
                          onChange={handleInputChange}
                          value={formData.orden}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="observacion">Observacion</label>
                        <input
                          type="text"
                          className="form-control-new"
                          id="observacion"
                          placeholder="observacion"
                          name="observacion"
                          onChange={handleInputChange}
                          value={formData.observacion}
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="revisados">Estado</label>
                        <select
                          name="revisados"
                          id="revisados"
                          className="form-control"
                          onChange={handleInputChange}
                          value={formData.revisados}
                          required
                        />
                      </div>
                      <div className="items-form">
                        <label htmlFor="estadorevisado">Sub Estado</label>
                        <select
                          name="estadorevisado"
                          id="estadorevisado"
                          className="form-control"
                          onChange={handleInputChange}
                          value={formData.estadorevisado}
                          required
                        />
                      </div>
                       <div className="items-form">
                        <label></label>
                        <input hidden />
                      </div> 
                      <div className="items-form">
                        <span>
                          <label htmlFor="confronta">Confronta</label>
                          <br />
                        </span>
                      </div>
                      <div className="items-form">
                        <label htmlFor="obs2"></label>
                        <textarea
                          className="form-control-new"
                          id="obs2"
                          name="obs2"
                          rows="3"
                          placeholder="Observaciones BackOficce"
                          onChange={handleInputChange}
                          value={formData.obs2}
                        ></textarea>
                      </div>
                      <div className="items-form">
                        <input
                          className="btn btn-lg btn-info"
                          type="submit"
                          value="Enviar"
                        />
                      </div>
                    </div>
                  </div>
                </form> */}

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
                      <p>Los datos se han Editado correctamente.</p>
                      <button
                        onClick={() => {
                          setShowModal(false);
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
