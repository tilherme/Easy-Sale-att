import React from 'react';

import card from './card.png'
import './style.css';


export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
     

          <h1>Cadastro</h1>
         <img src= {card} className="card1"/>

        
        </section>
        <form>
          <label>Codigo do produto</label>
          <input placeholder="Codigo" required />
          <label>Codigo do produto</label>
          <input type="txt" placeholder="Descrição" required />
          <label>Codigo do produto</label>
          <input type="number" placeholder="unidade" required />
          <label>Codigo do produto</label>
          <input type="number" placeholder="Preço" required />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}