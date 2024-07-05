import { ArtTicketBox } from "../../components/ArtTicketBox";
import { BASE_URL } from "../../constants";
import { Container, Subtitle, Title } from "./styled";

export const ArtBoard = () => {
  return (
    <Container>
      <Subtitle>Here some more</Subtitle>
      <Title>Other works for you</Title>
      <ArtTicketBox response={`${BASE_URL}/v1/artworks?limit=9`}></ArtTicketBox>
    </Container>
  );
};
