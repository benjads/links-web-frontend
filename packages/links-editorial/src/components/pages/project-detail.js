import React from 'react';
import { connect, styled } from 'frontity';
import { Container, Row, Col } from 'react-bootstrap';
import TopNav from '../navigation/top-nav';
import JoinUsBreak from '../join-us-break';
import Footer from '../footer';
import FeaturedMedia from '../featured-media';

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
                        <Col xs={12}>
                            <CoverImage id={post.featured_media} />
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

const CoverImage = styled(FeaturedMedia)`
    border-radius: 20%/30%;
`;

export default connect(ProjectDetail);
