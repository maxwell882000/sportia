import { useState, useEffect, useRef, MutableRefObject } from "react";

const useScrollToFix = <
  TRequest extends HTMLElement,
  TResponse extends HTMLElement,
>(
  containerRef: MutableRefObject<TRequest>,
  fixCheck:number = 0
) => {
  const [isFixed, setIsFixed] = useState(false);
  const elementRef = useRef<TResponse | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current && containerRef.current) {
        const element = elementRef.current;
        const container = containerRef.current;

        // Calculate the element's position relative to the container
        const elementTop =
          element.getBoundingClientRect().top -
          container.getBoundingClientRect().top;
        if (elementTop <= fixCheck) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      container.addEventListener("touchmove", handleScroll);
      container.addEventListener("wheel", handleScroll);

      // Initial check to set the state on mount
      handleScroll();

      // Cleanup event listeners on component unmount
      return () => {
        container.removeEventListener("scroll", handleScroll);
        container.removeEventListener("touchmove", handleScroll);
        container.removeEventListener("wheel", handleScroll);
      };
    }
  }, [containerRef, containerRef.current]);

  return { isFixed, elementRef };
};

export default useScrollToFix;
