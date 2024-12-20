import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(
    typeof window !== "undefined"
      ? {
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        }
      : undefined,
  );

  useEffect(() => {
    function onResize() {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    }

    window.visualViewport.addEventListener("resize", onResize);

    return () => window.visualViewport.removeEventListener("resize", onResize);
  }, []);
  return windowSize;
};
