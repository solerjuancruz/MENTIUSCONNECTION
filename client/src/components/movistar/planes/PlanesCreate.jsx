export default function PlanesCreate(params) {
  return (
    <div className="containerMovistar">
      <form>
        <div className="container-movistar-fijadigital">
          <div className="general-form">
            <div className="items-form">
              <h4 className="card-title">Planes</h4>
              <p className="card-category">Ingresar Nuevo Plan</p>
            </div>
            <div className="items-form">
              <label for="planadquiere" className="col-sm-2 col-form-label">
                Plan
              </label>
              <div className="items-form">
                <input
                  type="text"
                  className="form-control"
                  name="planadquiere"
                  placeholder="Ingrese plan"
                  value="{{ old('planadquiere') }}"
                  autofocus
                />
                <span className="error text-danger" for="input-name">
                  planadquiere
                </span>
              </div>
            </div>
          </div>
          {/* <Footer */}
          <div className="items-form">
            <button type="submit" className="btn btn-info">
              Guardar
            </button>
          </div>
          {/*  <End footer */}
        </div>
      </form>
    </div>
  );
}
