import React, { useRef, useState, useEffect } from "react";
import * as Styled from "../../styles/OngoingSupport/ProvidesBlock.styled";
import parse from "html-react-parser";
import Image from "next/image";

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

const MarioBlock = (data: MarioBlockProps) => {
    const [marioIndex, setMarioIndex] = useState(0);
    const [mushroomIndex, setMushroomIndex] = useState(0);
    const [isJumping, setIsJumping] = useState(false);

    const mushroomsMovement = [
        firstMushroom,
        secondMushroom
    ];

    const marioMovement = [
        marioJump,
        marioStop,
        firstMarioRun,
        secondMarioRun
    ];

    const blocksSrc = [
        topLeftBlock.src,
        middleBlock.src,
        topRightBlock.src,
        bottomLeftBlock.src,
        bottomRightBlock.src
    ];

    const jump = () => {
        setMarioIndex(0);
        setIsJumping(true);
        setTimeout(() => {
            setIsJumping(false);
        }, 300);
    };

    const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        jump()
        event.preventDefault();
    };

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
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setMarioIndex(prevIndex => (prevIndex === marioMovement.length - 1 ? 0 : prevIndex + 1));
            setMushroomIndex(prevIndex => (prevIndex >= mushroomsMovement.length - 1 ? 0 : prevIndex + 1));
        }, 400);
        return () => {
            clearInterval(timer);
        };
    }, [marioMovement, mushroomsMovement]);

    return (
        <Styled.MarioBlock onContextMenu={handleContextMenu}>
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
            <Styled.FooterContainer>
                <Styled.Mario isJumping={isJumping}>
                    <Image src={marioMovement[marioIndex]} />
                </Styled.Mario>
                <Styled.FooterMarioBlock>
                    <Styled.Mushrooms>
                        <Styled.MushroomsImage>
                            <Image src={mushroomsMovement[mushroomIndex]} />
                            <Image src={mushroomsMovement[mushroomIndex]} />
                        </Styled.MushroomsImage>
                    </Styled.Mushrooms>
                    <Styled.RoadImages>
                        <Styled.RoadImage src={road.src} />
                        <Styled.RoadImage src={road.src} />
                    </Styled.RoadImages>
                </Styled.FooterMarioBlock>
            </Styled.FooterContainer>
        </Styled.MarioBlock>
    );
};

export default MarioBlock;