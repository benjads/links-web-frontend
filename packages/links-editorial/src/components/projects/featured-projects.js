import React, { useEffect } from 'react';
import { connect, styled } from 'frontity';
import {
    Row, Col, Carousel, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import FeaturedMedia from '../featured-media';
import UnderlineButton from '../underline-button';
import { colorSecondaryWestar } from '../../main-vars';

const FeaturedProjects = ({ state, actions, libraries }) => {
    useEffect(() => {
        actions.source.fetch('/project');
    }, []);

    const data = state.source.get('/project');

    if (data.isArchive) {
        const posts = data.items.map(({
            type, id,
        }) => state.source[type][id]);

        actions.theme.setProjects(posts);

        const activeProject = state.theme.featuredProjects[state.theme.featuredProjectIndex];

        if (state.theme.featuredProjects.length === 0) {
            return null;
        }

        return (
            <ProjectBubble>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <Carousel
                            activeIndex={state.theme.featuredProjectIndex}
                            onSelect={actions.theme.setFeaturedProjectIndex}
                            controls={false}
                        >
                            {state.theme.featuredProjects.map((project) => (
                                <Carousel.Item key={project.link}>
                                    <FeaturedMedia id={project.featured_media} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col lg={7} className="px-5 py-4 py-lg-0">
                        <ProjectDesc>
                            <h3 className="pt-1">{activeProject.title.rendered}</h3>
                            <libraries.html2react.Component html={activeProject.excerpt.rendered} />
                            <UnderlineButton dest={activeProject.link} title="View More" />
                        </ProjectDesc>
                        <CarouselControls>
                            <CarouselButton
                                onClick={actions.theme.decrementFeaturedProjectIndex}
                                variant="light"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </CarouselButton>
                            <CarouselButton
                                onClick={actions.theme.incrementFeaturedProjectIndex}
                                variant="dark"
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </CarouselButton>
                        </CarouselControls>
                    </Col>
                </Row>
            </ProjectBubble>
        );
    }

    return null;
};

const ProjectBubble = styled.div`
    background-color: ${colorSecondaryWestar};

    @media(min-width: 1024px) {
      border-radius: 5% / 15%;
      overflow: hidden;
    }
`;

const CarouselControls = styled.div`
    padding-top: 2rem;    
    float: right;
`;

const CarouselButton = styled(Button)`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
    background-color: ${(props) => (props.variant === 'light' ? 'white' : 'black')};
    color: ${(props) => (props.variant === 'light' ? 'black' : 'white')};
  
    :hover {
        background-color: ${(props) => (props.variant === 'light' ? 'black' : 'white')};
        color: ${(props) => (props.variant === 'light' ? 'white' : 'black')};
    }
`;

const ProjectDesc = styled.div`
    height: 10rem;
    vertical-align: middle;
`;

export default connect(FeaturedProjects);
