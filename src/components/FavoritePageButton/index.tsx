import { FavoriteArtPageButton } from "./styled";

export interface FavoriteButtonProps {
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const FavoriteButton = ({ onClick, icon }: FavoriteButtonProps) => {
  return (
    <FavoriteArtPageButton onClick={onClick}>{icon}</FavoriteArtPageButton>
  );
};
