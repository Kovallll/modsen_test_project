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

export interface ArtCardProps {
  image: string;
  title: string;
  subtitle: string;
  text: string;
}

export const ArtCard = ({ image, title, subtitle, text }: ArtCardProps) => {
  return (
    <Container>
      <ArtImage src={image}></ArtImage>
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
