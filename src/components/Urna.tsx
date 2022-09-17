import React, { useState } from "react";

import { Container } from "../style/Global";
import {
  ButtonNumber,
  UrnaContainer,
  ButtonWhite,
  ButtonRed,
  ButtonConfirm,
  UrnaDisplay,
  UrnaNumber,
} from "../style/UI";

export function UrnaEletronica() {
  const [numeroCandidato, setnumeroCandidato] = useState<number[]>([]);
  const [ candidato, setCandidato ] = useState([
    {
      id: 1, 
      numero: "22",
      name: 'Bolsonaro',
      qtdVotos: 0
    },
    {
      id: 2,
      numero: "13", 
      name: 'Lula',
      qtdVotos: 0
    },
    {
      id: 3,
      numero: "12",
      name: 'Ciro da Massa',
      qtdVotos: 0
    }
  ])

  // Criar estado para gerenciar estes numeros | Olhar repo da calculadora online para melhor exemplo

  const getValues = (item: number) => {
    console.log(item, typeof item);

    if (numeroCandidato.length < 2) {
      setnumeroCandidato([...numeroCandidato, item]);
    } else {
      setnumeroCandidato([]);
      console.log("Numero maximo de caracteres atingido");
    }

    console.log(numeroCandidato);
  };

  const confirm = () => {
    if(numeroCandidato.length == 2) {

      let c = numeroCandidato.concat(numeroCandidato[0] + numeroCandidato[1]);
      console.log(c);
      // const candTemp = candidato.map((item) => item.numero == item.numero)

      setnumeroCandidato([]);
    } else {
      console.log('Voto em branco');
    }
  };

  return (
    <Container>
      <UrnaContainer>
        <UrnaDisplay>
          {
            <UrnaNumber>{numeroCandidato}</UrnaNumber>
          }
        </UrnaDisplay>
        <div className="keys">
          <div className="all-numbers">
            <div className="btn-number-grid">
              <ButtonNumber onClick={() => getValues(1)}>1</ButtonNumber>
              <ButtonNumber onClick={() => getValues(2)}>2</ButtonNumber>
              <ButtonNumber onClick={() => getValues(3)}>3</ButtonNumber>
              <ButtonNumber onClick={() => getValues(4)}>4</ButtonNumber>
              <ButtonNumber onClick={() => getValues(5)}>5</ButtonNumber>
              <ButtonNumber onClick={() => getValues(6)}>6</ButtonNumber>
              <ButtonNumber onClick={() => getValues(7)}>7</ButtonNumber>
              <ButtonNumber onClick={() => getValues(8)}>8</ButtonNumber>
              <ButtonNumber onClick={() => getValues(9)}>9</ButtonNumber>
            </div>
            <div className="btn-0">
              <ButtonNumber>0</ButtonNumber>
            </div>
          </div>
          <div className="key-action">
            <ButtonWhite>Branco</ButtonWhite>
            <ButtonRed>Corrige</ButtonRed>
            <ButtonConfirm onClick={() => confirm()}>Confirma</ButtonConfirm>
          </div>
        </div>
      </UrnaContainer>
    </Container>
  );
}
