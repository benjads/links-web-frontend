import React from 'react';
import {
    Global, css, connect, Head,
} from 'frontity';
import Switch from '@frontity/components/switch';
import bootstrapCss from '../main.css';
import Title from './title';
import Loading from './loading';
import PageError from './page-error';
import PageHome from './pages/home';

const BootstrapStyles = () => (
    <Global styles={css(bootstrapCss)} />
);

const Theme = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <>
            <Title />
            <Head>
                <meta name="description" content={state.frontity.description} />
                <html lang="en" />
            </Head>

            <BootstrapStyles />
            <Global styles={globalStyles} />

            <Switch>
                <Loading when={data.isFetching} />
                <PageError when={data.isError} />
                <PageHome />
            </Switch>
        </>
    );
};

export default connect(Theme);

const globalStyles = css`
  
`;
