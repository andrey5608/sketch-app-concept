import React from "react";
import "./fixed-lettering.css";
import Lettering from "../lettering/lettering";
import shouldUseExtendedSection from "../hooks/hooks";
import ScrollFixedLettering from "./scroll-fixed-lettering";

const FixedLettering = ({ text = [], title = "" }) => {
  const {shouldShowScrollButton} = shouldUseExtendedSection;

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
