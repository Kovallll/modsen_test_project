import axios from "axios";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { BASE_URL } from "../../constants";
import {
  ArtImage,
  ArtInfo,
  ArtNote,
  ArtOverview,
  Container,
  FavoriteArtButton,
  FavoriteArtIcon,
  ImageWrap,
  InfoSubtitle,
  InfoText,
  InfoTitle,
  OverviewText,
  OverviewTitle,
} from "./styled";
import { getArtDataResponse } from "../../types";
import favoritesIcon from "../../assets/icons/favorite.svg";

export async function loader({ params }: LoaderFunctionArgs) {
  const { data } = await axios.get<getArtDataResponse>(
    `${BASE_URL}/v1/artworks/${params.artId}`,
  );
  return data;
}

const ArtPage = () => {
  const { config, data } = useLoaderData() as getArtDataResponse;
  console.log({ config, data }, "asr");
  return (
    <Container>
      <ImageWrap>
        <FavoriteArtButton>
          <FavoriteArtIcon src={favoritesIcon}></FavoriteArtIcon>
        </FavoriteArtButton>
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
            {data.place_of_origin}
          </OverviewText>
          <OverviewText>
            <span style={{ color: "#e0a449" }}>Dimensions Sheet: </span>
            {data.dimensions}
          </OverviewText>
          <OverviewText>
            <span style={{ color: "#e0a449" }}>Credit Line: </span>
            {data.credit_line}
          </OverviewText>
          <OverviewText>
            <span style={{ color: "#e0a449" }}>Repository: </span>
            {data.provenance_text}
          </OverviewText>
        </ArtOverview>
      </ArtNote>
    </Container>
  );
};

export default ArtPage;
