import { ArtCard } from "../../components/ArtCard";
import { CardsWrap, Container, Subtitle, Title } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "../Pagination";
import { BASE_URL } from "../../constants";
import { ArtData, getArtsDataResponse } from "../../types";

export const Slider = () => {
  const [artObject, setArtObject] = useState({
    data: [
      {
        id: "",
        image_id: "",
        artwork_type_title: "",
        title: "",
        department_title: "",
      },
    ],
    config: { iiif_url: "" },
    pagination: { total_pages: 1 },
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    async function getArts() {
      const { data } = await axios.get<getArtsDataResponse>(
        `${BASE_URL}/v1/artworks?page=${currentPage}&limit=3`,
      );
      setArtObject(data);
      console.log(data, "Data");
    }
    getArts();
  }, [currentPage]);

  const handleClickPaginationButton = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <Container>
      <Subtitle>Topics for you</Subtitle>
      <Title>Our special gallery</Title>
      <CardsWrap>
        {artObject.data.map((art: ArtData) => (
          <ArtCard
            key={art.image_id}
            id={art.id}
            image={`${artObject.config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`}
            text={art.artwork_type_title}
            title={art.title}
            subtitle={art.department_title}
          ></ArtCard>
        ))}
      </CardsWrap>
      <Pagination
        totalPages={artObject.pagination.total_pages}
        currentPage={currentPage}
        onClickButton={handleClickPaginationButton}
      ></Pagination>
    </Container>
  );
};
