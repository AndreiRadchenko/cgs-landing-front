import React, { useState, useEffect } from "react";
import * as Styled from "../../styles/OngoingSupport/ProvidesBlock.styled";
import parse from "html-react-parser";

import topLeftBlock from "../../../public/OngoingSupport/topBlock-1.svg";
import topRightBlock from "../../../public/OngoingSupport/topBlock-2.svg";
import middleBlock from "../../../public/OngoingSupport/middleBlock.svg";
import bottomLeftBlock from "../../../public/OngoingSupport/bottomBlock-1.svg";
import bottomRightBlock from "../../../public/OngoingSupport/bottomBlock-2.svg";
import road from "../../../public/OngoingSupport/road.svg";
import marioStop from "../../../public/OngoingSupport/marioStop.svg";
import firstMarioRun from "../../../public/OngoingSupport/marioRun-1.svg";
import secondMarioRun from "../../../public/OngoingSupport/marioRun-2.svg";
import marioJump from "../../../public/OngoingSupport/marioJump.svg";
import firstMushroom from "../../../public/OngoingSupport/mushroom-1.svg";
import secondMushroom from "../../../public/OngoingSupport/mushroom-2.svg";

interface MarioProp {
    subtitle: string,
    text: string,
};

interface MarioBlockProps {
    data: MarioProp[] | undefined
};

const marioMovement = [
    marioStop,
    firstMarioRun,
    secondMarioRun
];

const mushroomsMovement = [
    firstMushroom.src,
    secondMushroom.src
];

const MarioBlock = (data: MarioBlockProps) => {
    const [marioIndex, setMarioIndex] = useState(0);
    const [mushroomIndex, setMushroomIndex] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [isRoadMoving, setIsRoadMoving] = useState(false);
    const [hintText, setHintText] = useState('');
    const [viewHintText, setViewHintText] = useState(false)

    const blocksSrc = [
        topLeftBlock.src,
        middleBlock.src,
        topRightBlock.src,
        bottomLeftBlock.src,
        bottomRightBlock.src
    ];

    const jump = () => {
        setIsJumping(true);
        setTimeout(() => {
            setIsJumping(false);
        }, 300);
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if((event as React.MouseEvent<HTMLDivElement, MouseEvent>).buttons === 1) {
            jump();
            event.preventDefault();
            setIsRoadMoving(true);
        }
    };

    const handleTouch = (event: React.TouchEvent<HTMLDivElement>) => {
        if((event as React.TouchEvent<HTMLDivElement>).touches) {
            jump();
            setIsRoadMoving(true);
        }
    };

    useEffect(() => {
        if(isRoadMoving) {
            setViewHintText(true)
        }
    }, [isRoadMoving])

    useEffect(() => {
        const is992px = window.matchMedia('(max-width: 992px)').matches;

        if(is992px) {
            setHintText('tap to start and jump')
        } else {
            setHintText('press space to start and jump')
        }
    }, [])

    useEffect(() => {
        const preventDefault = (event: KeyboardEvent) => {
            if (event.code === "Space") {
                event.preventDefault();
            }
        };

        window.addEventListener("keydown", preventDefault);
        return () => {
            window.removeEventListener("keydown", preventDefault);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "Space" || event.code === '') {
                jump();
                setIsRoadMoving(true)
            };
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (isRoadMoving) {
            const timer = setInterval(() => {
                setMarioIndex(prevIndex => (prevIndex === marioMovement.length - 1 ? 0 : prevIndex + 1));
                setMushroomIndex(prevIndex => (prevIndex >= mushroomsMovement.length - 1 ? 0 : prevIndex + 1));
            }, 400);
            const moving = setTimeout(() => {
                setIsRoadMoving(false)
            }, 10000);
            return () => {
                clearInterval(timer);
                clearTimeout(moving)
            };
        }
    }, [marioMovement, mushroomsMovement, isRoadMoving]);

    return (
        <Styled.MarioBlock onMouseDown={handleMouseDown}>
            <Styled.BlockContainer>
                {data?.data?.map(({ subtitle, text }: MarioProp, index) => (
                    <div key={index}>
                        <Styled.ContentWrapper>
                            <Styled.Subtitle>{subtitle}</Styled.Subtitle>
                            <Styled.Text>{parse(text)}</Styled.Text>
                        </Styled.ContentWrapper>
                        <Styled.BlockSrc src={blocksSrc[index]} />
                    </div>
                ))}
            </Styled.BlockContainer>
            <Styled.FooterContainer onTouchStart={handleTouch}>
                <Styled.Mario
                    isJumping={isJumping}
                    src={isJumping ? marioJump.src : (isRoadMoving ? marioMovement[marioIndex].src : marioStop.src)} />
                <Styled.Hint isMoving={viewHintText}> {hintText} </Styled.Hint>
                <Styled.FooterMarioBlock>
                    <Styled.RoadMove isMoving={isRoadMoving}>
                        <Styled.RoadImages>
                            <Styled.MushroomsImages>
                                <Styled.MushroomsImage src={isRoadMoving ? mushroomsMovement[mushroomIndex] : firstMushroom.src} />
                                <Styled.MushroomsImage src={isRoadMoving ? mushroomsMovement[mushroomIndex] : secondMushroom.src} />
                            </Styled.MushroomsImages>
                            <Styled.RoadImage src={road.src} />
                        </Styled.RoadImages>
                        <Styled.RoadImages>
                            <Styled.MushroomsImages>
                                <Styled.MushroomsImage src={isRoadMoving ? mushroomsMovement[mushroomIndex] : firstMushroom.src} />
                                <Styled.MushroomsImage src={isRoadMoving ? mushroomsMovement[mushroomIndex] : secondMushroom.src} />
                            </Styled.MushroomsImages>
                            <Styled.RoadImage src={road.src} />
                        </Styled.RoadImages>
                        <Styled.RoadImages>
                            <Styled.MushroomsImages>
                                <Styled.MushroomsImage src={isRoadMoving ? mushroomsMovement[mushroomIndex] : firstMushroom.src} />
                                <Styled.MushroomsImage src={isRoadMoving ? mushroomsMovement[mushroomIndex] : secondMushroom.src} />
                            </Styled.MushroomsImages>
                            <Styled.RoadImage src={road.src} />
                        </Styled.RoadImages>
                        <Styled.RoadImages>
                            <Styled.MushroomsImages>
                                <Styled.MushroomsImage src={isRoadMoving ? mushroomsMovement[mushroomIndex] : firstMushroom.src} />
                                <Styled.MushroomsImage src={isRoadMoving ? mushroomsMovement[mushroomIndex] : secondMushroom.src} />
                            </Styled.MushroomsImages>
                            <Styled.RoadImage src={road.src} />
                        </Styled.RoadImages>
                    </Styled.RoadMove>
                </Styled.FooterMarioBlock>
            </Styled.FooterContainer>
        </Styled.MarioBlock>
    );
};

export default MarioBlock;