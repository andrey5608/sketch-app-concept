import React from "react";
import "./fixed-lettering.css";
import Lettering from "../lettering/lettering";
import useWindowDimensions from "../hooks/hooks";
import ScrollFixedLettering from "./scroll-fixed-lettering";

const FixedLettering = ({ text = [], title = "" }) => {
  var shouldShowScrollButton = false;
  if (useWindowDimensions() !== undefined) {
    const { height, width } = useWindowDimensions();
    shouldShowScrollButton =
      text.length > 0 &&
      text[0].length > 500 &&
      (width <= 1100 || height <= 500);
  }

  if (!shouldShowScrollButton) {
    return (
      <div className="fixed-lettering">
        <Lettering text={text} title={title} />
      </div>
    );
  } else {
    return <ScrollFixedLettering />;
  }
};

export default FixedLettering;
