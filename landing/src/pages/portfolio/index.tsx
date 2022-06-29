import React, { useEffect, useState } from "react";
import { Page } from "../../styles/Page.styled";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminPortfolioPageService } from "../../services/adminPortfolioPage";
import PortfolioSlider from "../../components/Admin/PortfolioSwipers/PortfolioSlider";
import { IPortfolioResponse } from "../../types/Admin/AdminPortfolioPage.types";
import * as Styled from "../../styles/AdminPage";
import { Separator } from "../../styles/PortfolioSlider.styles";
import { useWindowDimension } from "../../hooks/useWindowDimension";

const Index = () => {
  const { data, isLoading, refetch }: IPortfolioResponse = useQuery(
    queryKeys.getPortfolio,
    () => adminPortfolioPageService.getPortfolio()
  );
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowDimension();
  const sortByCategory = (category: string) => {
    return data?.reviews.filter((review) => review.category === category);
  };
  useEffect(() => {
    if (width && width <= 768) {
      setIsMobile(true);
    }
  }, [width]);

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data ? (
    <>
      <Page>
        <HeaderNav />
      </Page>
      {isMobile ? (
        <>
          <div>mobile</div>
        </>
      ) : (
        <>
          <Styled.Subtitle>
            UR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK WORK OUR WORK
            OUR WORK
          </Styled.Subtitle>
          <PortfolioSlider reviews={sortByCategory("web")} category={"web"} />
          <PortfolioSlider
            reviews={sortByCategory("mobile")}
            category={"mobile"}
          />
          <PortfolioSlider
            reviews={sortByCategory("server")}
            category={"server"}
          />
          <PortfolioSlider
            reviews={sortByCategory("blockchain")}
            category={"blockchain"}
          />
          <Separator color={"#8f8e93"} />
        </>
      )}

      <Footer />
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default Index;
