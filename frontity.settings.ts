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
            state: {
                theme: {
                    featuredEvents: [
                        {
                            name: 'Card Making',
                            desc: 'As aut explaborit perfera tisciur autem harume.',
                            date: 'December 1',
                            url: '/card-making',
                            img: 'https://www.fillmurray.com/600/400',
                        },
                        {
                            name: 'Monthly Meeting',
                            desc: 'As aut explaborit perfera tisciur autem harume.',
                            date: 'December 1',
                            url: '/monthly-meeting',
                            img: 'https://www.fillmurray.com/600/400',
                        },
                        {
                            name: 'Event Night',
                            desc: 'As aut explaborit perfera tisciur autem harume.',
                            date: 'December 1',
                            url: '/event-night',
                            img: 'https://www.fillmurray.com/600/400',
                        },
                    ],
                },
            },
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
