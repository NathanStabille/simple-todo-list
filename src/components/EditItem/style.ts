import styled from "styled-components";

export const Container = styled.div`
  font-size: 20px;

  label {
    margin-bottom: 10px;
  }
`;

export const Icon = styled.div`
  transition: 0.2s;
  border-radius: 50%;
  padding: 3px;
  margin: 0px 3px;
  &:hover {
    cursor: pointer;
    background-color: #ffc300;
  }
`;

export const ModalArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EditArea = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 400px;
    height: 30px;
    padding: 5px;
    outline: none;
    border: none;
    font-size: 18px;
    border-radius: 10px;
    box-sizing: border-box;
    margin-right: 10px;
  }

  button {
    font-family: "Josefin Sans";
    background-color: #ffc300;
    height: 30px;
    padding: 0 20px;
    border-radius: 10px;
    border: none;
    box-sizing: border-box;
    text-transform: uppercase;
    font-weight: bold;
    transition: 0.3s;
    color: #fff;

    &:hover {
      background-color: #484848;
      cursor: pointer;
    }
  }
`;
export const CloseButton = styled.button`
  background-color: transparent !important;
  margin-left: -55px;

  border: none;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
