
import React from "react";
import axios from "axios";

export default function CoberturaCreate({onClose}) {
  
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
        "http://localhost:8000/api/prepostteleventa",
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
      <form onSubmit={formSubmit}>
        <div className="container-movistar-fijadigital">
          <div className="general-form">
            <div className="items-form">
              <label htmlFor="region" className="form-label">
                Región Comercial
              </label>
              <select className="form-control" name="region_comercial" id="region">
                <option value="" selected disabled>
                  Seleccione
                </option>
                <option value="Bogota">Bogotá</option>
                <option value="Caribe-Oriente">Caribe/Oriente</option>
                <option value="Cundinamarca">Cundinamarca</option>
                <option value="Sur occidente/Noroccidente">
                  Sur occidente/Noroccidente
                </option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="departamento" className="form-label">
                Departamento
              </label>
              <select className="form-control" name="departamentos" id="departamento">
                <option value="" disabled selected>
                  Seleccione
                </option>
                <option value={"Bogotá D.C"}>Bogotá D.C</option>
                <option value={"Amazonas"}>Amazonas</option>
                <option value={"Antioquia"}>Amazonas</option>
                <option value={"Arauca"}>Arauca</option>
                <option value={"Atlántico"}>Atlántico</option>
                <option value={"Bolívar"}>Bolívar</option>
                <option value={"Boyacá"}>Boyacá</option>
                <option value={"Caldas"}>Caldas</option>
                <option value={"Caquetá"}>Caquetá</option>
                <option value={"Casanare"}>Casanare</option>
                <option value={"Cauca"}>Cauca</option>
                <option value={"Cesar"}>Cesar</option>
                <option value={"Chocó"}>Chocó</option>
                <option value={"Córdoba"}>Córdoba</option>
                <option value={"Cundinamarca"}>Cundinamarca</option>
                <option value={"Guainía"}>Guainía</option>
                <option value={"Guaviare"}>Guaviare</option>
                <option value={"Huila"}>Huila</option>
                <option value={"La Guajira"}>La Guajira</option>
                <option value={"Magdalena"}>Magdalena</option>
                <option value={"Meta"}>Meta</option>
                <option value={"Nariño"}>Nariño</option>
                <option value={"Norte de Santander"}>Norte de Santander</option>
                <option value={"Putumayo"}>Putumayo</option>
                <option value={"Quindío"}>Quindío</option>
                <option value={"Risaralda"}>Risaralda</option>
                <option value={"San Andrés y Providencia"}>
                  San Andrés y Providencia
                </option>
                <option value={"Santander"}>Santander</option>
                <option value={"Sucre"}>Sucre</option>
                <option value={"Tolima"}>Tolima</option>
                <option value={"Valle del Cauca"}>Valle del Cauca</option>
                <option value={"Vaupés"}>Vaupés</option>
                <option value={"Vichada"}>Vichada</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="barrio" className="form-label">
                Barrio
              </label>
              <input
                type="text"
                name="barrio"
                className="form-control"
                placeholder=""
                aria-label=""
              />
            </div>
            <div className="items-form">
              <label htmlFor="nomenclatura" className="form-label">
                Nomenclatura
              </label>
              <select
                type="text"
                name="nomenclatura"
                className="form-control"
                placeholder=""
              >
                <option value="" selected disabled>
                  Seleccione
                </option>
                <option value="KR">KR</option>
                <option value="CL">CL</option>
                <option value="TV">TV</option>
                <option value="DG">DG</option>
                <option value="URB">URB</option>
                <option value="Urbanizacion">Urbanización</option>
                <option value="Conjunto">Conjunto</option>
              </select>
            </div>

            <div className="items-form">
              <label htmlFor="nomen" className="form-label">
                # Nomenclatura 1
              </label>
              <input
                type="number"
                name="numero_nomenclatura_uno"
                className="form-control"
                placeholder=""
              />
            </div>

            <div className="items-form">
              <label htmlFor="segundo_nombre" className="form-label">
                Letra Nomenclatura 1
              </label>
              <input
                type="text"
                name="letra_nomenclatura_uno"
                className="form-control"
                placeholder=""
                aria-label="segundo Apellido"
              />
            </div>
            <div className="items-form">
              <label htmlFor="nomenclatura" className="form-label">
                Nomenclatura
              </label>
              <select
                type="text"
                name="nomenclaturados"
                className="form-control"
                placeholder=""
              >
                <option value="" selected disabled>
                  Seleccione
                </option>
                <option value="KR">KR</option>
                <option value="CL">CL</option>
                <option value="TV">TV</option>
                <option value="DG">DG</option>
                <option value="URB">URB</option>
                <option value="Urbanizacion">Urbanización</option>
                <option value="Conjunto">Conjunto</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="tipo_doc" className="form-label">
                # Nomenclatura 2
              </label>
              <input
                type="number"
                className="form-control"
                name="numero_nomenclatura_dos"
                id=""
              />
            </div>
            <div className="items-form">
              <label htmlFor="fecha_nacimiento" className="form-label">
                Letra Nomenclatura 2
              </label>
              <input
                type="text"
                name="letra_nomenclatura_dos"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="items-form">
              <label htmlFor="tipo_doc" className="form-label">
                # Nomenclatura 3
              </label>
              <input
                type="number"
                className="form-control"
                name="numero_nomenclatura_tres"
                id=""
              />
            </div>

            <div className="items-form">
              <label htmlFor="" className="form-label">
                Complemento 1
              </label>
              <select name="complemento_uno" className="form-control" id="">
                <option value="" selected disabled>
                  Seleccione
                </option>
                <option value="APT">APT</option>
                <option value="INT">INT</option>
                <option value="TOR">TOR</option>
                <option value="PISO">PISO</option>
                <option value="CAS">CAS</option>
                <option value="MZA">MZA</option>
                <option value="LCA">LCA</option>
                <option value="LOT">LOT</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="" className="form-label">
                Complemento 2
              </label>
              <select name="complemento_dos" className="form-control" id="">
                <option value="" selected disabled>
                  Seleccione
                </option>
                <option value="APT">APT</option>
                <option value="INT">INT</option>
                <option value="TOR">TOR</option>
                <option value="PISO">PISO</option>
                <option value="CAS">CAS</option>
                <option value="MZA">MZA</option>
                <option value="LCA">LCA</option>
                <option value="LOT">LOT</option>
              </select>
            </div>
            <div className="items-form">
              <label htmlFor="nomen" className="form-label">
                CTO
              </label>
              <input
                type="text"
                name="CTO"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="items-form">
              <label htmlFor="segundo_nombre" className="form-label">
                Porcentaje Libre CTO
              </label>
              <input
                type="text"
                name="PorcentajeLibreCTO"
                className="form-control"
                placeholder=""
                aria-label="segundo Apellido"
              />
            </div>
            <div className="items-form">
              <label htmlFor="nomen" className="form-label">
                Puertos Libres CTO
              </label>
              <input
                type="text"
                name="PuertosLibresCTO"
                className="form-control"
                placeholder=""
              />
            </div>

            <div className="items-form">
              <label htmlFor="segundo_nombre" className="form-label">
                Clusters
              </label>
              <input
                type="text"
                name="Clusters"
                className="form-control"
                placeholder=""
                aria-label="segundo Apellido"
              />
            </div>
            <div className="items-form">
              <label htmlFor="nomen" className="form-label">
                Region Comercial
              </label>
              <input
                type="text"
                name="RegionComercial"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="items-form">
              <label htmlFor="segundo_nombre" className="form-label">
                Localidad
              </label>
              <input
                type="text"
                name="Localidad"
                className="form-control"
                placeholder=""
                aria-label="segundo Apellido"
              />
            </div>
            <div className="items-form">
              <label htmlFor="nomen" className="form-label">
                Direccion Cliente
              </label>
              <input
                type="text"
                name="DireccionCliente"
                className="form-control"
                placeholder=""
              />
            </div>

            <div className="items-form">
              <label htmlFor="segundo_nombre" className="form-label">
                Estado
              </label>
              <input
                type="text"
                name="Estado"
                className="form-control"
                placeholder=""
                aria-label="segundo Apellido"
              />
            </div>
            <div className="items-form">
              <label htmlFor="nomen" className="form-label">
                Flag
              </label>
              <input
                type="text"
                name="Flag"
                className="form-control"
                placeholder=""
              />
            </div>

            <div className="items-form">
              <label htmlFor="segundo_nombre" className="form-label">
                Fecha Comercializacion
              </label>
              <input
                type="date"
                name="FechaComercializacion"
                className="form-control"
                placeholder=""
                aria-label="segundo Apellido"
              />
            </div>

            <div className="items-form">
              <input type="submit" />
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
