import React, { useState } from "react";

import style from "../style.module.css";

export default (props: {
  title: string;
  options: string[];
  onChange: (value) => void;
  disabled?: boolean;
}) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className={style.main}>
        <label htmlFor="dropdown" className={style.label}>
          {props.title}
        </label>
        <div id="dropdown">
          <button
            className={`btn dropdown-toggle btn-${props.disabled ?? false ? "secondary" : "outline-primary"}`}
            type="button"
            id="dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            disabled={props.disabled ?? false}
          >
            {props.options[selected]}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdown">
            {props.options.map((value, index) => (
              <button
                className="dropdown-item"
                type="button"
                key={index}
                onClick={() => {
                  setSelected(index)
                  props.onChange(index)
                }}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};