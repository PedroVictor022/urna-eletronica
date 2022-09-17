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
  const [numeroCandidato, setnumeroCandidato] = useState<string[]>([]);
  const [candidato, setCandidato] = useState([
    {
      id: 1,
      numero: "22",
      name: "Bolsonaro",
      qtdVotos: 0,
    },
    {
      id: 2,
      numero: "13",
      name: "Lula",
      qtdVotos: 0,
    },
    {
      id: 3,
      numero: "12",
      name: "Ciro da Massa",
      qtdVotos: 0,
    },
  ]);
  const keyValue = (item: string) => {
    if (numeroCandidato.length < 2) {
      setnumeroCandidato([...numeroCandidato, item]);
    } else {
      setnumeroCandidato([]);
      console.log("Numero maximo de caracteres atingido");
    }
  };

  const confirm = () => {
    if (numeroCandidato.length == 2) {
      // Retorna o numero digitado pelo usuario
      let userChoice = numeroCandidato.concat(numeroCandidato[0] + numeroCandidato[1])[2];

      const filterCandidato = candidato.filter(
        (item) => item.numero == userChoice
      );

      const nPresidente = filterCandidato[0]
      console.log(nPresidente);

      // if(userChoice == nPresidente.numero) {
      //   console.log(`Voto adicionado ao presidente ${nPresidente.name}`)
      // } else {
      //   console.log('Voto em nulo')
      // }

      setnumeroCandidato([]);
    } else {
      console.log("Voto em branco");
    }
  };

  return (
    <Container>
      <UrnaContainer>
        <UrnaDisplay>{<UrnaNumber>{numeroCandidato}</UrnaNumber>}</UrnaDisplay>
        <div className="keys">
          <div className="all-numbers">
            <div className="btn-number-grid">
              <ButtonNumber onClick={() => keyValue("1")}>1</ButtonNumber>
              <ButtonNumber onClick={() => keyValue("2")}>2</ButtonNumber>
              <ButtonNumber onClick={() => keyValue("3")}>3</ButtonNumber>
              <ButtonNumber onClick={() => keyValue("4")}>4</ButtonNumber>
              <ButtonNumber onClick={() => keyValue("5")}>5</ButtonNumber>
              <ButtonNumber onClick={() => keyValue("6")}>6</ButtonNumber>
              <ButtonNumber onClick={() => keyValue("7")}>7</ButtonNumber>
              <ButtonNumber onClick={() => keyValue("8")}>8</ButtonNumber>
              <ButtonNumber onClick={() => keyValue("9")}>9</ButtonNumber>
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
