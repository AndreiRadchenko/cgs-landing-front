import React, { useEffect, useState } from "react";
import { TetrisGroup } from "../../styles/HomePage/General.styled";

const movementStrength = 40;

const TetrisBitcoin = () => {
  const [tetrisTranslate, setTetrisTranslate] = useState<string>("");
  const handleMouseMove = (e: MouseEvent) => {
    const height = movementStrength / window.innerHeight;
    const width = movementStrength / window.innerWidth;
    const pageX = e.pageX - window.innerWidth / 2;
    const pageY = e.pageY - window.innerHeight / 2;
    const newvalueX = width * pageX * -1;
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
        d="M324.857 279.225C340.272 264.225 344.315 243.381 333.887 232.668C323.459 221.954 302.51 225.429 287.095 240.429C271.68 255.428 267.637 276.273 278.065 286.986C288.492 297.699 309.442 294.224 324.857 279.225Z"
        fill="#F2EA86"
        stroke="black"
        strokeWidth="2.377"
        strokeMiterlimit="10"
      />
      <path
        d="M323.604 227.137C326.012 227.552 332.074 228.963 337.14 234.195C342.04 239.26 343.203 245.072 343.618 247.646C346.94 265.997 329.915 281.857 329.002 282.687C317.707 292.901 300.184 298.547 286.066 293.067C283.907 292.236 282.163 291.24 281.083 290.576C280.917 290.326 280.834 290.16 280.668 289.911C280.585 289.662 280.585 289.413 280.502 289.164C282.246 290.077 284.654 291.323 287.81 292.153C294.537 293.897 300.018 292.984 302.51 292.485C317.126 289.828 326.427 277.871 329.5 273.969C332.407 270.315 337.39 263.672 339.05 253.874C339.632 250.303 340.379 245.654 338.469 240.505C335.064 231.288 325.597 227.801 323.604 227.137Z"
        fill="black"
      />
      <path
        d="M315.714 266.246C317.707 265.913 319.7 265 321.278 263.422C325.015 259.686 325.264 253.79 322.109 249.805L325.763 246.151L322.524 242.83L318.87 246.4L316.628 244.158L320.282 240.588L317.043 237.266L313.389 240.837L307.824 235.19L303.672 239.259L307.575 243.162L290.8 259.769L286.897 255.866L282.744 259.935L288.308 265.581L284.654 269.152L287.893 272.473L291.547 268.903L293.789 271.145L290.135 274.715L293.374 278.037L297.028 274.466L298.44 275.878C302.426 279.863 308.904 279.946 312.89 275.961C315.631 273.304 316.544 269.65 315.714 266.246ZM317.126 253.043C318.87 254.787 318.87 257.61 317.126 259.354C315.382 261.097 312.558 261.097 310.814 259.354L305.25 253.79L311.562 247.563L317.126 253.043ZM302.592 271.809L294.869 264.004L301.181 257.776L306.745 263.339L308.904 265.498C310.648 267.242 310.648 270.065 308.904 271.809C307.16 273.553 304.336 273.553 302.592 271.809Z"
        fill="black"
      />
    </TetrisGroup>
  );
};

export default TetrisBitcoin;
