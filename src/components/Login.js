import React from "react";
import styled from "styled-components";
export default function Login() {
  return (
    <Container>
      <Box>
        <h1>MyWallet</h1>
        <Form>
          <input
            type="email"
            //onChange={(e) => setEmail(e.target.value)}
            // value={email}
            placeholder="email"
          ></input>
        </Form>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #a328d6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  width: 90%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
  }
`;

// const StyledInput = styled.input`
// height: 58px;
// left: 25px;
// top: 233px;
// background: #FFFFFF;
// border-radius: 5px;`
// ;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  input {
    height: 58px;
    left: 25px;
    top: 233px;
    background: #ffffff;
    border-radius: 5px;
    border:none;
    margin-bottom:10px;
    outline: transparent;
  }
`;
