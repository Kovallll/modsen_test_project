export interface getArtsDataResponse {
  config: { iiif_url: string };
  data: ArtData[];
  pagination: { total_pages: number };
}

export interface getArtDataResponse {
  config: { iiif_url: string };
  data: ArtData;
}

export interface getSearchDataResponse {
  data: ArtData[];
  config: { iiif_url: string };
}

export interface ArtData {
  id: number;
  image_id: string;
  artwork_type_title: string;
  title: string;
  department_title: string;
  place_of_origin?: string;
  dimensions?: string;
  credit_line?: string;
  provenance_text?: string;
  thumbnail?: { lqip: string };
  date_start?: number;
}
