import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import notImage from "src/assets/icons/not_image.svg";
import { ArtCard } from "src/components/ArtCard";
import { Paths } from "src/constants";
import { FavoriteContext } from "src/context/FavoriteContext";
import { ArtData } from "src/types";
import { SliderLoader } from "./SliderLoader";
import { CardsWrap, Container, Subtitle, Title } from "./styled";

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
