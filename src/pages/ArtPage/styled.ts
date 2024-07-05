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

export const FavoriteArtButton = styled.button`
  border: 1px solid #f0f1f1;
  border-radius: 35px;
  padding: 17px;
  width: 59px;
  height: 59px;
  background: #fff;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const FavoriteArtIcon = styled.img`
  width: 24px;
  height: 24px;
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
  display: flex;
  flex-direction: column;
  align-items: start;
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

export const OverviewText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #393939;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const OverviewTitle = styled.p`
  font-weight: 400;
  font-size: 32px;
  color: #393939;
  margin-bottom: 32px;
`;
