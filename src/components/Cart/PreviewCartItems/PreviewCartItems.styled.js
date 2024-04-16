import styled from "styled-components";

export const Item = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  display: flex;
  gap: 12px;
`;

export const ImgBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 27px;
  border: 1.155px solid #f1f1f1;
  overflow: hidden;
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4em;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: #6a6a6f;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17em;
  margin-bottom: 12px;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17em;
  margin-bottom: 18px;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
`;

export const AmountBox = styled.div`
  border-radius: 60px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  padding: 7px 14px;
  display: flex;
  width: 95px;
  justify-content: space-between;
  align-items: center;

  & button {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      width: 18px;
      height: 18px;
    }
  }

  & p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.43em;
  }
`;

export const RemoveBtn = styled.button`
  border-radius: 40px;
  background: rgba(232, 80, 80, 0.1);
  padding: 8px 12px;
  width: 89px;
  color: #e85050;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
`;
