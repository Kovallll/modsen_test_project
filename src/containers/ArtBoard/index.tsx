import { useEffect, useState } from "react";
import { ArtTicket } from "../../components/ArtTicket";
import { ArtData, getArtsDataResponse } from "../../types";
import {
  Container,
  Content,
  Subtitle,
  TextWrap,
  TicketBox,
  Title,
} from "./styled";
import axios from "axios";
import { Select } from "../../components/Select";
import { artInitialData } from "../../constants";
import { ArtBoardLoader } from "./ArtBoardLoader";
import { useNavigate } from "react-router-dom";

export interface ArtBoardProps {
  title: string;
  subtitle: string;
  response: string;
}

export const ArtBoard = ({ title, subtitle, response }: ArtBoardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [artObject, setArtObject] = useState(artInitialData);
  const [selectSortData, setSelectSortData] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    async function getArts() {
      const { data } = await axios.get<getArtsDataResponse>(response);
      setArtObject(data);
      setIsLoading(false);
    }
    getArts();
  }, []);

  useEffect(() => {
    selectSort(selectSortData);
  }, [selectSortData]);

  const selectData = [
    { optionValue: "none", value: "None" },
    { optionValue: "ascendingYear", value: "Ascending order year" },
    { optionValue: "decreasingYear", value: "Decreasing order year" },
    { optionValue: "ascendingName", value: "Ascending order name" },
    { optionValue: "decreasingName", value: "Decreasing order name" },
  ];

  const handleClickCard = (id: number) => {
    navigate(`/artpage/${id}`);
  };

  const selectSort = (key: string) => {
    switch (key) {
      case "ascendingYear": {
        sortByYear();
        break;
      }
      case "decreasingYear": {
        sortByYear(true);
        break;
      }
      case "ascendingName": {
        sortByName();
        break;
      }
      case "decreasingName": {
        sortByName(true);
        break;
      }
      default: {
        break;
      }
    }
  };

  const sortByYear = (decreasing?: boolean) => {
    const sortedArts = artObject?.data.sort((a: ArtData, b: ArtData) => {
      return (a.date_start || Infinity) - (b?.date_start || Infinity);
    });
    setArtObject({
      ...artObject,
      data: decreasing ? sortedArts.reverse() : sortedArts,
    });
  };

  const sortByName = (decreasing?: boolean) => {
    const sortedArts = artObject.data.sort((a, b) =>
      a.title.localeCompare(b.title),
    );
    setArtObject({
      ...artObject,
      data: decreasing ? sortedArts.reverse() : sortedArts,
    });
  };

  const handleClickSort = (data: string) => {
    setSelectSortData(data);
  };

  return (
    <>
      {isLoading ? (
        <ArtBoardLoader />
      ) : (
        <Container>
          <Content>
            <TextWrap>
              <Subtitle>{subtitle}</Subtitle>
              <Title>{title}</Title>
            </TextWrap>
            <Select
              onClick={handleClickSort}
              selectLabel="Sort by:"
              selectData={selectData}
            />
          </Content>
          <TicketBox>
            {artObject.data.map((art: ArtData) => (
              <ArtTicket
                key={art.image_id}
                id={art.id}
                image={`${artObject.config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`}
                text={art.artwork_type_title}
                title={art.title}
                subtitle={art.department_title}
                onClick={handleClickCard}
              />
            ))}
          </TicketBox>
        </Container>
      )}
    </>
  );
};
