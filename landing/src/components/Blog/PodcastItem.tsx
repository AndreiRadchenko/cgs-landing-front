import React from "react";
import * as Styled from "../../styles/Blog.styled";
import PlayButton from "../../../public/BlogDecorations/Podcast/PlayButton.png";
import Podcast from "../../../public/BlogDecorations/Podcast/Podcast.svg";
import PlayTriangle from "../../../public/BlogDecorations/Podcast/PlayTriangle.svg";
import StopButton from "../../../public/StopButton.svg";

import { useAudio } from "../../hooks/useAudio";
const PodcastItem = () => {
  const [playing, toggle] = useAudio(
    "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3"
  );

  return (
    <Styled.PodcastContainer>
      <Styled.RelativeContainer>
        <Styled.PodcastCard>
          <Styled.BlogItemDescription>
            What is a project manager? The key to project success...
          </Styled.BlogItemDescription>
          <Styled.Track>
            <Styled.PlayedTrack />
            <Styled.PlayerDot />
          </Styled.Track>
          <Styled.PlayerTimeContainer>
            <Styled.PlayerTime>2:06</Styled.PlayerTime>
            <Styled.PlayerTime>-11:51</Styled.PlayerTime>
          </Styled.PlayerTimeContainer>
          <Styled.PodcastNavigation>
            <Styled.SmallNavigation>2x</Styled.SmallNavigation>
            <Styled.LeftArrow>
              <Styled.SecondsLeft>15</Styled.SecondsLeft>
            </Styled.LeftArrow>
            {typeof toggle !== "boolean" && (
              <Styled.PlayButton
                onClick={toggle}
                src={playing ? StopButton.src : PlayButton.src}
              />
            )}
            <Styled.RightArrow>
              <Styled.SecondsRight>15</Styled.SecondsRight>
            </Styled.RightArrow>
            <Styled.SmallNavigation>+</Styled.SmallNavigation>
          </Styled.PodcastNavigation>
        </Styled.PodcastCard>
        <Styled.BackgroundCard>
          <div />
        </Styled.BackgroundCard>
      </Styled.RelativeContainer>
      <Styled.FlexColumnContainer>
        <Styled.FlexRowContainer>
          <Styled.PodcastIcon src={Podcast.src} />
          <Styled.PodcastWord>podcast</Styled.PodcastWord>
          <Styled.PlayTag>
            <Styled.PlayTriangle src={PlayTriangle.src} />
            <div>15 min</div>
          </Styled.PlayTag>
        </Styled.FlexRowContainer>
        <Styled.PodcastTitle>
          Tune in to up-to-date content about technologies and the IT industry.
        </Styled.PodcastTitle>
        <Styled.PodcastDescription>
          If mobile, blockchain, and web development sounds like music to your
          ears, be sure you’ve just found your future fav blog
        </Styled.PodcastDescription>
      </Styled.FlexColumnContainer>
    </Styled.PodcastContainer>
  );
};

export default PodcastItem;
