import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SearchBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export const SearchInput = styled.input`
  border-radius: 16px;
  width: 760px;
  height: 52px;
  border: 0;
  background: ${({ theme }) => theme.palette?.common?.grey};
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: ${({ theme }) => `0 ${theme.padding.md}`};
  color: ${({ theme }) => theme.palette?.primary};
  @media ${({ theme }) => theme.media.lg} {
    width: 600px;
    height: 44px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => `0 ${theme.padding.md}`};
  }
  @media ${({ theme }) => theme.media.md} {
    width: 500px;
    height: 38px;
    padding: ${({ theme }) => `0 ${theme.padding.sm}`};
  }
  @media ${({ theme }) => theme.media.sm} {
    width: 440px;
    height: 34px;
    padding: ${({ theme }) => `0 ${theme.padding.xs}`};
  }
  @media ${({ theme }) => theme.media.xs} {
    width: 360px;
    height: 30px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const ListWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ArtsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 120px;
  padding-bottom: ${({ theme }) => theme.padding.md};
  position: absolute;
  background-color: ${({ theme }) => theme.palette?.common?.white};
  z-index: 100;
`;

export const ErrorText = styled.div`
  position: absolute;
  color: red;
`;
