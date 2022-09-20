import React, { FC } from "react";
import { styled } from "../../styles/stiches.config";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<MyInputProps> = ({ ...other }) => {
  return <CustomInput {...other} />;
};

export default Input;

const CustomInput = styled("input", {
  width: "100%",
  padding: "10px",
  fontSize: "$4",
  fontFamily: "$Roboto",
});
