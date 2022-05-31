import type { NextPage } from "next";
import * as Styled from "../styles/Page.styled";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Styled.Page>
        <Body />
      </Styled.Page>
      <Footer />
    </>
  );
};

export default Home;
