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
import { useNavigate } from "react-router-dom";
export interface ArtCardProps {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  text?: string;
}

export const ArtCard = ({ id, image, title, subtitle, text }: ArtCardProps) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(`/artpage/${id}`);
  };

  return (
    <Container onClick={handleClickCard}>
      <ArtImage src={image.includes("null") ? notImage : image}></ArtImage>
      <ArtNote>
        <ArtInfo>
          <ArtTitle>{title}</ArtTitle>
          <ArtSubtitle>{subtitle}</ArtSubtitle>
          <ArtText>{text}</ArtText>
        </ArtInfo>
        <FavoriteButton artId={id}></FavoriteButton>
      </ArtNote>
    </Container>
  );
};
