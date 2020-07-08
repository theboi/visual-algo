import React, { useState, useEffect } from "react";
import style from "./style.module.css";

import { delay, completeAnimation } from "../../algo/sorter/utility";
import { bubbleSort } from "../../algo/sorter/bubbleSort";
import { quickSort } from "../../algo/sorter/quickSort";
import { mergeSort } from "../../algo/sorter/mergeSort";

import Slider from "../../components/settings/slider";
import Dropdown from "../../components/settings/dropdown";

const min = 1;
const max = 500;
let random = [...Array(200)].map(() => {
  return {
    value: Math.ceil(Math.random() * (max - min) + min),
    status: 0,
  };
});

export default class extends React.Component {
  state = {
    current: [],
    isSorting: false,

    speed: 75,
    count: 20,
    algorithm: 0,
    color: 0,

    timer: 0,
  };

  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.setState({
      current: random.slice(0, this.state.count),
    });
  }

  render() {
    const algos = [bubbleSort, quickSort, mergeSort];
    return (
      <>
        <div className={style.main}>
          <div className={style.diagram}>
            {this.state?.current.map((value, index) => {
              const status = value.status
                ? {
                    backgroundColor: [null, "#ffc107", "#28a745"][value.status],
                  }
                : null;
              return (
                <div
                  className={style.bar}
                  key={index}
                  style={{
                    height: value.value,
                    backgroundColor: [
                      "#007bff",
                      `rgb(${255 * ((value.value - min) / (max - min))}, ${
                        255 - 255 * ((value.value - min) / (max - min))
                      }, ${
                        255 - (255 * ((value.value - min) / (max - min))) / 2
                      })`,
                    ][this.state.color],
                    ...status,
                  }}
                >
                  {this.state.count < 70 ? (
                    <p className={style.barLabel}>{value.value}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className={style.settings}>
            <Slider
              title="Speed"
              value={this.state.speed}
              min={1}
              max={100}
              onChange={(value) => this.setState({ speed: value })}
              disabled={this.state.isSorting}
            />
            <Slider
              title="Count"
              value={this.state.count}
              min={4}
              max={100}
              onChange={(value) =>
                this.setState({
                  count: value,
                  current: random.slice(0, value),
                })
              }
              disabled={this.state.isSorting}
            />
            <Dropdown
              title="Algorithm"
              options={[
                "Bubble Sort",
                "Quick Sort",
                "Merge Sort",
                // "Heap Sort",
                // "Insertion Sort",
                // "Tim Sort",
              ]}
              onChange={(value) => this.setState({ algorithm: value })}
              disabled={this.state.isSorting}
            />
            <Dropdown
              title="Color"
              options={["Default", "Gradient"]}
              onChange={(value) => this.setState({ color: value })}
              disabled={this.state.isSorting}
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
                    (async () => {
                      const [result, timer] = await algos[this.state.algorithm](
                        this.state.current,
                        101 - this.state.speed,
                        this.setState
                      );
                      this.setState({ timer: timer });

                      delay(100, () => {
                        completeAnimation(
                          result as { value: number; status: number }[],
                          this.setState
                        );
                        this.setState({ isSorting: false });
                      });
                    })();
                  }
                  this.setState({ isSorting: !this.state.isSorting });
                }}
              >
                {this.state.isSorting ? "Stop Sorting" : "Start Sorting"}
              </button>
              <button
                type="button"
                className="btn btn-light"
                disabled={this.state.isSorting}
                onClick={() => {
                  random = [...Array(200)].map(() => {
                    return {
                      value: Math.ceil(Math.random() * (max - min) + min),
                      status: 0,
                    };
                  });
                  this.setState({
                    current: random.slice(0, this.state.count),
                    timer: 0,
                  });
                }}
              >
                Randomise List
              </button>
            </div>
            <div>
              {this.state.timer ? (
                <p className={style.speed}>
                  {this.state.timer} swap{this.state.timer === 1 ? null : "s"}{" "}
                  (approx {this.state.timer * (101 - this.state.speed)} ms)
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}
