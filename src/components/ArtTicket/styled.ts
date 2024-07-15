import styled from 'styled-components';

const baseShadow = `
  box-shadow: 1px 2px 6px -2px #777;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 130px;
  height: 100%;
  max-width: 400px;
  width: 100%;
  border: 1px solid #f0f1f1;
  padding: ${({ theme }) => `${theme.padding.xs} ${theme.padding.sm}`};
  cursor: pointer;
  ${baseShadow}
  @media ${({ theme }) => theme.media.xs} {
    max-height: 120px;
    max-width: 350px;
  }

  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageWrap = styled.div`
  max-height: 80px;
  height: 100%;
  max-width: 80px;
  width: 100%;
  @media ${({ theme }) => theme.media.xs} {
    max-height: 70px;
    max-width: 70px;
  }
`;

export const ArtImage = styled.img`
  object-fit: cover;
  height: 80px;
  width: 80px;
  @media ${({ theme }) => theme.media.xs} {
    height: 70px;
    width: 70px;
  }
`;

export const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 180px;
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.padding.md}`};
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
  color: ${({ theme }) => theme.palette?.common?.black};
  padding-bottom: ${({ theme }) => `${theme.padding.xs}`};
`;

export const ArtSubtitle = styled(FixedParagraph)`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 171%;
  color: ${({ theme }) => theme.palette.primary};
  padding-bottom: ${({ theme }) => `${theme.padding.md}`};
`;

export const ArtText = styled(FixedParagraph)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 171%;
  color: ${({ theme }) => theme.palette?.common?.black};
`;
