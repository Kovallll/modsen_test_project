import { ArtCardProps } from "../ArtCard";
import {
  ArtImage,
  ArtInfo,
  ArtSubtitle,
  ArtText,
  ArtTitle,
  Container,
} from "./styled";
import notImage from "../../assets/icons/not_image.svg";
import { FavoriteButton } from "../FavoriteButton";

export const ArtTicket = ({ image, title, subtitle, text }: ArtCardProps) => {
  return (
    <Container>
      <ArtImage src={image.includes("null") ? notImage : image}></ArtImage>
      <ArtInfo>
        <ArtTitle>{title}</ArtTitle>
        <ArtSubtitle>{subtitle}</ArtSubtitle>
        <ArtText>{text}</ArtText>
      </ArtInfo>
      <FavoriteButton></FavoriteButton>
    </Container>
  );
};
