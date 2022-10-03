import React, { useEffect, useState } from "react";
import { TetrisGroup } from "../../styles/HomePage/General.styled";

const movementStrength = 20;

const TetrisReact = () => {
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
        d="M328.201 98.8663C346.32 93.8292 356.426 73.269 350.773 52.9438C345.121 32.6186 325.851 20.2252 307.732 25.2623C289.614 30.2994 279.508 50.8596 285.16 71.1848C290.812 91.51 310.082 103.903 328.201 98.8663Z"
        fill="black"
      />
      <path
        d="M343.587 84.5573C356.814 71.6446 355.77 49.1265 341.256 34.2617C326.743 19.3969 304.254 17.8144 291.027 30.727C277.801 43.6397 278.844 66.1577 293.358 81.0225C307.872 95.8873 330.36 97.4699 343.587 84.5573Z"
        fill="#F2EA86"
        stroke="black"
        strokeWidth="2.377"
        strokeMiterlimit="10"
      />
      <path
        d="M330.745 61.0663C332.156 60.4021 333.568 59.6548 334.897 58.8244C339.132 56.0842 341.042 53.5102 340.461 51.2682C339.548 48.1129 333.983 47.1995 327.09 47.8638C327.589 41.0549 326.592 35.5746 323.353 34.7442C320.114 33.9139 316.543 38.3147 313.554 44.4593C307.823 40.6397 302.508 38.8129 300.183 41.1379C298.522 42.7986 298.937 45.954 301.263 50.3548C302.01 51.6834 302.841 53.0119 303.754 54.2575C302.342 54.9218 300.931 55.6691 299.602 56.4994C295.366 59.2396 293.456 61.8137 294.038 64.0556C294.453 65.5502 295.948 66.5467 298.19 67.1279C301.263 67.7092 304.335 67.8752 307.408 67.4601C306.91 74.2689 307.906 79.7493 311.145 80.5796C314.384 81.41 317.955 77.0091 320.945 70.8645C323.436 72.6082 326.26 74.0198 329.25 74.9332C331.409 75.5145 333.236 75.3484 334.399 74.1859C336.06 72.5252 335.644 69.3699 333.319 64.969C332.489 63.6404 331.658 62.3119 330.745 61.0663ZM338.883 51.6003C339.298 53.0119 337.471 55.1709 333.983 57.4128C332.655 58.2432 331.243 59.0735 329.748 59.7378C328.585 58.2432 327.34 56.7485 326.011 55.2539C326.426 53.261 326.675 51.3512 326.924 49.4414C333.734 48.7772 338.302 49.6905 338.883 51.6003ZM318.952 63.7235C317.706 64.0556 316.543 64.3878 315.381 64.6369C314.467 63.8895 313.637 63.0592 312.723 62.2288C311.81 61.3985 310.979 60.4851 310.232 59.6548C310.481 58.4923 310.73 57.3298 311.062 56.1673C311.394 55.0048 311.727 53.8423 312.059 52.6798C313.222 52.2646 314.384 51.9325 315.547 51.6003C316.793 51.2682 317.955 50.9361 319.118 50.687C320.031 51.4343 320.862 52.2646 321.775 53.095C322.689 53.9253 323.519 54.8387 324.267 55.6691C324.018 56.8316 323.769 57.9941 323.436 59.1565C323.104 60.319 322.772 61.4815 322.44 62.644C321.277 63.0592 320.114 63.3913 318.952 63.7235ZM321.858 64.5538C321.36 65.9654 320.862 67.294 320.281 68.5395C319.201 67.7922 318.038 66.8788 316.876 65.9654C317.706 65.7994 318.537 65.5502 319.367 65.3011C320.198 65.052 321.028 64.8029 321.858 64.5538ZM313.471 65.052C311.976 65.3842 310.564 65.5502 309.235 65.7163C309.401 64.3878 309.567 62.9762 309.817 61.4815C310.398 62.0628 310.979 62.644 311.561 63.3083C312.225 63.8895 312.806 64.4708 313.471 65.052ZM308.903 58.1601C307.907 57.0807 307.076 56.0012 306.246 54.9217C307.491 54.3405 308.82 53.8423 310.232 53.3441C309.983 54.1744 309.734 54.9217 309.567 55.7521C309.318 56.4994 309.069 57.3298 308.903 58.1601ZM312.723 50.77C313.222 49.3584 313.72 48.0298 314.301 46.7843C315.381 47.5316 316.543 48.445 317.706 49.3584C316.876 49.5245 316.045 49.7736 315.215 50.0227C314.301 50.2718 313.471 50.5209 312.723 50.77ZM321.028 50.2718C322.523 49.9396 323.935 49.7736 325.263 49.6075C325.097 50.9361 324.931 52.3477 324.682 53.8423C324.101 53.2611 323.519 52.6798 322.938 52.0155C322.274 51.4343 321.692 50.853 321.028 50.2718ZM325.596 57.1637C326.592 58.2432 327.423 59.3226 328.253 60.4021C327.007 60.9833 325.679 61.4815 324.267 61.9797C324.516 61.1494 324.765 60.4021 324.931 59.5717C325.18 58.8244 325.43 57.9941 325.596 57.1637ZM322.938 36.2389C324.931 36.7371 326.011 41.221 325.43 48.0298C323.519 48.2789 321.526 48.6111 319.533 49.0263C318.038 47.6977 316.46 46.5352 314.882 45.3727C317.789 39.2281 320.945 35.7406 322.938 36.2389ZM302.675 49.6075C300.764 46.037 300.266 43.2968 301.263 42.2174C301.927 41.5531 303.173 41.4701 304.834 41.8852C307.74 42.7986 310.398 44.1272 312.889 45.8709C312.142 47.6147 311.394 49.4414 310.813 51.3512C308.82 52.0155 306.993 52.7628 305.249 53.5102C304.335 52.3477 303.505 51.0191 302.675 49.6075ZM295.615 63.7235C295.2 62.3119 297.027 60.153 300.515 57.911C301.844 57.0807 303.256 56.2503 304.751 55.586C305.913 57.0807 307.159 58.5753 308.488 60.0699C308.073 62.0628 307.823 63.9726 307.574 65.8824C300.764 66.5467 296.197 65.6333 295.615 63.7235ZM311.561 79.085C309.567 78.5868 308.488 74.1029 309.069 67.294C310.979 67.0449 312.972 66.7127 314.966 66.2976C316.46 67.6261 318.038 68.7886 319.616 69.9511C316.71 76.0957 313.554 79.5832 311.561 79.085ZM333.153 73.1064C331.741 74.518 327.174 73.2725 321.526 69.4529C322.274 67.7092 323.021 65.8824 323.602 63.9726C325.596 63.3083 327.423 62.561 329.167 61.8137C330.08 63.0592 330.911 64.4708 331.741 65.7994C333.734 69.2868 334.233 72.027 333.153 73.1064Z"
        fill="black"
      />
      <path
        d="M320.198 56.8305C320.696 58.4909 319.7 60.1514 318.039 60.6495C316.378 61.1477 314.717 60.1514 314.219 58.4909C313.72 56.8305 314.717 55.17 316.378 54.6719C318.039 54.2568 319.783 55.17 320.198 56.8305Z"
        fill="black"
      />
    </TetrisGroup>
  );
};

export default TetrisReact;
