import React from 'react';
import {
    Global, css, connect, Head,
} from 'frontity';
import Switch from '@frontity/components/switch';
import { config } from '@fortawesome/fontawesome-svg-core';
import faCss from '@fortawesome/fontawesome-svg-core/styles.css';
import bootstrapCss from '../static/css/main.css';
import Title from './title';
import Loading from './loading';
import { fontHeadings, fontSansSerif } from '../main-vars';
import PageError from './pages/page-error';
import PageHome from './pages/home';
import PageOurStory from './pages/our-story';
import PageProjects from './pages/projects';
import ProjectDetail from './pages/project-detail';

config.autoAddCss = false;

const ImportedStyles = () => (
    <>
        <Global styles={css(bootstrapCss)} />
        <Global styles={css(faCss)} />
    </>
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

            <ImportedStyles />
            <Global styles={globalStyles} />

            <Switch>
                <Loading when={data.isFetching} />
                <PageHome when={data.isHome} />
                <PageOurStory when={data.isOurStory} />
                <PageProjects when={data.isProjects} />
                <ProjectDetail when={data.isProject} />
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
