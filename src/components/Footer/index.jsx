import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { FooterContainer, Logo, IconContainer } from "./styles/Footer";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Logo>Pizzario</Logo>
        <IconContainer>
          <FaFacebook
            className="hover"
            style={{
              color: "#fff",
              fontSize: "30px",
            }}
          />
          <FaTwitter
            className="hover"
            style={{
              color: "#fff",
              fontSize: "30px",
            }}
          />
          <FaInstagram
            className="hover"
            style={{
              color: "#fff",
              fontSize: "30px",
            }}
          />
          <FaYoutube
            className="hover"
            style={{
              color: "#fff",
              fontSize: "30px",
            }}
          />
          <FaTelegram
            className="hover"
            style={{
              color: "#fff",
              fontSize: "30px",
            }}
          />
        </IconContainer>
      </FooterContainer>
    </>
  );
};
