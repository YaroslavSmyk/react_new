import React, { useEffect, useState } from "react";

const Dimensions = () => {
  const [dimensions, setDimension] = useState({
    width: null,
    height: null,
  });
  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
    const onResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setDimension({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener("resize", onResize);
  }, []);

  const { width, height } = dimensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
