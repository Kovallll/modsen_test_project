import {
  ArtInfo,
  ArtNote,
  ArtOverview,
  Container,
  Image,
  InfoText,
  OverviewText,
} from "./styled";

export const ArtPageLoader = () => {
  return (
    <Container>
      <Image />
      <ArtNote>
        <ArtInfo>
          <InfoText />
          <InfoText />
          <InfoText />
          <InfoText />
        </ArtInfo>
        <ArtOverview>
          <OverviewText />
          <OverviewText />
          <OverviewText />
          <OverviewText />
        </ArtOverview>
      </ArtNote>
    </Container>
  );
};
