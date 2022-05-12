import styled from "styled-components";
import themes from "../utils/themes";

export const ImagesPositioning = styled.div`
  position: absolute;
  left: 0;
`;

export const CatPositioning = styled.div`
  position: relative;
`;

export const PlanetsPositioning = styled.div`
  position: absolute;
  top: 0;
  right: -6em;
`;

export const GreenLineHorizontal = styled.li`
  width: 100%;
  color: #fff;
  font-size: 2.7em;
  border-top: 1px solid #90e745;
`;

export const FactsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  &: last-child {
    border-bottom: 1px solid #90e745;
  }
`;