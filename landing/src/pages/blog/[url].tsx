import parse from "html-react-parser";
import ArticleAuthor from "../../components/ArticleAuthor/ArticleAuthor";
import ArticleDescription from "../../components/ArticleDescription/ArticleDescription";
import ShareOn from "../../components/ShareOn/ShareOn";
import ArticleTags from "../../components/ArticleTags/ArticleTags";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { IArticle } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
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
import * as Style from "../../styles/PortfolioPage.styled";
import { adminGlobalService } from "../../services/adminHomePage";
import Head from "next/head";
import Image from "next/image";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import NotFoundPage from "../404";
import { IArticleData } from "../../types/Blog.types";
import Link from "next/link";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getBlogArticles], () =>
    adminBlogService.getArticles()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const ArticlePage = () => {
  const router = useRouter();
  const breadcrumbs: any[] = [];
  const [readMore, setReadMore] = useState<IArticle[] | null>(null);
  const [, setIsFromArticle] = useState<boolean>(false);
  const [, setFilters] = useState<string | string[]>([]);
  const url = typeof router.query?.url === "string" ? router.query.url : "";
  const { data, isSuccess, isLoading }: IArticleData = useQuery(
    [queryKeys.getBlogArticles],
    () => adminBlogService.getArticles(),
    {
      enabled: url.length > 0,
    }
  );

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const article =
    data &&
    data.find(
      (article) => article.url === url && !article.disabled && !article.draft
    );

  const { mutateAsync: updateViews } = useMutation(
    [queryKeys.updateViews],
    (dataToUpdate: IArticle) => adminBlogService.updateViewById(dataToUpdate)
  );

  useEffect(() => {
    const plusView = async () => {
      if (!article) return;

      const updatedArticle = { ...article, views: (article.views += 1) };

      await updateViews(updatedArticle);
    };
    plusView();
  }, [article, url]);

  useEffect(() => {
    setIsFromArticle(router.query.fromArticle === "true");
    if (router.query.filters) {
      setFilters(router.query.filters);
    }
  }, [router.query]);

  useEffect(() => {
    const getMultipleRandom = (arr: IArticle[], num: number) => {
      const shuffled = [...arr]
        .filter(
          (article) =>
            article.url !== url && !article.disabled && !article.draft
        )
        .sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    if (data) {
      const readMoreRandomly = getMultipleRandom(data, 2);
      setReadMore(readMoreRandomly);
    }
  }, [article, data, url]);

  breadcrumbs.push(
    <Link key="home" href="/">
      <a>Homepage</a>
    </Link>
  );

  breadcrumbs.push(
    <Link key="blog" href="/blog">
      <a>Blog</a>
    </Link>
  );

  article &&
    breadcrumbs.push(
      <span key="project">
        {article.title.length > 20
          ? article.title.substring(0, 20) + "..."
          : article.title}
      </span>
    );

  if (isLoading)
    return (
      <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
    );

  return isSuccess && article ? (
    <>
      <Head>
        <title>{article.meta.metaTitle}</title>
        <meta name="description" content={article.meta.metaDescription} />
        {article.meta.customHead && parse(article.meta.customHead)}
      </Head>
      <Styles.Background>
        <HeaderNavNew />
        <Style.Breadcrumbs isBlog={true}>
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              {breadcrumb}
              {index < breadcrumbs.length - 1 && (
                <Style.BreadcrumbSeparator>&gt;</Style.BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </Style.Breadcrumbs>
        <Styles.Cont>
          <Styles.PageWrapper>
            <Styles.Article>
              <Styles.Title>{article.title}</Styles.Title>
              <Styles.TitleBg>
                <Image src={titleBg} alt="top title bg" />
              </Styles.TitleBg>
            </Styles.Article>
            <Styles.BannerWrapper>
              <Styles.TagWrapper>
                <ShareOn title={article.title} className="web articleShare" />
                <ArticleTags tags={article.tags} />
                <ArticleAuthor
                  author={article.author}
                  date={article.date}
                  time={article.minutesToRead}
                  views={article.views}
                  update={article.updatedOn}
                />
              </Styles.TagWrapper>
              <Styles.BannerImageContainer>
                <Styles.BannerImage
                  src={article.image?.url}
                  alt="banner image"
                />
              </Styles.BannerImageContainer>
            </Styles.BannerWrapper>
            <Styles.FirstHeaderBg>
              <Image src={firstHeaderBg} alt="first header bg" />
            </Styles.FirstHeaderBg>
            <Styles.SecondHeaderBg>
              <Image src={secondHeaderBg} alt="second header bg" />
            </Styles.SecondHeaderBg>
            <Styles.FooterBg>
              <Image src={footerBg} alt="footer bg" />
            </Styles.FooterBg>
            <Styles.DescriptionWrapper>
              <Styles.SubTitle>{parse(article.description)}</Styles.SubTitle>
              <Styles.HeaderBottomBg>
                <Image src={headerBottomBg} alt="header bottom bg" />
              </Styles.HeaderBottomBg>
            </Styles.DescriptionWrapper>
            {readMore && (
              <>
                <ArticleDescription content={article.content} />
                <ShareOn title={article.title} className="mobile" />
                <ArticleReadMore readMore={readMore} />
              </>
            )}
          </Styles.PageWrapper>
        </Styles.Cont>
        <FooterNew />
      </Styles.Background>
    </>
  ) : (
    <NotFoundPage />
  );
};

export default ArticlePage;
