import React from 'react';
import { connect, styled } from 'frontity';
import {
    Col, Container, Form, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { colorSecondaryGray } from '../main-vars';

const JoinUsBreak = () => (
    <BreakSection>
        <Container>
            <Form>
                <Form.Row className="align-items-center">
                    <Col lg={3}>
                        <h2>Get Connected</h2>
                        <p>Stay in the know about events, updates, and more.</p>
                    </Col>
                    <Col lg={4}>
                        <RoundedInput type="text" placeholder="Name" />
                    </Col>
                    <Col lg={4}>
                        <RoundedInput type="email" placeholder="Email" />
                    </Col>
                    <Col lg={1}>
                        <SubmitButton type="submit" variant="primary">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </SubmitButton>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
    </BreakSection>
);

const BreakSection = styled.section`
    background-color: ${colorSecondaryGray};
    padding: 3rem 0 3rem 0;
`;

const RoundedInput = styled(Form.Control)`
    border-radius: 8%/60%;
    height: 3rem;
    color: black;
    padding: 0 1.5rem 0 1.5rem;
  
    :focus::placeholder {
      color: transparent;
    }
`;

const SubmitButton = styled(Button)`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
`;

export default connect(JoinUsBreak);
