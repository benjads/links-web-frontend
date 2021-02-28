import React from 'react';
import { connect, styled } from 'frontity';
import {
    Container, Row, Col, Card,
} from 'react-bootstrap';
import Hero from '../hero';
import TopNav from '../navigation/top-nav';
import JoinUsBreak from '../join-us-break';
import Footer from '../footer';
import ourStoryHeader from '../../static/images/our-story-header.jpg';
import ourStory from '../../static/images/our-story.jpg';
import meeting from '../../static/images/meeting.jpg';

const clubDesc = 'We are a group of young professionals who have an interest in bettering life for others and ourselves, focused on bringing together like-minded people across the globe.';
const mission = 'To develop meaningful connections among our club members and within our communities through leadership, innovation, networking, kindness, and service.';
const weBelieve = 'By working together, we can achieve, have fun, and create lasting change in the world.';

// noinspection JSUnusedGlobalSymbols
export const ourStoryHandler = {
    pattern: '/our-story/',
    func: ({ state }) => {
        state.source.data['/our-story/'].isOurStory = true;
    },
};

const PageOurStory = () => (
    <>
        <TopNav />
        <Hero
            title="Our Story"
            heroImage={ourStoryHeader}
        />

        <section>
            <Container>
                <Row className="align-items-center">
                    <Col lg={8}>
                        <h1>Helping each other help the world.</h1>
                        <p className="pb-4">{clubDesc}</p>
                    </Col>
                    <Col lg={4}>
                        <ActionsCard bg="primary" text="white">
                            <Card.Body>
                                <Card.Title className="pl-4 pb-2">What We Do:</Card.Title>
                                <Card.Text>
                                    <ActionsList>
                                        <li>Volunteer within senior living communities</li>
                                        <li>Promote education</li>
                                        <li>Lorem ipsum</li>
                                        <li>Lorem ipsum</li>
                                        <li>Lorem ipsum</li>
                                    </ActionsList>
                                </Card.Text>
                            </Card.Body>
                        </ActionsCard>
                    </Col>
                </Row>

                <ImagePair
                    imageLeft
                    imgUrl={ourStory}
                    title="We set out on a mission..."
                    desc={mission}
                />

                <ImagePair
                    imageLeft={false}
                    imgUrl={meeting}
                    title="We believe..."
                    desc={weBelieve}
                />
            </Container>
        </section>

        <JoinUsBreak />
        <Footer />
    </>
);

const ImagePair = ({
    imageLeft, imgUrl, title, desc,
}) => (
    <Row className="align-items-center my-5">
        {imageLeft
            && <PairImage imgUrl={imgUrl} title={title} />}
        <Col lg={7} className="px-5">
            <h1>{title}</h1>
            <p>{desc}</p>
        </Col>
        {!imageLeft
            && <PairImage imgUrl={imgUrl} title={title} />}
    </Row>
);

const PairImage = ({ imgUrl, title }) => (
    <Col lg={5}>
        <StyledPairImage className="img-fluid" src={imgUrl} alt={title} />
    </Col>
);

const StyledPairImage = styled.img`
    border-radius: 20%/20%
`;

const ActionsCard = styled(Card)`
    padding: 2rem 0 2rem 0;
    border-radius: 10%;
`;

const ActionsList = styled.ul`
    margin-bottom: 0;
  
    li {
        padding-bottom: 1rem;
    }
  
    li:last-child {
      padding-bottom: 0;
    }
`;

export default connect(PageOurStory);
