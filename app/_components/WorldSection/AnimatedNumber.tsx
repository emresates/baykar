"use client";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  targetNumber: number;
  ref: React.RefObject<HTMLDivElement>;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  targetNumber,
  ref,
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          let start = 0;
          const end = targetNumber;
          const duration = 2000; // Animation duration
          const incrementTime = 30; // Time between each increment
          const totalIncrements = duration / incrementTime;
          const incrementValue = end / totalIncrements;

          const incrementNumber = () => {
            start += incrementValue;
            if (start < end) {
              setCurrentNumber(Math.floor(start));
              setTimeout(incrementNumber, incrementTime);
            } else {
              setCurrentNumber(end);
            }
          };

          incrementNumber();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [targetNumber, isVisible, ref]);

  return <>{isVisible && <span>{currentNumber.toLocaleString()}</span>}</>;
};

export default AnimatedNumber;
