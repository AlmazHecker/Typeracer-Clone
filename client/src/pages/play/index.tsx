import { GetServerSideProps } from "next";
import React from "react";
import { getTextRequest } from "../../api/textService";
import PlayPage from "../../containers/PlayPage";
import MainLayout from "../../layouts/MainLayout";
import { Text } from "../../types/text";

export interface PlayProps {
  data: Text;
  words: Array<String>;
}

const Play = ({ data, words }: PlayProps) => {
  return <PlayPage data={data} words={words} />;
};

Play.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getTextRequest();

  return {
    props: { data, words: data.text.replace(/\n/g, " ").split(" ") },
  };
};

export default Play;
