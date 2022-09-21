import { useRouter } from "next/router";
import React from "react";
import { createTextRequest } from "../api/textService";
import TextForm from "../components/UI/TextForm";

const AddTextPage = () => {
  const router = useRouter();
  const onSubmit = async (text: string) => {
    await createTextRequest({ text });
    router.push("/main");
  };
  return <TextForm onSubmit={onSubmit} />;
};

export default AddTextPage;
