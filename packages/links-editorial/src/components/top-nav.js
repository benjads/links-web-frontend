import React from 'react';
import {
    Navbar, NavbarBrand, Nav,
} from 'react-bootstrap';
import {
    connect, styled,
} from 'frontity';
import OffCanvas from 'react-aria-offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const TopNav = ({ state, actions }) => (
    <Navbar bg="primary" variant="dark" expand={false}>
        <LogoBrand className="h2" href="/">LINKS</LogoBrand>
        <button
            id="nav-toggle"
            type="button"
            aria-controls="menu"
            aria-expanded={state.theme.isMenuOpen}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            onClick={actions.theme.openMenu}
        >
            <FontAwesomeIcon icon={faBars} />
        </button>
        <OffCanvas
            isOpen={state.theme.isMenuOpen}
            onClose={actions.theme.closeMenu}
            labelledby="nav-toggle"
            position="right"
            height="100%"
            style={{ overlay: {}, content: offCanvasStyles }}
        >
            <OffCanvasNav />
        </OffCanvas>
    </Navbar>
);

const OffCanvasNav = () => (
    <OffCanvasNavbar bg="primary" variant="dark" expand={false}>
        <OffCanvasBrand className="h2">LINKS</OffCanvasBrand>
        <Nav className="mr-auto">
            <StyledLink href="#home">Home</StyledLink>
            <StyledLink href="#link">Link</StyledLink>
        </Nav>
    </OffCanvasNavbar>
);

const offCanvasStyles = {
    backgroundColor: '#2a414b',
    textAlign: 'center',
    display: 'table',
};

const LogoBrand = styled(NavbarBrand)`
    padding-bottom: 0;
    margin-bottom: 0;
`;

const OffCanvasNavbar = styled(Navbar)`
    display: table-cell;
    vertical-align: middle;
`;

const OffCanvasBrand = styled(NavbarBrand)`
    margin-right: 0;
`;

const StyledLink = styled(Nav.Link)`
    color: white;
`;

export default connect(TopNav);
