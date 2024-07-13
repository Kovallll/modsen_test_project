import { Link } from "react-router-dom";

import footerLogo from "src/assets/icons/footer_logo.svg";
import modsenImage from "src/assets/icons/modsen_logo.svg";
import { Container, Content, FooterImage } from "./styles";

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
