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

  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`;

export const UrnaNumber = styled.p`
  font-size: 102px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
`

export const ButtonConfirm = styled.button`
  padding: 1.2rem 0.8rem;
  color: #222;
  background-color: #119911;
  border: 2px solid #0bd80b;
  border-radius: 4px;
  &:hover {
    border:2px solid #41e441;
  }
`;
export const ButtonWhite = styled.button`
  padding: 0.6rem;
  color: #222;
  background-color: #f0f0f0;
  border: 2px solid gray;
  border-radius: 4px;
  font-weight: 600;

  &:hover {
    border:2px solid #b4b4b4;
  }
`;
export const ButtonRed = styled.button`
  padding: 0.6rem;
  color: #222;
  background-color: #c0320e;
  border: 2px solid #701903;
  border-radius: 4px;
  font-weight: 600;
  &:hover {
    border:2px solid #aa0d07;
  }
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
  border: 1px solid #474747;

  transition: all 0.1s;
  &:hover {
    box-shadow: 2px 0px 3px 1px #242424;
    border: 1px solid #333333;
  }
`;

export const UserConfigs = styled.div`
  display: flex;
  align-items:center;
  gap: 1rem;

  margin-top: 1.5rem;

  button {
    padding: 1rem;

    border-radius: 4px;
    border: none;

    background-color: #119911;
  }
`;