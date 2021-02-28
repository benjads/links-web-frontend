import React from 'react';
import { connect, styled } from 'frontity';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import TopNav from '../navigation/top-nav';
import JoinUsBreak from '../join-us-break';
import Footer from '../footer';
import FeaturedMedia from '../featured-media';
import EditorialLink from '../link';

const ProjectDetail = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component;

    return data.isReady ? (
        <>
            <TopNav />

            <section>
                <SpacedContainer>
                    <Row>
                        <BackLink link="/projects">
                            <FontAwesomeIcon icon={faChevronLeft} />
                            <BackText>BACK TO PROJECTS</BackText>
                        </BackLink>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <CoverImage>
                                <FeaturedMedia id={post.featured_media} />
                            </CoverImage>
                        </Col>
                    </Row>

                    <h3 className="py-4">{post.title.rendered}</h3>
                    <Html2React html={post.content.rendered} />
                </SpacedContainer>
            </section>

            <JoinUsBreak />
            <Footer />
        </>
    ) : null;
};

const SpacedContainer = styled(Container)`
    margin-top: 6rem;
    margin-bottom: 6rem;
`;

const CoverImage = styled.div`
    div img {
      border-radius: 5%/10%;
    }
`;

const BackLink = styled(EditorialLink)`
    font-size: 0.8rem;
    margin-bottom: 2rem;
`;

const BackText = styled.p`
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    display: inline;
    padding-left: 0.5rem;
`;

export default connect(ProjectDetail);
