import React from "react";
import Head from "next/head";
import style from "./style.module.css";

import { delay, completeAnimation } from "../../algo/sorter/utility";
import { bubbleSort } from "../../algo/sorter/bubbleSort";
import { quickSort } from "../../algo/sorter/quickSort";
import { mergeSort } from "../../algo/sorter/mergeSort";

import Slider from "../../components/settings/slider";
import Dropdown from "../../components/settings/dropdown";

import Page from "../../components/pages/page";

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

    timer: {
      swaps: -1,
      compares: -1,
    },
  };

  fetchedLocalStorage = false;

  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    if (!this.fetchedLocalStorage) {
      this.fetchedLocalStorage = true;
      this.setState(
        JSON.parse(window.localStorage.getItem("sorterSettings") ?? "{}"),
        () => {
          this.setState({
            current: random.slice(0, this.state.count),
          });
        }
      );
    }
  }

  settingsUpdated() {
    window.localStorage.setItem(
      "sorterSettings",
      JSON.stringify({
        speed: this.state.speed,
        count: this.state.count,
        algorithm: this.state.algorithm,
        color: this.state.color,
      })
    );
  }

  render() {
    const algos = [bubbleSort, quickSort, mergeSort];
    return (
      <>
        <Head>
          <link rel="icon" href="./icon-sorter.png" />
        </Head>
        <div className={style.main}>
          <Page
            diagram={
              <>
              <div className={style.diagram}>
                {this.state?.current.map((value, index) => {
                  const status = value.status
                    ? {
                        backgroundColor: [null, "#ffc107", "#28a745"][
                          value.status
                        ],
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
                            255 -
                            (255 * ((value.value - min) / (max - min))) / 2
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
              </>
            }
            settings={
              <>
                <Slider
                  title="Speed"
                  value={this.state.speed}
                  min={1}
                  max={100}
                  onChange={(value) =>
                    this.setState({ speed: value }, this.settingsUpdated)
                  }
                  disabled={this.state.isSorting}
                />
                <Slider
                  title="Count"
                  value={this.state.count}
                  min={4}
                  max={100}
                  onChange={(value) =>
                    this.setState(
                      {
                        count: value,
                        current: random.slice(0, value),
                      },
                      this.settingsUpdated
                    )
                  }
                  disabled={this.state.isSorting}
                />
                <Dropdown
                  title="Algorithm"
                  options={[
                    "Bubble Sort",
                    "Quick Sort",
                    "Merge Sort",
                    "Heap Sort",
                    // "Insertion Sort",
                    // "Tim Sort",
                    // "Bogo Sort",
                  ]}
                  value={this.state.algorithm}
                  onChange={(value) =>
                    this.setState({ algorithm: value }, this.settingsUpdated)
                  }
                  disabled={this.state.isSorting}
                />
                <Dropdown
                  title="Color"
                  options={["Default", "Gradient"]}
                  value={this.state.color}
                  onChange={(value) =>
                    this.setState({ color: value }, this.settingsUpdated)
                  }
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
                          const [result, timer] = await algos[
                            this.state.algorithm
                          ](this.state.current, {
                            speed: 101 - this.state.speed,
                            setState: this.setState,
                          });
                          this.setState({ timer: timer });

                          completeAnimation(
                            result as { value: number; status: number }[],
                            this.setState
                          );
                          delay(700, () => {
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
                        timer: {
                          swaps: -1,
                          compares: -1,
                        },
                      });
                    }}
                  >
                    Randomise List
                  </button>
                </div>
                <div>
                  {this.state.timer.compares === -1 ? null : (
                    <p className={style.speed}>
                      {this.state.timer.compares} comparison
                      {this.state.timer.compares === 1 ? null : "s"} <br/>
                      {this.state.timer.swaps} swap
                      {this.state.timer.swaps === 1 ? null : "s"}
                      {/* (approx{" "}
                      {this.state.timer.compares * (101 - this.state.speed)} ms) */}
                    </p>
                  )}
                </div>
              </>
            }
          />
        </div>
      </>
    );
  }
}
