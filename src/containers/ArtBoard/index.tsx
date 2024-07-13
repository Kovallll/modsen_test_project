import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import notImage from "src/assets/icons/not_image.svg";
import { ArtTicket } from "src/components/ArtTicket";
import { Select } from "src/components/Select";
import { artInitialData, Paths } from "src/constants";
import { FavoriteContext } from "src/context/FavoriteContext";
import { ArtData, getArtsDataResponse } from "src/types";
import { ArtBoardLoader } from "./ArtBoardLoader";
import {
  Container,
  Content,
  Subtitle,
  TextWrap,
  TicketBox,
  Title,
} from "./styled";

export interface ArtBoardProps {
  title: string;
  subtitle: string;
  response: string;
}

export const ArtBoard = ({ title, subtitle, response }: ArtBoardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [artObject, setArtObject] = useState(artInitialData);
  const [selectSortData, setSelectSortData] = useState<string>("");
  const { favoriteCards, removeFavoriteCards } = useContext(FavoriteContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    async function getArts() {
      try {
        const { data } = await axios.get<getArtsDataResponse>(response);
        setArtObject(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getArts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const sortedData: ArtData[] = selectSort(selectSortData);

    setArtObject({ ...artObject, data: sortedData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectSortData]);

  const handleClickCard = (id: string) => {
    navigate(`${Paths.ArtPage}/${id}`);
  };

  const selectSort = (key: string) => {
    switch (key) {
      case "ascendingYear": {
        return sortByYear();
      }
      case "decreasingYear": {
        return sortByYear(true);
      }
      case "ascendingName": {
        return sortByName();
      }
      case "decreasingName": {
        return sortByName(true);
      }
      default: {
        return artObject.data;
      }
    }
  };

  const sortByYear = (decreasing?: boolean) => {
    const sortedArts = artObject?.data.sort((a: ArtData, b: ArtData) => {
      return (a.date_start || Infinity) - (b?.date_start || Infinity);
    });

    return decreasing ? sortedArts.reverse() : sortedArts;
  };

  const sortByName = (decreasing?: boolean) => {
    const sortedArts = artObject.data.sort((a, b) =>
      a.title.localeCompare(b.title),
    );

    return decreasing ? sortedArts.reverse() : sortedArts;
  };

  const handleClickSort = (data: string) => {
    setSelectSortData(data);
  };

  const getImage = (art: ArtData) => {
    return art.image_id !== null
      ? `${artObject.config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`
      : notImage;
  };

  const getIsAdded = (id: string) => {
    return favoriteCards.includes(id);
  };

  const handleClickFavoriteButton =
    (id: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();

      removeFavoriteCards(id);
      setArtObject((prev) => ({
        ...prev,
        data: prev.data.filter((art) => art.id !== +id),
      }));
    };

  if (isLoading) {
    return <ArtBoardLoader />;
  }

  return (
    <Container>
      <Content>
        <TextWrap>
          <Subtitle>{subtitle}</Subtitle>
          <Title>{title}</Title>
        </TextWrap>
        <Select onClick={handleClickSort} selectLabel="Sort by:" />
      </Content>
      <TicketBox>
        {artObject.data.map((art: ArtData) => (
          <ArtTicket
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
      </TicketBox>
    </Container>
  );
};
