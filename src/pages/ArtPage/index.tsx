import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import {
  ArtImage,
  ArtInfo,
  ArtNote,
  ArtOverview,
  Container,
  FavoriteArtPageIcon,
  ImageWrap,
  InfoSubtitle,
  InfoText,
  InfoTitle,
  OverviewText,
  OverviewTitle,
} from "./styled";
import { getArtDataResponse } from "../../types";
import { FavoriteButton } from "../../components/FavoritePageButton";
import { useContext, useEffect, useMemo, useState } from "react";
import { ArtPageLoader } from "./ArtPageLoader";
import notImage from "../../assets/icons/not_image.svg";
import { YellowText } from "./YellowText";
import favoritesIcon from "../../assets/icons/favorite.svg";
import favoritesAddedIcon from "../../assets/icons/favorite_added.svg";
import { FavoriteContext } from "../../context/FavoriteContext";

const ArtPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [artData, setArtData] = useState<getArtDataResponse>();
  const { artId } = useParams() as unknown as { artId: string };

  const { favoriteCards, addFavoriteCards, removeFavoriteCards } =
    useContext(FavoriteContext);
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const { data } = await axios.get<getArtDataResponse>(
          `${BASE_URL}/v1/artworks/${artId}`,
        );
        setArtData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  const isAdded = useMemo(() => favoriteCards.includes(artId), [favoriteCards]);
  const overviewData = [
    {
      text: "Artist nacionality: ",
      data: artData?.data.place_of_origin ?? "None",
    },
    {
      text: "Year: ",
      data: artData?.data.date_start ?? "None",
    },
    {
      text: "Dimensions Sheet: ",
      data: artData?.data.dimensions ?? "None",
    },
    {
      text: "Credit Line: ",
      data: artData?.data.credit_line ?? "None",
    },
    {
      text: "Repository: ",
      data: artData?.data.provenance_text ?? "None",
    },
  ];

  const handleClickFavoriteButton = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    if (!isAdded) {
      addFavoriteCards(artId);
    } else {
      removeFavoriteCards(artId);
    }
  };

  if (isLoading) {
    return <ArtPageLoader />;
  }

  return (
    <Container>
      <ImageWrap>
        <FavoriteButton
          onClick={handleClickFavoriteButton}
          icon={
            <FavoriteArtPageIcon
              src={isAdded ? favoritesAddedIcon : favoritesIcon}
            />
          }
        />
        <ArtImage
          src={
            artData?.data?.image_id !== null
              ? `${artData?.config.iiif_url}/${artData?.data.image_id}/full/843,/0/default.jpg`
              : notImage
          }
        />
      </ImageWrap>
      <ArtNote>
        <ArtInfo>
          <InfoTitle>{artData?.data.title}</InfoTitle>
          <InfoSubtitle>{artData?.data.artwork_type_title}</InfoSubtitle>
          <InfoText>{artData?.data.department_title}</InfoText>
        </ArtInfo>
        <ArtOverview>
          <OverviewTitle>Overview</OverviewTitle>
          {overviewData.map((overview) => (
            <OverviewText key={overview.text}>
              <YellowText>{overview.text}</YellowText>
              {overview.data}
            </OverviewText>
          ))}
        </ArtOverview>
      </ArtNote>
    </Container>
  );
};

export default ArtPage;
