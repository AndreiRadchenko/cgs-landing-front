import React, { useState } from "react";
import Head from "next/head";

import Footer from "../shared/Footer/footer.component";
import Header from "../shared/Header/header.component";
import { SocialList, Nav } from "../../../../src/consts/lists";
import { LayoutProps } from "../../../types/components/index";

import * as Styled from "./Layout.styles";

const MainLayout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  favicon = "/favicon.ico",
  image,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        {description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
          </>
        )}
        {favicon && <link rel="icon" href={favicon} />}
        {image && <meta property="og:image" content={image} />}
      </Head>
      <Header
        socialList={SocialList}
        navigation={Nav}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <Styled.MainContainer showMenu={showMenu}>{children}</Styled.MainContainer>
      <Styled.FooterContainer showMenu={showMenu}>
        <Footer socialList={SocialList} fill="white" />
      </Styled.FooterContainer>
    </>
  );
};

export default MainLayout;
