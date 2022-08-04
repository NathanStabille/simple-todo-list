import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    font-family: "Josefin Sans";
    flex: 1;
    margin: 30px 0;
    margin-right: 10px;
    font-size: 20px;
    height: 40px;
    border-radius: 10px;
    outline: none;
    border: none;
    box-sizing: border-box;
  }
  button {
    font-family: "Josefin Sans";
    background-color: #ffc300;
    height: 40px;
    padding: 0 25px;
    border-radius: 10px;
    border: none;
    box-sizing: border-box;
    text-transform: uppercase;
    font-weight: bold;
    transition: 0.3s;
    color: #fff;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
`;
