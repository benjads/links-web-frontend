import React from 'react';
import { styled } from 'frontity';

const UnderlineButton = ({ dest, title }) => (
    <a href={dest}>
        <CTAText>{title}</CTAText>
    </a>
);

const CTAText = styled.p`
    border-bottom: 1px black solid;
    text-transform: uppercase;
    max-width: fit-content;
`;

export default UnderlineButton;
