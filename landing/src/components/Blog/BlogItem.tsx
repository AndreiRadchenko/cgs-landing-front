import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/Blog.styled";
import Watch from "../../../public/Watch.svg";
import Timer from "../../../public/Timer.svg";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useRouter } from "next/router";
import { IBlogItem } from "../../types/Blog.types";

const BlogItem = ({
  article,
  views,
  filters,
  loadedImagesCounter,
  setIsTagLoaded,
}: IBlogItem) => {
  const { width } = useWindowDimension();
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedTag, setDisplayedTag] = useState("");
  const parseDate = (date: string) => {
    return date.split("-").reverse().join(".");
  };

  const router = useRouter();

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

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

  useEffect(() => {
    if (isLoaded) {
      loadedImagesCounter && loadedImagesCounter();
    }
  }, [isLoaded]);

  useEffect(() => {
    const result =
      filters && filters?.length > 0
        ? filters.find((tag) => article.tags.includes(tag))
        : article.tags[0];

    if (result) {
      setIsTagLoaded && setIsTagLoaded(true);
      setDisplayedTag(result);
    }
  }, [article]);

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
                                Updated on{" "}
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
                            Updated on{" "}
                            <Styled.TimeText>
                              {parseDate(article.updatedOn)}
                            </Styled.TimeText>
                          </span>
                        )}
                      </Styled.Date>
                    )}
                    <Styled.Tag className="preview">{displayedTag}</Styled.Tag>
                  </Styled.FlexRowContainer>
                  <Styled.BlogItemTitle>{article.title}</Styled.BlogItemTitle>
                  <Styled.BlogItemDescription>
                    {parse(article.description)}
                  </Styled.BlogItemDescription>
                </Styled.BlogItemContent>
                {article.image?.url ? (
                  <Styled.BlogItemImage
                    src={article.image.url}
                    onLoad={handleImageLoad}
                  />
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
