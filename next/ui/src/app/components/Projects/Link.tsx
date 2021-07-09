import * as Styled from "./Link.styles";

import { clickProgectLinks } from "services/event";
export interface LinkProps {
  link: string;
}

export const Link: React.FC<LinkProps> = ({ link }) => {
  return (
    <Styled.Link>
      <a href={link} target="_blank">
      <Styled.Button 
        onClick={() => clickProgectLinks(link) } 
        type="button"
      >
        Project link
      </Styled.Button>
      </a>
    </Styled.Link>    
  );
};
