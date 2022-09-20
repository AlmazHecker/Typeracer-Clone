import React from "react";
import PlayPage from "../../containers/PlayPage";
import MainLayout from "../../layouts/MainLayout";

const Play = () => {
  return <PlayPage />;
};

Play.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Play;
