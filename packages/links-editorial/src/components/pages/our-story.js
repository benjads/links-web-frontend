import React from 'react';
import { connect } from 'frontity';
import Section from '../section';
import Hero from '../hero';
import TopNav from '../navigation/top-nav';

const PageOurStory = () => (
    <>
        <TopNav />
        <Hero
            title="Our Story"
            subtitle="Leadership. Networking Kindness. Service."
        />
        <Section
            title="We are LINKS"
            desc="Our story"
            ctaUrl="#"
            ctaText="Discover Our Story"
        />
    </>
);

export default connect(PageOurStory);
