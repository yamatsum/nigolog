import React from "react";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";

const FooterInner = styled.footer`
  margin-top: 3em;
  text-align: center;
  padding: 1.5em;
  border-top: solid 1px ${props => props.theme.colors.blackLight};
  color: ${props => props.theme.colors.gray};
  font-size: 14px;
  a {
    color: ${props => props.theme.colors.gray};
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <footer>
      <ContentWrapper>
        <FooterInner>
          <div>
            <a href="https://github.com/cat-nose/CatKnows" rel="nofollow">
              SourceCode
            </a>
          </div>
          <div>© {new Date().getFullYear()}, CatNose All rights reserved.</div>
        </FooterInner>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
