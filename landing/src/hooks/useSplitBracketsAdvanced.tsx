import React from "react";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import ReactDomServer from "react-dom/server";

import { useWindowDimension } from "./useWindowDimension";

export const useSplitBracketsAdvanced = (htmlString: string) => {
  const { width } = useWindowDimension();
  if (!/[\^|]/g.test(htmlString)) {
    return htmlString;
  }

  let stringWithBr =
    width! < 768
      ? htmlString.replace(/[|]/g, "")
      : htmlString.replace(/[\^]/g, "");

  stringWithBr = stringWithBr.replace(/[\^|]/g, "<br>");

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 105, 221)")
      ) {
        if (
          domNode.children.some(
            (e) => e.type === "tag" && (e as Element).name === "br"
          )
        ) {
          return (
            <>
              {domNode.children.map((e, idx) =>
                e.type === "text" ? (
                  <span key={idx} style={{ color: "rgb(88, 105, 221)" }}>
                    {(e as any).data}
                  </span>
                ) : (
                  <br key={idx} />
                )
              )}
            </>
          );
        }
      }
    },
  };

  const parsedString = ReactDomServer.renderToString(
    parse(stringWithBr, options)
  );

  return parsedString.replace(/color:r/g, "color: r");
};
