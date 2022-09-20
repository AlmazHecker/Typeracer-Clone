import React, { FC } from "react";
import { styled } from "../../styles/stiches.config";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<MyButtonProps> = ({ children, ...other }) => {
  return <CustomButton {...other}>{children}</CustomButton>;
};

const CustomButton = styled("button", {
  fontSize: "$5",
  paddingX: "0.8em",
  paddingY: "0.2em",
});

export default Button;
