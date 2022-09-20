import React, { ReactElement, ReactNode } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
