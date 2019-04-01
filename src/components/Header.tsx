import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import svgLogo from "../svg/256g.svg";

const HeaderTag = styled.header`
  width: 100%;
  padding: 16px 0;
  // border-bottom: solid 1px ${props => props.theme.colors.blackLight};
  box-shadow: 0px 3px 25px rgba(77,77,99,0.1);
`;

const HeaderInner = styled.div`
  position: relative;
  h1,
  h3 {
    width: 100%;
  }
  .logo {
    display: block;
    width: 124px;
    height: 40px;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      margin: 0 auto;
    }
  }
  .logo-link {
    display: block;
  }
  .message-link {
    position: absolute;
    right: 0;
    top: 7px;
    display: block;
    width: 34px;
    &:hover {
      top: 5px;
    }
  }
`;

const Header = ({ title, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const logoLink = (
    <Link to={`/`} className="logo-link">
      <img className="logo" src={svgLogo} alt={title} />
    </Link>
  );

  let headerLogo;
  if (location.pathname === rootPath) {
    headerLogo = <h1>{logoLink}</h1>;
  } else {
    headerLogo = <h3>{logoLink}</h3>;
  }
  return (
    <HeaderTag>
      <ContentWrapper>
        <HeaderInner>{headerLogo}</HeaderInner>
      </ContentWrapper>
    </HeaderTag>
  );
};

export default Header;
