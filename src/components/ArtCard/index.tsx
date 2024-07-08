import {
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
export interface ArtCardProps {
  id: number;
  image: string;
  title: string;
  onClick: (id: number) => void;
  subtitle?: string;
  text?: string;
}

export const ArtCard = ({
  id,
  image,
  title,
  subtitle,
  text,
  onClick,
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
        <FavoriteButton artId={id} />
      </ArtNote>
    </Container>
  );
};
