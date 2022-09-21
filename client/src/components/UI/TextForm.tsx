import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { styled } from "../../styles/stiches.config";
import { Text } from "../../types/text";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

interface TextFormProps {
  onSubmit: (text: string) => void;
  initialValues?: Text;
}

const TextForm: FC<TextFormProps> = ({ onSubmit, initialValues }) => {
  const [text, setText] = useState("");

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    onSubmit(text);
  };

  useEffect(() => {
    if (initialValues) {
      setText(initialValues?.text);
    }
  }, [initialValues]);
  return (
    <Container onSubmit={handleSubmit}>
      <Textarea
        placeholder="Type smth..."
        value={text}
        onChange={onTextChange}
      />
      <Button>Add text</Button>
    </Container>
  );
};

export default TextForm;

const Container = styled("form", {
  display: "grid",
  gap: "20px",
  alignItems: "flex-start",
  textarea: {
    height: "150px",
  },
});
