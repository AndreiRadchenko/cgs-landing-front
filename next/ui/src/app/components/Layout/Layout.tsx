import Footer from "../shared/Footer/footer.component";
import Header from "../shared/Header/header.component";
import { SocialList, Nav } from "../../../../src/consts/lists";
import Head from "next/head";

interface LayaoutProps {
  children: any;
  title?: string;
}

const MainLayout: React.FC<LayaoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Homepage" />
      </Head>
      <Header socialList={SocialList} navigation={Nav}></Header>
      <main>{children}</main>
      <Footer socialList={SocialList} fill="white"></Footer>
    </>
  );
};

export default MainLayout;