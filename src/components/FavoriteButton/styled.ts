import styled from "styled-components";

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

export const ArtIconButton = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 425px) {
    width: 16px;
    height: 16px;
  }
`;

export const FavoriteArtPageButton = styled.div`
  border: 1px solid #f0f1f1;
  border-radius: 35px;
  width: 59px;
  height: 59px;
  background: #fff;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FavoriteArtPageIcon = styled.img`
  width: 24px;
  height: 24px;
`;
