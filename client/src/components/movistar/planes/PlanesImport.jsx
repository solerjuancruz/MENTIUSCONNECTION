export default function PlanesImport() {
  return (
    <div className="containerMovistar">
      <div className="card">
        <div className="card-header card-header-info">
          <h4 className="card-title">Importar Datos</h4>
        </div>

        <form>
          <div className="container-movistar-fijadigital">
            <div className="general-form">
              <div className="items-form">
                <label htmlFor=""></label>
                <input
                  type="file"
                  name="file"
                  className="form-control"
                  id="file"
                />
              </div>
              <div className="items-form">
                <button type="submit" className="btn btn-info">
                  Importar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
