import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 60px 20px;
  }
`;

export const ImageWrap = styled.div`
  height: 100%;
  max-width: 500px;
  max-height: 580px;
  margin-right: 60px;
  position: relative;
  @media (max-width: 1200px) {
    margin-right: 0px;
    margin-bottom: 30px;
    max-width: 480px;
    max-height: 560px;
  }
`;

export const ArtImage = styled.img`
  object-fit: cover;
  height: 580px;
  width: 500px;
  @media (max-width: 1200px) {
    max-width: 480px;
    max-height: 560px;
  }
  @media (max-width: 768px) {
    max-width: 460px;
    max-height: 540px;
  }
  @media (max-width: 670px) {
    max-width: 420px;
    max-height: 500px;
  }
  @media (max-width: 500px) {
    max-width: 380px;
    max-height: 460px;
  }
`;

export const ArtNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 64px;
  @media (max-width: 1200px) {
    margin-bottom: 54px;
  }
  @media (max-width: 768px) {
    margin-bottom: 44px;
  }
  @media (max-width: 670px) {
    margin-bottom: 34px;
  }
  @media (max-width: 500px) {
    margin-bottom: 24px;
  }
`;

export const ArtOverview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const InfoTitle = styled.p`
  font-weight: 400;
  font-size: 32px;
  color: #393939;
  margin-bottom: 32px;
  @media (max-width: 1200px) {
    font-size: 30px;
    margin-bottom: 28px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
  @media (max-width: 670px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const InfoSubtitle = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #e0a449;
  margin-bottom: 16px;
  @media (max-width: 1200px) {
    font-size: 22px;
    margin-bottom: 12px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
  @media (max-width: 670px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const InfoText = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #393939;
  @media (max-width: 1200px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 670px) {
    font-size: 12px;
  }
`;

export const OverviewText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #393939;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media (max-width: 1200px) {
    font-size: 15px;
    margin-bottom: 14px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
  @media (max-width: 670px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

export const OverviewTitle = styled.p`
  font-weight: 400;
  font-size: 32px;
  color: #393939;
  margin-bottom: 32px;
  @media (max-width: 1200px) {
    font-size: 30px;
    margin-bottom: 28px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
  @media (max-width: 670px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;
