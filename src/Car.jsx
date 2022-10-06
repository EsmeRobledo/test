import React from "react";

class Carcomponent extends React.Component {
  constructor() {
    super();
    this.state = {
      marca: "Ford",
      modelo: "Mustang",
      color: "rojo",
    };
  }
  render() {
    return (
      <h1>
        Hola mi carro es un {this.state.modelo} marca {this.state.marca} en
        color {this.state.color}
      </h1>
    );
  }
}

export default Carcomponent;
