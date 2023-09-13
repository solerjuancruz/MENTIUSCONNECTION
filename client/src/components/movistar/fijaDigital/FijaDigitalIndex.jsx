import React, { useEffect, useState } from "react";
import axios from "axios";
import FijaDigitalCreate from "./FijaDigitalCreate.jsx";
import FijaDigitalEdit from "./FijaDigitalEdit.jsx";

const TablafijaDigital = () => {
  const [fijaDigital, setFijaDigital] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/fijadigitals")
      .then((response) => {
        setFijaDigital(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  const eliminarRegistro = (id) => {
    axios
      .delete(`http://localhost:8000/api/fijadigital/${id}`)
      .then((response) => {
        setMessage(response.data.message);
        setShowModal(true);
        setFijaDigital(response.data);
      })
      .catch((error) => {
        setMessage("Error al eliminar el registro");
      });
  };
  const [showModal, setShowModal] = useState(false);

  const handleCreateClick = () => {
    setShowCreateForm(true);

  };

  const handleCloseCreateForm = () => {
    setShowCreateForm(false);
  };

  const [editRecordId, setEditRecordId] = useState(null);

  const handleEditClick = (id) => {
    setEditRecordId(id);
    setShowEditForm(true)
  };

  const handleCloseEditClick = () => {
    setEditRecordId(null);
    setShowEditForm(false);
  };

  return (
    <div className="content">
      {showCreateForm || showEditForm ? (
        showCreateForm ? (
          <FijaDigitalCreate onClose={handleCloseCreateForm} />
        ) : (
          <FijaDigitalEdit
            recordId={editRecordId}
            onClose={handleCloseEditClick}
          />
        )
      ) : (
        <div className="container">
          <button
            className="btn btn-outline-info btn-lg "
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
                      onClick={() => handleEditClick(fijadigital.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => eliminarRegistro(fijadigital.id)}
                    >
                      Eliminar
                    </button>
                    <button className="btn btn-warning mr-2">Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Modal */}
          {showModal && (
            <div className="modal-overlay ">
              <div className="modal-content">
                <h2>
                  <strong>¡Éxito!</strong>
                </h2>
                <p>Los datos se han eliminado correctamente.</p>
                <button
                  onClick={() => {
                    setShowModal(false);
                    /*   onClose(); // */
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
