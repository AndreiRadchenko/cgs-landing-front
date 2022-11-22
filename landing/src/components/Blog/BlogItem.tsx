import React from "react";
import * as Styled from "../../styles/Blog.styled";
import Watch from "../../../public/Watch.svg";
import Timer from "../../../public/Timer.svg";
import { IArticle } from "../../types/Admin/Response.types";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useRouter } from "next/router";

interface IBlogItem {
  article: IArticle;
  views?: number;
  filters?: string[];
}

const BlogItem = ({ article, views, filters }: IBlogItem) => {
  const { width } = useWindowDimension();
  const parseDate = (date: string) => {
    return date.split("-").reverse().join(".");
  };

  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(
      {
        pathname: `/blog/${article.url}`,
        query: { filters },
      },
      `/blog/${article.url}`
    );
  };

  return (
    article && (
      <Styled.MarginContainer>
        <a href={`/blog/${article.url}`} onClick={handleClick}>
          <Styled.HoverContainer>
            <Styled.BlogItemContainer>
              <Styled.ArticlePreview>
                <Styled.BlogItemContent>
                  <Styled.FlexRowContainer>
                    {(width && width <= 767 && (
                      <Styled.FlexColumnContainer className="preview">
                        <Styled.SecondaryAuthor>{`By ${article.author.name} / ${article.author.specialization}`}</Styled.SecondaryAuthor>
                        <Styled.StatisticWrapper>
                          <Styled.DataContainer>
                            <Styled.WatchContainer>
                              <Styled.BlogItemWatchIcon
                                src={Watch.src}
                                alt="views icon"
                              />
                              <Styled.WatchCount>
                                {views || 0}
                              </Styled.WatchCount>
                            </Styled.WatchContainer>
                            <Styled.WatchContainer>
                              <Styled.TimerIcon
                                src={Timer.src}
                                alt="timer icon"
                              />
                              <Styled.GrayText className={"big"}>
                                <Styled.TimeText>
                                  {article.minutesToRead}
                                </Styled.TimeText>
                                min
                              </Styled.GrayText>
                            </Styled.WatchContainer>
                          </Styled.DataContainer>
                          <Styled.Date>
                            {article.updatedOn === "" ? (
                              <Styled.TimeText>
                                {parseDate(article.date)}
                              </Styled.TimeText>
                            ) : (
                              <span>
                                Updated on
                                <Styled.TimeText>
                                  {parseDate(article.updatedOn)}
                                </Styled.TimeText>
                              </span>
                            )}
                          </Styled.Date>
                        </Styled.StatisticWrapper>
                      </Styled.FlexColumnContainer>
                    )) || (
                      <Styled.Date>
                        {article.updatedOn === "" ? (
                          <Styled.TimeText>
                            {parseDate(article.date)}
                          </Styled.TimeText>
                        ) : (
                          <span>
                            Updated on
                            <Styled.TimeText>
                              {parseDate(article.updatedOn)}
                            </Styled.TimeText>
                          </span>
                        )}
                      </Styled.Date>
                    )}
                    <Styled.Tag className="preview">
                      {filters && filters?.length > 0
                        ? filters.find((tag) => article.tags.includes(tag))
                        : article.tags[0]}
                    </Styled.Tag>
                  </Styled.FlexRowContainer>
                  <Styled.BlogItemTitle>{article.title}</Styled.BlogItemTitle>
                  <Styled.BlogItemDescription>
                    {article.description}
                  </Styled.BlogItemDescription>
                </Styled.BlogItemContent>
                {article.image?.url ? (
                  <Styled.BlogItemImage src={article.image.url} />
                ) : (
                  <Styled.NoBlogItemImage />
                )}
              </Styled.ArticlePreview>
              <Styled.GeneralInfo className="preview">
                <Styled.BlogItemRowContainer>
                  <Styled.SecondaryAuthor>{`By ${article.author.name} / ${article.author.specialization}`}</Styled.SecondaryAuthor>
                  <Styled.WatchContainer>
                    <Styled.BlogItemWatchIcon src={Watch.src} />
                    <Styled.WatchCount>{views || 0}</Styled.WatchCount>
                  </Styled.WatchContainer>
                </Styled.BlogItemRowContainer>
                <Styled.WatchContainer>
                  <Styled.TimerIcon src={Timer.src} alt="timer icon img" />
                  <Styled.GrayText
                    className={"big"}
                  >{`${article.minutesToRead} min`}</Styled.GrayText>
                </Styled.WatchContainer>
              </Styled.GeneralInfo>
            </Styled.BlogItemContainer>
            <Styled.HoverBlock>
              <Styled.HoverBlackBlock />
            </Styled.HoverBlock>
          </Styled.HoverContainer>
        </a>
      </Styled.MarginContainer>
    )
  );
};

export default BlogItem;
