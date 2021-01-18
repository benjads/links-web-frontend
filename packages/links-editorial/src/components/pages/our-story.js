import React from 'react';
import { connect, styled } from 'frontity';
import {
    Container, Row, Col, Card,
} from 'react-bootstrap';
import Hero from '../hero';
import TopNav from '../navigation/top-nav';
import JoinUsBreak from '../join-us-break';
import Footer from '../footer';

const clubDesc = 'Our club members were tired of the way traditional service clubs operated, so we did something about it. We are a network of individuals around the globe who meet virtually and strive to make a positive impact on our communities.';
const goals = 'We develop meaningful connections between our club members and within our communities through:';
const ipsum = 'As aut explaborit perfera tisciur autem harume cusciendic temporio. Ecuptis re officiu rionser ferspe plicim ium sum a venisi aut quod. As aut explaborit perfera tisciur autem harume cusciendic temporio. Ecuptis re officiu rionser ferspe plicim ium sum a venisi aut quod.';

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
            subtitle="Leadership. Networking Kindness. Service."
        />

        <section>
            <Container>
                <Row className="align-items-center">
                    <Col lg={8}>
                        <h1>Helping each other help the world.</h1>
                        <p className="pb-4">{clubDesc}</p>
                        <div>
                            <h5>{goals}</h5>
                            <ul className="list-unstyled">
                                <li>Leadership</li>
                                <li>Innovation</li>
                                <li>Networking</li>
                                <li>Kindness</li>
                                <li>Service</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <ActionsCard bg="primary" text="white">
                            <Card.Body>
                                <Card.Title className="text-center pb-2">What We Do:</Card.Title>
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
                    imgUrl="https://www.fillmurray.com/600/500"
                    title="How we're different."
                    desc={ipsum}
                />

                <ImagePair
                    imageLeft={false}
                    imgUrl="https://www.fillmurray.com/600/500"
                    title="Our Values."
                    desc={ipsum}
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
