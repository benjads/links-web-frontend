import React from 'react';
import { connect, styled } from 'frontity';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { colorPrimary } from '../main-vars';
import EditorialLink from './link';
import linksWhite from '../static/images/links-club-white.png';

const Footer = () => (
    <StyledFooter>
        <Container>
            <Row>
                <SpacedCol lg={6}>
                    <EditorialLink link="/"><FooterLogo src={linksWhite} alt="LINKS Logo" /></EditorialLink>
                </SpacedCol>
                <SpacedCol lg={3}>
                    <ul className="list-unstyled">
                        <FooterLink dest="/contact-us" name="Contact Us" />
                        <FooterLink dest="/terms" name="Terms & Conditions" />
                        <FooterLink dest="/privacy-policy" name="Privacy Policy" />
                    </ul>
                </SpacedCol>
                <SpacedCol lg={3}>
                    <p>
                        123 Main Street
                        <br />
                        Danville, CA 94526
                        <br />
                        123.456.7890
                        <br />
                        <a className="text-white" href="mailto:contact@wearelinks.org">contact@wearelinks.org</a>
                    </p>
                    <SocialIcons>
                        <SocialIcon icon={faInstagram} dest="https://www.instagram.com/wearelinks" />
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIcon icon={faFacebookSquare} dest="#" />
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIcon icon={faLinkedin} dest="#" />
                    </SocialIcons>
                </SpacedCol>
            </Row>
        </Container>
    </StyledFooter>
);

const FooterLink = ({ name, dest }) => (
    <li>
        <EditorialLink className="text-white" link={dest}>{name}</EditorialLink>
    </li>
);

const SocialIcon = ({ icon, dest }) => (
    <li>
        <a href={dest} rel="noreferrer" target="_blank">
            <span>
                <FontAwesomeIcon icon={icon} color="white" />
            </span>
        </a>
    </li>
);

const StyledFooter = styled.footer`
    background-color: ${colorPrimary};
    color: #fff !important;
    width: 100%;
    padding: 4rem 0;
`;

const SocialIcons = styled.ul`
    list-style: none;
    display: inline;
    margin-left: 0 !important;;
    padding: 0;
  
    li {
        display: inline;
        margin-right: 1rem;
    }
  
    li a span svg {
        font-size: 2rem;
    }
`;

const SpacedCol = styled(Col)`
    @media(max-width: 1024px) {
      padding-bottom: 2rem;
      text-align: center;
    }
  
`;

const FooterLogo = styled.img`
    height: 6rem;
`;

export default connect(Footer);
