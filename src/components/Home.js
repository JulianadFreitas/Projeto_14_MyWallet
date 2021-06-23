import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineExport,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

export default function Home() {
  let history = useHistory();

  return (
    <Container>
      <Header>
        Olá Fulano
        <ExportIcon />
      </Header>
      <Box>
        <p>Não há registros de entrada ou saída</p>
      </Box>
      <Transactions>
        <button onClick={() =>  history.push("/revenue")}>
          <IncreaseIcon />
          <h2>Nova <br /> entrada
          </h2>
        </button>
        <button onClick={() =>  history.push("/expense")}>
          <DecreaseIcon />
          <h2>Nova
            <br /> saida
          </h2>
        </button>
      </Transactions>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-space-between;
  align-items: center;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
`;

const Header = styled.div`
  position: fixed;
  top: 10px;
  width: 90%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 26px;
  line-height: 23px;
`;

const Box = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 80px;
  margin-bottom: 145px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  p {
    position: absolute;
    width: 180px;
    top: calc((100% - 23px) / 2);
    left: calc((100% - 180px) / 2);
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    word-wrap: break-word;
  }
`;

const Transactions = styled.div`
  width: 90%;
  height: 114px;
  position: fixed;
  bottom: 0px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 47.5%;
    padding: 10px;
    height: 100%;
    background-color: blue;
    border-radius: 5px;
    background-color: #a328d4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    border:none;
  }
`;
const ExportIcon = styled(AiOutlineExport)`
  font-size: 30px;
  cursor: pointer;
`;

const DecreaseIcon = styled(AiOutlineMinusCircle)`
  font-size: 30px;
  cursor: pointer;
`;

const IncreaseIcon = styled(AiOutlinePlusCircle)`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;
