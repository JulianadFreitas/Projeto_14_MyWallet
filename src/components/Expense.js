import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Expense() {
  return (
    <Container>
      <Header>Nova Saída</Header>
      <Form>
        <input
          type="text"
          //onChange={(e) => set(e.target.value)}
          // value={}
          placeholder="Valor"
          required
        ></input>
        <input
          type="text"
          // onChange={(e) => set(e.target.value)}
          //value={}
          placeholder="Descrição"
          required
        ></input>
      </Form>
      <button>Salvar saída</button>
    </Container>
  );
}
const Container = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  margin: 0 auto;
  button {
    height: 46px;
    width: 100%;
    background-color: #a328d4;
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
    outline: transparent;
    color: #ffffff;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
  }
`;

const Header = styled.div`
  position: fixed;
  top: 30px;
  width: 90%;
  height: 70px;
  color: #ffffff;
  font-weight: bold;
  font-size: 26px;
  line-height: 23px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;

  input {
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    border: none;
    margin-bottom: 15px;
    outline: transparent;
    padding-left: 15px;
    color: #000000;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    line-height: 23px;

    ::-webkit-input-placeholder {
      color: #000000;
      font-family: "Raleway", sans-serif;
      font-size: 20px;
      line-height: 23px;
    }
  }
`;
