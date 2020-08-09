import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Tabla integrantes PPI AQUAMM </h1>

      <table className="table table-hover">
        <thead className="table-secondary">
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Celular</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alexander</td>
            <td>Quintana Amador</td>
            <td>alesanderamador@gmail.com</td>
            <td>3114188593</td>
          </tr>

          <tr>
            <td>Mariana</td>
            <td>Ávila López</td>
            <td>avilalopezmariana@gmail.com</td>
            <td>3215549842</td>
          </tr>

          <tr>
            <td>Michel</td>
            <td>Diaz Desales</td>
            <td>micheldiaz691@gmail.com</td>
            <td>3024520411</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

