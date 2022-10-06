import React from "react";
import Carcomponent from "./Car";

const Garage = () => {
  let valorA = 5;
  let valorB = 15;
  let suma = 0;

  function sumaFunct() {
    suma = valorA + valorB;
    console.log(suma);
  }

  return (
    <>
      <h1>Hola yo soy el Garage</h1>
      <Carcomponent />

      <p>Demostrando una funcion suma que dara como resultado {suma}</p>
    </>
  );
};

export default Garage;
