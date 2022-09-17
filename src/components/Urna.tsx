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
  const [choiceNumber, setChoiceNumber] = useState<number[]>([]);

  // Criar estado para gerenciar estes numeros | Olhar repo da calculadora online para melhor exemplo

  const getValues = (item: number) => {
    console.log(item, typeof item);

    if (choiceNumber.length < 2) {
      setChoiceNumber([...choiceNumber, item]);
    } else {
      setChoiceNumber([]);
      console.log("Numero maximo de caracteres atingido");
    }

    console.log(choiceNumber);
  };

  const confirm = () => {
    if(choiceNumber.length == 2) {
      console.log('Voto confirmado');
      setChoiceNumber([]);
    } else {
      console.log('Voto em branco');
    }
  };

  return (
    <Container>
      <UrnaContainer>
        <UrnaDisplay>
          {
            <UrnaNumber>{choiceNumber}</UrnaNumber>
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
