import styled, { css } from "styled-components";
import themes from "../utils/themes";
import articleIntro from "../../public/BlogDecorations/Formatting/articleIntro.svg";
import { IFontSize } from "./HomePage/General.styled";
import SortableList from "react-easy-sort";
import { Field } from "formik";
import { TextareaAutosize } from "@mui/material";

interface ITextEditorWrapperProps {
  start?: number;
}

interface IBlockDropDownHeaderTitleProps {
  size?: string;
}

interface IBlockDropdownHeaderIconProps {
  rotate?: boolean;
}
interface IBlockDropdownProps {
  marginTop?: string;
}

export const AdminWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4.62fr;
  background: ${themes.primary.colors.grayBack};
  top: 9.7%;
  position: absolute;
  width: 100%;
`;

export const AdminMainHeader = styled.div`
  z-index: 10;
  width: 100%;
  padding: 26px 34px 25px;
  border: 2px solid ${themes.primary.colors.black};
  background: linear-gradient(
    75.6deg,
    ${themes.primary.colors.mainGradientColor1} -9.39%,
    ${themes.primary.colors.mainGradientColor2} 110.45%
  );
`;

export const AdminSidebar = styled.div`
  background: ${themes.primary.colors.primary};
  justify-content: flex-start;
  width: 100%;
  min-width: 256px;
  display: flex;
  flex-direction: column;
  padding: 0;
  user-select: none;
`;

export const AdminSidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 3.84em 0 0 0;
  padding-left: 2.17em;
  padding-right: 2.5em;
`;

export const AdminSidebarMenuElement = styled.li`
  color: ${themes.primary.colors.secondary};
  font-size: 1.67em;
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 1.45em;
  font-weight: ${(props) =>
    props.itemProp === props.property
      ? themes.primary.font.weight.bold
      : themes.primary.font.weight.normal};
  text-decoration: ${(props) =>
    props.itemProp === props.property ? "underline" : "none"};
  cursor: pointer;

  & > svg path {
    fill: ${themes.primary.colors.blogBackground};
  }

  &:hover {
    color: ${themes.primary.colors.portfolioHover};
    text-decoration: underline;

    & svg path {
      fill: ${themes.primary.colors.portfolioHover};
      &#arrow {
        fill: none;
        stroke: ${themes.primary.colors.portfolioHover};
      }
    }
  }

  &.isDropDown {
    text-decoration: none;
  }
`;

export const AdminListSubItem = styled.a`
  text-decoration: ${(props) =>
    props.itemProp === props.property ? "underline" : "none"};
  font-size: 0.8em;
  display: block;
  max-width: 11em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 12px;
  color: ${themes.primary.colors.blogBackground};

  &:hover {
    color: ${themes.primary.colors.portfolioHover};
    max-width: 9.5em;
    font-weight: ${themes.primary.font.weight.normal};
    text-decoration: underline;
  }
`;

export const AdminSidebarHidenElement = styled.div`
  font-weight: ${themes.primary.font.weight.light};
  padding: ${themes.primary.spacing.primary} 0 0 0;
  max-height: 1000px;
  transition: max-height 0.3s ease-in, padding 0.3s ease-in;
  overflow: hidden;
  flex-direction: column;
  &.hidden {
    max-height: 0;
    padding: 0;
    transition: max-height 0.3s ease-out;
  }
`;

export const AdminTitleImageWrap = styled.div`
  margin-bottom: 22px;
  padding: 18px 22px 18px 16px;
  background-color: ${themes.primary.colors.black};
  height: 4.67em;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AdminBlockTitle = styled.span`
  color: ${themes.primary.colors.secondary};
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 99%;
  font-size: 1.5em;
`;

export const AdminBlockHiddenContent = styled.div`
  display: block;
  &.hidden {
    display: none;
  }
`;

export const AdminContentBlock = styled.div`
  padding: ${themes.primary.spacing.septenary} 0 0 0;
  font-family: ${themes.primary.font.family.namu};
