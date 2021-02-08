import React, { useEffect } from 'react';
import {
    Navbar, NavbarBrand,
} from 'react-bootstrap';
import {
    connect, styled, css,
} from 'frontity';
import OffCanvas from 'react-aria-offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import OffCanvasNav from './offcanvas-nav';
import EditorialLink from '../link';

const TopNav = ({ hide, semiTrans, state, actions }) => {
    if (hide) {
        useEffect(() => {
            window.addEventListener('scroll', actions.theme.updateNav);
            actions.theme.updateNav();
            return () => {
                window.removeEventListener('scroll', actions.theme.updateNav);
            };
        });
    }

    // noinspection HtmlUnknownAttribute
    return (
        <div css={state.theme.isNavVisible || !hide ? active : hidden}>
            <TopNavbar
                bg="primary"
                variant="dark"
                expand={false}
                fixed="top"
            >
                <EditorialLink link="/"><LogoBrand className="h2">LINKS</LogoBrand></EditorialLink>
                <NavButton
                    id="nav-toggle"
                    type="button"
                    aria-controls="menu"
                    aria-expanded={state.theme.isMenuOpen}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    onClick={actions.theme.toggleMenu}
                >
                    <FontAwesomeIcon icon={state.theme.isMenuOpen ? faTimes : faBars} />
                </NavButton>
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
            </TopNavbar>
        </div>
    );
};

const offCanvasStyles = {
    backgroundColor: '#2a414b',
    textAlign: 'center',
    display: 'table',
};

const active = css`
    opacity: 1;
    visibility: visible;
    transition: all 200ms ease-in;
`;

const hidden = css`
    opacity: 0;
    visibility: hidden;
    transition: all 200ms ease-out;
`;

const TopNavbar = styled(Navbar)`
    padding: 0.5rem 2rem 0.5rem 2rem;
`;

const LogoBrand = styled(NavbarBrand)`
    font-size: 2em;
    padding: 0;
    margin-bottom: 0;
`;

const NavButton = styled.button`
    color: white !important;
    border: none;
`;

export default connect(TopNav);
