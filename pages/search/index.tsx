import React from "react";

import style from "./style.module.css";

import Slider from "../../components/settings/slider";
import Dropdown from "../../components/settings/dropdown";

import Page from "../../components/pages";

export default class Name extends React.Component {
  render() {
    return (
      <>
        <div className={style.main}>
          <Page
            diagram={<></>}
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
