import axios from "axios";
import { useLoaderData, LoaderFunctionArgs, useParams } from "react-router-dom";
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
import { FavoriteButton } from "../../components/FavoriteButton";

export async function loader({ params }: LoaderFunctionArgs) {
  const { data } = await axios.get<getArtDataResponse>(
    `${BASE_URL}/v1/artworks/${params.artId}`,
  );
  return data;
}

const ArtPage = () => {
  const { config, data } = useLoaderData() as getArtDataResponse;
  const { artId } = useParams() as unknown as { artId: string };

  return (
    <Container>
      <ImageWrap>
        <FavoriteButton artId={+artId} isOnArtPage={true}></FavoriteButton>
        <ArtImage
          src={`${config.iiif_url}/${data.image_id}/full/843,/0/default.jpg`}
        ></ArtImage>
      </ImageWrap>
      <ArtNote>
        <ArtInfo>
          <InfoTitle>{data.title}</InfoTitle>
          <InfoSubtitle>{data.artwork_type_title}</InfoSubtitle>
          <InfoText>{data.department_title}</InfoText>
        </ArtInfo>
        <ArtOverview>
          <OverviewTitle>Overview</OverviewTitle>
          <OverviewText>
            <span style={{ color: "#e0a449" }}>Artist nacionality: </span>
            {data.place_of_origin ?? "None"}
          </OverviewText>
          <OverviewText>
            <span style={{ color: "#e0a449" }}>Year: </span>
            {data.date_start ?? "None"}
          </OverviewText>
          <OverviewText>
            <span style={{ color: "#e0a449" }}>Dimensions Sheet: </span>
            {data.dimensions ?? "None"}
          </OverviewText>
          <OverviewText>
            <span style={{ color: "#e0a449" }}>Credit Line: </span>
            {data.credit_line ?? "None"}
          </OverviewText>
          <OverviewText>
            <span style={{ color: "#e0a449" }}>Repository: </span>
            {data.provenance_text ?? "None"}
          </OverviewText>
        </ArtOverview>
      </ArtNote>
    </Container>
  );
};

export default ArtPage;
