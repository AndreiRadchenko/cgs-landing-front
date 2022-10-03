import React, { useEffect, useState } from "react";
import { TetrisGroup } from "../../styles/HomePage/General.styled";

const movementStrength = 10;

const TetrisFlutter = () => {
  const [tetrisTranslate, setTetrisTranslate] = useState<string>("");
  const handleMouseMove = (e: MouseEvent) => {
    const height = movementStrength / window.innerHeight;
    const width = movementStrength / window.innerWidth;
    const pageX = e.pageX - window.innerWidth / 2;
    const pageY =
      e.pageY >= window.innerHeight
        ? window.innerHeight / 2
        : e.pageY - window.innerHeight / 2;
    const newvalueX = width * pageX * -1 - 25;
    const newvalueY = height * pageY * -1;

    setTetrisTranslate(`translate(${newvalueX}px, ${newvalueY}px)`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, true);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <TetrisGroup coinsTranslate={tetrisTranslate}>
      <path
        d="M441.633 63.9111C457.536 50.6847 462.985 31.0168 453.805 19.9815C444.624 8.94626 424.29 10.7225 408.387 23.9489C392.484 37.1753 387.034 56.8433 396.215 67.8786C405.396 78.9138 425.73 77.1375 441.633 63.9111Z"
        fill="#F2EA86"
        stroke="black"
        strokeWidth="2.377"
        strokeMiterlimit="10"
      />
      <path
        d="M444.378 13.9531C446.537 14.3683 450.689 15.4478 454.427 18.7692C454.427 18.7692 458.33 22.6718 460.406 28.2352C462.15 32.8021 461.486 45.0913 453.845 57.0483C452.018 59.8715 441.222 76.8107 421.125 79.3848C415.228 80.1321 403.518 81.6267 395.961 73.4063C386.743 63.442 391.726 48.1636 391.975 47.4163C391.56 51.3189 391.394 58.709 395.546 65.8501C396.459 67.5108 397.539 68.9224 398.536 70.1679C400.114 71.2473 402.356 72.4929 405.345 73.5723C411.657 75.7312 416.972 75.233 419.381 74.9839C433.582 73.4893 443.381 62.7778 446.62 59.2903C449.693 55.9689 455.008 50.0734 457.25 40.7735C458.081 37.369 459.16 33.0512 457.665 27.9861C455.008 18.8522 446.288 14.7835 444.378 13.9531Z"
        fill="black"
      />
      <path
        d="M446.869 38.283V38.2L446.786 38.1169C444.211 35.4598 441.637 32.8857 439.062 30.2286C438.979 30.1456 438.896 30.1456 438.73 30.1456C430.093 30.0625 421.539 30.0625 412.902 29.9795C412.736 29.9795 412.653 29.9795 412.653 30.2286C412.653 32.8027 412.653 35.2937 412.57 37.8678C412.57 38.0339 412.653 38.1169 412.819 38.1169C424.114 38.2 435.325 38.283 446.62 38.366C446.703 38.2 446.786 38.283 446.869 38.283Z"
        fill="black"
      />
      <path
        d="M420.626 50.8212C420.626 50.7382 420.626 50.7382 420.626 50.6551V50.5721V50.4891C420.626 50.4891 420.626 50.4891 420.626 50.406V50.323V50.2399C420.709 50.1569 420.792 50.2399 420.875 50.2399C425.443 50.2399 429.927 50.323 434.495 50.323C434.578 50.323 434.661 50.323 434.744 50.323C434.661 50.2399 434.661 50.2399 434.661 50.2399C432.086 47.5828 429.512 45.0087 426.938 42.3516C426.854 42.2686 426.771 42.2686 426.605 42.2686C424.695 42.2686 422.785 42.2686 420.875 42.2686C420.792 42.2686 420.792 42.2686 420.709 42.2686C420.626 42.2686 420.626 42.2686 420.543 42.2686C417.968 42.2686 415.394 42.2686 412.902 42.1855C412.736 42.1855 412.653 42.2686 412.653 42.4346C412.653 45.0087 412.653 47.4998 412.57 50.0739C412.57 50.1569 412.57 50.1569 412.57 50.2399C412.57 50.323 412.57 50.406 412.57 50.4891C412.57 50.5721 412.57 50.6551 412.57 50.7382V50.8212C412.57 52.648 412.57 54.3917 412.57 56.2185C412.57 56.3015 412.653 56.3845 412.736 56.4676C415.311 59.0417 417.885 61.6988 420.46 64.3559C420.46 64.3559 420.543 64.4389 420.626 64.4389C420.626 64.3559 420.626 64.2729 420.626 64.2729C420.543 59.6229 420.626 55.2221 420.626 50.8212Z"
        fill="black"
      />
    </TetrisGroup>
  );
};

export default TetrisFlutter;
