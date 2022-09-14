import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Global = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
`;

export const Container = styled.div`
   background-color: #d3d3d3;
   width: 100%;
   height: 100vh;

   display: flex;
   align-items:center;
   justify-content:center;

   padding: 1rem;
`