import { IHowWeWorkCardProps } from "../components/HowWeWorkCard/types";
const items: IHowWeWorkCardProps[] = [
  {
    title: "how we work",
    contentTitle: "Let’s meet \neach other!",
    contentText:
      "First call is really important, because here we discuss your ideas in detail: from all non-tech nuances such as terms, freshest thoughts about project overall, functionality etc. to recommendations about stack we should use to meet all your expectations with an outstanding code quality.",
    rank: 1,
    backGroundColor: "blue",
    imgUrl: "/how_we_work1_box.png",
    additionalImgUrl: true,
  },
  {
    title: "how we work",
    contentTitle: "Accurate estimation",
    contentText:
      "Transparency is always a key to a strong relationship, even if we develop a project :).\n\nSo we write down all the needed processes with a quantity of hrs for each, describing the number of devs needed for effective work and some delicious buns from our company which you will definitely love! ;)",
    rank: 2,
    backGroundColor: "orange",
    imgUrl: "/how_we_work2_bg.png",
  },
  {
    title: "how we work",
    contentTitle: "Build\nthe strongest\nteam you have\never dreamed of!",
    contentText:
      "This is the stage when you choose the best of the best, who would be comfortable to cooperate with.\n\nWe arrange interviews with devs, who will shock you with excellent knowledge of tech stack, outstanding soft skills and fluent English.\n\nThe successfully executed project will be present as well as clean pleasant communication during the whole software development life cycle.",
    rank: 3,
    backGroundColor: "green",
    imgUrl: "/how_we_work3_bg.png",
  },
  {
    title: "how we work",
    contentTitle: "To be continued..",
    contentText:
      "In fact, it is the final call before getting started.\n\nWe clarify all the nuances about our cooperation, sign all the needed docs, provide you with access to flows, documents and resources so you do not need to worry.\n\nJust chill and enjoy the process of development, handled by CGS-team.",
    rank: 4,
    backGroundColor: "blue",
    imgUrl: "/how_we_work4_bg.png",
    isFlipImageOnMobile: true,
  },
];

export default items;
