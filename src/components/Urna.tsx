import React from "react";

import { Container } from "../style/Global";
import { ButtonNumber, UrnaContainer, ButtonWhite, ButtonRed, ButtonConfirm, UrnaDisplay } from "../style/UI";

export function UrnaEletronica() {

  // Criar estado para gerenciar estes numeros | Olhar repo da calculadora online para melhor exemplo

  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const getValues = (item: number) => {
    allNumbers.includes(item)
    console.log(item);
  }

  return (
    <Container>
      <UrnaContainer>
        <UrnaDisplay>
         <img src="../assests/l.jpg" alt="" />
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
            <ButtonConfirm>Confirma</ButtonConfirm>
          </div>
        </div>
      </UrnaContainer>
    </Container>
  );
}
