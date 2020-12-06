import React from 'react';
import { connect } from 'frontity';
import { Row, Col } from 'react-bootstrap';
import EventSnippet from './event-snippet';

const UpcomingEvents = ({ state }) => (
    <Row className="justify-content-center">
        {state.theme.featuredEvents.map((event) => (
            <Col key={event.url} lg={4}>
                <EventSnippet event={event} />
            </Col>
        ))}
    </Row>
);

export default connect(UpcomingEvents);
