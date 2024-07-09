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
import notImage from "../../assets/icons/not_image.svg";
import { FavoriteButton } from "../FavoriteCardButton";
import favoritesIcon from "../../assets/icons/favorite.svg";
import favoritesAddedIcon from "../../assets/icons/favorite_added.svg";

export interface ArtCardProps {
  id: string;
  image: string;
  title: string;
  onClick: (id: string) => void;
  subtitle?: string;
  text?: string;
  onClickFavoriteButton: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  getIsAdded: (id: string) => boolean;
}

export const ArtCard = ({
  id,
  image,
  title,
  subtitle,
  text,
  onClick,
  onClickFavoriteButton,
  getIsAdded,
}: ArtCardProps) => {
  const handleClickCard = () => {
    onClick(id);
  };

  return (
    <Container onClick={handleClickCard}>
      <ArtImage src={image.includes("null") ? notImage : image} />
      <ArtNote>
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
            <ArtIconButton
              src={getIsAdded(id) ? favoritesAddedIcon : favoritesIcon}
            />
          }
        />
      </ArtNote>
    </Container>
  );
};
