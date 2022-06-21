import { Page } from "../../../styles/Page.styled";
import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import ArticleAuthor from "../../../components/ArticleAuthor/ArticleAuthor";
import ArticleDescription from "../../../components/ArticleDescription/ArticleDescription";
import ShareOn from "../../../components/ShareOn/ShareOn";
import ArticleTags from "../../../components/ArticleTags/ArticleTags";
import Footer from "../../../components/Footer/Footer";
import { useQuery } from "react-query";
import { IArticle, IBlogResponse } from "../../../types/Admin/Response.types";
import { queryKeys } from "../../../consts/queryKeys";
import ArrowBack from "../../../../public/arrowBack.svg";
import React, { useEffect, useState } from "react";
import * as Styles from "../../../styles/ArticlePage.styled";
import ArticleReadMore from "../../../components/ArticleReadMore/ArticleReadMore";
import { useRouter } from "next/router";
import { adminBlogService } from "../../../services/adminBlogPage";
import * as Styled from "../../../styles/AdminPage";

interface IBlogData {
  data: IBlogResponse | undefined;
  isLoading: boolean;
  isSuccess: boolean;
}

const ArticlePage = () => {
  const router = useRouter();
  const [article, setArticle] = useState<IArticle | undefined | null>(null);
  const [readMore, setReadMore] = useState<IArticle[] | null>(null);
  const id = typeof router.query?.id === "string" ? router.query.id : "";
  const { data, isSuccess }: IBlogData = useQuery(
    queryKeys.getBlogPage,
    () => adminBlogService.getBlogPage(),
    {
      enabled: id.length > 0,
    }
  );

  const getMultipleRandom = (arr: IArticle[], num: number) => {
    const shuffled = [...arr]
      .filter((article) => article._id !== id)
      .sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    if (data) setArticle(data.articles.find((article) => article._id === id));
  }, [data, id]);

  useEffect(() => {
    if (data) {
      const readMoreRandomly = getMultipleRandom(data.articles, 2);
      setReadMore(readMoreRandomly);
    }
  }, [data]);

  return (
    <>
      {isSuccess && article && readMore ? (
        <Page>
          <HeaderNav />
          <Styles.PageWrapper>
            <Styles.ArrowBackButton
              src={ArrowBack.src}
              onClick={() => router.back()}
            />
            <Styles.Title>{article.title}</Styles.Title>
            <Styles.SubTitle>{article.description}</Styles.SubTitle>
            <Styles.BannerImage src={article.image.url} />
            <ArticleAuthor
              author={article.author}
              date={article.date}
              time={article.minutesToRead}
            />
            <ArticleDescription content={article.content} />
            <Styles.ShareTagsWrapper>
              <ShareOn image={article.image} title={article.title} />
              <ArticleTags tags={article.tags} />
            </Styles.ShareTagsWrapper>
            <ArticleReadMore readMore={readMore} />
          </Styles.PageWrapper>
          <Footer />
        </Page>
      ) : (
        <Styled.AdminUnauthorizedModal>
          Something went wrong :(
        </Styled.AdminUnauthorizedModal>
      )}
    </>
  );
};

export default ArticlePage;
