import React, { useRef, useState } from "react";
import { List } from "../../components/CV/List/List";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICvResponse } from "../../types/Admin/AdminCv.types";
import { adminCvService } from "../../services/adminCvPage";
import { Loader, LoaderStub } from "../../components/Loader";
import Head from "next/head";
import * as Styled from "../../styles/AdminPage";
import * as Styles from "../../styles/CV/DevsInfo.styled"
import * as PortfolioStyles from "../../styles/Portfolio.styled";
import parse from "html-react-parser";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";


const DevsInfo = () => {
  // const { data }: ICvResponse = useQuery(
  //   [queryKeys.getPaginatedAndFilteredCvs],
  //   () =>
  //     adminCvService.getPaginatedAndFilteredCvs("", "Peter Peterson", "", "")
  // );

  const { data, isLoading }: ICvResponse = useQuery(
    [queryKeys.getCvPage],
    () =>
      adminCvService.getCvPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  const [category, setCategory] = useState<string>("");
  const [isRequestRepeated, setIsRequestRepeated] = useState<boolean>(false);
  const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);
  const [isCategoryChange, setIsCategoryChange] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isPaginationTriggered, setIsPaginationTriggered] = useState(true);
  const categoryItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [categoryItemWidths, setCategoryItemWidths] = useState<string[]>([]);
  const [categoryItemHeights, setCategoryItemHeights] = useState<string[]>([]);

  const categoryTrigger = () => {
    setIsFirstLoad(false);
    setIsSearchTriggered(false);
    setIsRequestRepeated(false);
    setIsPaginationTriggered(false);
  };

  const handleCategoryItemRef =
    (index: number) => (ref: HTMLDivElement | null) => {
      categoryItemsRef.current[index] = ref;
    };

  return (
    <Loader active={isLoading}>
      <Head>
        <title>{metaTitle || "CV | CGS-team"}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      {
        isLoading ? (
          <LoaderStub />
        ) : data ? (
          <>
            <Styles.CvContainer>
              <HeaderNavNew />
              <Styles.Layout>
                <Styles.CvTitle>{data.title}</Styles.CvTitle>
                <Styles.SettingsBlock>
                  <PortfolioStyles.PortfolioCategoryWrapper>
                    {data.categories.map((name , i) => (
                      <PortfolioStyles.PortfolioCategoryItem
                        key={i}
                        ref={handleCategoryItemRef(i + 1)}
                        blockWidth={categoryItemWidths[i + 1]}
                        blockHeight={categoryItemHeights[i + 1]}
                        className={i + 1 === activeCategory ? "active" : ""}
                        onClick={() => {
                          categoryTrigger();
                          setIsCategoryChange(true);
                          setActiveCategory(i + 1);
                          setCategory(name);
                        }}
                      >
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </PortfolioStyles.PortfolioCategoryItem>
                    ))}
                  </PortfolioStyles.PortfolioCategoryWrapper>
                  <Styles.Search>Search</Styles.Search>
                </Styles.SettingsBlock>
              </Styles.Layout>
              <FooterNew />
            </Styles.CvContainer>
          </>
        ) : (
          <Styled.AdminUnauthorizedModal>
            Something went wrong :(
          </Styled.AdminUnauthorizedModal>
        )
      }
    </Loader >
  );
  // return <List data={data} />;
};

export default DevsInfo;
