import { keyframes } from "styled-components";

export const rotateAnimationLaptopLeft = keyframes`
  0% {
		transform: rotate(0deg);
	}
  20% {
    transform: rotate(-40deg) ;
  }
	100% {
	  transform: rotate(0deg);
	}
`;

export const rotateAnimationTabletLeft = keyframes`
  0% {
		transform: scale(0.65) rotate(65deg);
	}
  20% {
    transform: scale(0.65) rotate(105deg) ;
  }
	100% {
	  transform: scale(0.65) rotate(65deg);
	}
`;
export const rotateAnimationTablerPortraitLeft = keyframes`
  0% {
		transform: scale(0.65) rotate(65deg);
	}
  20% {
    transform: scale(0.65) rotate(80deg) ;
  }
	100% {
	  transform: scale(0.65) rotate(65deg);
	}
`;

export const rotateAnimationLaptopRight = keyframes`
  0% {
		transform: scale(0.8) rotate(65deg);
	}
  20% {
    transform: scale(0.8) rotate(-40deg) ;
  }
	100% {
	  transform: scale(0.8) rotate(65deg);
	}
`;

export const rotateAnimationTabletRight = keyframes`
  0% {
		transform: scale(0.65) rotate(65deg);
	}
  20% {
    transform: scale(0.65) rotate(-40deg) ;
  }
	100% {
	  transform: scale(0.65) rotate(65deg);
	}
`;
export const rotateAnimationTablerPortraitRight = keyframes`
  0% {
		transform: scale(0.65) rotate(65deg);
	}
  20% {
    transform: scale(0.65) rotate(-40deg) ;
  }
	100% {
	  transform: scale(0.65) rotate(65deg);
	}
`;

export const floatAnimation = keyframes`
    0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

export const glassJarAnimation = keyframes`
 10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
`;
