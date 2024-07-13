import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.palette?.common?.black};
  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const YellowTitle = styled.span`
  color: ${({ theme }) => theme.palette.secondary};
`;
