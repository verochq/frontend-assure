import { useState, useEffect } from "react";

function DisplaySize() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="display-size"> 
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div> 
  );
}

export default DisplaySize;