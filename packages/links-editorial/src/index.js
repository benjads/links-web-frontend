import image from '@frontity/html2react/processors/image';
import iframe from '@frontity/html2react/processors/iframe';
import link from '@frontity/html2react/processors/link';
import Theme from './components';

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
            projects: [
                {
                    name: 'Greeting Cards for Seniors',
                    desc: 'As aut explaborit perfera tisciur autem harume cusciendic temporio. Ecuptis re officiu rionser ferspe plicim ium sum a venisi aut quod. As aut explaborit perfera tisciur autem harume cusciendic temporio. Ecuptis re officiu rionser ferspe plicim ium sum a venisi aut quod.',
                    url: '/card-making',
                    img: 'https://www.fillmurray.com/600/600',
                    featured: true,
                },
                {
                    name: 'Food Drive',
                    desc: 'As aut explaborit perfera tisciur autem harume cusciendic temporio. Ecuptis re officiu rionser ferspe plicim ium sum a venisi aut quod. As aut explaborit perfera tisciur autem harume cusciendic temporio. Ecuptis re officiu rionser ferspe plicim ium sum a venisi aut quod.',
                    url: '/food-drive',
                    img: 'https://www.fillmurray.com/600/600',
                    featured: true,
                },
                {
                    name: 'Masks for Essential Workers',
                    desc: 'As aut explaborit perfera tisciur autem harume cusciendic temporio. Ecuptis re officiu rionser ferspe plicim ium sum a venisi aut quod. As aut explaborit perfera tisciur autem harume cusciendic temporio. Ecuptis re officiu rionser ferspe plicim ium sum a venisi aut quod.',
                    url: '/masks',
                    img: 'https://www.fillmurray.com/600/600',
                    featured: true,
                },
            ],
            featuredProjectIndex: 0,
        },
    },
    actions: {
        theme: {
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
            setFeaturedProjectIndex: ({ state }) => (index) => {
                state.theme.featuredProjectIndex = index;
            },
            incrementFeaturedProjectIndex: ({ state }) => {
                state.theme.featuredProjectIndex += 1;

                if (state.theme.featuredProjectIndex >= state.theme.projects.length) {
                    state.theme.featuredProjectIndex = 0;
                }
            },
            decrementFeaturedProjectIndex: ({ state }) => {
                state.theme.featuredProjectIndex -= 1;

                if (state.theme.featuredProjectIndex < 0) {
                    state.theme.featuredProjectIndex = state.theme.projects.length - 1;
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