`;

export const AdminPaddedBlock = styled.div`
  padding: ${css`
    ${themes.primary.spacing.primary}
    ${themes.primary.spacing.adminWithinBlocks}
  `};
  margin-bottom: ${themes.primary.spacing.adminWithinBlocks};
  font-family: ${themes.primary.font.family.namu};
  &.withoutMargin {
    margin-bottom: 0;
    padding-bottom: ${themes.primary.spacing.adminWithinBlocks};
  }
`;

export const AdminPaddedHeaderBlock = styled.div`
  padding: ${css`
    ${themes.primary.spacing.primary}
    ${themes.primary.spacing.adminWithinBlocks}
  `};
  background: ${(props) =>
    props.theme == "dark" ? themes.primary.colors.darkedGrayBack : null};
`;

export const AdminBlocksContent = styled.div`
  margin-left: 2.5em;
  margin-right: 3.75em;
  font-family: ${themes.primary.font.family.namu};

  & .sun-editor-editable,
  & .sun-editor {
    background-color: transparent;
  }
`;

export const MetaBlockWraper = styled.div`
  background: linear-gradient(
    61.63deg,
    ${themes.primary.colors.mainGradientColor1} 0%,
    ${themes.primary.colors.mainGradientColor2} 100%
  );
  border: 2px solid ${themes.primary.colors.primary};
`;

export const AdminHeader = styled.h2`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.secondary};
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 1.21em;
`;

export const AdminSubTitle = styled.h3<{ isBlog?: boolean; size?: string }>`
  font-size: ${(props) =>
    props.size ? props.size : themes.primary.font.size.oneAndHalf};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0 0 10px 0;

  &.imageUploader {
    margin-top: 22%;
  }
`;

export const AdminUploadSubTitle = styled.h3`
  font-size: ${themes.primary.font.size.vistaco};
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.semiBold};
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
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
`;

export const AdminRenderInputs = styled.div`
  &.cooperationBlock {
    margin-top: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;
  }
`;

export const AdminFlexRow = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.gap ? props.gap : "4em")};
`;

export const AdminFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
`;

export const AdminBlockWrapper = styled.div``;

export const AdminInput = styled(TextareaAutosize)<{
  height?: string;
  width?: string;
  isadmin?: string;
}>`
  resize: vertical;
  width: ${({ width }) => (width ? width : "100%")};
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  background-color: ${themes.primary.colors.blogBackground};
  outline: ${({ isadmin }) =>
    isadmin ? `1px solid ${themes.primary.colors.comment}` : null};
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.namu};
  padding: ${themes.primary.spacing.primary};
  height: ${({ height }) => (height ? height : "auto")} !important;
  line-height: 160%;

  margin-bottom: ${themes.primary.spacing.primary};
  &:focus {
    outline: 1px solid gray;
  }

  &.withBottomButtons {
    margin-bottom: 6px;
  }
  &.tag {
    font-size: 20px;
  }

  &.smallYOffset {
    margin-bottom: 0.63em;
  }

  &.metaField {
    background-color: ${themes.primary.colors.careerBackground};
  }
`;

export const AdminPhotoBlock = styled.div`
  height: 265px;
  width: 235px;
  border: 2px dashed ${themes.primary.colors.comment};
  display: flex;
  justify-content: ${(props) => (props.theme ? props.theme : "space-between")};
  align-items: center;
  flex-direction: column;

  &.author {
    flex-direction: row;
    justify-content: center;
  }

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
  margin-top: 20px;

  &.fullWidth {
    width: 90%;
  }

  &.author {
    cursor: pointer;
    justify-content: flex-start;
    width: 100%;
    height: 80px;
  }
`;

export const AdminDashedPositionGrid = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &.uploaded {
    margin-top: 0;
  }

  &.author {
    margin-left: 18px;
    margin-top: 0;
    align-items: flex-start;
  }
`;

export const AdminDeleteText = styled.h6`
  text-align: center;
  color: ${themes.primary.colors.errorText};
  margin: 10px 0;
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

export const AdminLogosGrid = styled(SortableList)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  row-gap: ${themes.primary.spacing.logosGap};
  column-gap: ${themes.primary.spacing.logosGap};
  padding: ${themes.primary.spacing.primary} 0;
`;

