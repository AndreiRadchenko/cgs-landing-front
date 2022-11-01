import React from "react";
import * as Styled from "../../styles/MobileAuditService/AuditTable.styled";
import MarkedBox from "./MarkedBox";

const AuditTable = ({ points }: any) => {
  return (
    <Styled.Container>
      <Styled.BigTableContainer>
        <Styled.TableContainer>
          <Styled.FormContainer3D>
            <Styled.TopCorner />
            <Styled.BottomCorner />
          </Styled.FormContainer3D>
          {points.slice(0, 5).map((el: string, idx: string) => (
            <Styled.TableElement key={idx}>
              <Styled.Wrapper>
                <MarkedBox />
                <Styled.ElementText>{el}</Styled.ElementText>
              </Styled.Wrapper>
              <Styled.CrossLine />
            </Styled.TableElement>
          ))}
        </Styled.TableContainer>
        <Styled.TableContainer>
          <Styled.FormContainer3D>
            <Styled.TopCorner />
            <Styled.BottomCorner />
          </Styled.FormContainer3D>
          {points.slice(5, 10).map((el: string, idx: string) => (
            <Styled.TableElement key={idx}>
              <Styled.Wrapper>
                <MarkedBox />
                <Styled.ElementText>{el}</Styled.ElementText>
              </Styled.Wrapper>
              <Styled.CrossLine />
            </Styled.TableElement>
          ))}
        </Styled.TableContainer>
        <Styled.MobileTable>
          {points.map((el: string, idx: number) => (
            <Styled.TableElement style={{ display: "flex" }} key={idx}>
              <MarkedBox />
              <Styled.TextContainer>
                <Styled.ElementText style={{ fontSize: "13px" }}>
                  {el}
                </Styled.ElementText>
              </Styled.TextContainer>
            </Styled.TableElement>
          ))}
        </Styled.MobileTable>
      </Styled.BigTableContainer>
    </Styled.Container>
  );
};

export default AuditTable;
