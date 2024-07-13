import favoritesIcon from "src/assets/icons/favorite.svg";
import favoritesAddedIcon from "src/assets/icons/favorite_added.svg";
import { ArtIconButton } from "src/components/ArtCard/styled";
import { FavoriteButton } from "src/components/FavoriteCardButton";
import {
  ArtImage,
  ArtInfo,
  ArtSubtitle,
  ArtText,
  ArtTitle,
  Container,
  ImageWrap,
} from "./styled";

export interface ArtTicketProps {
  id: string;
  image: string;
  title: string;
  onClick: (id: string) => void;
  subtitle?: string;
  text?: string;
  onClickFavoriteButton: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  isAdded: boolean;
}

export const ArtTicket = ({
  id,
  image,
  title,
  subtitle,
  text,
  onClick,
  onClickFavoriteButton,
  isAdded,
}: ArtTicketProps) => {
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
        <ArtSubtitle>{subtitle ?? ""}</ArtSubtitle>
        <ArtText>{text ?? ""}</ArtText>
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
