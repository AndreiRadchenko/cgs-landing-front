import styled from 'styled-components';
import themes from '../utils/themes';

export const AdminPageWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 4.5fr;
background: ${themes.primary.colors.grayBack};
`;

export const AdminPageSidebar = styled.div`
background: ${themes.primary.colors.lighten.green};
border-radius: 0 40px 40px 0;
padding: 3.5em 3.7em 0 2.7em;
display: flex;
flex-direction: column;
`;

export const AdminPageSidebarMenu = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
margin: 120px 0 0 0;
padding: 0;
`;

export const AdminSidebarMenuElement = styled.li`
font-size: 1.7em;
font-family: ${themes.primary.font.family.mulish};
padding-bottom: ${themes.primary.spacing.primary};
font-weight: ${themes.primary.font.weight.normal};
cursor: pointer;
`;

export const AdminSidebarHidenElement = styled.div`
height: 1em;
padding: 0.2em 0 0 0.8em;
display: ${props => props.theme};
`;

export const AdminPageContentBlock = styled.div`
padding: 20px 0 0 0;
`;

export const AdminMainPaddedBlock = styled.div`
padding: 0 ${themes.primary.spacing.adminWithinBlocks};
margin-bottom: ${themes.primary.spacing.adminWithinBlocks};
background: ${props => props.theme == "dark" ? themes.primary.colors.darkedGrayBack : null}
`;

export const AdminMainBlockHeader = styled.h2`
font-size: ${themes.primary.font.size.secondary};
font-family: ${themes.primary.font.family.mulish};
padding-top: 0.7em;
margin-bottom: 0.5em;
`;

export const AdminMainBlockSubTitle = styled.h3`
font-size: ${themes.primary.font.size.linkText};
font-family: ${themes.primary.font.family.mulish};
font-weight: ${themes.primary.font.weight.bold};
margin: 0;
`;

export const AdminMainBlockComment = styled.p`
color: ${themes.primary.colors.comment};
margin: 10px 0 0 0;
`;

export const AdminAddLogoBlock = styled.div`
border: 2px dashed ${themes.primary.colors.primary};
height: 11em;
width: 38%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 0;
margin-top: ${themes.primary.spacing.primary};
`;

export const AdminMainEditInfoGridBlock = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 4rem;
`;

export const AdminPageInput = styled.input`
width: 100%;
font-size: ${themes.primary.font.size.primary};
font-family: ${themes.primary.font.family.mulish};
padding: 1em;
border: 0;
margin: 0.8em 0;
&: focus{
  outline: 1px solid gray;
}
`;

export const AdminMainPagePhotoBlock = styled.div`
border: 2px dashed ${themes.primary.colors.primary};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const AdminMainPhotoGrid = styled.div`
width: 55%;
`;

export const AdminMainDeleteText = styled.h6`
color: ${themes.primary.colors.errorText};
margin: 1em 0;
font-size: ${themes.primary.font.size.primary};
cursor: pointer;
`;