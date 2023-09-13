export default function AltoRiesgoIndex() {
  return (
    <div className="containerMovistar">
      <center>
        <img />
        <h3>BUSCAR ZONA DE ALTO RIESGO</h3>
      </center>
      <div className="card">
        <center>
          <a className="btn btn-info">IMPORTAR DATOS</a>
        </center>
        <form>
          <div className="container-movistar-fijadigital">
            <div className="general-form">
              <div className="items-form">
                <label htmlFor="">DEPARTAMENTO</label>
                <select
                  name="departamento"
                  id="Tipificacion_detalle_1"
                  className="form-control"
                >
                  <option value="Bogota">Bogotá</option>
                  <option value="Caribe-Oriente">Caribe/Oriente</option>
                  <option value="Cundinamarca">Cundinamarca</option>
                  <option value="Sur occidente/Noroccidente">
                    Sur occidente/Noroccidente
                  </option>
                </select>
              </div>
              <div className="items-form">
                <input hidden />
              </div>
              <div className="items-form">
                <label htmlFor="">CIUDAD</label>
                <select
                  name="ciudad"
                  id="Tipificacion_detalle_2"
                  className="form-control"
                >
                  <option value="Bogota">Bogotá</option>
                  <option value="Caribe-Oriente">Caribe/Oriente</option>
                  <option value="Cundinamarca">Cundinamarca</option>
                  <option value="Sur occidente/Noroccidente">
                    Sur occidente/Noroccidente
                  </option>
                </select>
              </div>
              <div className="items-form">
                <input hidden />
              </div>
              <div className="items-form">
                <label htmlFor="direccion" className="form-label">
                  Barrio
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="direccion"
                  aria-label=""
                />
              </div>

              <div className="items-form">
                <input type="submit" className="btn btn-info" value="Buscar" />
              </div>
            </div>
          </div>
        </form>
        <center>
          <button type="button" className="btn btn-info">
            Obtener direccion
          </button>
        </center>
      </div>
      <div className="containeraMovistar">
        <div className="card">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <th>
                  <h1>Regional</h1>
                </th>
                <th>
                  <h1>Ciudad/Municipio</h1>
                </th>
                <th>
                  <h1>Barrio</h1>
                </th>
                <th>
                  <h1>Tiempo de entrega alistamiento</h1>
                </th>
                <th>
                  <h1>Alto riesgo</h1>
                </th>
                <th>
                  <h1>Horarios De lunes a lunes-viernes</h1>
                </th>
                <th>
                  <h1>Nombre del punto</h1>
                </th>
                <th>
                  <h1>Direccion</h1>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>regional</td>
                  <td>ciudad</td>
                  <td>barrio</td>
                  <td>tiempoentrega_alistamiento</td>
                  <td>observacion</td>
                  <td>h_lunes_viernes</td>
                  <td>nombre_punto</td>
                  <td>direccion</td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <thead>
                <th>
                  <h1>ERROR DE BUSQUEDA</h1>
                </th>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>No se encontraron resultados de su busqueda</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
