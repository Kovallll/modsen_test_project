import {
  ArtImage,
  ArtInfo,
  ArtNote,
  ArtSubtitle,
  ArtText,
  ArtTitle,
  Container,
} from "./styles";
import notImage from "../../assets/icons/not_image.svg";
import { FavoriteButton } from "../FavoriteButton";
export interface ArtCardProps {
  image: string;
  title: string;
  subtitle?: string;
  text?: string;
}

export const ArtCard = ({ image, title, subtitle, text }: ArtCardProps) => {
  console.log();
  return (
    <Container>
      <ArtImage src={image.includes("null") ? notImage : image}></ArtImage>
      <ArtNote>
        <ArtInfo>
          <ArtTitle>{title}</ArtTitle>
          <ArtSubtitle>{subtitle}</ArtSubtitle>
          <ArtText>{text}</ArtText>
        </ArtInfo>
        <FavoriteButton></FavoriteButton>
      </ArtNote>
    </Container>
  );
};
