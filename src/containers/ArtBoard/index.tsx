import { useContext, useEffect, useState } from "react";
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
import { artInitialData, Paths } from "../../constants";
import { ArtBoardLoader } from "./ArtBoardLoader";
import { useNavigate } from "react-router-dom";
import notImage from "../../assets/icons/not_image.svg";
import { FavoriteContext } from "../../context/FavoriteContext";

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
      try {
        const { data } = await axios.get<getArtsDataResponse>(response);
        setArtObject(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getArts();
  }, []);

  useEffect(() => {
    const sortedData: ArtData[] = selectSort(selectSortData);

    setArtObject({ ...artObject, data: sortedData });
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
            getIsAdded={getIsAdded}
          />
        ))}
      </TicketBox>
    </Container>
  );
};
