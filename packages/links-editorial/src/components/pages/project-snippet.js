import React from 'react';
import { connect, styled } from 'frontity';
import UnderlineButton from '../underline-button';

const ProjectSnippet = ({ project }) => (
    <SnippetDiv>
        <PosterImg className="img-fluid" src={project.img} alt={project.name} />
        <h5>{project.name}</h5>
        <p>{project.desc}</p>
        <UnderlineButton dest={project.url} title={project.name} />
    </SnippetDiv>
);

const SnippetDiv = styled.div`
    padding-bottom: 1rem;
`;

const PosterImg = styled.img`
    padding-bottom: 1.5rem;
`;

export default connect(ProjectSnippet);
