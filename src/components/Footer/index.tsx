import { Container, Content, FooterImage } from "./styles";
import footerLogo from "../../assets/icons/footer_logo.svg";
import modsenImage from "../../assets/icons/modsen_logo.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <FooterImage src={footerLogo} />
        <Link to="https://www.modsen-software.com/">
          <FooterImage src={modsenImage} />
        </Link>
      </Content>
    </Container>
  );
};
