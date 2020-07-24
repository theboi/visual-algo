import React from "react";

import style from "./style.module.css";

import Slider from "../../components/settings/slider";
import Dropdown from "../../components/settings/dropdown";

import Page from "../../components/pages/page";

export default class Name extends React.Component {
  state = {
    current: []
  }

  fetchedLocalStorage = false;

  componentDidMount() {
    if (!this.fetchedLocalStorage) {
      this.fetchedLocalStorage = true;
      this.setState(
        JSON.parse(window.localStorage.getItem("sorterSettings") ?? "{}"),
        () => {
          // this.setState({
          //   current: random.slice(0, this.state.count),
          // });
        }
      );
    }
  }

  render() {
    return (
      <>
        <div className={style.main}>
          <Page
            diagram={
              <>
                <div className={style.diagram}>
                  {[...Array(100)]}
                </div>
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
              </>
            }
          />
        </div>
      </>
    );
  }
}
