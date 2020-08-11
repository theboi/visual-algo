import React from "react";

import style from "./style.module.css";

import Slider from "../../components/settings/slider";
import Dropdown from "../../components/settings/dropdown";

import Page from "../../components/pages/page";

const COLUMNS = 100;
const ROWS = 100;
const START_NODE = {
  ROW: 10,
  COL: 10,
};
const FINISH_NODE = {
  ROW: 10,
  COL: 10,
};

export default class extends React.Component {
  state = {
    current: [
      ...Array(ROWS).map((row) => [
        ...Array(COLUMNS).map((col) => ({
          row,
          col,
          isStart: row === START_NODE.ROW && col === START_NODE.COL,
          isFinish: row === FINISH_NODE.ROW && col === FINISH_NODE.COL,
          isVisited: false,
          isWall: false,
        })),
      ]),
    ],
    isPathfinding: false,

    algorithm: 0,
  };

  fetchedLocalStorage = false;

  componentDidMount() {
    if (!this.fetchedLocalStorage) {
      this.fetchedLocalStorage = true;
      this.setState(
        JSON.parse(window.localStorage.getItem("pathfinderSettings") ?? "{}")
      );
    }
  }

  settingsUpdated() {
    window.localStorage.setItem(
      "sorterSettings",
      JSON.stringify({
        // speed: this.state.speed,
        // count: this.state.count,
        algorithm: this.state.algorithm,
        // color: this.state.color,
      })
    );
  }

  render() {
    console.log([...Array(10)].fill([...Array(10)]))

    return (
      <>
        <div className={style.main}>
          <Page
            diagram={
              <>
                <div className={style.diagram}>{[...Array(10)].fill([...Array(10)])}</div>
              </>
            }
            settings={
              <>
                <Slider
                  title="Test"
                  value={100}
                  min={1}
                  max={100}
                  onChange={(value) => null}
                  disabled={false}
                />
                <Dropdown
                  title="Algorithm"
                  options={["Dijkstra's SPF", "A* Search"]}
                  value={this.state.algorithm}
                  onChange={(value) =>
                    this.setState({ algorithm: value }, this.settingsUpdated)
                  }
                  disabled={this.state.isPathfinding}
                />
              </>
            }
          />
        </div>
      </>
    );
  }
}
