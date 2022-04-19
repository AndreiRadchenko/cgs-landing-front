import styled from "styled-components";
import themes from "../utils/themes";

export const AdminWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4.5fr;
  background: ${themes.primary.colors.grayBack};
`;

export const AdminSidebar = styled.div`
  background: ${themes.primary.colors.lighten.green};
  border-radius: 0 40px 40px 0;
  padding: 3.5em 3.7em 0 2.7em;
  display: flex;
  flex-direction: column;
`;

export const AdminSidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: ${themes.primary.spacing.btwLogoAndMenu} 0 0 0;
  padding: 0;
`;

export const AdminSidebarMenuElement = styled.li`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.mulish};
  padding-bottom: ${themes.primary.spacing.primary};
  font-weight: ${(props) => props.itemProp === props.property ? themes.primary.font.weight.bold : themes.primary.font.weight.normal};
  cursor: pointer;
`;

export const AdminSidebarHidenElement = styled.div`
  height: 1em;
  font-weight: ${themes.primary.font.weight.normal};
  padding: ${themes.primary.spacing.small} 0 0 ${themes.primary.spacing.primary};
  display: ${(props) => props.theme};
`;

export const AdminContentBlock = styled.div`
  padding: ${themes.primary.spacing.septenary} 0 0 0;
`;

export const AdminPaddedBlock = styled.div`
  padding: ${themes.primary.spacing.primary}
    ${themes.primary.spacing.adminWithinBlocks};
  margin-bottom: ${themes.primary.spacing.adminWithinBlocks};
  background: ${(props) =>
    props.theme == "dark" ? themes.primary.colors.darkedGrayBack : null};
`;

export const AdminHeader = styled.h2`
  font-size: ${themes.primary.font.size.secondary};
  font-family: ${themes.primary.font.family.mulish};
  margin-bottom: 0.5em;
`;

export const AdminSubTitle = styled.h3`
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.mulish};
  font-weight: ${themes.primary.font.weight.bold};
  margin: 0 0 0.4em 0;
`;

export const AdminComment = styled.p`
  color: ${themes.primary.colors.comment};
  margin: 0;
`;

export const AdminAddMainLogoBlock = styled.div`
  width: 38%;
`;

export const AdminEditInfoGridBlock = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  column-gap: 3rem;
`;

export const AdminInput = styled.textarea`
  resize: none;
  width: 100%;
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.mulish};
  padding: ${themes.primary.spacing.primary};
  border: 0;
  margin-bottom: ${themes.primary.spacing.primary};
  &: focus {
    outline: 1px solid gray;
  }
`;

export const AdminPhotoBlock = styled.div`
  border: 2px dashed ${themes.primary.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1em;
  height: 100%;
`;

export const AdminPhotoGrid = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
`;

export const AdminDashedPositionGrid = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
`;

export const AdminDeleteText = styled.h6`
  color: ${themes.primary.colors.errorText};
  margin: 1em 0;
  font-size: ${themes.primary.font.size.primary};
  cursor: pointer;
`;

export const AdminFlyingElementsBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3rem;
`;

export const AdminFlyingElement = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const AdminTecBottleDiv = styled.div`
  padding-top: 2.2em;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  max-height: 26em;
`;

export const AdminLogosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  row-gap: ${themes.primary.spacing.primary};
  column-gap: ${themes.primary.spacing.primary};
`;

export const AdminLogoElement = styled.div`
  background: ${themes.primary.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${themes.primary.spacing.primary};
  position: relative;
`;

export const AdminDeleteLogo = styled.button`
  position: absolute;
  right: 2px;
  top: 2px;
  border: 0;
  background: ${themes.primary.colors.deleteButton};
  color: ${themes.primary.colors.secondary};
  padding: 0 0.2em;
  cursor: pointer;
`;

export const AdminAddLogoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px dashed ${themes.primary.colors.primary};
`;
