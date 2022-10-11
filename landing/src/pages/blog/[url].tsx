import parse from "html-react-parser";
import DefaultErrorPage from "next/error";
import ArticleAuthor from "../../components/ArticleAuthor/ArticleAuthor";
import ArticleDescription from "../../components/ArticleDescription/ArticleDescription";
import ShareOn from "../../components/ShareOn/ShareOn";
import ArticleTags from "../../components/ArticleTags/ArticleTags";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { IArticle, IView } from "../../types/Admin/Response.types";
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
import { adminGlobalService } from "../../services/adminHomePage";
import Head from "next/head";
import Image from "next/image";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";

interface IArticleData {
  data: IArticle[] | undefined;
  isLoading: boolean;
  isSuccess: boolean;
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.getBlogArticles, () =>
    adminBlogService.getArticles()
  );

  await queryClient.prefetchQuery(queryKeys.views, () =>
    adminBlogService.getViews()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const ArticlePage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [readMore, setReadMore] = useState<IArticle[] | null>(null);
  const [isFromArticle, setIsFromArticle] = useState<boolean>(false);
  const [filters, setFilters] = useState<string | string[]>([]);
  const url = typeof router.query?.url === "string" ? router.query.url : "";
  const { data, isSuccess, isLoading }: IArticleData = useQuery(
    queryKeys.getBlogArticles,
    () => adminBlogService.getArticles(),
    {
      enabled: url.length > 0,
    }
  );

  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());
  const views = useQuery(queryKeys.views, () => adminBlogService.getViews());

  const article =
    data &&
    data.find(
      (el) =>
        el.url === url &&
        !el.disabled &&
        (!el.scheduleArticle || new Date() >= new Date(el.scheduleArticle))
    );
  const findViews = (url: string) => {
    if (views.data)
      return views.data.find((view) => view.articleUrl === url)?.views;
  };

  const { mutateAsync: updateViews } = useMutation(
    queryKeys.updateViews,
    (dataToUpdate: IView) => adminBlogService.updateViews(dataToUpdate),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.views]);
      },
    }
  );

  useEffect(() => {
    const plusView = async () => {
      if (!views.data) return;

      const viewToUpdate = views.data.find((el) => el.articleUrl === url);

      if (viewToUpdate) {
        viewToUpdate.views += 1;
        await updateViews(viewToUpdate);
      }
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
        .filter((article) => article.url !== url)
        .sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    if (data) {
      const readMoreRandomly = getMultipleRandom(data, 2);
      setReadMore(readMoreRandomly);
    }
  }, [article, data, url]);

  const handleArrowClick = () => {
    isFromArticle
      ? router.back()
      : router.push(
          {
            pathname: `/blog`,
            query: { filters },
          },
          `/blog`
        );
  };

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
        <Styles.Cont>
          <Styles.PageWrapper>
            <div style={{ position: "relative" }}>
              <Styles.Title>{article.title}</Styles.Title>
              <Styles.TitleBg>
                <Image src={titleBg} alt="top title bg" />
              </Styles.TitleBg>
              <Styles.ArrowBackButton>
                <svg
                  onClick={handleArrowClick}
                  width="100%"
                  height="100%"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.8359 18.2751C36.0298 12.7913 23.6766 16.2219 18.2443 25.9376C12.812 35.6533 16.3577 47.9749 26.1639 53.4588C35.97 58.9426 48.3232 55.512 53.7554 45.7963C59.1877 36.0806 55.642 23.759 45.8359 18.2751Z"
                    fill="none"
                    stroke="#272C2F"
                    strokeWidth="1.45455"
                    strokeMiterlimit="10"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.1197 36.9997L37.6998 45.5058L36.506 46.71L25.8802 36.1761L25.8937 36.1624L25.8802 36.149L36.9197 25.0177L38.1237 26.2118L29.1065 35.304L46.1183 35.2302L46.1257 36.9259L29.1197 36.9997Z"
                    fill="black"
                  />
                </svg>
              </Styles.ArrowBackButton>
            </div>
            <Styles.BannerWrapper>
              <Styles.TagWrapper>
                <ShareOn title={article.title} className="web" />
                <ArticleTags tags={article.tags} />
                <ArticleAuthor
                  author={article.author}
                  date={article.date}
                  time={article.minutesToRead}
                  views={findViews(article.url)}
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
              <Styles.SubTitle>{article.description}</Styles.SubTitle>
              <Styles.HeaderBottomBg>
                <Image src={headerBottomBg} alt="header bottom bg" />
              </Styles.HeaderBottomBg>
            </Styles.DescriptionWrapper>

            {readMore && (
              <>
                <ArticleDescription content={article.content} />
                <ShareOn title={article.title} className="mobile" />
                <ArticleReadMore readMore={readMore} findViews={findViews} />
              </>
            )}
          </Styles.PageWrapper>
        </Styles.Cont>
        <FooterNew />
      </Styles.Background>
    </>
  ) : (
    <DefaultErrorPage statusCode={404} />
  );
};

export default ArticlePage;
