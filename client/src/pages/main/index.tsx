import React from "react";
import MainPage from "../../containers/MainPage";
import MainLayout from "../../layouts/MainLayout";

const Main = () => {
  return <MainPage />;
};

Main.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Main;
