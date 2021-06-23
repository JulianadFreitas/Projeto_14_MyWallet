import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
export default function Register() {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [username, setUsername] =useState("");
    console.log(email, password, username)
    console.log(localStorage);
  return (
    <Container>
      <Box>
        <h1>MyWallet</h1>
        <Form>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Nome"
            required
          ></input>
          
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="E-mail"
            required
          ></input>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Senha"
            required
          ></input>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Confirme a senha"
            required
          ></input>
        </Form>
        <button>Cadastrar</button>
       <p> <Link to ="/">Já tem uma conta? Entre agora!</Link></p>
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
    text-decoration: none;  }

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

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

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
