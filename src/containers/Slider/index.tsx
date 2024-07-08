import { ArtCard } from "../../components/ArtCard";
import { CardsWrap, Container, Subtitle, Title } from "./styled";
import { ArtData } from "../../types";
import { SliderLoader } from "./SliderLoader";
import { useNavigate } from "react-router-dom";

export interface SliderProps {
  data: ArtData[];
  config: { iiif_url: string };
  isLoading: boolean;
}

export const Slider = ({ data, config, isLoading }: SliderProps) => {
  const navigate = useNavigate();

  const handleClickCard = (id: number) => {
    navigate(`/artpage/${id}`);
  };
  return (
    <>
      {isLoading ? (
        <SliderLoader />
      ) : (
        <Container>
          <Subtitle>Topics for you</Subtitle>
          <Title>Our special gallery</Title>
          <CardsWrap>
            {data.map((art: ArtData) => (
              <ArtCard
                key={art.image_id}
                id={art.id}
                image={`${config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`}
                text={art.artwork_type_title}
                title={art.title}
                subtitle={art.department_title}
                onClick={handleClickCard}
              />
            ))}
          </CardsWrap>
        </Container>
      )}
    </>
  );
};
