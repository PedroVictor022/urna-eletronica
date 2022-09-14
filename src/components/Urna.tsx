import React from "react";

import { Container } from "../style/Global";
import { ButtonNumber, UrnaContainer, ButtonWhite, ButtonRed, ButtonConfirm, UrnaDisplay } from "../style/UI";

import lula from "../assests/l.jpg";

export function UrnaEletronica() {
  return (
    <Container>
      <UrnaContainer>
        <UrnaDisplay>
         <img src="../assests/l.jpg" alt="" />
        </UrnaDisplay>
        <div className="keys">
          <div className="all-numbers">
            <div className="btn-number-grid">
              <ButtonNumber>1</ButtonNumber>
              <ButtonNumber>2</ButtonNumber>
              <ButtonNumber>3</ButtonNumber>
              <ButtonNumber>4</ButtonNumber>
              <ButtonNumber>5</ButtonNumber>
              <ButtonNumber>6</ButtonNumber>
              <ButtonNumber>7</ButtonNumber>
              <ButtonNumber>8</ButtonNumber>
              <ButtonNumber>9</ButtonNumber>
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
