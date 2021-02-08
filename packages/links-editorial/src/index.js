import image from '@frontity/html2react/processors/image';
import iframe from '@frontity/html2react/processors/iframe';
import link from '@frontity/html2react/processors/link';
import Theme from './components';

// noinspection JSUnusedGlobalSymbols
const editorialTheme = {
    name: 'links-editorial',
    roots: {
        theme: Theme,
    },
    state: {
        theme: {
            autoPrefetch: 'in-view',
            isMenuOpen: false,
            isNavVisible: false,
            projects: [],
            featuredProjects: ({ state }) => state.theme.projects.filter(
                (project) => parseInt(project.featured, 10),
            ),
            featuredProjectIndex: 0,
        },
    },
    actions: {
        theme: {
            init: ({ libraries }) => {
                libraries.source.handlers.push({
                    pattern: '/',
                    func: ({ state }) => {
                        state.source.data['/'].isHome = true;
                    },
                });
                libraries.source.handlers.push({
                    pattern: '/our-story/',
                    func: ({ state }) => {
                        state.source.data['/our-story/'].isOurStory = true;
                    },
                });
                libraries.source.handlers.push({
                    pattern: '/projects/',
                    func: ({ state }) => {
                        state.source.data['/projects/'].isProjects = true;
                    },
                });
            },
            openMenu: ({ state }) => {
                state.theme.isMenuOpen = true;
            },
            closeMenu: ({ state }) => {
                state.theme.isMenuOpen = false;
            },
            toggleMenu: ({ state }) => {
                state.theme.isMenuOpen = !state.theme.isMenuOpen;
            },
            updateNav: ({ state }) => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                state.theme.isNavVisible = scrollTop > 0;
            },
            setProjects: ({ state }) => (projects) => {
                state.theme.projects = projects;
            },
            setFeaturedProjectIndex: ({ state }) => (index) => {
                state.theme.featuredProjectIndex = index;
            },
            incrementFeaturedProjectIndex: ({ state }) => {
                state.theme.featuredProjectIndex += 1;

                if (state.theme.featuredProjectIndex >= state.theme.featuredProjects.length) {
                    state.theme.featuredProjectIndex = 0;
                }
            },
            decrementFeaturedProjectIndex: ({ state }) => {
                state.theme.featuredProjectIndex -= 1;

                if (state.theme.featuredProjectIndex < 0) {
                    state.theme.featuredProjectIndex = state.theme.featuredProjects.length - 1;
                }
            },
        },
    },
    libraries: {
        html2react: {
            processors: [image, iframe, link],
        },
    },
};

export default editorialTheme;
