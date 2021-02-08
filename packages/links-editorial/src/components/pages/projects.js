import React from 'react';
import { connect } from 'frontity';
import { Container } from 'react-bootstrap';
import TopNav from '../navigation/top-nav';
import Hero from '../hero';
import JoinUsBreak from '../join-us-break';
import Footer from '../footer';
import ProjectList from '../projects/project-list';

const overviewText = 'We’re a group of individuals who are passionate about serving others. With each act of kindess, we can build a better world.';

const PageProjects = () => (
    <>
        <TopNav />
        <Hero
            title="Our Projects"
            subtitle="Leadership. Networking Kindness. Service."
        />

        <section>
            <Container>
                <h3 className="py-4">{overviewText}</h3>
                <ProjectList />
            </Container>
        </section>

        <JoinUsBreak />
        <Footer />
    </>
);

export default connect(PageProjects);
