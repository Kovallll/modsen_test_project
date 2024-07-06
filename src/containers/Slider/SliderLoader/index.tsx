import { Container, Subtitle, Title, CardsWrap } from "../styled";
import { Card, PaginationLoader } from "./styled";

export const SliderLoader = () => {
  return (
    <Container>
      <Subtitle>Topics for you</Subtitle>
      <Title>Our special gallery</Title>
      <CardsWrap>
        <Card />
        <Card />
        <Card />
      </CardsWrap>
      <PaginationLoader />
    </Container>
  );
};
