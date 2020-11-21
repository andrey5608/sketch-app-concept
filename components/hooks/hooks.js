import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    width = undefined;
    height = undefined;
    return {
      width,
      height,
    };
  }
}

export default function useWindowDimensions() {
  if (typeof window !== "undefined") {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
  } else {
    return undefined;
  }
}
