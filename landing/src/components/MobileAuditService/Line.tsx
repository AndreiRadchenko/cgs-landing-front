import React from "react";

const Line = () => {
  return (
    <div>
      <svg
        width="90"
        height="14"
        viewBox="0 0 90 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M78.0064 5.5L-2.56643e-06 5.5" stroke="black" />
        <g filter="url(#filter0_d_3_5)">
          <circle
            r="6"
            transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 76.0045 6)"
            fill="#F0EFED"
          />
          <circle
            r="5.5"
            transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 76.0045 6)"
            stroke="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_3_5"
            x="70.0045"
            y="0"
            width="19"
            height="14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="7" dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3_5"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3_5"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Line;
