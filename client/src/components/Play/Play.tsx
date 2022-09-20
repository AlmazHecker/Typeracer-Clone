import React from "react";
import { styled } from "../../styles/stiches.config";
import Input from "../UI/Input";
import { Title } from "../UI/Title";

const Play = () => {
  return (
    <Container>
      <Title>Practice Racetrack. Go!</Title>
      <WordsContainer>afdlajdkja hello world</WordsContainer>
      <Input />
    </Container>
  );
};

export default Play;

const Container = styled("div", {
  marginTop: "90px",
});

const WordsContainer = styled("div", {
  fontFamily: "$Roboto",
  background: "rgb(246,251,255)",
  borderRadius: "6px",
  padding: "10px",
  color: "black",
  fontSize: "20px",
  marginBottom: "40px",
});
