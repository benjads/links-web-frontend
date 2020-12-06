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
        },
    },
    actions: {
        theme: {
        },
    },
    libraries: {
        html2react: {
            processors: [image, iframe, link],
        },
    },
};

export default editorialTheme;
