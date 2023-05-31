import React from "react";
import Image from "next/image";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";

import ScrambleText from "../../../components/HomePage/ScrambleText";
import { useWindowDimension } from "../../../hooks/useWindowDimension";

import * as CSS from "./Title.styled";
import longArrow from "../../../../public/HomePageDecoration/longArrow.svg";

interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle) => {
  const { width } = useWindowDimension();
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 105, 221)")
      ) {
        return (
          <span className="blue tech">
            <ScrambleText
              text={
                domNode.children[0].type === "text" &&
                (domNode.children[0] as any).data
              }
            />
          </span>
        );
      } else if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(221, 105, 88)")
      ) {
        return (
          <>
            {width! > 714 && <br />}
            <CSS.ArrowWrapper>
              <Image
                src={longArrow.src}
                alt="wide tech long arrow"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
              />
            </CSS.ArrowWrapper>
          </>
        );
      }
    },
  };

  return <CSS.Subtitle>{parse(title, options)}</CSS.Subtitle>;
};

export default Title;
