import React from "react";
import "./addCustomer.css";

const AddCustomer = () => {
  const lista = [
    {
      nombre: "Esmeralda",
      telefono: "9168418886",
      comensales: 5,
    },
    {
      nombre: "Juan",
      telefono: "9168418886",
      comensales: 5,
    },
    {
      nombre: "Maria",
      telefono: "9168418886",
      comensales: 5,
    },
  ];

  
  return (
    <>
      <div>
        <div>
          <h2>Agregar Customer</h2>
          <form>
            <div>
              <label>Nombre:</label>
              <input type="text" name="nombre" placeholder="Nombre" />
            </div>
            <div>
              <label>Telefono:</label>
              <input type="text" name="telefono" placeholder="telefono" />
            </div>
            <div>
              <label>Comensales:</label>
              <input type="number" name="comensales" placeholder="comensales" />
            </div>
            <div>
              <button>Agregar</button>
            </div>
          </form>
        </div>
        <div>
          <h3>Lista de Espera</h3>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Comensales</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((customer, index) => {
                return (
                  <tr key={index}>
                    <td>{customer.nombre}</td>
                    <td>{customer.telefono}</td>
                    <td>{customer.comensales}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
