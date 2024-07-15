import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import notImage from "src/assets/icons/not_image.svg";
import ArtCard from "src/components/ArtCard";
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

  const { favoriteCards, addFavoriteCards, removeFavoriteCards } =
    useContext(FavoriteContext);

  const handleClickCard = useCallback((id: string) => {
    navigate(`${Paths.ArtPage}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getImage = useCallback(
    (art: ArtData) => {
      return art.image_id !== null
        ? `${config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`
        : notImage;
    },
    [config.iiif_url],
  );

  const getIsAdded = useCallback(
    (id: string) => {
      return favoriteCards.includes(id);
    },
    [favoriteCards],
  );

  const handleClickFavoriteButton = useCallback(
    (id: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();

      if (!getIsAdded(id)) {
        addFavoriteCards(id);
      } else {
        removeFavoriteCards(id);
      }
    },
    [addFavoriteCards, getIsAdded, removeFavoriteCards],
  );

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
            key={art.id}
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
