import Button from "../../shared/LinkButton/Button";
import React from "react";
import * as Styled from "./StyledRating";
import { v4 as uuidv4 } from "uuid";

const Rating = ({ testimonial }) => {
  const upwork = testimonial?.platforms?.find((el) => el.type === "upwork");
  const clutch = testimonial?.platforms?.find((el) => el.type === "clutch");
  const arr = ["", "", "", "", ""];

  const starsClutch = [
    ...arr.map((_, index) =>  {
      return Math.ceil(clutch?.rate)  > index ? (
        <img key={uuidv4()} src="/star1.svg" width="17" height="16" alt="" />
      ) : (
        <img key={uuidv4()} src="/star2.svg" width="17" height="16" alt="" />
      )
    }),
  ];

  const starsUpwork = [
    ...arr.map((_, index) =>  {
          return Math.ceil(upwork?.rate) > index ? (
        <img key={uuidv4()} src="/star1.svg" width="17" height="16" alt="" />
      ) : (
        <img key={uuidv4()} src="/star2.svg" width="17" height="16" alt="" />
      )
    }),
  ];

  const doublePlatforms = testimonial?.platforms?.length === 2;

  return (
    <React.Fragment>
      {doublePlatforms && (
        <Styled.RatingWrapper>
          <Styled.RatingItem className="testimonials__rating-clutch">
            <Styled.Rating>
              <img src="/clutch.svg" width="58" height="16" alt="" />
              <p>{clutch?.rate?.toFixed(1)}</p>
            </Styled.Rating>
            <Button
              link={clutch?.link}
              target="_blank"
              small
              text="Read More"
            />
          </Styled.RatingItem>
          <Styled.RatingItem className="testimonials__rating-upwork">
            <Styled.Rating>
              <img src="/upworkWord.svg" width="58" height="18" alt="" />
              <p className="testimonials__rating-clutch">
                {upwork?.rate?.toFixed(1)}
              </p>
            </Styled.Rating>
            <Button
              small
              text="Read More"
              link={upwork?.link}
              target="_blank"
            />
          </Styled.RatingItem>
        </Styled.RatingWrapper>
      )}
      {clutch && !doublePlatforms && (
        <React.Fragment>
          <Styled.Rating className="testimonials__rating-clutch">
            <img src="/clutch.svg" width="58" height="16" alt="" />
            <p>{clutch?.rate?.toFixed(1)}</p>
            <Styled.Stars>{starsClutch?.map((el) => el)}</Styled.Stars>
          </Styled.Rating>
          <Button text="Read More" target="_blank" link={clutch?.link} />
        </React.Fragment>
      )}
      {upwork && !doublePlatforms && (
        <React.Fragment>
          <Styled.Rating className="testimonials__rating-upwork">
            <img src="/upworkWord.svg" width="58" height="18" alt="" />
            <p>{upwork?.rate?.toFixed(2)}</p>
            <Styled.Stars>{starsUpwork?.map((el) => el)}</Styled.Stars>
          </Styled.Rating>
          <Button text="Read More" target="_blank" link={upwork?.link} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Rating;
