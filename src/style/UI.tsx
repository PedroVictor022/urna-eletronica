import styled from "styled-components";

export const UrnaContainer = styled.div`
  background-color: #cecece;

  display: flex;
  gap: 2rem;

  padding: 1.5rem 2rem;

  box-shadow: 1px 0px 4px 1px gray;
  border-radius: 4px;
  .keys {
    background-color: #292929;
    padding: 1rem;
    border-radius: 3px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }
  .all-numbers {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .btn-number-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .key-action {
    display: flex;
    gap: 0.5rem;
  }
`;

export const UrnaDisplay = styled.div`
  border: 1px solid #222;
  padding: 1rem;
  width: 350px;
`;

export const ButtonConfirm = styled.button`
  padding: 1.2rem 0.8rem;
  color: #222;
  background-color: #119911;
  border: none;
`;
export const ButtonWhite = styled.button`
  padding: 0.6rem;
  color: #222;
  background-color: #f0f0f0;
  border: none;
  font-weight: 600;
`;
export const ButtonRed = styled.button`
  padding: 0.6rem;
  color: #222;
  background-color: #c0320e;
  border: none;
  font-weight: 600;
`;

export const ButtonNumber = styled.button`
  padding: 1rem;
  margin: 0.3rem;
  background-color: #222;
  color: #fefefe;
  font-weight: 800;
  border-radius: 4px;
  box-shadow: 1px 0px 2px 1px #1d1d1d;
  cursor: pointer;

  transition: all 0.2s;
  &:hover {
    box-shadow: 2px 0px 3px 1px #242424;
  }
`;
