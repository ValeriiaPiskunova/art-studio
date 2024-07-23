import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / ((duration * 1000) / 50);
      const updateCounter = () => {
        start += increment;
        if (start > end) {
          setCount(end);
        } else {
          setCount(Math.ceil(start));
          requestAnimationFrame(updateCounter);
        }
      };
      requestAnimationFrame(updateCounter);
    }
  }, [inView, end, duration]);

  return (
    <p ref={ref} className="about-info__heading--large">
      {count}
    </p>
  );
};

export default Counter;
