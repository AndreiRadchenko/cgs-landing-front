import type { NextPage, GetServerSideProps } from "next";
import * as Styled from "../styles/Page.styled";
import Body from "../components/Body";
import getServerSideProps from "../utils/Redirect";

export { getServerSideProps };

const Home: NextPage = () => {
  return (
    <Styled.Page>
      <Body />
    </Styled.Page>
  );
};

export default Home;
