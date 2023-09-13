import React,{useState} from "react";
import axios from "axios";

export default function CreatePlan() {
  const [formData, setFormData] = useState({
    planadquiere: "",
    hora: "",
    dia: "",
  });

  const [showModal, setShowModal] = useState(false);

  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/createplan",
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
                  onChange={handleInputChange}
                  value={formData.planadquiere}
                  autofocus
                />
                <span className="error text-danger" for="input-name">
                  planadquiere
                </span>
              </div>
            </div>
          </div>
          <div className="items-form">
            <button type="submit" className="btn btn-info">
              Guardar
            </button>
          </div>
          {/*  <End footer */}
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
    </div>
  );
}
