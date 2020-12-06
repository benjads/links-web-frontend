import React from 'react';
import { connect } from 'frontity';
import Section from '../section';
import UpcomingEvents from '../upcoming-events/upcoming-events';

const clubDesc = 'We develop meaningful connections between our club members '
    + 'and within our communities through '
    + 'Leadership, Innovation, Networking, Kindness, and Service.';

const lipsum = 'As aut explaborit perfera tisciur autem harume cusciendic temporio. '
    + 'Ecuptis re officiu rionser ferspe plicim ium sum a venisi aut quod.';

const PageHome = () => (
    <div>
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
    </div>
);

export default connect(PageHome);
