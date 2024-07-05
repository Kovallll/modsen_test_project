import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants";
import { Container, Subtitle, TicketBox, Title } from "./styled";
import { ArtTicket } from "../../components/ArtTicket";
import { ArtData } from "../Slider";

export const ArtBoard = () => {
  const [artObject, setArtObject] = useState({
    data: [],
    config: { iiif_url: "" },
  });
  useEffect(() => {
    async function getArts() {
      const { data } = await axios.get(`${BASE_URL}/v1/artworks?limit=9`);
      setArtObject(data);
      console.log(data, "Data");
    }
    getArts();
  }, []);
  return (
    <Container>
      <Subtitle>Here some more</Subtitle>
      <Title>Other works for you</Title>
      <TicketBox>
        {artObject.data.map((art: ArtData) => (
          <ArtTicket
            key={art.image_id}
            image={`${artObject.config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`}
            text={art.artwork_type_title}
            title={art.title}
            subtitle={art.department_title}
          ></ArtTicket>
        ))}
      </TicketBox>
    </Container>
  );
};
