import axios from "axios";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { BASE_URL } from "../../constants";

export interface LoaderProps {
  params: { artId: string };
}

export async function loader({ params }: LoaderFunctionArgs) {
  const { data } = await axios.get(`${BASE_URL}/v1/artworks/${params.artId}`);
  return data;
}

const ArtPage = () => {
  const artId = useLoaderData();
  console.log(artId, "asr");
  return <></>;
};

export default ArtPage;
