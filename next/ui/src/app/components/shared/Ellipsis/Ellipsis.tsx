import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

export interface EllipsisProps {
  text: string;
  maxLines: number;
  ellipsis?: string;
  basedOn?: string;
}

const Ellipsis: React.FC<EllipsisProps> = (props) => {
  return (
    <ResponsiveEllipsis
      text={props.text}
      maxLine={props.maxLines}
      ellipsis={props.ellipsis}
      basedOn={props.basedOn}
    />
  );
};

Ellipsis.defaultProps = {
  ellipsis: "...",
  basedOn: "words",
};

export { Ellipsis };
