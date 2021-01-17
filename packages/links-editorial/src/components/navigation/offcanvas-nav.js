import React from 'react';
import { connect, styled } from 'frontity';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { fontHeadings } from '../../main-vars';
import EditorialLink from '../link';

const OffCanvasNav = () => (
    <OffCanvasNavbar bg="primary" variant="dark" expand={false}>
        <OffCanvasBrand className="h1">LINKS</OffCanvasBrand>
        <Nav className="mr-auto">
            <EditorialLink link="/">
                <StyledLink>Home</StyledLink>
            </EditorialLink>
            <EditorialLink link="/our-story/">
                <StyledLink>Our Story</StyledLink>
            </EditorialLink>
        </Nav>
    </OffCanvasNavbar>
);

const OffCanvasNavbar = styled(Navbar)`
    display: table-cell;
    vertical-align: middle;
`;

const OffCanvasBrand = styled(NavbarBrand)`
    margin-right: 0;
    font-size: 2.5rem;
    font-family: ${fontHeadings};
`;

const StyledLink = styled.p`
    color: #fff !important;
    font-size: 2rem;
    font-family: ${fontHeadings};
`;

export default connect(OffCanvasNav);
