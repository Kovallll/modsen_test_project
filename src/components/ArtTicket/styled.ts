import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 130px;
  height: 100%;
  max-width: 400px;
  width: 100%;
  border: 1px solid #f0f1f1;
  padding: 4px 8px;
  cursor: pointer;
`;

export const ImageWrap = styled.div`
  max-height: 80px;
  height: 100%;
  max-width: 80px;
  width: 100%;
`;

export const ArtImage = styled.img`
  object-fit: cover;
  height: 80px;
  width: 80px;
`;

export const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
  padding: 0px 12px;
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
