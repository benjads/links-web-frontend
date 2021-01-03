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
        },
    },
    libraries: {
        html2react: {
            processors: [image, iframe, link],
        },
    },
};

export default editorialTheme;
