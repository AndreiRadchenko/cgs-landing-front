import type { NextPage } from "next";
import * as Styled from "../styles/Page.styled";
import Body from "../components/Body";
import ProjectCarousel from "../components/ProjectsCarousel";

const Home: NextPage = () => {
  return (
    <Styled.Page>
      <Body />
      <ProjectCarousel />
    </Styled.Page>
  );
};

export default Home;
