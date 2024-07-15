import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.padding.xl} ${theme.padding.md}`};
  @media ${({ theme }) => theme.media.xl} {
    flex-direction: column;
  }
`;

export const ImageWrap = styled.div`
  height: 100%;
  max-width: 500px;
  max-height: 580px;
  margin-right: ${({ theme }) => theme.margin.xl};
  position: relative;
  @media ${({ theme }) => theme.media.xl} {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.margin.lg};
    max-width: 480px;
    max-height: 560px;
  }
`;

export const ArtImage = styled.img`
  object-fit: cover;
  height: 580px;
  width: 500px;
  @media ${({ theme }) => theme.media.xl} {
    max-width: 480px;
    max-height: 560px;
  }
  @media ${({ theme }) => theme.media.md} {
    max-width: 460px;
    max-height: 540px;
  }
  @media ${({ theme }) => theme.media.sm} {
    max-width: 420px;
    max-height: 500px;
  }
  @media ${({ theme }) => theme.media.xs} {
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
  margin-bottom: ${({ theme }) => theme.margin.xl};
  @media ${({ theme }) => theme.media.md} {
    margin-bottom: ${({ theme }) => theme.margin.lg};
  }
  @media ${({ theme }) => theme.media.xs} {
    margin-bottom: ${({ theme }) => theme.margin.md};
  }
`;

export const ArtOverview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const InfoTitle = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-bottom: ${({ theme }) => theme.margin.lg};
  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin-bottom: ${({ theme }) => theme.margin.md};
  }
  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const InfoSubtitle = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.palette.primary};
  margin-bottom: ${({ theme }) => theme.margin.md};
  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.margin.sm};
  }
`;

export const InfoText = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.palette?.common?.black};
  @media ${({ theme }) => theme.media.xl} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }
`;

export const OverviewText = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-bottom: ${({ theme }) => theme.margin.md};
  &:last-child {
    margin-bottom: 0;
  }
  @media ${({ theme }) => theme.media.xl} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    margin-bottom: ${({ theme }) => theme.margin.sm};
  }
`;

export const OverviewTitle = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-bottom: ${({ theme }) => theme.margin.lg};
  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin-bottom: ${({ theme }) => theme.margin.md};
  }
`;

export const FavoriteArtPageIcon = styled.img`
  width: 24px;
  height: 24px;
`;
