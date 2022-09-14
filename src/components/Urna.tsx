import React from "react";

import styled from "styled-components";
import { Container } from "../style/Global";

const UrnaContainer = styled.div`
  background-color: #c4c4c4;
  
  display: flex;
  gap: 2rem;

  padding: 1.5rem;

  box-shadow: 1px 0px 4px 1px gray;
  border-radius: 4px;

  buttons {
   cursor: pointer;
  }

  .urna-display {
   border: 1px solid #222;
   padding: 1rem;
  }
`;

export function UrnaEletronica() {
  return (
      <Container>
        <UrnaContainer>
         <div className="urna-display">
            Voce votou em fulano
         </div>
         <div className="keys">
            <div className="btn-number">
               <p>1</p>
               <p>2</p>
               <p>3</p>
               <p>4</p>
               <p>5</p>
               <p>6</p>
               <p>7</p>
               <p>8</p>
               <p>9</p>
               <p>0</p>
            </div>
            <div className="key-action">
               <button>Branco</button>
               <button>Corrige</button>
               <button>Confirma</button>
            </div>
         </div>
        </UrnaContainer>
      </Container>
  );
}
