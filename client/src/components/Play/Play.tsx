import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { PlayProps } from "../../pages/play";
import { styled } from "../../styles/stiches.config";
import Timer from "../Timer/Timer";
import Typing from "./Typing";

const Play: FC<PlayProps> = ({ data, words }) => {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);

  const onTimeEnd = () => {
    setIsSubmit(true);
  };

  const handleSubmit = (data: Array<String>) => {
    alert(`OMG you typed ${data.length} words per 1 minute!!`);
    router.push("/main");
  };

  return (
    <Container>
      <Timer onTimeEnd={onTimeEnd} />
      <Typing
        data={data}
        words={words}
        isSubmit={isSubmit}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default Play;

const Container = styled("div", {});
