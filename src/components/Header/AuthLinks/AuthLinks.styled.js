import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  width: 127px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 170px;
  }

  @media only screen and (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
