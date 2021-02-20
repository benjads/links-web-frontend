import { Settings } from 'frontity/types';

const settings: Settings = {
    name: 'links-web-frontend',
    state: {
        frontity: {
            url: 'https://dev.wearelinks.org',
            title: 'LINKS Club',
            description: 'Help each other help the world.',
        },
    },
    packages: [
        {
            name: 'links-editorial',
        },
        {
            name: '@frontity/wp-source',
            state: {
                source: {
                    url: 'https://dev-content.wearelinks.org',
                    postTypes: [
                        {
                            type: 'project',
                            endpoint: 'project',
                            archive: '/project',
                        },
                    ],
                },
            },
        },
        '@frontity/tiny-router',
        '@frontity/html2react',
    ],
};

export default settings;
