class Project {
    slug: string;
    title: string;
    cardImg?: string;
    dates: string;
    awards: Award[];
    shortDesc: string;
    desc: string;
    technologies: string[];
    github?: string;
    links?: string[];
    hackathon ? = false;
    startup ? = false;
}

class Award {
    award: string;
    from: string;
    date: string;
    of?: string;
}

export const projects: Project[] = [
    {
        slug: 'rtb',
        title: 'Team Raise the Bar',
        cardImg: 'https://developer.att.com/wp-content/uploads/2016/12/hack-finalist-raise-the-bar-sm.png',
        dates: '9/2016 - 1/2017',
        awards: [
            {
                award: 'Third Place National Finalist',
                from: 'AT&T Hackathon Invitational',
                date: '2017',
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
        desc: '',
        technologies: ['Android', 'Bluetooth Low Energy', 'PHP'],
        github: 'https://github.com/johnameyer/rtb-android-client',
        links: [
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
        github: 'https://github.com/johnameyer/rasduino',
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
        github: '',
        startup: true
    },
    {
        slug: 'dunne',
        title: 'Dunne Hall Website',
        dates: '',
        awards: [],
        shortDesc: 'Official website of Dunne Hall, the newest all-mens dorm on Notre Dame\'s campus',
        desc: '',
        technologies: ['PHP', 'Bootstrap'],
        github: 'https://github.com/johnameyer/dunne-hall-website'
    },
    {
        slug: 'engage',
        title: 'Engage',
        dates: '',
        awards: [],
        shortDesc: 'Project started at the Mobile Computing Lab with the intention of increasing public awareness'
        + 'of new technology in ones\' area',
        desc: '',
        technologies: ['Ionic', 'Angular', 'Typescript', 'Firebase'],
        github: 'https://github.com/ndmobilecomplab/Engage'
    },
    {
        slug: 'cdmc',
        title: 'Cincinnati Dance and Movement Center Website',
        dates: '8/2018',
        awards: [],
        shortDesc: 'Freelance web project featuring a class registration mechanic',
        desc: '',
        technologies: ['PHP', 'MySQL', 'PayPal'],
        github: 'https://github.com/johnameyer/cincinnati-dance-website'
    },
    {
        slug: 'fluffle',
        title: 'Fluffle',
        dates: '',
        awards: [],
        shortDesc: 'Smart bed application that detects seizures',
        desc: '',
        technologies: [],
        github: '',
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
        github: 'https://github.com/johnameyer/battuta-web',
        startup: true
    },
    {
        slug: 'sri',
        title: 'Science Research Institute',
        dates: '',
        awards: [],
        shortDesc: 'Research project generating a color-based 3-D controller',
        desc: '',
        technologies: ['Java', 'OpenCV'],
        github: ''
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
        github: '',
        startup: true
    },
    {
        slug: 'ndht',
        title: 'Notre Dame Dining Hall Tracker',
        dates: '2017 - 2018',
        awards: [],
        shortDesc: 'Android client giving users an easier way to see what items are at the dining hall on a given day',
        desc: '',
        technologies: ['Java', 'Android'],
        github: ''
    },
    {
        slug: 'lab',
        title: 'Labyrinthine',
        dates: '2013 - 2015',
        awards: [],
        shortDesc: 'My first major project, a Tile-based Roguelike built as a Java Desktop Application',
        desc: '',
        technologies: ['Java', 'Swing'],
        github: ''
    },
];
