import React, { ReactNode } from "react";

import style from "./style.module.css";

export default (props: { diagram: ReactNode; settings: ReactNode }) => {
  return (
    <>
      <div className={style.main}>
        <div className={style.diagram}>{props.diagram}</div>
        <div className={style.settings}>
          {props.settings}
          <div className={style.credits}>
            <p>
              Made with ♥ by{" "}
              <a href="https://www.ryanthe.com" target="_blank">
                Ryan The
              </a>
              , 2020
            </p>
            <p>
              Open sourced on{" "}
              <a href="https://github.com/theboi/visual-algo" target="_blank">
                GitHub
              </a>
              .{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
