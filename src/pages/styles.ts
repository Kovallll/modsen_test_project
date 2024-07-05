import styled from "styled-components";

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  width: 100%;
`;

export const HomeTitle = styled.h1`
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;
  text-align: center;
  color: #393939;
`;
