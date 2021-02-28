import React from 'react';
import { connect, styled } from 'frontity';
import { Jumbotron, Container } from 'react-bootstrap';
import defaultImage from '../static/images/hero.jpg';
import linksWhite from '../static/images/links-club-white.png';
import { fontSansSerif } from '../main-vars';
import downArrow from '../static/images/angle-arrow-down.svg';

const Hero = ({
    title, subtitle, heroHeight, heroImage,
}) => (
    <HeroJumbotron fluid heroheight={heroHeight} heroimage={heroImage}>
        <Container>
            {!title ? <LogoImage src={linksWhite} alt="LINKS Logo" /> : <h1 className="display-1">{title}</h1>}
            {subtitle && <SubtitleText>{subtitle}</SubtitleText>}
            {!title && <DownCarrot><img src={downArrow} alt="Down arrow" /></DownCarrot>}
        </Container>
    </HeroJumbotron>
);

const HeroJumbotron = styled(Jumbotron)`
    color: white;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(props) => props.heroimage || defaultImage});
    min-height: ${(props) => props.heroheight || '100vh'};
    justify-content: center;
    display: flex;
    align-items: center;
    text-align: center;
`;

const LogoImage = styled.img`
    height: 10rem;
    margin-bottom: 4rem;
`;

const SubtitleText = styled.h3`
    font-family: ${fontSansSerif};
    font-weight: normal;
`;

const DownCarrot = styled.div`
    display: block;
    position: absolute;
    margin: auto;
    text-align: center;
    bottom: 2rem;
    left: 0;
    right: 0;
  
    img {
      height: 4rem;
    }
`;

export default connect(Hero);
