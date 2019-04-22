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
        desc: 'My freshman year I attended the AT&T Hackathon at Notre Dame and pitched myself as being a freshman, but already knowing Android and excited to develop something cool. I met two other students and an data scientist living in the area. The data scientist had an idea of making a kind of weight bar that tracks your reps, and since there was such a heavy emphasis on IoT event I came up with our \'smart\' weightbar solution.',
        challenge: 'The primary issue I ran into while developing this application was the move from just streaming data off of the phone-as-an-accelerometer over Bluetooth, to the differently structured Bluetooth Low Energy data of multiple channels of mostly unknown data from the Sensor Tag. While there was a bevy of documentation, I was unable to integrate that knowledge into my code until I was able to see the open source application they had made.',
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
        awards: [
            {
                award: 'Best IoT Solution',
                date: '11/2018',
                from: 'Irish Hacks'
            }
        ],
        shortDesc: '\'Mood\' music playlist generator based on live environmental conditions',
        desc: 'At my third AT&T Hackathon, I regrettably had a concert to perform at Friday night so I missed coding the first night. However, upon arriving the next morning, I was able to find a team that also had just arrived. Together, we decided to go for the IoT approach yet again, using sensors provided to make a mood music recommender - an app that would take in live environmental conditions and design a playlist based on that. I was chiefly responsible for creating the backend that created the playlist, and the Android application that discovered the devices nearby and played the playlist.',
        challenge: 'Since we were not expecting to use a Raspberry Pi, the primary challenge that came up was that we had no way to interface with the Pi to get it set up with all the code we needed. We found a screen connected to the projector in the main hall that we were able to turn in on, but we were initially unable to find a USB keyboard. Thankfully, one of our professors was able to run and get one so that we were able to pull down our code.',
        outcomes: 'In the end, we were successfully able to demonstrate the environmental conditions being updated in our cloud application and that we could start a playlist built at the time of request that - as we thought - matched the conditions present with its inherent qualities.',
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
        desc: 'At my first Startup Weekend, I met a few students from the Notre Dame Esteem Program, who had a great idea but not much experience programming themselves. Together with two other developers, we built a Flask API that hosted all the contact information in MongoDB, and I made an Android application that would insert the cloud contacts into one\'s native local contacts and syncing occasionally. Our business plan was to sell as a service to universities, as college grads often change their email and address after leaving school, making it hard to get in touch for alumni fundraising purposes.',
        challenge: 'The primary challenge I faced was the integration of the server with the Android native platform. Since part of our pitch was for ease of use, we decided to create a contact provider as an account (like Google Contacts) instead of just having another application you would have to open. This ended up being a challenge as the documentation was again not as clear cut as it is for other more common Android development activities. Eventually, I was able to move forward by modifying the open source application they provided.',
        outcomes: 'Our application in the end allowed for one to create, update, and view their contact card online, where everyone it was shared with would also see those changes on their own device and have it be synced there.',
        technologies: ['Android', 'Flask', 'MongoDB'],
        startup: true
    },
    {
        slug: 'dunne',
        title: 'Dunne Hall Website',
        dates: '',
        img: '/assets/dunne-website.png',
        awards: [],
        shortDesc: 'Official website of Dunne Hall, the newest all-mens dorm on Notre Dame\'s campus',
        desc: 'As a member of the first class entering Dunne Hall, I thought it was a shame that our dorm could not be recognized for its greatness by the rest of the world. As such, I asked to become the Technology / Website commissioner so our greatness and the making of history could be witnessed by all the world. I have since served in this role since then.',
        challenge: 'The greatest challenge in building this website was my attempt to make it that other administrators and stakeholders in Dunne could update the content on the site without needing me to do a full re-push of the code. I was able to set up a system where an \'update\' request could be made that would download recent copies of Google Doc files and store them locally, with the site then parsing each to get a particular form.',
        outcomes: 'I built our website using PHP, which was the web language I was most familiar with at the time. Over the years, I added a mechanism to sync up the website with Google Docs so that non-technical members of the hall can update the various pages. As well, I am able to include the weekly newsletters so that parents can also see the weekly goings-on of the dorm.',
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
        technologies: ['Android', 'Bluetooth Low Energy'],
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
        technologies: null,
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

export const technologies: string[] = Array.from(new Set (
    projects.map(project => project.technologies) // no flatmap
    .filter(x => x)
    .reduce((arr: string[], value: string[]) => {
        value.forEach(x => arr.push(x));
        return arr;
    }, [])
));
