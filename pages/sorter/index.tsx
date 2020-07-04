import React, { useState, useEffect } from "react";
import style from "./style.module.css";

import { bubbleSort } from "../../algo/sorter";

import Slider from "../../components/settings/slider";
import Dropdown from "../../components/settings/dropdown";

const min = 1;
const max = 200;
const count = 20;

export default class extends React.Component {
  state = {
    random: [],
  };

  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.setState({
      random: [...Array(count)].map(() => {
        return Math.ceil(Math.random() * (max - min) + min);
      }),
    });
  }

  updateState(update: number[]) {
    this.setState({
      random: update,
    });
  }

  render() {
    return (
      <>
        <div className={style.main}>
          <div className={style.diagram}>
            {this.state?.random.map((value, index) => {
              return (
                <div
                  className={style.bar}
                  key={index}
                  style={{
                    height: value,
                    backgroundColor: `rgb(${
                      255 * ((value - min) / (max - min))
                    }, ${255 - 255 * ((value - min) / (max - min))}, ${
                      255 - (255 * ((value - min) / (max - min))) / 2
                    })`,
                  }}
                >
                  {value}
                </div>
              );
            })}
          </div>
          <div className={style.settings}>
            <Slider title="Speed" value={50} onChange={(value) => {}} />
            <Slider title="Count" value={50} onChange={(value) => {}} />
            <Dropdown
              title="Algorithm"
              options={["Bubble Sort", "Quick Sort", "Merge Sort"]}
              onChange={(value) => {}}
            />
          </div>
          {/* <button
            className="btn btn-primary btn-block"
            onClick={() => bubbleSort(this.state.random, this.updateState)}
          >
            Sort
          </button>
          <button
            className="btn btn-light btn-block"
            onClick={() =>
              this.setState({
                random: [...Array(count)].map(() => {
                  return Math.ceil(Math.random() * (max - min) + min);
                }),
              })
            }
          >
            Reset
          </button> */}
        </div>
      </>
    );
  }
}
