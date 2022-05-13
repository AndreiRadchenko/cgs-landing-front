import type { NextPage } from "next";
import * as Styled from "../styles/Page.styled";
import Body from "../components/Body";

const Home: NextPage = () => {
  return (
    <Styled.Page>
      <Body />
    </Styled.Page>
  );
};

export default Home;
