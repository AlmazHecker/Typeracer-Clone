import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { getTextByIdRequest } from "../../api/textService";
import UpdateTextPage from "../../containers/UpdateTextPage";
import MainLayout from "../../layouts/MainLayout";
import { Text } from "../../types/text";

export interface UpdateTextProps {
  data: Text;
}

const UpdateText = ({ data }: UpdateTextProps) => {
  return <UpdateTextPage data={data} />;
};

export default UpdateText;

UpdateText.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id }: any = ctx.params;
  const { data } = await getTextByIdRequest(id);
  return {
    props: { data: { text: data.text.replace(/\n/g, " ") } },
  };
};
