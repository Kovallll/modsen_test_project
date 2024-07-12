import { ArtCard } from "../../components/ArtCard";
import { CardsWrap, Container, Subtitle, Title } from "./styled";
import { ArtData } from "../../types";
import { SliderLoader } from "./SliderLoader";
import { useNavigate } from "react-router-dom";
import notImage from "../../assets/icons/not_image.svg";
import { Paths } from "../../constants";
import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";

export interface SliderProps {
  data: ArtData[];
  config: { iiif_url: string };
  isLoading: boolean;
}

export const Slider = ({ data, config, isLoading }: SliderProps) => {
  const navigate = useNavigate();

  const handleClickCard = (id: string) => {
    navigate(`${Paths.ArtPage}/${id}`);
  };

  const getImage = (art: ArtData) => {
    return art.image_id !== null
      ? `${config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`
      : notImage;
  };

  const { favoriteCards, addFavoriteCards, removeFavoriteCards } =
    useContext(FavoriteContext);

  const getIsAdded = (id: string) => {
    return favoriteCards.includes(id);
  };

  const handleClickFavoriteButton =
    (id: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();

      if (!getIsAdded(id)) {
        addFavoriteCards(id);
      } else {
        removeFavoriteCards(id);
      }
    };

  if (isLoading) {
    return <SliderLoader />;
  }

  return (
    <Container>
      <Subtitle>Topics for you</Subtitle>
      <Title>Our special gallery</Title>
      <CardsWrap>
        {data.map((art: ArtData) => (
          <ArtCard
            key={art.image_id}
            id={String(art.id)}
            image={getImage(art)}
            text={art.artwork_type_title}
            title={art.title}
            subtitle={art.department_title}
            onClick={handleClickCard}
            onClickFavoriteButton={handleClickFavoriteButton(String(art.id))}
            isAdded={getIsAdded(art.id.toString())}
          />
        ))}
      </CardsWrap>
    </Container>
  );
};
