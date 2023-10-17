// FijaDigitalShow.jsx
import React from "react";

const FijaDigitalShow = ({ recordId, onClose }) => {
  return (
    <div className="container">

        <h2>Detalles del Registro</h2>
        <button className="btn btn-info float-lg-right m-2"
                        onClick={() => {
                          onClose();
                        }}
                      >
                        atrás
                      </button>
        <table className="table table-light">
          <tbody>
            <tr>
              <td>ID:</td>
              <td>{recordId.id}</td>
            </tr>
            <tr>
              <td>Nombres:</td>
              <td>{recordId.nombres}</td>
            </tr>
            <tr>
              <td>Documento:</td>
              <td>{recordId.documento}</td>
            </tr>
            <tr>
              <td>Dia:</td>
              <td>{recordId.dia}</td>
            </tr>
            <tr>
              <td>Hora:</td>
              <td>{recordId.hora}</td>
            </tr>
            <tr>
              <td>Hora:</td>
              <td>{recordId.hora}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default FijaDigitalShow;
