import React from 'react';
import { connect, styled } from 'frontity';
import { Nav, Navbar } from 'react-bootstrap';
import { colorSecondaryGray, fontSansSerif } from '../../main-vars';
import EditorialLink from '../link';
import linksWhite from '../../static/images/links-white.png';

const OffCanvasNav = () => (
    <OffCanvasNavbar bg="primary" variant="dark" expand={false}>
        <LogoBrand src={linksWhite} alt="LINKS Logo" />
        <Nav className="mr-auto">
            <StyledLink link="/">Home</StyledLink>
            <StyledLink link="/our-story/">Our Story</StyledLink>
            <StyledLink link="/projects/">Our Projects</StyledLink>
        </Nav>
    </OffCanvasNavbar>
);

const OffCanvasNavbar = styled(Navbar)`
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    padding-left: 3rem;
`;

const StyledLink = styled(EditorialLink)`
    padding-bottom: 1rem;
    color: white;
    font-size: 1.5rem;
    font-family: ${fontSansSerif};
  
    :hover {
      text-decoration: none;
      color: ${colorSecondaryGray};
    }
`;

const LogoBrand = styled.img`
    height: 3rem;
    margin-bottom: 2rem;
`;

export default connect(OffCanvasNav);
