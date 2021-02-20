import React from 'react';
import { connect, styled } from 'frontity';
import EditorialLink from './link';

const UnderlineButton = ({ dest, title }) => (
    <EditorialLink link={dest}>
        <CTAText>{title}</CTAText>
    </EditorialLink>
);

const CTAText = styled.p`
    border-bottom: 1px black solid;
    text-transform: uppercase;
    max-width: fit-content;
    font-size: 0.8rem;
`;

export default connect(UnderlineButton);
