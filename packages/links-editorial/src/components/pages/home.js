import React from 'react';
import { connect } from 'frontity';
import Section from '../section';
import UpcomingEvents from '../upcoming-events/upcoming-events';
import TopNav from '../top-nav';

const clubDesc = 'We develop meaningful connections between our club members '
    + 'and within our communities through '
    + 'Leadership, Innovation, Networking, Kindness, and Service.';

const lipsum = 'As aut explaborit perfera tisciur autem harume cusciendic temporio. '
    + 'Ecuptis re officiu rionser ferspe plicim ium sum a venisi aut quod.';

const PageHome = () => (
    <>
        <TopNav />
        <Section
            title="We are LINKS"
            desc={clubDesc}
            ctaUrl="#"
            ctaText="Discover Our Story"
        />
        <Section
            title="Upcoming Events"
            desc={lipsum}
            ctaUrl="#"
            ctaText="Discover Our Story"
            bg="#b58f66"
        >
            <UpcomingEvents />
        </Section>
    </>
);

export default connect(PageHome);
