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

export function useWindowDimensions() {
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

export default function shouldUseExtendedSection() {
    if (useWindowDimensions() !== undefined) {
        const { height, width } = useWindowDimensions();
        console.log(height);
        console.log(width);
        console.log((width <= 1100 || height <= 500));
        return (width <= 1100 || height <= 500);
      }
      return false;
}
