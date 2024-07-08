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
import notImage from "../../assets/icons/not_image.svg";
import { FavoriteButton } from "../FavoriteCardButton";

export const ArtTicket = ({
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
      <ImageWrap>
        <ArtImage src={image.includes("null") ? notImage : image} />
      </ImageWrap>
      <ArtInfo>
        <ArtTitle>{title}</ArtTitle>
        <ArtSubtitle>{subtitle}</ArtSubtitle>
        <ArtText>{text}</ArtText>
      </ArtInfo>
      <FavoriteButton artId={id} />
    </Container>
  );
};
