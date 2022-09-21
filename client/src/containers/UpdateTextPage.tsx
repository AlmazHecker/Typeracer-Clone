import { useRouter } from "next/router";
import React, { FC } from "react";
import { updateTextRequest } from "../api/textService";
import TextForm from "../components/UI/TextForm";
import { UpdateTextProps } from "../pages/update-text/[id]";

const UpdateTextPage: FC<UpdateTextProps> = ({ data }) => {
  const router = useRouter();

  const onSubmit = async (text: string) => {
    if (router.query?.id) {
      await updateTextRequest({ text }, +router.query?.id);
    }
    router.push("/main");
  };
  return <TextForm onSubmit={onSubmit} initialValues={data} />;
};

export default UpdateTextPage;
