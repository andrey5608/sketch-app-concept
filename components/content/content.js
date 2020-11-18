import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Select from "../select/select";
import "./content.scss";

const options = [
  {
    label: "Cube Animation",
    value: "cubeAnimation"
  },
  {
    label: "Fall Animation",
    value: "fallAnimation"
  },
  {
    label: "Fold Out Animation",
    value: "foldOutAnimation"
  },
  {
    label: "Open Animation",
    value: "openAnimation"
  },
  {
    label: "Scale Out Animation",
    value: "scaleOutAnimation"
  }
];

const Content = withNavigationContext(({ fullpage, main, action }) => {

  return (
    <div className="content">
      <div className="content__main">{main}</div>
      <div className="content__action">
        <div className="content__action__select">
        </div>
        <div className="content__action__go">{action}</div>
      </div>
    </div>
  );
});

export default Content;
