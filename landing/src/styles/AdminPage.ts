import { TextareaAutosize } from "@mui/material";
import { style } from "@mui/system";
import styled from "styled-components";
import themes from "../utils/themes";

export const AdminWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4.5fr;
  background: ${themes.primary.colors.grayBack};
  min-height: 100%;
  position: absolute;
  width: 100%;
`;

export const AdminSidebar = styled.div`
  background: ${themes.primary.colors.lighten.green};
  border-radius: 0 40px 40px 0;
  display: flex;
  flex-direction: column;
  padding: 0;
  user-select: none;
`;

export const AdminSidebarLogo = styled.div`
  margin: ${themes.primary.spacing.adminWithinBlocks} auto 0 auto;
  width: 90%;
  display: flex;
  justify-content: center;
`;

export const AdminSidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: ${themes.primary.spacing.btwLogoAndMenu} 0 0 0;
  padding-left: ${themes.primary.spacing.tertiary};
  @media ${themes.primary.media.minLaptop} {
    padding-left: ${themes.primary.spacing.adminWithinBlocks};
  }
`;

export const AdminSidebarMenuElement = styled.li`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.mulish};
  padding-bottom: ${themes.primary.spacing.primary};
  font-weight: ${(props) =>
    props.itemProp === props.property
      ? themes.primary.font.weight.bold
      : themes.primary.font.weight.normal};
  cursor: pointer;
`;

export const AdminSidebarHidenElement = styled.div`
  height: 1em;
  font-weight: ${themes.primary.font.weight.light};
  padding: ${themes.primary.spacing.small} 0 0 ${themes.primary.spacing.primary};
  display: ${(props) => props.theme};
  text-decoration: underline;
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

export const AdminPaddedHeaderBlock = styled.div`
  padding: ${themes.primary.spacing.primary}
    ${themes.primary.spacing.adminWithinBlocks};
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
  font-weight: ${themes.primary.font.weight.extraBold};
  margin: 0 0 0.4em 0;
`;

export const AdminComment = styled.p`
  color: ${themes.primary.colors.comment};
  margin: 0;
`;

export const AdminAddMainLogoBlock = styled.div`
  width: 38%;
  & :last-child img {
    padding: ${themes.primary.spacing.primary} 0;
  }
`;

export const AdminHalfGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  column-gap: 3rem;
`;

export const AdminBlockWrapper = styled.div``;

export const AdminInput = styled(TextareaAutosize)`
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
  justify-content: ${(props) =>
    props.theme === "center" ? "center" : "space-between"};
  align-items: center;
  flex-direction: column;
  padding: ${themes.primary.spacing.primary};
  margin-bottom: ${themes.primary.spacing.primary};
  height: 100%;
`;

export const AdminPhotoGrid = styled.div`
  width: 57%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  padding-top: 2.3em;
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
  height: 10em;
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
  &:hover {
    background: #ad1313;
  }
`;

export const AdminAddLogoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px dashed ${themes.primary.colors.primary};
`;

export const AdminCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${themes.primary.spacing.adminWithinBlocks};
  row-gap: 4em;
`;

export const AdminFeedbackFrame = styled.div`
  position: relative;
  border: 1px solid ${themes.primary.colors.primary};
  padding: 5em 5em 4em 5em;
`;

export const AdminParagraph = styled.p`
  font-family: ${themes.primary.font.family.mulish};
  font-size: ${themes.primary.font.size.tertiary};
  letter-spacing: 1px;
`;

export const AdminFeedbackRole = styled.h4`
  background: ${themes.primary.colors.feedbackRole};
  border-radius: 5px;
  font-size: ${themes.primary.font.size.buttonText};
  font-family: ${themes.primary.font.family.mulish};
  font-weight: ${themes.primary.font.weight.light};
  width: fit-content;
  padding: 1px 6px;
  margin: -5px 0 0 0;
`;

export const AdminButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  width: 12em;
  margin-left: -1.3em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const AdminButtonText = styled.span`
  position: absolute;
  font-size: ${themes.primary.font.size.linkText};
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

export const AdminFeedbackStarsBlock = styled.div`
  display: block;
  white-space: nowrap;
  @media ${themes.primary.media.minLaptop} {
    display: flex;
  }
`;

export const AdminFeedbackStars = styled.div`
  @media ${themes.primary.media.minLaptop} {
    margin: -0.4em 0 0 2em;
  }
  margin: 0;
  height: fit-content;
`;

export const AdminStarsGrid = styled.div`
  display: flex;
  gap: ${themes.primary.spacing.tertiary};
