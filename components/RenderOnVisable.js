import React, { useState, useEffect, useRef } from "react";

const RenderOnVisable = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const handleIntersect = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.2,
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 duration-1000 translate-y-10 ease-out ${className} ${
        isVisible ? "!opacity-100 !translate-y-0" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default RenderOnVisable;