export const AdminBlockchainLogosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  row-gap: ${themes.primary.spacing.logosGap};
  column-gap: ${themes.primary.spacing.logosGap};
  padding: ${themes.primary.spacing.primary} 0;
`;

export const AdminLogoElement = styled.div`
  border: 1px solid #a9a5a4;
  background: ${themes.primary.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${themes.primary.spacing.primary};
  position: relative;
  height: 8em;
`;

export const LogoImage = styled.img`
  max-width: 130px;
  max-height: 80px;
`;

export const AdminDeleteLogo = styled.button`
  position: absolute;
  right: 3px;
  top: 3px;
  border: 0;
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${themes.primary.colors.primary};
  color: ${themes.primary.colors.secondary};
  cursor: pointer;
  &:hover {
    background: ${themes.primary.colors.deleteImageHover};
  }
`;

export const AdminAddLogoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px dashed ${themes.primary.colors.comment};
  height: 8em;
`;

export const AdminCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${themes.primary.spacing.adminWithinBlocks};
  justify-content: space-between;

  &.cards {
    row-gap: 0;
  }

  &.footer {
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
  align-items: center;

  & svg {
    transition: transform 0.3s;
  }
  & svg.dropped {
    transform: rotate(180deg);
  }
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
  margin-top: 12px;
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

  & .se-wrapper-inner {
    font-family: ${themes.primary.font.family.openSans};
    font-size: 1.125rem;

    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block: 100px 32px;
      font-size: 2.5rem;

      & span {
        font-family: ${themes.primary.font.family.namu};
        font-weight: ${themes.primary.font.weight.heavy};
        font-size: 2.1875rem;
      }
    }

    & > h2:first-child,
    h3:first-child,
    h4:first-child,
    h5:first-child,
    h6:first-child {
      margin-top: 83px;
    }
  }

  resize: none;
  height: auto;
  max-width: 1200px;
  width: 100%;
  margin: 0;
  font-weight: ${themes.primary.font.weight.normal};

  font-family: ${themes.primary.font.family.openSans};
  line-height: 160%;
  color: ${themes.primary.colors.blogDarkText};
  overflow-wrap: anywhere;
  p {
    margin-top: 15px;
  }
  & > div > figure {
    position: relative;
    margin: 0;

    & > iframe {
      position: absolute;
      height: 100%;
      top: 0;
    }
  }

  & figcaption {
    color: ${themes.primary.colors.comment};
    font-size: 18px;
    line-height: 160%;
    padding-block: 0 !important;
    background-color: transparent !important;

    & > div {
      margin-left: 0 !important;
    }
  }

  & blockquote {
    margin: 0;
    border-left: 4px solid ${themes.primary.colors.blogArticleText};
    color: ${themes.primary.colors.blogArticleText};
    padding-left: 10px;
    font-size: 1.444em;
    font-style: italic;
    font-weight: ${themes.primary.font.weight.bold};
    line-height: 160%;
  }

  & .sun-editor-editable table td {
    border: 0;
  }

  & .__se__format__range_article_intro_custom {
    position: relative;
    border: 0.6px solid rgba(0, 0, 0, 0.25);
    padding: 10px 25px 10px 45px;
    font-family: ${themes.primary.font.family.openSans};
    font-weight: ${themes.primary.font.weight.semiBold};
    font-size: 18px;
    color: ${themes.primary.colors.blogArticleText};

    &::before {
      position: absolute;
      top: 16px;
      left: 16px;
      content: "";
      width: 17px;
      height: 17px;
      background-image: url(${articleIntro.src});
      background-repeat: no-repeat;
    }
  }

  & .__se__float-left {
    float: left;
    margin-right: 18px;
  }

  & .__se__float-right {
    float: right;
    margin-left: 18px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    p {
      margin-top: 1.25em;
    }
    font-size: ${themes.primary.font.size.vistaco};
  }
`;

export const AdminPageFirstBlockLayout = styled.div`
  display: flex;
  gap: 28px;
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
  flex-direction: column;
  display: flex;
  justify-content: center;
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

export const ListItemName = styled.span`
  &.open {
    color: ${themes.primary.colors.headerBorderHover};

    & path {
      fill: ${themes.primary.colors.headerBorderHover};
    }
  }
`;

export const Image = styled.img`
  transform: rotate(180deg);
  &.open {
    transform: rotate(0deg);
  }
`;

export const RotateSvg = styled.svg`
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
  display: -webkit-box;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 29px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1.333em;
`;

export const DraggableWrapper = styled.div`
  margin: 10px 0;
`;

export const SubtitleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3em;
`;

export const AdminQuaterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.4fr);
  column-gap: 13em;
`;

export const AdminHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  column-gap: 7rem;
`;

export const AdminSubtitleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 7.5em;
  margin-right: 7.5em;
`;

export const AdminShowCaseCategoryDropdownHeader = styled.div`
  margin-top: 14px;
  padding: 0 14px;
  letter-spacing: 0.03em;

  width: 100%;
  border: 1px solid ${themes.primary.colors.comment};
  color: ${themes.primary.colors.comment};
  display: flex;
  line-height: 363%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & svg {
    transition: all 0.3s;
  }

  &.open svg {
    transform: rotate(180deg);
  }
`;

export const AdminCategoryOption = styled.div``;

export const AdminShowCaseServiceButton = styled.div`
  background: ${themes.primary.colors.darkBlue};
  color: ${themes.primary.colors.secondary};
  padding: 3px 8px;
  line-height: 160%;
  width: fit-content;
  height: fit-content;
  font-size: 1.029em;
  display: inline-block;
  cursor: pointer;
  margin-top: 1em;
  margin-right: 1em;

  & > span {
    padding-left: 15px;
  }
`;

export const AdminShowCaseServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 461px auto;
  column-gap: 2.205em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
`;

export const AdminShowCaseTitle = styled.h2`
  font-size: 22px;
  margin: 0;
`;

export const AdminShowCaseProjectsWrapper = styled.div`
  margin-top: 3em;
`;

export const AdminShowCaseDropDownContent = styled.div`
  position: absolute;
  display: none;
  background-color: ${themes.primary.colors.blogBackground};
  z-index: 2;
  width: 461px;
  cursor: pointer;

  &.open {
    display: block;
  }
`;

export const AdminShowCaseDropDownListItem = styled.div`
  padding: 0 14px;
  letter-spacing: 0.03em;

  width: 100%;
  border: 1px solid ${themes.primary.colors.comment};
  border-top: 0;
  color: ${themes.primary.colors.comment};
  display: flex;
  line-height: 200%;
  justify-content: space-between;
  align-items: center;
  background: none;
`;

export const AdminShowCaseButton = styled.div<IFontSize>`
  margin-top: 41px;
  font-family: inherit;
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding};
  cursor: pointer;
  position: relative;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;
  display: inline-block;
