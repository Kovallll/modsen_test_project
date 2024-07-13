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
  margin-right: 60px;
  position: relative;
  @media ${({ theme }) => theme.media.xl} {
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
  margin-bottom: 64px;
  @media ${({ theme }) => theme.media.xl} {
    margin-bottom: 54px;
  }
  @media ${({ theme }) => theme.media.md} {
    margin-bottom: 44px;
  }
  @media ${({ theme }) => theme.media.sm} {
    margin-bottom: 34px;
  }
  @media ${({ theme }) => theme.media.xs} {
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
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-bottom: 32px;
  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin-bottom: 24px;
  }
  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: 20px;
  }
`;

export const InfoSubtitle = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.palette.primary};
  margin-bottom: 16px;
  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: 10px;
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
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media ${({ theme }) => theme.media.xl} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-bottom: 14px;
  }
  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    margin-bottom: 8px;
  }
`;

export const OverviewTitle = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-bottom: 32px;
  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin-bottom: 24px;
  }
`;

export const FavoriteArtPageIcon = styled.img`
  width: 24px;
  height: 24px;
`;
