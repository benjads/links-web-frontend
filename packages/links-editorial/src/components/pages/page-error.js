import React from 'react';
import { connect, styled } from 'frontity';
import { Container, Jumbotron } from 'react-bootstrap';
import Footer from '../footer';
import TopNav from '../navigation/top-nav';

const Page404 = () => (
    <>
        <TopNav />

        <ErrorJumbotron>
            <Container>
                <h1 className="display-2">Hmmmm...</h1>
                <h2 className="h2">We can&apos;t find the page you are looking for (404).</h2>
            </Container>
        </ErrorJumbotron>

        <Footer />
    </>
);

const ErrorJumbotron = styled(Jumbotron)`
    min-height: 100vh;
    margin-bottom: 0;
    display: flex;
    align-items: center;
`;

export default connect(Page404);
