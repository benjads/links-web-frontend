import React from 'react';
import { connect, styled } from 'frontity';
import UnderlineButton from '../underline-button';

const EventSnippet = ({ event }) => (
    <SnippetDiv>
        <PosterImg className="img-fluid" src={event.img} alt={event.name} />
        <h5>{event.name}</h5>
        <p>{event.desc}</p>
        <UnderlineButton dest={event.url} title={event.name} />
    </SnippetDiv>
);

const SnippetDiv = styled.div`
    padding-bottom: 1rem;
`;

const PosterImg = styled.img`
    padding-bottom: 1.5rem;
    border-radius: 10%/20%;
`;

export default connect(EventSnippet);
