import React, { useRef } from "react";
import * as Styled from "./advantages.styled";
import circle from "../../../../../public/Advantages/circle.svg"
import smallCircle from "../../../../../public/Advantages/smallCircle.svg"
import { useOnScreen } from "../../../../hooks/useOnScreen";
import { IAdvantagesServicesComponent } from "../../../../types/ServicesComponent.types";

interface IAdvantagesProps {
    advantages?: IAdvantagesServicesComponent;
}

const Advantages = ({ advantages }: IAdvantagesProps) => {
    const elRef = useRef<HTMLDivElement>(null);
    const isScrolled = useOnScreen(elRef, true);

    const advantagesCount = advantages?.content?.filter(item => item.subtitle.trim() !== '' && item.text.trim() !== '').length || 0;

    const numbers = Array.from({ length: advantagesCount }, (_, idx) => {
        const number = (idx + 1).toString().padStart(2, '0');
        return number;
    });

    return (
        <Styled.Wrapper>
            <Styled.Title>{advantages?.title}</Styled.Title>
            <Styled.Content>
                <Styled.Numbers>
                    {numbers.map((number, idx) => (
                        <div key={idx}>
                            <p>{number}</p>
                            <Styled.ImageWrapper>
                                {idx === numbers.length - 1 ? (
                                    <>
                                        <Styled.BlockContainer>
                                            <img src={circle.src} />
                                            <Styled.AfterBlock />
                                            <img src={smallCircle.src} />
                                        </Styled.BlockContainer>
                                        <Styled.BeforeBlock isFirst={true} />
                                    </>
                                ) : (
                                    <>
                                        <Styled.BlockContainer>
                                            <img src={circle.src} />
                                            <Styled.AfterBlock />
                                            <img src={smallCircle.src} />
                                            <Styled.BeforeBlock isFirst={false} />
                                        </Styled.BlockContainer>
                                    </>
                                )}
                            </Styled.ImageWrapper>
                        </div>
                    ))}
                </Styled.Numbers>
                <Styled.TextContent ref={elRef}>
                    {advantages?.content
                        ?.filter(item => item.subtitle.trim() !== '' && item.text.trim() !== '')
                        .map(({ subtitle, text }, idx) => (
                            <Styled.ContentItems key={idx} ind={idx} className={isScrolled ? "scrolled" : undefined}>
                                <Styled.Subtitle>{subtitle}</Styled.Subtitle>
                                <Styled.Text>{text}</Styled.Text>
                            </Styled.ContentItems>
                        ))}
                </Styled.TextContent>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default Advantages;