import { ArtCard } from "../../components/ArtCard";
import { CardsWrap, Container, Subtitle, Title } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "../Pagination";
import { artInitialData, BASE_URL } from "../../constants";
import { ArtData, getArtsDataResponse } from "../../types";
import { SliderLoader } from "./SliderLoader";

export const Slider = () => {
  const [{ data, config, pagination }, setArtObject] = useState(artInitialData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    async function getArts() {
      const { data } = await axios.get<getArtsDataResponse>(
        `${BASE_URL}/v1/artworks?page=${currentPage}&limit=3`,
      );
      setArtObject(data);
      setIsLoading(false);
      console.log(data, "Data");
    }
    getArts();
  }, [currentPage]);

  const handleClickPaginationButton = (index: number) => {
    setCurrentPage(index);
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
              ></ArtCard>
            ))}
          </CardsWrap>
          <Pagination
            totalPages={pagination.total_pages}
            currentPage={currentPage}
            onClickButton={handleClickPaginationButton}
          ></Pagination>
        </Container>
      )}
    </>
  );
};
