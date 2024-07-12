import { ArtCardProps } from "../ArtCard";
import {
  ArtImage,
  ArtInfo,
  ArtSubtitle,
  ArtText,
  ArtTitle,
  Container,
  ImageWrap,
} from "./styled";
import { FavoriteButton } from "../FavoriteCardButton";
import { ArtIconButton } from "../ArtCard/styled";
import favoritesIcon from "../../assets/icons/favorite.svg";
import favoritesAddedIcon from "../../assets/icons/favorite_added.svg";
export const ArtTicket = ({
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
      <ImageWrap>
        <ArtImage src={image} />
      </ImageWrap>
      <ArtInfo>
        <ArtTitle>{title}</ArtTitle>
        <ArtSubtitle>{subtitle}</ArtSubtitle>
        <ArtText>{text}</ArtText>
      </ArtInfo>
      <FavoriteButton
        onClick={(e) => {
          onClickFavoriteButton(e);
        }}
        icon={
          <ArtIconButton src={isAdded ? favoritesAddedIcon : favoritesIcon} />
        }
      />
    </Container>
  );
};
