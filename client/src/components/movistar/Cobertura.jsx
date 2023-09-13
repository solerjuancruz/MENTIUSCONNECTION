import React, { useState } from "react";
import axios from "axios";
export default function Cobertura() {
  const [formData, setFormData] = useState({
    departamento: "",
    ciudad: "",
    direccion: "",
    nomenclatura: "",
    numero_nomenclatura_uno: "",
    letra_nomenclatura_uno: "",
    nomenclatura_dos: "",
    numero_nomenclatura_dos: "",
    letra_nomenclatura_dos: "",
    numero_nomenclatura_tres: "",
    complemento_uno: "",
    complemento_dos: "",
    numero_complemento_uno: "",
    numero_complemento_dos: "",
    cable: "",
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
        "http://localhost:8000/api/cobertura",
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
        <h3>BUSCAR COBERTURA</h3>
      </center>
      <div className="card">
        <center>
          <a className="btn btn-info">IMPORTAR DATOS</a>
        </center>
        <form onSubmit={formSubmit}>
          <div className="container-movistar-fijadigital">
            <div className="general-form">
              <div className="items-form">
                <label htmlFor="Tipificacion_detalle_1">DEPARTAMENTO</label>
                <select
                  name="departamento"
                  id="Tipificacion_detalle_1"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.departamento}
                >
                  <option value={"Cundinamarca"}>Cundinamarca</option>
                  <option value={"Antioquia"}>Antioquia</option>
                  <option value={"Atlantico"}>Atlantico</option>
                </select>
              </div>
              {/* <div className="items-form">
                <label htmlFor=""></label>
                <input hidden />
              </div> */}
              <div className="items-form">
                <label htmlFor="Tipificacion_detalle_2">CIUDAD</label>
                <select
                  name="ciudad"
                  id="Tipificacion_detalle_2"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.ciudad}
                >
                  <option value={"Cundinamarca"}>Cundinamarca</option>
                  <option value={"Antioquia"}>Antioquia</option>
                  <option value={"Atlantico"}>Atlantico</option>
                </select>
              </div>
              {/* <div className="items-form">
                <label htmlFor=""></label>
                <input hidden />
              </div> */}
              <div className="items-form">
                <label htmlFor="direccion" className="form-label">
                  Direccion
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="direccion"
                  aria-label=""
                  onChange={handleInputChange}
                  value={formData.direccion}
                />
              </div>

              <div className="items-form">
                <label htmlFor="nomenclatura" className="form-label">
                  Nomenclatura
                </label>
                <select
                  className="form-control"
                  type="text"
                  name="nomenclatura"
                  id="nomenclatura"
                  onChange={handleInputChange}
                  value={formData.nomenclatura}
                >
                  <option value={""}>
                    Seleccione
                  </option>
                  <option value={"KR"}>KR</option>
                  <option value={"CL"}>CL</option>
                  <option value={"TV"}>TV</option>
                  <option value={"DG"}>DG</option>
                  <option value={"URB"}>URB</option>
                  <option value={"Urbanizacion"}>Urbanización</option>
                  <option value={"Conjunto"}>Conjunto</option>
                </select>
              </div>
              <div className="items-form">
                <label
                  htmlFor="nonumero_nomenclatura_unomen"
                  className="form-label"
                >
                  # Nomenclatura 1
                </label>
                <input
                  type="number"
                  name="numero_nomenclatura_uno"
                  id="numero_nomenclatura_uno"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.numero_nomenclatura_uno}
                />
              </div>

              <div className="items-form">
                <label htmlFor="letra_nomenclatura_uno" className="form-label">
                  Letra Nomenclatura 1
                </label>
                <input
                  type="text"
                  id="letra_nomenclatura_uno"
                  name="letra_nomenclatura_uno"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.letra_nomenclatura_uno}
                />
              </div>
              <div className="items-form">
                <label htmlFor="nomenclatura_dos" className="form-label">
                  Nomenclatura 2
                </label>
                <select
                  type="text"
                  className="form-control"
                  id="nomenclatura_dos"
                  name="nomenclatura_dos"
                  placeholder=""
                  onChange={handleInputChange}
                  value={formData.nomenclatura_dos}
                >
                  <option value={""}>
                    Seleccione
                  </option>
                  <option value={"KR"}>KR</option>
                  <option value={"CL"}>CL</option>
                  <option value={"TV"}>TV</option>
                  <option value={"DG"}>DG</option>
                  <option value={"URB"}>URB</option>
                  <option value={"Urbanizacion"}>Urbanización</option>
                  <option value={"Conjunto"}>Conjunto</option>
                </select>
              </div>
              <div className="items-form">
                <label htmlFor="numero_nomenclatura_dos" className="form-label">
                  # Nomenclatura 2
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="numero_nomenclatura_dos"
                  id="numero_nomenclatura_dos"
                  onChange={handleInputChange}
                  value={formData.numero_nomenclatura_dos}
                />
              </div>
              <div className="items-form">
                <label htmlFor="letra_nomenclatura_dos" className="form-label">
                  Letra Nomenclatura 2
                </label>
                <input
                  type="text"
                  name="letra_nomenclatura_dos"
                  id="letra_nomenclatura_dos"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.letra_nomenclatura_dos}
                />
              </div>
              <div className="items-form">
                <label
                  htmlFor="numero_nomenclatura_tres"
                  className="form-label"
                >
                  # Nomenclatura 3
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="numero_nomenclatura_tres"
                  id="numero_nomenclatura_tres"
                  onChange={handleInputChange}
                  value={formData.numero_nomenclatura_tres}
                />
              </div>
              <div className="items-form">
                <label htmlFor="complemento_uno" className="form-label">
                  Complemento 1
                </label>
                <select
                  name="complemento_uno"
                  className="form-control"
                  id="complemento_uno"
                  onChange={handleInputChange}
                  value={formData.complemento_uno}
                >
                  <option value={""}>
                    Seleccione
                  </option>
                  <option value={"APT"}>APT</option>
                  <option value={"INT"}>INT</option>
                  <option value={"TOR"}>TOR</option>
                  <option value={"PIS"}>PISO</option>
                  <option value={"CAS"}>CAS</option>
                  <option value={"MZA"}>MZA</option>
                  <option value={"LCA"}>LCA</option>
                  <option value={"LOT"}>LOT</option>
                </select>
              </div>
              <div className="items-form">
                <label htmlFor="complemento_dos" className="form-label">
                  Complemento 2
                </label>
                <select
                  name="complemento_dos"
                  className="form-control"
                  id="complemento_dos"
                  onChange={handleInputChange}
                  value={formData.complemento_dos}
                >
                  <option value={""}>
                    Seleccione
                  </option>
                  <option value={"APT"}>APT</option>
                  <option value={"INT"}>INT</option>
                  <option value={"TOR"}>TOR</option>
                  <option value={"PIS"}>PISO</option>
                  <option value={"CAS"}>CAS</option>
                  <option value={"MZA"}>MZA</option>
                  <option value={"LCA"}>LCA</option>
                  <option value={"LOT"}>LOT</option>
                </select>
              </div>
              <div className="items-form">
                <label htmlFor="numero_complemento_uno"># Complemento 1</label>
                <input
                  type="text"
                  name="numero_complemento_uno"
                  id="numero_complemento_uno"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.numero_complemento_uno}
                />
              </div>
              <div className="items-form">
                <label htmlFor="numero_complemento_dos"># Complemento 2</label>
                <input
                  type="text"
                  name="numero_complemento_dos"
                  id="numero_complemento_dos"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.numero_complemento_dos}
                />
              </div>
              <div className="items-form">
                <label htmlFor="cable">CableID</label>
                <input
                  type="number"
                  id="cable"
                  name="cable"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.cable}
                />
              </div>
              <div className="items-form">
                <input type="submit" className="btn btn-info" value="Guardar" />
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
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
        <center>
          <button type="button" className="btn btn-info">
            Obtener direccion
          </button>
        </center>
      </div>
      {/*  <div className="containerMovistar">
        <div className="container-movistar-fijadigital">
          <div className="general-form">
            <div className="items-form">
              <table className="table">
                <thead>
                  <th>Region Comercial</th>
                  <th>Barrio</th>
                  <th>Direccion</th>
                  <th>Ciudad</th>
                  <th>
                    {" "}
                    <div>Tipo Equipo</div>
                  </th>
                  <th>CTO</th>
                  <th>% Libre CTO</th>
                  <th>Puertos Libres</th>
                  <th>Clusters</th>
                  <th>Estado</th>
                  <th>Flag</th>
                  <th>Fecha Comercializacion</th>
                  <th>Fecha Actualizacion</th>
                </thead>
                <tbody>
                  <tr>
                    <td>RegionComercial</td>
                    <td>BarrioCartografia</td>
                    <td>DireccionCliente</td>
                    <td>Localidad</td>

                    <td>
                      <div>TipoEquipo</div>
                    </td>
                    <td>CTO</td>
                    <td>PorcentajeLibreCTO</td>
                    <td>PuertosLibresCTO</td>
                    <td>Clusters</td>
                    <td>Estado</td>
                    <td>Flag</td>
                    <td>
                      <div>FechaComercializacion</div>
                    </td>
                    <td>FechaActualizacion</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
