import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 64px;
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
  color: #393939;
  margin-bottom: 0;
`;

export const BottomTitle = styled(Title)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f17900;
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
`;

export const ListTitle = styled.p`
  font-weight: 400;
  font-size: 32px;
  color: #393939;
  margin-bottom: 40px;
`;
