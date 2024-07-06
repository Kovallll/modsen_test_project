import { useEffect, useState } from "react";
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
import { artInitialData } from "../../constants";

export interface ArtBoardProps {
  title: string;
  subtitle: string;
  response: string;
}

export const ArtBoard = ({ title, subtitle, response }: ArtBoardProps) => {
  const [artObject, setArtObject] = useState(artInitialData);
  useEffect(() => {
    async function getArts() {
      const { data } = await axios.get<getArtsDataResponse>(response);
      setArtObject(data);
      console.log(data, "Data");
    }
    getArts();
  }, []);

  return (
    <Container>
      <Content>
        <TextWrap>
          <Subtitle>{subtitle}</Subtitle>
          <Title>{title}</Title>
        </TextWrap>
        <Select dataSort={artObject} setDataSort={setArtObject} />
      </Content>
      <TicketBox>
        {artObject.data.map((art: ArtData) => (
          <ArtTicket
            key={art.image_id}
            id={art.id}
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
