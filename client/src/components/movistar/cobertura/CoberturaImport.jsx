import React from "react";

export default function CoberturaImport() {
  return (
    <div className="containerMovistar">
      <center>
        <img />
      </center>
      <div className="card">
        <div className="card-body">
          <div className="card">
            <div className="card-body">
              <div className="card">
                <div className="card-header card-header-info">
                  <h4 className="card-title">Importar Datos</h4>
                </div>

                <div className="card-footer ml-auto mr-auto">
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
                            <label htmlFor=""></label>
                          <button type="submit" className="btn btn-info">
                            Importar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
