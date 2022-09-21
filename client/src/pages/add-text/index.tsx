import React from "react";
import AddTextPage from "../../containers/AddTextPage";
import MainLayout from "../../layouts/MainLayout";

const AddText = () => {
  return <AddTextPage />;
};

AddText.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default AddText;
