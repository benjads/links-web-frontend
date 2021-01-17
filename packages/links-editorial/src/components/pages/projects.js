import React from 'react';
import { connect } from 'frontity';
import { Container, Row, Col } from 'react-bootstrap';
import TopNav from '../navigation/top-nav';
import Hero from '../hero';
import ProjectSnippet from './project-snippet';
import JoinUsBreak from '../join-us-break';
import Footer from '../footer';

const overviewText = 'We’re a group of individuals who are passionate about serving others. With each act of kindess, we can build a better world.';

const PageProjects = ({ state }) => (
    <>
        <TopNav />
        <Hero
            title="Our Projects"
            subtitle="Leadership. Networking Kindness. Service."
        />

        <section>
            <Container>
                <h3 className="py-4 px-5">{overviewText}</h3>

                <Row className="pb-4">
                    {state.theme.projects.map((project) => (
                        <Col lg={4} md={6} key={project.name}>
                            <ProjectSnippet project={project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

        <JoinUsBreak />
        <Footer />
    </>
);

export default connect(PageProjects);
