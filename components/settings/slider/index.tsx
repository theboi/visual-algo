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
  // const [value, setValue] = useState(props.value);

  const onChange = {
    onChange: (event) => {
      props.onChange(event.target.valueAsNumber);
    },
    onBlur: (event) => {
      if (Number.isNaN(event.target.valueAsNumber)) {
        event.target.value = props.min
      }
      let validated = Math.round(event.target.valueAsNumber)
      if (validated > props.max) {
        validated = props.max;
      } else if (validated < props.min) {
        validated = props.min;
      }
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
          value={props.value}
          min={props.min}
          max={props.max}
          disabled={props.disabled ?? false}
          {...onChange}
        />
        <input
          type="number"
          className="form-control col-2 pr-1"
          id="slider"
          value={props.value}
          disabled={props.disabled ?? false}
          {...onChange}
        />
      </div>
    </>
  );
};
