
import React, { useState } from "react";
import axios from "axios";

export default function FijaTeleventaCreate( { onClose }) {
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
    segmento: "Televentas",
    FOX: null,
    HBO: null,
    cds_movil: null,
    cds_fija: null,
    Paquete_Adultos: null,
    Decodificador: null,
    Svas_lineas: null,
    velocidad: "",
    tecnologia: "",
    orden: "",
    selector: "",
    confronta: "",
    observacion: "",
    agente: "Televentas",
    revisados: null,
    estadorevisado: null,
    obs2: null,
    backoffice: null,
    hora: null,
    dia: null,
    created_at: null,
    updated_at: null,
    patinador: null,
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
        <h3>FIJA TELEVENTAS</h3>
      </center>
      <form onSubmit={formSubmit} className="form-horizontal">
        <div className="container-movistar-fijateleventas">
          <div className="general-form">
            {/* <div className="items-form">
                  <label htmlFor=""></label>
                  <input
                    type="hidden"
                    id="revisados"
                    name="revisados"
                    value="Nuevo"
                  />
                </div>
                <div className="items-form">
                  <label htmlFor=""></label>
                  <input
                    type="hidden"
                    id="agente"
                    name="agente"
                    value="{{ $user_id }}"
                  />
                </div>
                <div className="items-form">
                  <label htmlFor=""></label>
                  <input
                    type="hidden"
                    id="dia"
                    name="dia"
                    className="form-control"
                    placeholder="hora"
                    value="{{ $date }}"  required  
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
                    value="{{ $hora }}" required  
                  />
                </div> */}
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
              <label htmlFor="correo">Correo</label>
              <input
                type="mail"
                id="correo"
                name="correo"
                className="form-control"
                placeholder="Correo Electronico"
                onChange={handleInputChange}
                value={formData.correo}
                required
              />
            </div>
            {/*  <div className="items-form">
                  <label htmlFor=""></label>
                  <input
                    className="form-check-input"
                    type="text"
                    name="selector"
                    id="selector1"
                    onChange={handleInputChange}
                    value={formData.selector}
                  />
                </div> */}

            <div className="items-form">
              <label htmlFor="departamento">Departamento</label>
              <select
                name="departamento"
                id="Tipificacion_detalle_1"
                className="form-control"
                onChange={handleInputChange}
                value={formData.departamento}
              >
                <option>Cundinamarca</option>
                <option>Medellin</option>
                <option>Atlantico</option>
              </select>
            </div>
            {/* <div className="items-form">
                  <label htmlFor=""></label>
                  <input hidden />
                </div> */}
            <div className="items-form">
              <label htmlFor="id_ciudad">Ciudad</label>
              <select
                name="id_ciudad"
                id="Tipificacion_detalle_2"
                className="form-control"
                onChange={handleInputChange}
                value={formData.id_ciudad}
              >
                <option>Bogota</option>
                <option>Pereira</option>
                <option>Medellin</option>
                <option>Manizales</option>
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
              <label htmlFor="estrato">estrato</label>
             {/*  <br /> */}
              <select
                name="estrato"
                id="estrato"
                className="form-control"
                onChange={handleInputChange}
                value={formData.estrato}
                required
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
                min="1"
                onChange={handleInputChange}
                value={formData.ngrabacion}
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
                min="1"
                onChange={handleInputChange}
                value={formData.ncontacto}
                required
              />
            </div>
            <div className="items-form">
              <label htmlFor="producto">Producto</label>
              {/* <br /> */}
              <select
                name="producto"
                id="producto"
                className="form-control"
                onChange={handleInputChange}
                value={formData.producto}
                required
              >
                <option>Movistar</option>
                <option>Claro</option>
              </select>
            </div>
            <div className="items-form">
              <p>Adicionales</p>
              <br />
            </div>
            <div className="items-form">
              
              <input
                className="j-chek"
                type="checkbox"
                value={formData.FOX}
                onChange={handleInputChange}
                name="FOX"
                id="FOX"
              />
              <label className="form-check-label j2-chek" htmlFor="FOX">
                FOX
              </label>
            </div>
            <div className="items-form">
              
              <input
                className="j-chek"
                type="checkbox"
                value={formData.HBO}
                onChange={handleInputChange}
                name="HBO"
                id="HBO"
              />
              <label className="form-check-label j2-chek" htmlFor="HBO">
                HBO
              </label>
            </div>
            <div className="items-form">
              
              <input
                className="j-chek"
                type="checkbox"
                value={formData.cds_movil}
                onChange={handleInputChange}
                name="cds_movil"
                id="cds_movil"
              />
              <label className="form-check-label j2-chek" htmlFor="cds_movil">
                Cds Movil
              </label>
            </div>

            <div className="items-form">
              
              <input
                className="j-chek"
                type="checkbox"
                value={formData.cds_fija}
                onChange={handleInputChange}
                name="cds_fija"
                id="cds_fija"
              />
              <label className="form-check-label j2-chek" htmlFor="cds_fija">
                Cds Fija
              </label>
            </div>
            <div className="items-form">
              
              <input
                className="j-chek"
                type="checkbox"
                value={formData.Paquete_Adultos}
                onChange={handleInputChange}
                name="Paquete_Adultos"
                id="Paquete_Adultos"
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
                value={formData.Decodificador}
                name="Decodificador"
                id="Decodificador"
              />
              <label
                className="form-check-label j2-chek"
                htmlFor="Decodificador"
              >
                Decodificador
              </label>
            </div>
            <div className="items-form">
              
              <input
                className="j-chek"
                type="checkbox"
                value={formData.Svas_lineas}
                onChange={handleInputChange}
                name="Svas_lineas"
                id="Svas_lineas"
              />
              <label className="form-check-label j2-chek" htmlFor="Svas_lineas">
                Svas Linea
              </label>
            </div>
            <div className="items-form">
              <label htmlFor="velocidad">Velocidad</label>
              <select
                name="velocidad"
                id="velocidad"
                className="form-control"
                value={formData.velocidad}
                onChange={handleInputChange}
                required
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
                <option>computador</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="orden">Numero de Orden</label>
              <input
                type="number"
                id="orden"
                name="orden"
                className="form-control"
                required
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
  );
}
