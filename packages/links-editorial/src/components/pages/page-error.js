import React from 'react';
import { connect, styled } from 'frontity';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import Footer from '../footer';
import TopNav from '../navigation/top-nav';
import { colorSecondaryGray } from '../../main-vars';

const Page404 = ({ state, actions }) => {
    const onHome = () => {
        if (state.theme.isMenuOpen) {
            actions.theme.closeMenu();
        }

        actions.router.set('/');
    };

    return (
        <>
            <TopNav />
            <ErrorJumbotron>
                <Container>
                    <h1 className="display-2">Hmmmm...</h1>
                    <h2 className="h2">We can&apos;t find the page you are looking for (404).</h2>
                    <HomeButton variant="secondary" onClick={onHome}><h4>Go to Homepage</h4></HomeButton>
                </Container>
            </ErrorJumbotron>

            <Footer />
        </>
    );
};

const ErrorJumbotron = styled(Jumbotron)`
    min-height: 100vh;
    margin-bottom: 0;
    display: flex;
    align-items: center;
`;

const HomeButton = styled(Button)`
    margin-top: 4rem;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 15%/50%;
    background-color: ${colorSecondaryGray};
    border: none;
  
    h4 {
      color: black;
      margin: 0;
    }
`;

export default connect(Page404);
