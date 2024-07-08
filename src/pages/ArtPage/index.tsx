import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import {
  ArtImage,
  ArtInfo,
  ArtNote,
  ArtOverview,
  Container,
  ImageWrap,
  InfoSubtitle,
  InfoText,
  InfoTitle,
  OverviewText,
  OverviewTitle,
} from "./styled";
import { getArtDataResponse } from "../../types";
import { FavoriteButton } from "../../components/FavoriteCardButton";
import { useEffect, useState } from "react";
import { ArtPageLoader } from "./ArtPageLoader";

const ArtPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [artData, setArtData] = useState<getArtDataResponse>();
  const { artId } = useParams() as unknown as { artId: string };
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const { data } = await axios.get<getArtDataResponse>(
        `${BASE_URL}/v1/artworks/${artId}`,
      );
      setArtData(data);
      setIsLoading(false);
    };
    getData();
  }, []);
  console.log(isLoading, "isLoad");
  return (
    <>
      {isLoading ? (
        <ArtPageLoader />
      ) : (
        <Container>
          <ImageWrap>
            <FavoriteButton artId={+artId} />
            <ArtImage
              src={`${artData?.config.iiif_url}/${artData?.data.image_id}/full/843,/0/default.jpg`}
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
              <OverviewText>
                <span style={{ color: "#e0a449" }}>Artist nacionality: </span>
                {artData?.data.place_of_origin ?? "None"}
              </OverviewText>
              <OverviewText>
                <span style={{ color: "#e0a449" }}>Year: </span>
                {artData?.data.date_start ?? "None"}
              </OverviewText>
              <OverviewText>
                <span style={{ color: "#e0a449" }}>Dimensions Sheet: </span>
                {artData?.data.dimensions ?? "None"}
              </OverviewText>
              <OverviewText>
                <span style={{ color: "#e0a449" }}>Credit Line: </span>
                {artData?.data.credit_line ?? "None"}
              </OverviewText>
              <OverviewText>
                <span style={{ color: "#e0a449" }}>Repository: </span>
                {artData?.data.provenance_text ?? "None"}
              </OverviewText>
            </ArtOverview>
          </ArtNote>
        </Container>
      )}
    </>
  );
};

export default ArtPage;
