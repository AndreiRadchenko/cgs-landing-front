import { IHowWeWorkBlock } from "../types/Admin/Response.types";
import { IHowWeWorkCardProps } from "../components/HowWeWorkCard/types";
import { howWeWorkColor } from "./variables";

export const insertHowWeWorkData = (data?: IHowWeWorkBlock) => {
  return data?.blocks.map((el, idx) => {
    const item: IHowWeWorkCardProps = {
      title: data.pageSignature,
      contentTitle: el.subtitle,
      contentText: el.text,
      rank: idx + 1,
      backGroundColor: howWeWorkColor[idx],
      imgUrl: el.image.url,
      additionalImgUrl: idx === 0 ? "first" : undefined,
    };
    return item;
  });
};
