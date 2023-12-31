import React, { ChangeEvent, useRef, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

import * as Styled from "../../styles/Blog.styled";

import { IPodcastItemProps } from "../../types/Blog.types";

import PlayButton from "../../../public/BlogDecorations/Podcast/PlayButton.svg";
import Podcast from "../../../public/BlogDecorations/Podcast/Podcast.svg";
import PlayTriangle from "../../../public/BlogDecorations/Podcast/PlayTriangle.svg";
import StopButton from "../../../public/StopButton.svg";

const PodcastItem = ({ data }: IPodcastItemProps) => {
  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [, setSeeking] = useState(false);
  const [played, setPlayed] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState("00 : 00");
  const [duration, setDuration] = useState(0);
  const [remainingTime, setRemainingTime] = useState("04 : 58");
  const playerRef = useRef<ReactPlayer>(null);

  const handlePlayClick = async () => {
    if (!isPlayerLoaded) {
      await setIsPlayerLoaded(true);
    }
    setPlaying((prevState) => !prevState);
  };

  const handlePlaybackRateClick = () =>
    playbackRate === 2 ? setPlaybackRate(1) : setPlaybackRate(2);

  const handlePlayedSeconds = (state: ReactPlayerProps) => {
    const minute = Math.trunc(state.playedSeconds / 60);
    setPlayed(state.playedSeconds);
    const seconds = Math.floor(state.playedSeconds - minute * 60);
    setPlayedSeconds(`${minute < 10 ? `0${minute}` : minute} : 
    ${seconds < 10 ? `0${seconds}` : seconds}`);
    const durationSeconds = duration - state.playedSeconds;
    const remainingMinute = Math.trunc(durationSeconds / 60);
    const remainingSeconds = Math.floor(durationSeconds - remainingMinute * 60);
    setRemainingTime(`${
      remainingMinute < 10 ? `0${remainingMinute}` : remainingMinute
    } : 
    ${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`);
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e: any) => {
    setSeeking(false);
    playerRef.current?.seekTo(parseFloat(e.target.value));
  };

  const handlePrev = () =>
    played >= 15
      ? playerRef.current?.seekTo(played - 15)
      : playerRef.current?.seekTo(0);

  const handleForw = () => {
    played + 15 >= duration
      ? playerRef.current?.seekTo(duration - 1)
      : playerRef.current?.seekTo(played + 15);
  };

  const percentage = () => {
    return (100 * played) / duration;
  };

  const playTagTime = remainingTime.split(":");
  return (
    <>
      <ReactPlayer
        style={{
          maxWidth: 1,
          maxHeight: 1,
          position: "absolute",
          zIndex: "-9999999999",
        }}
        ref={playerRef}
        controls
        url={isPlayerLoaded ? data.link : "/"}
        playbackRate={playbackRate}
        playing={playing}
        played={0.5}
        onProgress={handlePlayedSeconds}
        onDuration={(duration) => setDuration(duration)}
        onEnded={() => {
          setPlaying(false);
        }}
      />
      <Styled.PodcastContainer>
        <Styled.RelativeContainer>
          <Styled.PodcastCard>
            <Styled.LoopContainer>
              <Styled.LoopText>
                <span>{data.subtitle}</span>
              </Styled.LoopText>
            </Styled.LoopContainer>
            <Styled.Track>
              <Styled.PlayedTrack
                type="range"
                range={percentage()}
                min={0}
                max={duration}
                step="any"
                value={played}
                onMouseDown={handleSeekMouseDown}
                onChange={handleSeekChange}
                onMouseUp={handleSeekMouseUp}
              />
            </Styled.Track>
            <Styled.PlayerTimeContainer>
              <Styled.PlayerTime>{playedSeconds}</Styled.PlayerTime>
              <Styled.PlayerTime>-{remainingTime}</Styled.PlayerTime>
            </Styled.PlayerTimeContainer>
            <Styled.PodcastNavigation>
              <Styled.SmallNavigation
                className={playbackRate === 2 ? "activated" : undefined}
                onClick={handlePlaybackRateClick}
              >
                2x
              </Styled.SmallNavigation>
              <Styled.LeftArrow onClick={handlePrev}>
                <Styled.SecondsLeft>15</Styled.SecondsLeft>
              </Styled.LeftArrow>
              <Styled.PlayButton
                onClick={handlePlayClick}
                src={playing ? StopButton.src : PlayButton.src}
              />
              <Styled.RightArrow onClick={handleForw}>
                <Styled.SecondsRight>15</Styled.SecondsRight>
              </Styled.RightArrow>
            </Styled.PodcastNavigation>
          </Styled.PodcastCard>
          <Styled.BackgroundCard>
            <div />
          </Styled.BackgroundCard>
        </Styled.RelativeContainer>
        <Styled.FlexColumnContainer className="podcast">
          <Styled.FlexRowContainer>
            <Styled.FlexPodcast>
              <Styled.PodcastIcon src={Podcast.src} />
              <Styled.PodcastWord>podcast</Styled.PodcastWord>
            </Styled.FlexPodcast>
            <Styled.PlayTag>
              <Styled.PlayTriangle src={PlayTriangle.src} />
              <div>
                {playTagTime[0]} min {playTagTime[1]} sec
              </div>
            </Styled.PlayTag>
          </Styled.FlexRowContainer>
          <Styled.PodcastTitle>{data.subtitle}</Styled.PodcastTitle>
          <Styled.PodcastDescription>{data.text}</Styled.PodcastDescription>
        </Styled.FlexColumnContainer>
      </Styled.PodcastContainer>
    </>
  );
};

export default PodcastItem;
