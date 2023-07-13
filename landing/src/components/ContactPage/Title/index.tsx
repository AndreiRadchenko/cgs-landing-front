import React from "react";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";

import ScrambleText from "../../../components/HomePage/ScrambleText";

import * as CSS from "./Title.styled";
import { useWindowDimension } from "../../../hooks/useWindowDimension";
import { splitBracketsAdvanced } from "../../../utils/splitBracketsAdvanced";

interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle) => {
  const { width } = useWindowDimension();
  const parsedTitle = splitBracketsAdvanced(title, width);

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
      }
    },
  };

  return <CSS.Subtitle>{parse(parsedTitle, options)}</CSS.Subtitle>;
};

export default Title;
