import styled from "styled-components";

export const SelectWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  right: 30px;
  bottom: 28px;
  @media ${({ theme }) => theme.media.xxl} {
    position: static;
    margin-bottom: ${({ theme }) => theme.margin.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const SelectSort = styled.select`
  border-radius: 16px;
  width: 260px;
  height: 40px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: ${({ theme }) => `0 ${theme.padding.sm}`};
  margin-left: ${({ theme }) => theme.margin.md};
  @media ${({ theme }) => theme.media.md} {
    width: 220px;
  }
`;
