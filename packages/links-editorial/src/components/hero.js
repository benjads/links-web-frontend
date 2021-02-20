import React from 'react';
import { connect, styled } from 'frontity';
import { Jumbotron, Container } from 'react-bootstrap';
import heroImage from '../static/images/hero.jpg';
import linksWhite from '../static/images/links-club-white.png';

const Hero = ({ title, subtitle, heroHeight }) => (
    <HeroJumbotron fluid heroheight={heroHeight}>
        <Container>
            {!title ? <LogoImage src={linksWhite} alt="LINKS Logo" /> : <h1 className="display-1">{title}</h1>}
            <h3>{subtitle}</h3>
        </Container>
    </HeroJumbotron>
);

const HeroJumbotron = styled(Jumbotron)`
    color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${heroImage});
    min-height: ${(props) => props.heroheight || '100vh'};
    display: flex;
    align-items: center;
    text-align: center;
`;

const LogoImage = styled.img`
    height: 10rem;
    margin-bottom: 4rem;
`;

export default connect(Hero);
