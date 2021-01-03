import React from 'react';
import { styled } from 'frontity';
import { Jumbotron, Container } from 'react-bootstrap';

const Hero = ({ title, subtitle, heroHeight }) => (
    <HeroJumbotron fluid heroheight={heroHeight}>
        <Container>
            <h1 className="display-1">{title}</h1>
            <p>{subtitle}</p>
        </Container>
    </HeroJumbotron>
);

const HeroJumbotron = styled(Jumbotron)`
    color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1608721587536-d266bea4cf9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2002&q=80");
    min-height: ${(props) => props.heroheight || '100vh'};
    display: flex;
    align-items: center;
    text-align: center;
`;

export default Hero;
