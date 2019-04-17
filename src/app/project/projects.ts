import { StandaloneProject } from '../models/standalone-project';

export const projects: StandaloneProject[] = [
    {
        slug: 'rtb',
        title: 'Team Raise the Bar',
        img: 'https://developer.att.com/wp-content/uploads/2016/12/hack-finalist-raise-the-bar-sm.png',
        dates: '9/2016 - 1/2017',
        awards: [
            {
                award: 'Third Place National Finalist',
                from: 'AT&T Hackathon Invitational',
                date: '2018',
                of: '20 teams (winners of other hackathons) selected nationally'
            },
            {
                award: 'Best IoT Solution Overall',
                from: 'AT&T Notre Dame Hackathon',
                date: '2017',
                of: '16 teams'
            },
        ],
        shortDesc: 'Developed an application for Android that interfaced with a smart' +
        ' weight bar (TI SensorTag) and calculated reps and other statistics',
        desc: 'My freshman year I attended the AT&T Hackathon at Notre Dame and pitched myself as being such, but already knowing Android and excited to develop something cool. I met two other students and an data scientist living in the area. The data scientist had an idea of making a kind of weight bar that tracks your reps, and since there was such a heavy emphasis on IoT event I came up with our \'smart\' weightbar solution.',
        outcomes: 'While we intended to use the TI Sensor Tag that was provided to us at the event, my inexperience with Bluetooth Low Energy made it too difficult and so instead we connected two phones directly over Bluetooth, one serving as the user\'s device and the other connected to the weightbar. With this design that could track the number of reps a user did via PCA (Principal Component Analysis) and how good the form was, we won Best IoT solution. This then qualified us to enter into another competition, for which I improved the application to work with the Sensor Tag properly, and we recorded a video. We were then one of four teams then to be invited to Las Vegas for the AT&T Hackathon Invitational, for which I improved the app to have a backend API that would allow for gym owners to see their usage. We then won $5000 and third place.',
        technologies: ['Android', 'Bluetooth Low Energy', 'PHP'],
        links: [
            {
                link: 'https://github.com/johnameyer/rtb-android-client',
                type: 'github'
            },
            'https://developer.att.com/blog/hackathon-invitational-raise-the-bar',
            'https://developer.att.com/blog/notre-dame-hackathon-winners-2016',
            'https://developer.att.com/blog/hackathon-invitational-finalists',
            'https://developer.att.com/blog/2017-summit-challenge-winners'
        ],
        hackathon: true
    },
    {
        slug: 'rasduino',
        title: 'Rasduino',
        dates: '11/2018',
        awards: [],
        shortDesc: '\'Mood\' music playlist generator based on live environmental conditions',
        desc: '',
        technologies: ['Android', 'Raspberry Pi', 'NodeRed', 'Spotify API'],
        links: [
            {
                link: 'https://github.com/johnameyer/rasduino',
                type: 'github'
            }
        ],
        hackathon: true
    },
    {
        slug: 'reach',
        title: 'Reach',
        dates: '2/2017',
        awards: [{
            award: 'Third Place',
            from: 'Startup Weekend',
            date: '2017',
            of: ''
        }],
        shortDesc: 'Live shareable contact cards that follow you wherever you go',
        desc: '',
        technologies: ['Android', 'Flask'],
        startup: true
    },
    {
        slug: 'dunne',
        title: 'Dunne Hall Website',
        dates: '',
        img: '/assets/dunne-website.png',
        awards: [],
        shortDesc: 'Official website of Dunne Hall, the newest all-mens dorm on Notre Dame\'s campus',
        desc: '',
        technologies: ['PHP', 'Bootstrap'],
        links: [
            {
                link: 'https://github.com/johnameyer/dunne-hall-website',
                type: 'github'
            },
            {
                link: 'https://dunnehall.com',
                type: 'chrome'
            }
        ],
        live: true
    },
    {
        slug: 'engage',
        title: 'Engage',
        dates: '',
        img: '/assets/ionic.png',
        awards: [],
        shortDesc: 'Project started at the Mobile Computing Lab with the intention of increasing public awareness'
        + 'of new technology in ones\' area',
        desc: '',
        technologies: ['Ionic', 'Angular', 'Typescript', 'Firebase'],
        links: [
            {
                link: 'https://github.com/ndmobilecomplab/Engage',
                type: 'github'
            }
        ]
    },
    {
        slug: 'cdmc',
        title: 'Cincinnati Dance and Movement Center Website',
        dates: '8/2018',
        img: '/assets/cdmc-website.png',
        awards: [],
        shortDesc: 'Freelance web project featuring a class registration mechanic',
        desc: '',
        technologies: ['PHP', 'MySQL', 'PayPal'],
        links: [
            {
                link: 'https://github.com/johnameyer/cincinnati-dance-website',
                type: 'github'
            },
            {
                link: 'https://cincinnatidance.com',
                type: 'chrome'
            }
        ],
        live: true
    },
    {
        slug: 'fluffle',
        title: 'Fluffle',
        dates: '',
        awards: [],
        shortDesc: 'Smart bed application that detects seizures',
        desc: '',
        technologies: [],
        hackathon: true
    },
    {
        slug: 'battuta',
        title: 'Battuta',
        dates: '',
        awards: [],
        shortDesc: 'Web project / startup concept consisting of "tour videos" placed on the map',
        desc: '',
        technologies: ['PHP', 'Javascript', 'Google Maps API', 'Youtube API'],
        links: [
            {
                link: 'https://github.com/johnameyer/battuta-web',
                type: 'github'
            }
        ],
        startup: true
    },
    {
        slug: 'sri',
        title: 'Science Research Institute',
        dates: '',
        awards: [],
        shortDesc: 'Research project generating a color-based 3-D controller',
        desc: '',
        technologies: ['Java', 'OpenCV']
    },
    {
        slug: 'lucy',
        title: 'Lucy',
        dates: '2/2018',
        awards: [{
            award: 'Second Place',
            from: 'Startup Weekend',
            date: '2018'
        }],
        shortDesc: 'Prototype software for a gig economy centered around recurring jobs like lawn care and grocery pickup',
        desc: '',
        technologies: [],
        startup: true
    },
    {
        slug: 'ndht',
        title: 'Notre Dame Dining Hall Tracker',
        dates: '2017 - 2018',
        awards: [],
        shortDesc: 'Android client giving users an easier way to see what items are at the dining hall on a given day',
        desc: '',
        technologies: ['Java', 'Android']
    },
    {
        slug: 'lab',
        title: 'Labyrinthine',
        dates: '2013 - 2015',
        awards: [],
        shortDesc: 'My first major project, a Tile-based Roguelike built as a Java Desktop Application',
        desc: '',
        technologies: ['Java', 'Swing']
    },
];
