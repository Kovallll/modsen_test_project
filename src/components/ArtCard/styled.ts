import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  @media (max-width: 1000px) {
    height: 460px;
  }
  @media (max-width: 768px) {
    height: 420px;
  }
  @media (max-width: 600px) {
    height: 380px;
  }
  cursor: pointer;
`;

export const ArtImage = styled.img`
  object-fit: cover;
  height: 440px;
  width: 390px;
  @media (max-width: 1000px) {
    height: 400px;
    width: 354px;
  }
  @media (max-width: 768px) {
    height: 360px;
    width: 320px;
  }
  @media (max-width: 600px) {
    height: 320px;
    width: 284px;
  }
`;

export const ArtNote = styled.article`
  width: 340px;
  background-color: #fff;
  border: 1px solid #f0f1f1;
  position: relative;
  left: 25px;
  bottom: 70px;
  display: flex;
  z-index: 90;
  @media (max-width: 1000px) {
    width: 302px;
  }
  @media (max-width: 768px) {
    width: 270px;
  }
  @media (max-width: 600px) {
    width: 236px;
  }
`;

export const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 184px;
  padding: 16px 24px;
  @media (max-width: 1000px) {
    padding: 12px 20px;
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
  @media (max-width: 600px) {
    padding: 4px 8px;
  }
`;

export const FixedParagraph = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArtTitle = styled(FixedParagraph)`
  font-weight: 500;
  font-size: 17px;
  line-height: 150%;
  color: #393939;
  padding-bottom: 2px;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ArtSubtitle = styled(FixedParagraph)`
  font-weight: 400;
  font-size: 15px;
  line-height: 171%;
  color: #e0a449;
  padding-bottom: 12px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ArtText = styled(FixedParagraph)`
  font-weight: 700;
  font-size: 15px;
  line-height: 171%;
  color: #393939;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
