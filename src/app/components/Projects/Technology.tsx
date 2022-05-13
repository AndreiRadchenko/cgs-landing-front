import * as Styled from "./Technology.styles";

interface Technology {
  id: string;
  name: string;
  iconUrl?: string;
}

export interface TechnologyProps {
  technology: Technology;
}

export const Technology: React.FC<TechnologyProps> = ({ technology }) => {
  return (
    <Styled.Container>
      <Styled.Icon src={technology.iconUrl} alt={technology.iconUrl} loading="lazy" />
      <Styled.Name>{technology.name}</Styled.Name>
    </Styled.Container>
  );
};
