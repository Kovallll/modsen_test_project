import { useEffect, useState } from "react";
import { ArtData, getArtsDataResponse } from "../../types";
import { ArtTicket } from "../ArtTicket";
import { TicketBox } from "./styled";
import axios from "axios";
export interface ArtTicketBoxProps {
  response: string;
}

export const ArtTicketBox = ({ response }: ArtTicketBoxProps) => {
  const [artObject, setArtObject] = useState({
    data: [
      {
        id: 0,
        image_id: "",
        artwork_type_title: "",
        title: "",
        department_title: "",
      },
    ],
    config: { iiif_url: "" },
  });
  useEffect(() => {
    async function getArts() {
      const { data } = await axios.get<getArtsDataResponse>(response);
      setArtObject(data);
      console.log(data, "Data");
    }
    getArts();
  }, []);
  return (
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
  );
};
