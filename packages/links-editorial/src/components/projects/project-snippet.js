import React from 'react';
import { connect, styled } from 'frontity';
import UnderlineButton from '../underline-button';
import FeaturedMedia from '../featured-media';

const ProjectSnippet = ({ libraries, project }) => (
    <SnippetDiv>
        <ThumbnailContainer>
            <FeaturedMedia id={project.featured_media} />
        </ThumbnailContainer>
        <h5>{project.title.rendered}</h5>
        <libraries.html2react.Component html={project.excerpt.rendered} />
        <UnderlineButton dest={project.link} title={project.title.rendered} />
    </SnippetDiv>
);

const SnippetDiv = styled.div`
    padding-bottom: 1rem;
`;

const ThumbnailContainer = styled.div`
    padding-bottom: 1rem;
`;

export default connect(ProjectSnippet);
