import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.padding.md} ${theme.padding.lg}`};
  @media ${({ theme }) => theme.media.md} {
    padding: ${({ theme }) => `${theme.padding.sm} ${theme.padding.md}`};
  }
  background-color: ${({ theme }) => theme.palette?.common?.white};
`;

export const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterImage = styled.img`
  width: 200px;
  height: 80px;
  @media ${({ theme }) => theme.media.md} {
    width: 140px;
    height: 42px;
  }
  @media ${({ theme }) => theme.media.xxs} {
    width: 120px;
    height: 36px;
  }
`;
