import React from "react";
import { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import style from "./style.module.css";
import "./global.css";

export default ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Algorithm Visualiser</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={style.main}>
        <nav className={style.navbar}>
          <Link href="/">
            <a className={style.brand}>Algorithm Visualiser</a>
          </Link>
          <p>|</p>
          <div className="btn-group">
            <button
              type="button"
              className={style.algosDropdown}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {`${router.pathname?.[1]?.toUpperCase() ?? "Algorithms"}${router.pathname.slice(2) ?? ""}`}
            </button>
            <div className="dropdown-menu">
              {["Sorter", "Search"].map((value, index) => (
                <Link href={`/${value.toLowerCase()}`} key={index}>
                  <a className="dropdown-item">{value}</a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  );
};
