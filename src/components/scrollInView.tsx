import React, { useEffect, useRef, useState } from "react";

const ScrollInView = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // trigger when 50% of the target is visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      // Will set to true once and not revert
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={targetRef}
      className={`${className} ${isVisible ? "animate" : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollInView;
