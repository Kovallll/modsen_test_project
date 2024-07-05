import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0px;
`;

export const ImageWrap = styled.div`
  height: 100%;
  width: 100%;
  max-width: 500px;
  max-height: 580px;
  margin-right: 60px;
  position: relative;
`;

export const ArtImage = styled.img`
  height: 580px;
  width: 500px;
`;

export const ArtNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 580px;
`;

export const ArtInfo = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ArtOverview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const FixedParagraph = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoTitle = styled.p`
  font-weight: 400;
  font-size: 32px;
  color: #393939;
  margin-bottom: 32px;
`;

export const InfoSubtitle = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #e0a449;
  margin-bottom: 16px;
`;

export const InfoText = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #393939;
`;

export const OverviewText = styled(FixedParagraph)`
  width: 600px;
  font-weight: 400;
  font-size: 16px;
  color: #393939;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const OverviewTitle = styled(FixedParagraph)`
  width: 600px;
  font-weight: 400;
  font-size: 32px;
  color: #393939;
  margin-bottom: 32px;
`;
