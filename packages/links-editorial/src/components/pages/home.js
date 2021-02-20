import React from 'react';
import { connect } from 'frontity';
import { colorSecondaryTeak, colorSecondaryWestar } from '../../main-vars';
import Section from '../section';
import UpcomingEvents from '../upcoming-events/upcoming-events';
import TopNav from '../navigation/top-nav';
import Hero from '../hero';
import Footer from '../footer';
import JoinUsBreak from '../join-us-break';
import FeaturedProjects from '../projects/featured-projects';

const clubDesc = 'We develop meaningful connections between our club members '
    + 'and within our communities through '
    + 'Leadership, Innovation, Networking, Kindness, and Service.';

const lipsum = 'As aut explaborit perfera tisciur autem harume cusciendic temporio. '
    + 'Ecuptis re officiu rionser ferspe plicim ium sum a venisi aut quod.';

const eventsDesc = 'Explore the good we\'re doing locally and globally and discover our upcoming service, social, and professional development events.';

const PageHome = () => (
    <>
        <TopNav hide />
        <Hero
            subtitle="Leadership. Innovation. Networking. Kindness. Service."
        />
        <Section
            title="We are LINKS"
            desc={clubDesc}
            ctaUrl="/our-story"
            ctaText="Discover Our Story"
        />
        <Section
            title="Featured Projects"
            desc={lipsum}
            ctaUrl="#"
            ctaText="Explore All Projects"
            bg={colorSecondaryTeak}
        >
            <FeaturedProjects />
        </Section>
        <Section
            title="Upcoming Events"
            desc={eventsDesc}
            ctaUrl="#"
            ctaText="View All Events"
            bg={colorSecondaryWestar}
        >
            <UpcomingEvents />
        </Section>
        <JoinUsBreak />
        <Footer />
    </>
);

export default connect(PageHome);
