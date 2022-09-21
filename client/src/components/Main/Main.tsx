import { useRouter } from "next/router";
import React from "react";
import { styled } from "../../styles/stiches.config";
import Button from "../UI/Button";
import { Title } from "../UI/Title";

const Main = () => {
  const router = useRouter();

  const onNavigateToPlay = () => {
    router.push("play");
  };

  const onNavigateToAddText = () => {
    router.push("add-text");
  };

  return (
    <Container>
      <Title>Main</Title>
      <Description>Click on the bottom button</Description>
      <MainButton onClick={onNavigateToPlay}>Start Typing</MainButton>
      <Description>Or</Description>
      <MainButton onClick={onNavigateToAddText}>Add new Text!!!</MainButton>
    </Container>
  );
};

const Container = styled("div", {
  marginTop: "90px",
});

const Description = styled("p", {
  fontFamily: "$Roboto",
});

const MainButton = styled(Button, {});

export default Main;
