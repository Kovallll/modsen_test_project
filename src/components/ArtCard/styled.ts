import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  @media ${({ theme }) => theme.media.lg} {
    height: 460px;
  }
  @media ${({ theme }) => theme.media.md} {
    height: 420px;
  }
  @media ${({ theme }) => theme.media.sm} {
    height: 380px;
  }
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ArtImage = styled.img`
  object-fit: cover;
  height: 440px;
  width: 390px;
  @media ${({ theme }) => theme.media.lg} {
    height: 400px;
    width: 354px;
  }
  @media ${({ theme }) => theme.media.md} {
    height: 360px;
    width: 320px;
  }
  @media ${({ theme }) => theme.media.sm} {
    height: 320px;
    width: 284px;
  }
`;

export const ArtNote = styled.article`
  width: 340px;
  background-color: ${({ theme }) => theme.palette?.common?.white};
  border: 1px solid #f0f1f1;
  position: relative;
  left: 25px;
  bottom: 70px;
  display: flex;
  z-index: 90;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.lg} {
    width: 302px;
    bottom: 56px;
  }
  @media ${({ theme }) => theme.media.md} {
    width: 270px;
    bottom: 42px;
  }
  @media ${({ theme }) => theme.media.sm} {
    width: 236px;
    bottom: 30px;
  }
`;

export const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 184px;
  padding: ${({ theme }) => `${theme.padding.md} ${theme.padding.lg}`};
  @media ${({ theme }) => theme.media.lg} {
    padding: ${({ theme }) => `${theme.padding.sm} ${theme.padding.md}`};
    width: 164px;
  }
  @media ${({ theme }) => theme.media.sm} {
    padding: ${({ theme }) => `${theme.padding.xs} ${theme.padding.sm}`};
    width: 144px;
  }
`;

export const FixedParagraph = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArtTitle = styled(FixedParagraph)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 150%;
  color: ${({ theme }) => theme.palette.common?.black};
  padding-bottom: ${({ theme }) => `${theme.padding.xs}`};

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const ArtSubtitle = styled(FixedParagraph)`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 171%;
  color: ${({ theme }) => theme.palette.primary};
  padding-bottom: ${({ theme }) => `${theme.padding.md}`};

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }
`;

export const ArtText = styled(FixedParagraph)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 171%;
  color: ${({ theme }) => theme.palette.common?.black};

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }
`;

export const ArtIconButton = styled.img`
  width: 24px;
  height: 24px;
  @media ${({ theme }) => theme.media.md} {
    width: 20px;
    height: 20px;
  }
  @media ${({ theme }) => theme.media.xxs} {
    width: 16px;
    height: 16px;
  }
`;
