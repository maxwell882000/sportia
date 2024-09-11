import { MutableRefObject, useEffect, useState } from "react";

export const useElementSize = (ref: MutableRefObject<HTMLElement>) => {
  const [elementSize, setElementSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      setElementSize({
        width: element.offsetWidth,
        height: element.offsetHeight,
      });
    }
  }, [ref.current]);

  return elementSize;
};
