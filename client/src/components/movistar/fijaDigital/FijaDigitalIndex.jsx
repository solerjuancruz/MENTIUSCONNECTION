import React, { useEffect, useState } from "react";
import axios from "axios";
import FijaDigitalCreate from "./FijaDigitalCreate.jsx";
import FijaDigitalEdit from "./FijaDigitalEdit.jsx";
import FijaDigitalShow from "./FijaDigitalShow.jsx";

const TablafijaDigital = () => {
  const [fijaDigital, setFijaDigital] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showViewForm, setShowViewForm] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const cargarRegistros = () => {
    axios
      .get("http://localhost:8000/api/fijadigitals")
      .then((response) => {
        setFijaDigital(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  };

  useEffect(() => {
    cargarRegistros();
  }, []);

  const eliminarRegistro = (id) => {
    axios
      .delete(`http://localhost:8000/api/fijadigital/${id}`)
      .then((response) => {
        setMessage(response.data.message);
        setShowModal(true);
        cargarRegistros();
      })
      .catch((error) => {
        setMessage("Error al eliminar el registro");
      });
  };

  const ShowRegistro = (id) => {
    axios
      .get(`http://localhost:8000/api/fijadigital/${id}`)
      .then((response) => {
        setSelectedRecord(response.data);
        setShowViewForm(true);
      })
      .catch((error) => {
        setMessage("Error al obtener el registro");
      });
  };

  const EditRegistro = (id) => {
    axios
      .get(`http://localhost:8000/api/fijadigital/${id}`)
      .then((response) => {
        setSelectedRecord(response.data);
        setShowEditForm(true);
      });
  };

  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  const handleCloseCreateForm = () => {
    setShowCreateForm(false);
    cargarRegistros();
  };

  const handleCloseEditClick = () => {
    setSelectedRecord("");
    setShowEditForm(false);
    cargarRegistros();
  };

  const handleCloseShowClick = () => {
    setShowViewForm(false);
  };
  return (
    <div className="content">
      {showCreateForm || (showEditForm && selectedRecord) || showViewForm ? (
        showCreateForm ? (
          <FijaDigitalCreate onClose={handleCloseCreateForm} />
        ) : (
          <>
            {showEditForm && selectedRecord && (
              <FijaDigitalEdit
                idRecord={selectedRecord}
                onClose={handleCloseEditClick}
              />
            )}
            {showViewForm && (
              <FijaDigitalShow
                recordId={selectedRecord}
                onClose={handleCloseShowClick}
              />
            )}
          </>
        )
      ) : (
        <div className="container">
          <button
            className="btn btn-outline-info btn-lg"
            onClick={handleCreateClick}
          >
            Crear
          </button>
          <table className="table table-light mt-2">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Documento</th>
                <th>Dia</th>
                <th>Hora</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {fijaDigital.map((fijadigital) => (
                <tr key={fijadigital.id}>
                  <td>{fijadigital.id}</td>
                  <td>{fijadigital.nombres}</td>
                  <td>{fijadigital.documento}</td>
                  <td>{fijadigital.dia}</td>
                  <td>{fijadigital.hora}</td>
                  <td>
                    <button
                      className="btn btn-success mr-2"
                      onClick={() => EditRegistro(fijadigital.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => eliminarRegistro(fijadigital.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn btn-warning mr-2"
                      onClick={() => ShowRegistro(fijadigital.id)}
                    >
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Modal */}
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>
                  <strong>¡Éxito!</strong>
                </h2>
                <p>Los datos se han eliminado correctamente.</p>
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
      )}
    </div>
  );
};

export default TablafijaDigital;
