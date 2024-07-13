import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  text-transform: capitalize;
  text-align: center;
  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const TopTitle = styled(Title)`
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-bottom: 0;
`;

export const BottomTitle = styled(Title)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-top: 0px;
  margin-bottom: 120px;
  @media ${({ theme }) => theme.media.lg} {
    margin-bottom: 100px;
  }
  @media ${({ theme }) => theme.media.md} {
    margin-bottom: 80px;
  }
  @media ${({ theme }) => theme.media.sm} {
    margin-bottom: 60px;
  }
`;

export const TitleIcon = styled.img`
  height: 56px;
  width: 56px;
  margin-right: 16px;
  @media ${({ theme }) => theme.media.lg} {
    height: 46px;
    width: 46px;
    margin-right: 12px;
  }
  @media ${({ theme }) => theme.media.md} {
    height: 36px;
    width: 36px;
    margin-right: 8px;
  }
  @media ${({ theme }) => theme.media.sm} {
    height: 26px;
    width: 26px;
    margin-right: 4px;
  }
`;

export const ListTitle = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.palette?.common?.black};
  margin-bottom: 40px;
`;
