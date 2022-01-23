import astronautIMG from "../../public/astronaut-about-icon.svg";
import spaceIMG from "../../public/space-about-icon.svg";
import starIMG from "../../public/star-about-icon.svg";

export const routers = {
  home: "/",
  vacancy: "/vacancy",
  partners: "/partners",
};

export const navigationRoutesNames = ["/home", "/vacancy", "/partners"];

export const aboutUsContainerVars = [
  {
    url: starIMG,
    description: "var",
    text: "top-rated devs",
  },
  {
    url: astronautIMG,
    description: "quantity",
    text: "40+",
  },
  {
    url: spaceIMG,
    description: "status",
    text: "available for hire",
  },
];
