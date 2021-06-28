import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  let history = useHistory();

  function SaveRegister(event) {
    event.preventDefault();
    if (username && email && password && confirmPassword) {
      setIsDisabled(true);
      const body = {
        name: username,
        email,
        password,
      };
      const request = axios.post("http://localhost:4000/user/signup", body);
      request.then(() => {
        setIsDisabled(false);
        alert("sucesso no cadastro!");
        history.push("/");
      });
      request.catch(() => {
        setIsDisabled(false);
        alert("Não foi possível realizar o cadastro.");
      });
    }
  }
  return (
    <Container>
      <Box>
        <h1>MyWallet</h1>
        <Form onSubmit={SaveRegister}>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Nome"
            disabled={isDisabled}
            required
          ></input>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="E-mail"
            disabled={isDisabled}
            required
          ></input>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Senha"
            disabled={isDisabled}
            required
          ></input>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Confirme a senha"
            disabled={isDisabled}
            required
          ></input>
          <button type="submit" onClick={SaveRegister}>
            Cadastrar
          </button>
        </Form>
        <p>
          {" "}
          <Link to="/">Já tem uma conta? Entre agora!</Link>
        </p>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Saira Stencil One", cursive;
  margin: 0 auto;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Raleway", sans-serif;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
    margin-bottom: 20px;
  }

  a {
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    text-decoration: none;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

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
