import React, { useState } from "react";

import style from "../style.module.css";

export default (props: {
  title: string;
  value: number;
  onChange: (value) => void;
}) => {
  const [value, setValue] = useState(props.value);

  return (
    <>
      <div className={style.main}>
        <label htmlFor="slider" className={style.label}>
          {props.title}
        </label>
        <input
          type="range"
          className="custom-range"
          id="slider"
          value={value}
          onChange={(event) => {
            setValue(event.target.valueAsNumber)
            props.onChange(event.target.valueAsNumber);
          }}
        />
        <input
          type="number"
          className="form-control col-2"
          id="slider"
          value={value}
          onChange={event => {
            setValue(event.target.valueAsNumber)
            props.onChange(event.target.valueAsNumber);
          }}
        />
      </div>
    </>
  );
};
