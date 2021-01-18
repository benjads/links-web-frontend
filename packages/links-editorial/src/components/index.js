import React from 'react';
import {
    Global, css, connect, Head,
} from 'frontity';
import Switch from '@frontity/components/switch';
import bootstrapCss from '../main.css';
import Title from './title';
import Loading from './loading';
import { fontHeadings, fontSansSerif } from '../main-vars';
import PageError from './pages/page-error';
import PageHome from './pages/home';
import PageOurStory from './pages/our-story';
import PageProjects from './pages/projects';

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
                <PageHome when={data.isHome} />
                <PageOurStory when={data.isOurStory} />
                <PageProjects when={data.isProjects} />
                <PageError when={data.isError} />
            </Switch>
        </>
    );
};

export default connect(Theme);

const globalStyles = css`
    .font-ss {
        font-family: ${fontSansSerif};
    }
  
    .font-heading {
        font-family: ${fontHeadings};
    }
`;