`;

export const AdminStarsFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  width: 28em;
  @media ${themes.primary.media.minLaptop} {
    width: 25em;
  }
  @media ${themes.primary.media.minPC} {
    width: 22em;
  }
`;

export const AdminBigButton = styled.button`
  width: 100%;
  background: ${themes.primary.colors.cardDarkGreen};
  border: 0;
  font-size: ${themes.primary.font.size.buttonText};
  padding: ${themes.primary.spacing.primary};
  cursor: pointer;
  &:hover {
    background: #75c92d;
  }
`;

export const AdminFeedbackArrows = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${themes.primary.spacing.tertiary};
  gap: ${themes.primary.spacing.tertiary};
`;

export const AdminPointer = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const AdminPhotoDashedHorizontal = styled.div`
  display: flex;
  flex-direcrion: row;
  border: 2px dashed ${themes.primary.colors.primary};
  padding: 4em 3.5em;
`;

export const AdminPhotoDashedHorizontalPositoning = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.6fr;
`;

export const AdminCenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AdminHowWeWorkImageSize = styled.div`
  margin-top: 2.2em;
`;

export const AdminSocialIcon = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
`;

export const AdminTechWrapper = styled.div`
  height: 21em;
`;

export const AdminUploadModuleWrapper = styled.div`
  margin: 100px auto;
  background: ${themes.primary.colors.secondary};
  padding: 3.2em;
  width: 40%;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px dashed ${themes.primary.colors.primary};
`;

export const AdminUploadInput = styled.input`
  display: none;
`;

export const AdminUploadModalButton = styled.button`
  background: ${(props) =>
    props.theme == "filled"
      ? themes.primary.colors.cardDarkGreen
      : themes.primary.colors.secondary};
  transition-property: background;
  transition-duration: 1s;
  height: fit-content;
  padding: ${themes.primary.spacing.primary} 1.5em;
  border: 3px solid ${themes.primary.colors.cardDarkGreen};
  font-size: ${themes.primary.font.size.linkText};
  cursor: pointer;
  width: 50%;
`;

export const AdminUploadModuleCloseButton = styled.button`
  border: 0;
  position: absolute;
  background: #fff;
  right: 10px;
  top: 10px;
  cursor: pointer;
  &: hover {
    color: gray;
  }
`;

export const AdminUploadButtonsBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 2em;
  justify-content: space-between;
`;

export const AdminUploadModuleImgDiv = styled.div`
  width: 100%;
  height: 300px;
  border: 2px dashed gray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 1em;
  &: hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &: hover span {
    display: block;
  }
`;

export const AdminUploadInfo = styled.span`
  display: none;
  position: absolute;
  left: 2px;
  bottom: 2px;
  font-family: ${themes.primary.font.family.gilroy};
`;

export const AdminUploadModuleBack = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.25);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

export const AdminUnauthorizedModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: ${themes.primary.colors.secondary};
  font-size: ${themes.primary.font.size.tertiary};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

export const AdminCategoryBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1.6em;
`;

export const AdminDropDownMenu = styled.div`
  background: ${themes.primary.colors.secondary};
  font-size: ${themes.primary.font.size.linkText};
  position: relative;
  z-index: 1;
  margin-right: 10px;
`;

export const AdminDropDownMenuElement = styled.div`
  background: ${themes.primary.colors.secondary};
  padding: ${themes.primary.spacing.primary};
  border: 1px solid ${themes.primary.colors.darkedGrayBack};
  cursor: pointer;
  &: hover {
    background: ${themes.primary.colors.darkedGrayBack};
  }
`;

export const AdminDropDownMenuBanner = styled.div`
  background: ${themes.primary.colors.secondary};
  padding: ${themes.primary.spacing.primary};
  display: flex;
  justify-content: space-between;
`;

export const AdminDropDownMenuList = styled.div`
  position: absolute;
  width: 100%;
`;

export const AdminReviewBlock = styled.div`
  margin-top: 2em;
`;

export const AdminPortfolioImage = styled.div`
  margin: 1em 0;
  min-height: 250px;
  display: grid;
`;

export const AdminPortfolioReviewContent = styled.div`
  max-width: 68%;
`;

export const AdminPortfolioReviewFrame = styled.div`
  border: 1px solid ${themes.primary.colors.primary};
  padding: 1.6em;
  position: relative;
`;

export const AdminEditIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
`;

export const AdminBlockWithoutHeader = styled.div`
  padding-top: ${themes.primary.spacing.adminWithinBlocks};
  background-color: ${themes.primary.colors.darkedGrayBack};
`;

export const AdminFullImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
