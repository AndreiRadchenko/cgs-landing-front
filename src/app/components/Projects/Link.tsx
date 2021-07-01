import * as Styled from "./Link.styles";

export interface LinkProps {
  link: string;
}

export const Link: React.FC<LinkProps> = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <Styled.Button type="button">Project link</Styled.Button>
    </a>
  );
};
