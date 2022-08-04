import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  font-size: 16px;

  ul {
    padding: 0;
    border: 1px solid #ffc300;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 0 5px;
    line-height: normal;
  }

  li {
    flex: 1;
    list-style: none;
    font-size: 20px;
    text-transform: uppercase;
    font-family: "Josefin Sans";
    padding: 10px 5px;
  }
`;
