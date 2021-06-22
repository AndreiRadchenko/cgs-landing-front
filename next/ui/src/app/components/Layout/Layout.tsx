import Footer from "../shared/Footer/footer.component";
import Header from "../shared/Header/header.component";
import { SocialList, Nav } from "../../../../src/consts/lists";
import Head from "next/head";
import { LayoutProps } from "../../../types/components/index";

const MainLayout: React.FC<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Homepage" />
    </Head>
    <Header socialList={SocialList} navigation={Nav} />
    <main>{children}</main>
    <Footer socialList={SocialList} fill="white" />
  </>
);

export default MainLayout;
