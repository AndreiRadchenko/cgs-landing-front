import { TextareaAutosize } from "@mui/material";
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
  font-weight: ${themes.primary.font.weight.light};
  padding: ${themes.primary.spacing.small} 0 0 ${themes.primary.spacing.primary};
  display: none;
  flex-direction: column;
  text-decoration: underline;

  &.flex {
    display: flex;
  }
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

export const AdminSubTitle = styled.h3<{ isBlog?: boolean }>`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.semiBold};
  margin: ${(props) => (props.isBlog ? "30px 0 0.4em 0" : "10px 0 0.4em 0")};
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

export const AdminInput = styled(TextareaAutosize)<{
  height?: string;
  width?: string;
}>`
  resize: vertical;
  width: ${(props) => (props.width ? props.width : "100%")};
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.mulish};
  padding: ${themes.primary.spacing.primary};
  border: 0;
  height: ${(props) => props.height} !important;
  margin-bottom: ${themes.primary.spacing.primary};

  &.tag {
    font-size: 20px;
  }
  &:focus {
    outline: 1px solid gray;
  }
`;

interface IPhotoBlock {
  maxWidth?: string;
}

export const AdminPhotoBlock = styled.div<IPhotoBlock>`
  border: 2px dashed ${themes.primary.colors.primary};
  display: flex;
  justify-content: ${(props) =>
    props.theme === "center" ? "center" : "space-between"};
  align-items: center;
  flex-direction: column;
  padding: ${themes.primary.spacing.primary};
  margin-bottom: ${themes.primary.spacing.primary};
  height: 100%;
  margin-right: ${({ maxWidth }) => (maxWidth ? `20px` : "none")};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : "none")};

  &.about {
    height: 390px;
    width: 370px;
  }
`;

export const AdminPhotoGrid = styled.div`
  width: 57%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  &.faq {
    width: 90%;
  }

  &.about {
    width: 90%;
  }
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
  padding: ${themes.primary.spacing.primary} 0;
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
  height: 10em;
`;

export const AdminCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${themes.primary.spacing.adminWithinBlocks};
  row-gap: 4em;

  &.cards {
    row-gap: 0;
  }
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

  &.namu {
    font-family: ${themes.primary.font.family.namu};
  }
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
  padding: 0;
  width: 110px;
  height: 2.35em;
  color: ${themes.primary.colors.secondary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${themes.primary.colors.primary};
  border: 1px solid ${themes.primary.colors.primary};
`;

export const AdminBlackButton = styled.button`
  background-color: #000;
  color: white;
  border: 0;
  padding: 0;
  width: 10em;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 7em;
  }
`;

export const AdminButtonText = styled.span`
  line-height: 363%;
  letter-spacing: 0.03em;
  position: absolute;
  font-family: ${themes.primary.font.family.namu};
  @media (max-width: 1000px) {
    font-size: ${themes.primary.font.size.quinary};
  }
`;

export const AdminBlackButtonText = styled.span`
  position: absolute;
  font-size: ${themes.primary.font.size.aboutUsCardText};
  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.primary};
  }
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
    margin: 0.2em 0 0 1.5em;
  }
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

export const AdminPhotoDashedHorizontal = styled.div<{ maxWidth?: string }>`
  display: flex;
  flex-direcrion: row;
  border: 2px dashed ${themes.primary.colors.primary};
  padding: 4em 3.5em;
  max-width: ${(props) => props.maxWidth};
