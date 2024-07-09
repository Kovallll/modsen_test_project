import { Text } from "./styled";

export interface YellowTextProps {
  children: string;
}

export const YellowText = ({ children }: YellowTextProps) => {
  return <Text>{children}</Text>;
};
