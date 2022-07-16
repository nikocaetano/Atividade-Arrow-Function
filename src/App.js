import React, { Component } from "react";

export default class none extends Component{
  frase = () => ('Olá, este sou eu fazendo a atividade de Arrow Function')
  number = () => (25)

  render() {
    return (
      <div>
        <h1>{this.frase()}</h1>
        {this.number()*2}
      </div>
    )
  }
}