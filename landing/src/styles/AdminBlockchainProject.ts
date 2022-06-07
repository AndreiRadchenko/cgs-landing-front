import styled from "styled-components";
import themes from "../utils/themes";

export const AdminBlockchainProjectFrame = styled.div`
  border: 1px solid ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.darkBlue};
  padding: 1.6em;
  position: relative;
`;

export const AdminBlockchainProjectContent = styled.div`
  display: box;
`;

export const ImageWrapper = styled.div<{ url?: string }>`
  width: 400px;
  heigh: auto;
  display: box;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

export const BlockchainProjectParagraph = styled.p`
  font-family: ${themes.primary.font.family.mulish};
  font-size: ${themes.primary.font.size.tertiary};
  letter-spacing: 1px;
`;

export const AdminSubTitle = styled.h3`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.semiBold};
  margin: 40px 0 0.4em 0;
`;

export const AdminDeleteTextThin = styled.span`
  position: absolute;
  color: ${themes.primary.colors.errorText};
  right: 1.5em;
  bottom: 1.1em;
  font-size: ${themes.primary.font.size.tertiary};
  font-weight: ${themes.primary.font.weight.light};
  cursor: pointer;
`;

export const AdminEditIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
`;
