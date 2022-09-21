import React, { FC } from "react";
import Play from "../components/Play/Play";
import { PlayProps } from "../pages/play";

const PlayPage: FC<PlayProps> = ({ data, words }) => {
  return <Play data={data} words={words} />;
};

export default PlayPage;
