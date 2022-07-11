import parse from "html-react-parser";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import ArticleAuthor from "../../components/ArticleAuthor/ArticleAuthor";
import ArticleDescription from "../../components/ArticleDescription/ArticleDescription";
import ShareOn from "../../components/ShareOn/ShareOn";
import ArticleTags from "../../components/ArticleTags/ArticleTags";
import Footer from "../../components/Footer/Footer";
import { useMutation, useQuery } from "react-query";
import {
  IArticle,
  IBlogResponse,
  IViews,
} from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import ArrowBack from "../../../public/arrowBack.svg";
import titleBg from "../../../public/articleTitleBgImg.svg";
import headerBottomBg from "../../../public/articleHeaderBottomBg.svg";
import firstHeaderBg from "../../../public/articleFirstHeaderBg.svg";
import secondHeaderBg from "../../../public/articleSecondHeaderBg.svg";
import footerBg from "../../../public/articleFooterBg.svg";
import React, { useEffect, useState } from "react";
import * as Styles from "../../styles/ArticlePage.styled";
import ArticleReadMore from "../../components/ArticleReadMore/ArticleReadMore";
import { useRouter } from "next/router";
import { adminBlogService } from "../../services/adminBlogPage";
import * as Styled from "../../styles/AdminPage";
import { adminGlobalService } from "../../services/adminHomePage";
import Head from "next/head";
import { HeaderContainer } from "../../styles/BlogPage.styled";
import Image from "next/image";

interface IBlogData {
  data: IBlogResponse | undefined;
  isLoading: boolean;
  isSuccess: boolean;
}

const ArticlePage = () => {
  const router = useRouter();
  const [article, setArticle] = useState<IArticle | undefined | null>(null);
  const [readMore, setReadMore] = useState<IArticle[] | null>(null);
  const url = typeof router.query?.url === "string" ? router.query.url : "";
  const { data, isSuccess, isLoading }: IBlogData = useQuery(
    queryKeys.getBlogPage,
    () => adminBlogService.getBlogPage(),
    {
      enabled: url.length > 0,
    }
  );

  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());
  const views = useQuery(queryKeys.views, () => adminBlogService.getViews());

  const getMultipleRandom = (arr: IArticle[], num: number) => {
    const shuffled = [...arr]
      .filter((article) => article.url !== url)
      .sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const findViews = (url: string) => {
    if (views.data)
      return views.data[0].allViews.find((view) => view.articleUrl === url)
        ?.views;
  };

  const { mutateAsync: updateViews } = useMutation(
    queryKeys.postArticle,
    (dataToUpdate: IViews) => adminBlogService.updateViews(dataToUpdate)
  );

  const plusView = async () => {
    if (!views.data) return;
    const dataToUpdate = views.data[0].allViews.map((view) =>
      view.articleUrl === url ? { ...view, views: view.views + 1 } : view
    );
    await updateViews({ allViews: dataToUpdate });
  };

  useEffect(() => {
    plusView();
  }, [article]);

  useEffect(() => {
    if (data) setArticle(data.articles.find((article) => article.url === url));
  }, [data, url]);

  useEffect(() => {
    if (data) {
      const readMoreRandomly = getMultipleRandom(data.articles, 2);
      setReadMore(readMoreRandomly);
    }
  }, [article]);

  if (isLoading)
    return (
      <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
    );

  const { metaTitle, metaDescription, customHead } = {
    ...article?.meta,
  };

  console.log(article && findViews(url));
  return isSuccess && article && readMore ? (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      <Styles.Background>
        <HeaderContainer>
          <HeaderNav />
          <Styles.PageWrapper>
            <Styles.TitleBg>
              <Image src={titleBg} alt="top title bg" />
            </Styles.TitleBg>
            <Styles.ArrowBackButton
              src={ArrowBack.src}
              onClick={() => router.back()}
            />
            <Styles.Title>{article.title}</Styles.Title>
            <Styles.BannerWrapper>
              <Styles.TagWrapper>
                <ShareOn image={article.image} title={article.title} />
                <ArticleTags tags={article.tags} />
                <ArticleAuthor
                  author={article.author}
                  date={article.date}
                  time={article.minutesToRead}
                  views={findViews(article.url)}
                />
              </Styles.TagWrapper>
              <Styles.BannerImage src={article.image.url} />
            </Styles.BannerWrapper>
            <Styles.HeaderBottomBg>
              <Image src={headerBottomBg} alt="header bottom bg" />
            </Styles.HeaderBottomBg>
            <Styles.FirstHeaderBg>
              <Image src={firstHeaderBg} alt="first header bg" />
            </Styles.FirstHeaderBg>
            <Styles.SecondHeaderBg>
              <Image src={secondHeaderBg} alt="second header bg" />
            </Styles.SecondHeaderBg>
            <Styles.FooterBg>
              <Image src={footerBg} alt="footer bg" />
            </Styles.FooterBg>
            <Styles.SubTitle>{article.description}</Styles.SubTitle>
            <ArticleDescription content={article.content} />
            <ArticleReadMore readMore={readMore} />
          </Styles.PageWrapper>
        </HeaderContainer>
        <Footer isGreenLine={false} />
      </Styles.Background>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default ArticlePage;
