import { FavoriteButtonProps } from "src/components/FavoritePageButton";
import { IconWrap } from "./styled";

export const FavoriteButton = ({ onClick, icon }: FavoriteButtonProps) => {
  return <IconWrap onClick={onClick}>{icon}</IconWrap>;
};
