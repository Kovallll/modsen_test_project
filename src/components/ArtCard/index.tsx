import {
  ArtIconButton,
  ArtImage,
  ArtInfo,
  ArtNote,
  ArtSubtitle,
  ArtText,
  ArtTitle,
  Container,
  IconWrap,
} from "./styles";
import favoritesIcon from "../../assets/icons/favorite.svg";
import notImage from "../../assets/icons/not_image.svg";
export interface ArtCardProps {
  image: string;
  title: string;
  subtitle: string;
  text: string;
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
        <IconWrap>
          <ArtIconButton src={favoritesIcon}></ArtIconButton>
        </IconWrap>
      </ArtNote>
    </Container>
  );
};