`;

export const Label = styled.label`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1.333em;
  line-height: 19px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

export const SitemapInput = styled.input`
  position: relative;
  border: 1.125px solid ${themes.primary.colors.primary};
  background: none;
  cursor: pointer;
  line-height: 0;
  margin: 0 0.6em 0 0;
  outline: 0;
  padding: 0 !important;
  vertical-align: text-top;
  height: 1.35em;
  width: 1.35em;
  -webkit-appearance: none;
  opacity: 0.5;

  &::before {
    content: "";
    position: absolute;
    right: 50%;
    top: 50%;
    width: 4px;
    height: 10px;
    margin: -1px -1.5px 0 -1px;
    transform: rotate(45deg) translate(-50%, -50%);
    z-index: 2;
    border-width: 0 3px 3px 0;
    border-style: solid;
    border-color: ${themes.primary.colors.blogBackground};
    opacity: 0;
  }

  &:hover {
    opacity: 1;

    &::before {
      opacity: 0.8;
    }
  }
  &:checked {
    background-color: ${themes.primary.colors.primary};
    opacity: 1;
    &::before {
      border-width: 0 3px 3px 0;
      border-style: solid;
      border-color: ${themes.primary.colors.blogBackground};
      opacity: 1;
    }
  }
`;

export const CheckBoxWrapper = styled.div`
  margin-block: 0.666em 0.5em;
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  margin-bottom: 4.1em;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const AdminDropDownWrapper = styled.div``;

export const HeaderGrid = styled.div`
  display: flex;
