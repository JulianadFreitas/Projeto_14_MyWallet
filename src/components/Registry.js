import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router";
import axios from "axios";

export default function Registry() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;
  const type = path.replace("/user/", "");
  const { token } = localStorage;

  function newRegister(event) {
    event.preventDefault();
    setIsDisabled(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const body = {
      value,
      description,
      type,
    };

    const request = axios.post(
      `http://localhost:4000/home/registries`,
      body,
      config
    );
    request.then(() => {
      history.push("/user/home");
    });
    request.catch((error) => {
      setIsDisabled(false);
      if (error.message === "Request failed with status code 500") {
        alert(
          'Preencha os dados corretamente, não são permitidos letras ou caracteres especiais no campo "valor".'
        );
        return;
      }
    });
  }
  return (
    <Container>
      <Header>{type === "revenue" ? "Nova entrada" : "Nova saída"}</Header>
      <Form onSubmit={newRegister}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Valor"
          maxlength="10"
          disabled={isDisabled}
          required
        ></input>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Descrição"
          maxlength="80"
          disabled={isDisabled}
          required
        ></input>
        <button onClick={newRegister}>
          {type === "revenue" ? "Salvar entrada" : "Salvar saída"}
        </button>
      </Form>
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
    cursor: pointer;
  }

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
