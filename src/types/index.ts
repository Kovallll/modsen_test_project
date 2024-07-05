export interface getArtsDataResponse {
  config: { iiif_url: string };
  data: ArtData[];
}

export interface getArtDataResponse {
  config: { iiif_url: string };
  data: ArtData;
}

export interface ArtData {
  image_id: string;
  artwork_type_title: string;
  title: string;
  department_title: string;
  place_of_origin?: string;
  dimensions?: string;
  credit_line?: string;
  provenance_text?: string;
}
