import { FavoriteButtonProps } from "src/components/FavoritePageButton";
import { IconWrap } from "./styled";

export const FavoriteCardButton = ({ onClick, icon }: FavoriteButtonProps) => {
  return (
    <IconWrap role="button" onClick={onClick}>
      {icon}
    </IconWrap>
  );
};
