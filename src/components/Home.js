import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import Transaction from "./Transaction";

import {
  AiOutlineExport,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

export default function Home() {
  let history = useHistory();
  const { user } = useContext(UserContext);
  const { token, name } = localStorage;
  const [registries, setRegistries] = useState([]);

  function logOut() {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const request = axios.post(
      "http://localhost:4000/home/signout",
      {},
      config
    );
    request.then(() => {
      localStorage.removeItem("token");
      console.log(localStorage);
      history.push("/");
    });
  }

  useEffect(() => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const request = axios.get("http://localhost:4000/home/registries", config);
    request.then((response) => {
      setRegistries(response.data);
      console.log(response.data);
    });
  }, []);

  function totalResult(registries) {
    const arrayValues = registries.map((e) => {
      return e.type === "expense" ? -e.value : e.value;
    });

    console.log(arrayValues);
    const total = arrayValues.reduce((a, b) => a + b, 0);
    console.log(total);
    return total.toFixed(2).replace(".", ",");
  }

  return (
    <Container>
      <Header>
        {`Olá, ${name}`}
        <ExportIcon onClick={logOut} />
      </Header>
      <Box>
        {registries.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          registries.map((e) => <Transaction registries={e} />)
        )}
        {registries.length !== 0 ? (
          <Saldo total={totalResult(registries)}>
            {" "}
            <h2>SALDO</h2> {totalResult(registries)}
          </Saldo>
        ) : (
          ""
        )}
      </Box>
      <Transactions teste={registries}>
        <button onClick={() => history.push("/user/revenue")}>
          <IncreaseIcon />
          <h2>
            Nova <br /> entrada
          </h2>
        </button>
        <button onClick={() => history.push("/user/expense")}>
          <DecreaseIcon />
          <h2>
            Nova
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
  display: block;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  position: relative !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: auto;

  p {
    position: absolute;
    width: 185px;
    top: calc((100% - 23px) / 2);
    left: calc((100% - 185px) / 2);
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    white-space: normal;
    word-wrap: break-word;
  }
`;

const Saldo = styled.div`
  z-index: 2;
  width: 100%;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 17px;
  line-height: 20px;
  color: ${(props) => (props.total < "0,00" ? "#C70000" : "#03AC00")};
  h2 {
    font-weight: bold;
    color: #000;
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
    border-radius: 5px;
    background-color: #a328d4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    border: none;
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
