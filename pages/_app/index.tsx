import React from "react";
import { AppProps } from "next/app";

import style from "./style.module.css";
import "./global.css";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <div className={style.main}>
        <Component {...pageProps} />
      </div>
    </>
  );
};
