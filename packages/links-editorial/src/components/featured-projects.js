import React from 'react';
import { connect, styled } from 'frontity';
import {
    Row, Col, Carousel, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { colorSecondaryWestar } from '../main-vars';
import UnderlineButton from './underline-button';

const FeaturedProjects = ({ state, actions }) => {
    const activeProject = state.theme.projects[state.theme.featuredProjectIndex];

    return (
        <ProjectBubble>
            <Row className="align-items-center">
                <Col lg={4}>
                    <Carousel
                        activeIndex={state.theme.featuredProjectIndex}
                        onSelect={actions.theme.setFeaturedProjectIndex}
                        controls={false}
                    >
                        {state.theme.featuredProjects.map((project) => (
                            <Carousel.Item key={project.url}>
                                <img className="d-block w-100" src={project.img} alt={project.name} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col lg={8} className="px-5 py-4 py-lg-0">
                    <h3>{activeProject.name}</h3>
                    <p>{activeProject.desc}</p>
                    <UnderlineButton title="View More" dest={activeProject.url} />
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
`;

export default connect(FeaturedProjects);
