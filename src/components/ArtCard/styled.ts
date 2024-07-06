import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  cursor: pointer;
`;

export const ArtImage = styled.img`
  object-fit: cover;
  height: 440px;
  width: 390px;
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
`;

export const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 184px;
  padding: 16px 24px;
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
`;

export const ArtSubtitle = styled(FixedParagraph)`
  font-weight: 400;
  font-size: 15px;
  line-height: 171%;
  color: #e0a449;
  padding-bottom: 12px;
`;

export const ArtText = styled(FixedParagraph)`
  font-weight: 700;
  font-size: 15px;
  line-height: 171%;
  color: #393939;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

export const ArtIconButton = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 425px) {
    width: 16px;
    height: 16px;
  }
`;
