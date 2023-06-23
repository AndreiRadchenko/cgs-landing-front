import React from "react";

import { ContactButton } from "../ContactButton";

import * as Styled from "./Emails.styled";
import * as Styles from "../ContactButton/ContactButton.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { useWindowDimension } from "../../../hooks/useWindowDimension";

type MessengersProps = Pick<IContactPageData, "messengers">;

export const Messengers = ({ messengers }: MessengersProps) => {
  const { width } = useWindowDimension();
  const { subtitle, messenger } = messengers;

  return (
    <Styled.EmailsContainer>
      <div>
        <Styled.EmailsTitle>{subtitle}</Styled.EmailsTitle>
        <Styled.ButtonWrapper>
          {messenger.map((item, idx) => (
            <Styles.ButtonWrapper
              className="telegram"
              key={idx}
              href={item.link}
              rel="noopener noreferrer"
              target="blank"
              style={{ width: "322px", height: "54px" }}
            >
              <Styles.ButtonContent style={{ alignItems: "center" }}>
                <Styles.ImageWrapper width="24px" height="24px">
                  {idx === 0 ? (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 0C7.16 0 0 7.16 0 16C0 19.52 1.12 22.76 3.04 25.4L0.84 31.2L7.2 29.36C9.72 31.04 12.76 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM24.52 22.64L22.8 24.32C21 26.12 16.24 24.16 12.04 19.92C7.84 15.72 5.96 10.96 7.64 9.2L9.36 7.48C10 6.84 11.08 6.84 11.76 7.48L14.28 10C15.16 10.88 14.8 12.4 13.64 12.76C12.84 13.04 12.28 13.92 12.56 14.72C13 16.6 15.44 18.92 17.24 19.36C18.04 19.56 18.96 19.08 19.2 18.28C19.56 17.12 21.08 16.76 21.96 17.64L24.48 20.16C25.12 20.84 25.12 21.92 24.52 22.64Z" />
                    </svg>
                  ) : (
                    <svg
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.5 0C7.38508 0 0 7.16129 0 16C0 24.8387 7.38508 32 16.5 32C25.6149 32 33 24.8387 33 16C33 7.16129 25.6149 0 16.5 0ZM24.6036 10.9613L21.8958 23.3355C21.6962 24.2129 21.1573 24.4258 20.4054 24.0129L16.2804 21.0645L14.2911 22.9226C14.0716 23.1355 13.8853 23.3161 13.4595 23.3161L13.7522 19.2452L21.3968 12.5484C21.7294 12.2645 21.3236 12.1032 20.8845 12.3871L11.4369 18.1548L7.36512 16.9226C6.48024 16.6516 6.46028 16.0645 7.55141 15.6516L23.4593 9.70323C24.1978 9.44516 24.8431 9.87742 24.6036 10.9613Z" />
                      <path
                        d="M24.6036 10.9613L21.8958 23.3355C21.6962 24.2129 21.1573 24.4258 20.4054 24.0129L16.2804 21.0645L14.2911 22.9226C14.0716 23.1355 13.8853 23.3161 13.4595 23.3161L13.7522 19.2452L21.3968 12.5484C21.7294 12.2645 21.3236 12.1032 20.8845 12.3871L11.4369 18.1548L7.36512 16.9226C6.48024 16.6516 6.46028 16.0645 7.55141 15.6516L23.4593 9.70323C24.1978 9.44516 24.8431 9.87742 24.6036 10.9613Z"
                        fill="#F1EFED"
                      />
                    </svg>
                  )}
                </Styles.ImageWrapper>
                {item.name && (
                  <Styles.ButtonText>{item.name}</Styles.ButtonText>
                )}
              </Styles.ButtonContent>
            </Styles.ButtonWrapper>
          ))}
        </Styled.ButtonWrapper>
      </div>
    </Styled.EmailsContainer>
  );
};
