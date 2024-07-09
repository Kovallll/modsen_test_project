import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-transform: capitalize;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 54px;
  }
  @media (max-width: 768px) {
    font-size: 44px;
  }
  @media (max-width: 600px) {
    font-size: 34px;
  }
`;

export const TopTitle = styled(Title)`
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-bottom: 0;
`;

export const BottomTitle = styled(Title)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-top: 0px;
  margin-bottom: 120px;
  @media (max-width: 1000px) {
    margin-bottom: 100px;
  }
  @media (max-width: 768px) {
    margin-bottom: 80px;
  }
  @media (max-width: 600px) {
    margin-bottom: 60px;
  }
`;

export const TitleIcon = styled.img`
  height: 56px;
  width: 56px;
  margin-right: 16px;
  @media (max-width: 1000px) {
    height: 46px;
    width: 46px;
    margin-right: 12px;
  }
  @media (max-width: 768px) {
    height: 36px;
    width: 36px;
    margin-right: 8px;
  }
  @media (max-width: 600px) {
    height: 26px;
    width: 26px;
    margin-right: 4px;
  }
`;

export const ListTitle = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-bottom: 40px;
`;
