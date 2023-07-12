import React from "react";
import { styled } from "styled-components";
import theme from "../../lib/styles/theme";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterBlock>
      <Link to="https://github.com/nayoung3669" target="_blank">
        <FaGithub size="35" />
      </Link>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.div`
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: ${theme.colors.brown};
  padding-top: 25px;
  ${theme.common.flexCenterColumn}
`;
