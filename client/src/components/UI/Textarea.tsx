import React from "react";
import { styled } from "../../styles/stiches.config";

const Textarea = ({ ...other }) => {
  return <CustomTextarea {...other} />;
};

export default Textarea;

const CustomTextarea = styled("textarea", {
  width: "100%",
  padding: "10px",
  fontSize: "$4",
  fontFamily: "$Roboto",
  "&::placeholder": {
    fontFamily: "$Roboto",
  },
  resize: "none",
});
