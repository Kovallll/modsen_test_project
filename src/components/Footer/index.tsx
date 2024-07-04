import { Container, Content, FooterImage } from "./styles";
import footerLogo from "../../assets/icons/footer_logo.svg";
import modsenImage from "../../assets/icons/modsen_logo.svg";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <FooterImage src={footerLogo}></FooterImage>
        <FooterImage src={modsenImage}></FooterImage>
      </Content>
    </Container>
  );
};
