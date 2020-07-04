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
    isSorting: false,
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
            <div className={style.control}>
              <button
                type="button"
                className={`btn btn-${
                  this.state.isSorting ? "danger" : "primary"
                }`}
                onClick={() => {
                  if (this.state.isSorting) {
                    // TODO: ADD SORT STOP
                  } else {
                    bubbleSort(this.state.random, this.updateState);
                  }
                  this.setState({ isSorting: !this.state.isSorting });
                }}
              >
                {this.state.isSorting ? "Pause" : "Start"}
              </button>
              <button
                type="button"
                className="btn btn-light"
                disabled={this.state.isSorting ? true : false}
                onClick={() =>
                  this.setState({
                    random: [...Array(count)].map(() => {
                      return Math.ceil(Math.random() * (max - min) + min);
                    }),
                  })
                }
              >
                New
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
