import { useEffect, useState } from "react";
const getCurrentDimension = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};
const useScreenDimensions = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  useEffect(() => {
    const updateDmensions = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDmensions);
    return () => {
      window.removeEventListener("resize", updateDmensions);
    };
  }, [screenSize]);
  return screenSize;
};

export default useScreenDimensions;
