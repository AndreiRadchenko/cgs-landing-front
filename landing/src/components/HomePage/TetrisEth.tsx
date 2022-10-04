import React, { useEffect, useState } from "react";
import { TetrisGroup } from "../../styles/HomePage/General.styled";

const movementStrength = 30;

const TetrisEth = () => {
  const [tetrisTranslate, setTetrisTranslate] = useState<string>("");
  const handleMouseMove = (e: MouseEvent) => {
    const height = movementStrength / window.innerHeight;
    const width = movementStrength / window.innerWidth;
    const pageX = e.pageX - window.innerWidth / 2;
    const pageY =
      e.pageY >= window.innerHeight
        ? window.innerHeight / 2
        : e.pageY - window.innerHeight / 2;
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
        d="M283.868 209.51C297.559 202.337 300.288 180.551 289.965 160.851C279.641 141.151 260.174 130.996 246.483 138.17C232.792 145.344 230.062 167.129 240.386 186.829C250.709 206.53 270.177 216.684 283.868 209.51Z"
        fill="#F2EA86"
        stroke="black"
        strokeWidth="2.377"
        strokeMiterlimit="10"
      />
      <path
        d="M237.95 146.696C239.996 142.792 243.417 138.045 248.903 135.382C263.777 128.136 286.425 139.715 295.664 156.961C303.943 172.256 301.355 191.694 292.301 203.388C290.842 205.231 289.429 206.705 288.345 207.621C288.11 207.704 287.847 207.71 287.613 207.794C287.35 207.799 287.06 207.726 286.797 207.732C288.239 206.336 290.139 204.247 291.916 201.321C295.65 195.228 296.317 189.436 296.631 186.855C298.307 171.534 289.267 158.802 286.263 154.584C283.449 150.651 278.418 143.718 269.13 139.186C265.706 137.498 261.355 135.436 255.769 135.842C245.512 136.504 239.225 144.83 237.95 146.696Z"
        fill="black"
      />
      <path
        d="M253.484 152.174C253.201 161.267 252.997 170.333 252.742 179.504C258.434 180.383 264.177 181.155 269.869 182.034C272.395 177.253 274.922 172.472 277.477 167.77C269.513 162.501 261.498 157.337 253.484 152.174Z"
        fill="black"
      />
      <path
        d="M255.344 182.103C262.03 186.507 268.637 190.938 275.322 195.341C276.028 187.683 276.707 179.947 277.414 172.29C275.317 176.3 273.221 180.31 271.125 184.319C265.857 183.642 260.64 182.859 255.344 182.103Z"
        fill="black"
      />
    </TetrisGroup>
  );
};

export default TetrisEth;
