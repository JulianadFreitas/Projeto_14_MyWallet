import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

export default function Transaction(props) {
  const register = props.registries;
  const valueEdit = ((register.value / 100) * 100).toFixed(2);

  return (
    <List>
      <Box>
        <Date>{dayjs(register.date).format("DD/MM")}</Date>
        <Description>{register.description}</Description>
      </Box>
      <Value type={register.type}>
        <h2>{valueEdit.toString().replace(".", ",")}</h2>
      </Value>
    </List>
  );
}
const List = styled.div`
  width: 100%;
  height: 55px;
  color: black;
  display: flex;
  justify-content: space-between;
  font-family: "Raleway", sans-serif;
  padding: 15px;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;
const Box = styled.div`
  display: flex;
`;
const Date = styled.div`
  color: #c6c6c6;
  margin-right: 10px;
`;

const Description = styled.div`
  width: 140px;
  word-wrap: break-word;
  color: #000000;
`;
const Value = styled.div`
  width: 65px;
  overflow-wrap: normal;
  word-break: break-all;
  text-overflow: ellipsis;
  color: ${(props) => (props.type === "expense" ? "#C70000" : "#03AC00")};

  h2 {
    white-space: normal;
    height: 100%;
    top: calc((100% - 19px) / 2);
    text-align: right;
    word-wrap: break-word;
    margin-left: auto;
  }
`;
