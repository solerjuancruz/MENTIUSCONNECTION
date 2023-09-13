export default function PlanesIndex() {
  return (
    <div className="containerMovistar">
      <h6>Cantidad de Registros: total</h6>
      <div className="card">
        <div className="card-header card-header-info">
          <h4 className="card-title">Planes</h4>
          <p className="card-category"></p>
        </div>

        <div className="general-form">
          <div className="items-form">
            <a className="btn btn-sm btn-info">Subir Planes</a>
          </div>

          <div className="items-form">
            <a className="btn btn-sm btn-facebook">Añadir Nuevo Plan</a>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead className="text-infor">
                <th>ID</th>
                <th>Plan</th>
                <th>Acciones</th>
              </thead>
              <tbody>
                <tr>
                  <td>Id_adquisicion</td>
                  <td>planadquiere</td>
                  <td className="td-actions text-right">
                    <a href="#" className="btn btn-warning">
                      <i className="material-icons">edit</i>
                    </a>

                    <form>
                      <button
                        className="btn btn-danger"
                        type="submit"
                        rel="tooltip"
                      >
                        <i className="material-icons">close</i>
                      </button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer mr-auto">links</div>
      </div>
    </div>
  );
}
