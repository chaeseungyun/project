import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: palegoldenrod;
  border-radius: 3px;
  width: 100px;
  cursor: pointer;
  margin-top: 3px;
  &:hover{
    background-color: black;
    color: white;
    transition: background-color .3s;
  }
`;
