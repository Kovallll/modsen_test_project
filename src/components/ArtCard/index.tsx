import React from "react";

import favoritesIcon from "src/assets/icons/favorite.svg";
import favoritesAddedIcon from "src/assets/icons/favorite_added.svg";
import notImage from "src/assets/icons/not_image.svg";
import { FavoriteCardButton } from "src/components/FavoriteCardButton";
import {
  ArtIconButton,
  ArtImage,
  ArtInfo,
  ArtNote,
  ArtSubtitle,
  ArtText,
  ArtTitle,
  Container,
} from "./styled";

export interface ArtCardProps {
  id: string;
  image: string;
  title: string;
  onClick: (id: string) => void;
  subtitle: string;
  text: string;
  onClickFavoriteButton: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  isAdded: boolean;
}

const ArtCard = ({
  id,
  image,
  title,
  subtitle,
  text,
  onClick,
  onClickFavoriteButton,
  isAdded,
}: ArtCardProps) => {
  const handleClickCard = () => {
    onClick(id);
  };

  return (
    <Container onClick={handleClickCard}>
      <ArtImage src={image.includes("null") ? notImage : image} alt="image" />
      <ArtNote>
        <ArtInfo>
          <ArtTitle>{title}</ArtTitle>
          <ArtSubtitle>{subtitle}</ArtSubtitle>
          <ArtText>{text}</ArtText>
        </ArtInfo>
        <FavoriteCardButton
          onClick={(e) => {
            onClickFavoriteButton(e);
          }}
          icon={
            <ArtIconButton
              src={isAdded ? favoritesAddedIcon : favoritesIcon}
              alt="icon"
            />
          }
        />
      </ArtNote>
    </Container>
  );
};

export default React.memo(ArtCard);
