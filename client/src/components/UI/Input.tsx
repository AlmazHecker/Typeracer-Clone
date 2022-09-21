import React, { FC, InputHTMLAttributes } from "react";
import { styled } from "../../styles/stiches.config";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (
  { ...other }: any,
  ref:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined
) => {
  return <CustomInput ref={ref} {...other} />;
};

export default React.forwardRef<HTMLInputElement, MyInputProps>(Input);

const CustomInput = styled("input", {
  width: "100%",
  padding: "10px",
  fontSize: "$4",
  fontFamily: "$Roboto",
  "&::placeholder": {
    fontFamily: "$Roboto",
  },
});
