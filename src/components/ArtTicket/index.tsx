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
import { FavoriteButton } from "../FavoriteButton";
import { useNavigate } from "react-router-dom";

export const ArtTicket = ({
  id,
  image,
  title,
  subtitle,
  text,
}: ArtCardProps) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(`/artpage/${id}`);
  };

  return (
    <Container onClick={handleClickCard}>
      <ImageWrap>
        <ArtImage src={image.includes("null") ? notImage : image}></ArtImage>
      </ImageWrap>
      <ArtInfo>
        <ArtTitle>{title}</ArtTitle>
        <ArtSubtitle>{subtitle}</ArtSubtitle>
        <ArtText>{text}</ArtText>
      </ArtInfo>
      <FavoriteButton></FavoriteButton>
    </Container>
  );
};