`;

export const AdminPhotoDashedHorizontalPositoning = styled.div<{
  horizontalFlex?: boolean;
}>`
  display: ${(props) => (props.horizontalFlex ? "flex" : "grid")};
  grid-template-columns: 1fr 1.6fr;
  width: ${(props) => props.horizontalFlex && "100%"};
  justify-content: ${(props) => props.horizontalFlex && "space-around"};
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
  &:hover {
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
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &:hover span {
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
  z-index: 6;
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
  width: 100%;
  z-index: 1;
  margin-right: 10px;
  margin-top: 12px;
`;

export const AdminDropDownMenuElement = styled.div`
  background: ${themes.primary.colors.secondary};
  padding: ${themes.primary.spacing.primary};
  border: 1px solid ${themes.primary.colors.darkedGrayBack};
  cursor: pointer;
  &:hover {
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

  &.blog-admin {
    position: relative;
  }
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

export const AdminPortfolioReviewLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4em;
  padding: 20px;
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

export const TextEditorContainer = styled.div<{
  height?: string;
  width?: string;
}>`
  & div.se-dialog-form-footer label:first-child {
    visibility: hidden;

    & input {
      visibility: visible;
    }

    &::after {
      position: absolute;
      left: 30px;
      content: "Open link in new window and make nofolow";
      visibility: visible;
    }
  }

  & div.se-dialog-form-footer label:nth-child(2) {
    visibility: hidden;
  }
  & div.se-wrapper-inner {
    font-size: ${themes.primary.font.size.primary};
    font-family: ${themes.primary.font.family.mulish};
  }
  & div.se-wrapper-inner.se-wrapper-inner ul {
    list-style-type: none;
    list-style-image: url("/listSquare.png");

    & li {
      padding-left: 12px;
    }
    @media ${themes.primary.media.maxTabletPortrait} {
      list-style-image: url("/listSquareMobile.png");
    }
  }

  background-color: #fff;
  resize: none;
  min-height: 417px;
  height: auto;
  max-width: 1200px;
  width: 100%;
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.mulish};
  border: 0;
  margin-bottom: ${themes.primary.spacing.primary};
  &:focus-within {
    outline: 1px solid gray;
  }
  &.faq {
    width: 100%;
    min-height: 180px;
    max-width: 100%;
    width: 100%;
  }
`;

export const AdminPageFirstBlockLayout = styled.div`
  display: grid;
  grid-template-columns: 2.09fr 1fr 1fr;
  column-gap: 1.5em;
`;

export const AdminPageSecondBlockLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5em;
  margin-bottom: 30px;
`;

export const InputAndStars = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 20px;
`;

export const StartsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 25px;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PortfolioProjectHeader = styled.div`
  font-size: ${themes.primary.font.size.quaternary};
  font-family: ${themes.primary.font.family.mulish};
  font-weight: ${themes.primary.font.weight.normal};
`;

export const Separator = styled.div`
  background-color: #cdcdcd;
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
`;

export const PortfolioReviewHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const AuthorName = styled.div`
  font-size: ${themes.primary.font.size.articleTagDescription};
  font-family: ${themes.primary.font.family.mulish};
  font-weight: ${themes.primary.font.weight.normal};
  margin-right: 25px;
`;

export const CompanyName = styled.div`
  color: #8f8e93;
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.mulish};
  font-weight: ${themes.primary.font.weight.normal};
`;

export const Subtitle = styled.div`
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: 52px;
  letter-spacing: 2px;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 70px;
  margin-bottom: 40px;
`;

export const TagContainer = styled.div`
  margin-top: 40px;
  gap: 40px;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const Counter = styled.span`
  display: none;
`;

export const AdminMarginBlock = styled.div`
  margin-bottom: 120px;

  &.top {
    margin-top: 100px;
    margin-bottom: 0;
  }
`;

export const AdminAboutUsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 3rem;
`;

export const Image = styled.img`
  transform: rotate(180deg);
  &.open {
    transform: rotate(0deg);
  }
`;

export const RightSideBlock = styled.div`
  padding-bottom: 100px;
`;

export const AdminFilmInputPaddedBlock = styled.div`
  padding: ${themes.primary.spacing.primary} 0
    ${themes.primary.spacing.headerNavHorizontal} 0;
`;

export const AdminTechGrid = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  column-gap: 1rem;
`;

export const AdminCardsHeader = styled.h1`
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.quaternary};
  margin-bottom: ${themes.primary.spacing.small};
  font-family: ${themes.primary.font.family.gilroy};
`;

export const AdminFrameSubTitle = styled.h3`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.secondary};
  font-weight: ${themes.primary.font.weight.extraBold};
  margin: 0;
`;
export const AdminCompanyName = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.tertiary};
  letter-spacing: 1px;
  color: ${themes.primary.colors.headerBorder};
  margin-top: 0.4em;
`;

export const AdminFeedbackText = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 160%;
  font-size: ${themes.primary.font.size.tertiary};
  letter-spacing: 1px;
`;
