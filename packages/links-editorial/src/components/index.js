import React from 'react';
import {
    Global, css, connect, styled, Head,
} from 'frontity';
import Title from './title';

const Theme = ({ state }) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);

    return (
        <>
            <Title />
            <Head>
                <meta name="description" content={state.frontity.description} />
                <html lang="en" />
            </Head>

            <Global styles={globalStyles} />
        </>
    );
};

export default connect(Theme);

const globalStyles = css`
  
`;
