import React, { useState } from "react";

import style from "../style.module.css";

export default (props: {
  title: string;
  value: number;
  onChange: (value) => void;
  min: number;
  max: number;
  disabled?: boolean
}) => {
  const [value, setValue] = useState(props.value);

  const onChange = {
    onChange: (event) => {
      setValue(event.target.valueAsNumber);
      props.onChange(event.target.valueAsNumber);
    },
    onBlur: (event) => {
      let validated = Math.round(event.target.valueAsNumber)
      if (validated > props.max) {
        validated = props.max;
      } else if (validated < props.min) {
        validated = props.min;
      }
      setValue(validated);
      props.onChange(validated);
    },
  }

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
          min={props.min}
          max={props.max}
          disabled={props.disabled ?? false}
          {...onChange}
        />
        <input
          type="number"
          className="form-control col-2 pr-1"
          id="slider"
          value={value}
          disabled={props.disabled ?? false}
          {...onChange}
        />
      </div>
    </>
  );
};
