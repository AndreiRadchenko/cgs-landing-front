import Button from "../../shared/LinkButton/Button";
import React from "react";
import * as Styled from "./StyledRating";
const Rating = ({ testimonial }) => {
  const upwork = testimonial.platforms.find((el) => el.type === "upwork");
  const clutch = testimonial.platforms.find((el) => el.type === "clutch");
  const arr = ["", "", "", "", ""];

  const starsClutch = [
    ...arr.map((_, index) => {
      if (parseInt(clutch?.rate) > index) {
        return <img src="/star1.svg" width="17" height="16" alt="" />;
      } else {
        return <img src="/star2.svg" width="17" height="16" alt="" />;
      }
    }),
  ];

  const starsUpwork = [
    ...arr.map((_, index) => {
      if (parseInt(upwork?.rate) > index) {
        return <img src="/star1.svg" width="17" height="16" alt="" />;
      } else {
        return <img src="/star2.svg" width="17" height="16" alt="" />;
      }
    }),
  ];

  return (
    <React.Fragment>
      {testimonial.platforms.length === 2 ? (
        <Styled.RatingWrapper>
          <Styled.RatingItem className="testimonials__rating-clutch">
            <Styled.Rating>
              <img src="/clutch.svg" width="58" height="16" alt="" />
              <p>{clutch.rate.toFixed(1)}</p>
            </Styled.Rating>
            <Button small text="Read More" link={clutch.link} />
          </Styled.RatingItem>

          <Styled.RatingItem className="testimonials__rating-upwork">
            <Styled.Rating>
              <img src="/upworkWord.svg" width="58" height="18" alt="" />
              <p className="testimonials__rating-clutch">
                {upwork.rate.toFixed(1)}
              </p>
            </Styled.Rating>
            <Button small text="Read More" link={upwork.link} />
          </Styled.RatingItem>
        </Styled.RatingWrapper>
      ) : clutch ? (
        <React.Fragment>
          <Styled.Rating className="testimonials__rating-clutch">
            <img src="/clutch.svg" width="58" height="16" alt="" />
            <p>{clutch.rate.toFixed(1)}</p>
            <Styled.Stars>{starsClutch.map((el) => el)}</Styled.Stars>
          </Styled.Rating>
          <Button text="Read More" link={clutch.link} />
        </React.Fragment>
      ) : (
        upwork && (
          <React.Fragment>
            <Styled.Rating className="testimonials__rating-upwork">
              <img src="/upworkWord.svg" width="58" height="18" alt="" />
              <p>{upwork.rate.toFixed(1)}</p>
              <Styled.Stars>{starsUpwork.map((el) => el)}</Styled.Stars>
            </Styled.Rating>
            <Button text="Read More" link={upwork.link} />
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
};

export default Rating;
