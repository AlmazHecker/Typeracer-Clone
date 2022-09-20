import React, { FC } from "react";
import PropTypes from "prop-types";
import { styled } from "../styles/stiches.config";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainLayout;

const Container = styled("div", {
  width: "$desktop",
  marginX: "auto",
});
