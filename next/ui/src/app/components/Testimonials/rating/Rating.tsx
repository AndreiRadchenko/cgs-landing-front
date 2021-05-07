import * as Styled from './StyledRating';
const Rating = ({ testimonial }) => {
  const arr = ['', '', '', '', ''];
  const starsClutch = [
    ...arr.map((_, index) => {
      if (parseInt(testimonial.rating_clutch) > index) {
        return <img src="/star1.svg" width="17" height="16" alt="" />;
      } else {
        return <img src="/star2.svg" width="17" height="16" alt="" />;
      }
    }),
  ];
  const starsUpwork = [
    ...arr.map((_, index) => {
      if (parseInt(testimonial.rating_upwork) > index) {
        return <img src="/star1.svg" width="17" height="16" alt="" />;
      } else {
        return <img src="/star2.svg" width="17" height="16" alt="" />;
      }
    }),
  ];
  return (
    <>
      {testimonial.rating_clutch && testimonial.rating_upwork ? (
        <Styled.RatingWrapper>
          <Styled.RatingItem className="testimonials__rating-clutch">
            <Styled.Rating>
              <img src="/clutch.svg" width="58" height="16" alt="" />
              <p>{testimonial.rating_clutch}</p>
            </Styled.Rating>
            <button type="button" className="rating__button--small">
              Read More
            </button>
          </Styled.RatingItem>

          <Styled.RatingItem className="testimonials__rating-upwork">
            <Styled.Rating>
              <img src="/upworkWord.svg" width="58" height="18" alt="" />
              <p className="testimonials__rating-clutch">
                {testimonial.rating_upwork}
              </p>
            </Styled.Rating>
            <button type="button" className="rating__button--small">
              Read More
            </button>
          </Styled.RatingItem>
        </Styled.RatingWrapper>
      ) : testimonial.rating_clutch ? (
        <>
          <Styled.Rating className="testimonials__rating-clutch">
            <img src="/clutch.svg" width="58" height="16" alt="" />
            <p>{testimonial.rating_clutch}</p>
            <Styled.Stars>{starsClutch.map((el) => el)}</Styled.Stars>
          </Styled.Rating>
          <button type="button" className="rating__button">
            Read More
          </button>
        </>
      ) : (
        testimonial.rating_upwork && (
          <>
            <Styled.Rating className="testimonials__rating-upwork">
              <img src="/upworkWord.svg" width="58" height="18" alt="" />
              <p>{testimonial.rating_upwork}</p>
              <Styled.Stars>{starsUpwork.map((el) => el)}</Styled.Stars>
            </Styled.Rating>
            <button type="button" className="rating__button">
              Read More
            </button>
          </>
        )
      )}
    </>
  );
};

export default Rating;
