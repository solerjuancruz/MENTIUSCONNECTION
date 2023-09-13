import React from "react";

export default function RechazosIndex() {
  return (
    <div class="contaionerMovistar">
      <div class="row">
        <div class="col-md-12">
          <h6>Cantidad de Registros:</h6>
          <form>
            <div className="container-movistar-RechazosDigital">
              <div className="general-form">
                <div className="items-form">
                  <input
                    type="searchbackoffice"
                    name="searchbackoffice"
                    class="form-control"
                  />
                  <span class="input-group-prepend">
                    <button type="submit" class="btn btn-info btn-sm">
                      Buscar por Numero
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="items-form">
          <input hidden />
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-striped table-bordered">
              <thead class="text-info">
                <th scope="col">#</th>
                <th scope="col">Numero</th>
                <th scope="col">Nombres</th>
                <th scope="col">Documento</th>
                <th scope="col">Causal</th>
                <th scope="col">Linea</th>
                <th scope="col">Fecha rechazo</th>
                <th scope="col">Modalidad</th>
                <th scope="col">Agente</th>
                <th colspan="3">Acciones</th>
              </thead>
              <tbody>
                <tr>
                  {/* <td>{{ $loop->iteration }}</td>
                       <td>{{ $rechazo->numero_de_celular }}</td>
                       <td>{{ $rechazo->nombres }}</td>
                       <td>{{ $rechazo->documento }}</td>
                       <td>{{ $rechazo->causal }}</td>
                       <td>{{ $rechazo->linea }}</td>
                       <td>{{ $rechazo->frechazo }}</td>
                       <td>{{ $rechazo->modalidad }}</td>
                       <td>{{ $rechazo->agente }}</td> */}

                  <td class="td-actions text-right">
                    <a class="btn btn-info">
                      <i class="material-icons">edit</i>
                    </a>

                    <form>
                      <button
                        class="btn btn-danger"
                        type="submit"
                        rel="tooltip"
                      >
                        <i class="material-icons">close</i>
                      </button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <form>
                <div className="general-form">
                  <div className="items-form">
                    <input type="hidden" name="date1" id="" value="1" />
                    <button type="submit" class="btn btn-info">
                      <i class="material-icons">file_download</i>Descargar
                    </button>
                  </div>
                </div>
              </form>
            </p>
          </div>
        </div>
        <div class="card-footer mr-auto"></div>
      </div>
    </div>
  );
}