`;

export const MobileAuditHeaderInputsWrapper = styled.div`
  margin-left: 30px;
  width: 43%;

  &.header {
    width: 34%;
    margin-left: 42px;
  }
  & > div:first-child {
    margin-bottom: 1.75em;
  }
`;

export const AdminMobileAuditWhatAppWrapper = styled.div`
  display: grid;
  column-gap: 50px;
  grid-template-columns: 1.5fr 1.1fr 1fr;
  justify-content: space-between;
`;

export const AdminMobileAuditGrid = styled.div`
  display: grid;
  column-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
`;

export const ListInput = styled.li`
  list-style: none;
`;

export const AdminMobileAuditHowDoWeAuditGrid = styled.ul`
  padding: 0;
  columns: 2;
  margin-top: 29px;
  column-gap: 36px;
`;

export const ButtonWrapper = styled.div`
  margin-block: 3.41em 4.1em;
`;

export const BringAppButtonLinkWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ErrorText = styled.div`
  color: ${themes.primary.colors.errorText};
`;

export const TextCounter = styled.div``;

export const BottomText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5em;
`;

export const AdminLayout = styled.div`
  position: relative;
  overflow: hidden;
`;

export const AdminHeaderPhotoWrapper = styled.div`
  width: 21%;
`;

export const TextEditorWrapper = styled.div<ITextEditorWrapperProps>`
  color: ${themes.primary.colors.blogArticleText};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  line-height: 160%;

  & strong {
    color: ${themes.primary.colors.primary};
    -webkit-text-stroke: 0.3px ${themes.primary.colors.primary};
  }

  & a {
    text-decoration: underline;
  }

  & ol {
    margin: 0;
    padding-left: 0;
    & li {
      margin-block: 16px;
    }
    & ol {
      padding-left: 29px;
      & ol {
        padding-left: 40px;
      }
    }
    & li::marker {
      content: none;
    }
  }

  & ol li:before {
    content: counters(list-item, ".") ". ";
  }
`;

export const NextButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 1em;
`;

export const NextButton = styled.div`
  font-size: 1.17em;
  margin-bottom: 25px;
  color: ${themes.primary.colors.darkBlue};
  white-space: nowrap;
  cursor: pointer;
`;

export const AuthorPhotoGrid = styled.div`
  display: flex;
`;

export const AuthorPhotoTextWrapper = styled.div`
  margin-left: 18px;
`;
export const BlockDropdown = styled.div<IBlockDropdownProps>`
  margin-top: ${(props) => props.marginTop};
`;

export const BlockDropdownHeader = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  padding: 16px 19px;
  display: flex;
  align-items: center;
  width: "100%";
  background-color: ${themes.primary.colors.primary};
`;

export const BlockDropdownContent = styled.div`
  margin: 0;
  margin-bottom: 20px !important;
`;

export const BlockDropdownHeaderTitle = styled.h3<IBlockDropDownHeaderTitleProps>`
  font-size: ${(props) =>
    props.size ? props.size : themes.primary.font.size.oneAndHalf};
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;
  color: ${themes.primary.colors.portfolioBg};
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0;
`;

export const BlockDropdownHeaderIcon = styled.div<IBlockDropdownHeaderIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-left: auto !important;
  transform: ${(props) => props.rotate && "rotate(180deg)"};
`;

export const AdminCategoryWrapper = styled.div`
  width: 255px;
`;

export const AdminPageReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const AdminImageWrapper = styled.div`
  position: relative;
  height: 180px;
  width: 100%;
`;
