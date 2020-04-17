import { StandaloneProject } from '../models/standalone-project';

export const projects: StandaloneProject[] = [
    {
        slug: 'rtb',
        title: 'Team Raise the Bar',
        cardImg: 'https://developer.att.com/wp-content/uploads/2016/12/hack-finalist-raise-the-bar-sm.png',
        startDate: 'Sept 2016',
        endDate: 'Jan 2017',
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
        cardImg: '/assets/card/rasduino.png',
        startDate: 'Nov 2018',
        endDate: 'Nov 2018',
        awards: [
            {
                award: 'Best IoT Solution',
                date: 'Nov 2018',
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
        startDate: 'Feb 2017',
        endDate: 'Feb 2017',
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
        startDate: 'Aug 2016',
        endDate: 'Jul 2019',
        cardImg: '/assets/card/dunne-website.png',
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
        live: true,
        imgs: [
            '/assets/screenshots/dunne/home.png',
            '/assets/screenshots/dunne/gallery.png',
            '/assets/screenshots/dunne/leaders.png'
        ]
    },
    {
        slug: 'engage',
        title: 'Engage',
        startDate: 'Aug 2018',
        endDate: 'Dec 2018',
        cardImg: '/assets/ionic.png',
        awards: [],
        shortDesc: 'Project started at the Mobile Computing Lab with the intention of increasing public awareness'
        + 'of new technology in ones\' area',
        desc: 'In the fall of 2019, I was invited to join Dr. Poellabauer\'s lab on a project of my choice. Since I had worked with both mobile and web applications quite a bit, I decided to join onto this project, an application intending to educate the general public about technologies being used in their area. The example we always used was that of drones - e.g. we should be able to see where the drones are in our local area and learn more about what their purpose is, so people are less afraid of the unknown. The grand vision too was that this platform would engage the public too through educational articles and events.',
        challenge: 'The primary challenge I faced was in that of making the website as live as possible. Since it was desired to have the live positions of drones plotted on the map, we opted to use Firebase\'s Realtime Database, which uses websockets to get live changes pushed from the server, rather than needing to poll. A difficulty here was mapping the basic callback function that Firebase has to the Observable model Angular uses, while making sure to clean up properly after detaching and subscribe only once. In the end, through creative use of the Observable constructor, share operator, and a dictionary.',
        outcomes: 'In the end, I implemented an application that allowed for a user to sign up or in through email and password or a Google account through Firebase Authentication, see the live positions of a subset of drones or other devices in the area, report invasive devices, and see events on a calendar that are happening in one\'s area.',
        technologies: ['Ionic', 'Angular', 'Typescript', 'Firebase'],
        links: [
            {
                link: 'https://github.com/ndmobilecomplab/Engage',
                type: 'github'
            }
        ],
        imgs: [
            '/assets/ionic.png'
        ]
    },
    {
        slug: 'cdmc',
        title: 'Cincinnati Dance and Movement Center Website',
        startDate: 'Aug 2018',
        endDate: 'Aug 2019',
        cardImg: '/assets/card/cdmc-website.png',
        awards: [],
        shortDesc: 'Freelance web project featuring a class registration mechanic',
        desc: 'Before the beginning of school in the summer, my brother and I were connected with our client through the alumni network of Miami (where my brother attends). Our client was concerned that her website looked too out of date and was scaring away customers because of that, and contracted us to build her a new site that additionally had the ability for students to register for their classes by paying a 25 dollar fee.',
        challenge: 'The primary challenge we had was not technical in nature, but instead it was one of communication. Almost all of our contact was done over phone and email as we were unable to meet in person at all. This was my first experience coordinating a remote project, and I had difficulty managing by brother and communicating to him that which was discussed and what his next task was, and as well we had problems with growing scope as the project was not fully communicated at first. Over time, we were able to resolve the problem by checking in often and making sure everyone was in the loop.',
        outcomes: 'In the end, we were able to implement a class listing and account system as requested, allowing for users to sign onto the website and pay for their classes. For the first year, we signed up over 100 students using our platform. We expect to continue to improve the platform next summer.',
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
        live: true,
        imgs: [
            '/assets/screenshots/cdmc/home.png',
            '/assets/screenshots/cdmc/class-category.png',
            '/assets/screenshots/cdmc/class.png',
            '/assets/screenshots/cdmc/payment.png'
        ]
    },
    {
        slug: 'fluffle',
        title: 'Fluffle',
        startDate: 'Oct 2017',
        endDate: 'Oct 2017',
        awards: [
            {
                award: '2nd Place Overall',
                date: 'Oct 2017',
                from: 'AT&T Notre Dame Hackathon'
            },
            {
                award: 'Best Use of IBM Bluemix',
                date: 'Oct 2017',
                from: 'AT&T Notre Dame Hackathon'
            }
        ],
        shortDesc: 'Smart bed application that detects seizures',
        desc: 'At the second hackathon I went to, they again had the TI SensorTag available and I was pitched another idea that I felt could merit its use - a smart bed that would automatically alert someone when it detected a seizure occuring.',
        outcomes: 'In addition to our application, we developed a backend using the NodeRed JS server platform, which handled the data submitted to the cloud and was responsible for using the Twilio platform to call a loved one if a seizure was detected - and then emergency services if the loved one did not answer. Our application won 2nd place best overall and the best use of IBM Bluemix.',
        technologies: ['Android', 'Bluetooth Low Energy', 'NodeRed'],
        hackathon: true
    },
    {
        slug: 'battuta',
        title: 'Battuta',
        awards: [],
        startDate: 'Mar 2018',
        endDate: 'Mar 2018',
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
        awards: [],
        startDate: 'May 2015',
        endDate: 'May 2016',
        shortDesc: 'Research project generating a color-based 3-D controller',
        desc: '',
        technologies: ['Java', 'OpenCV']
    },
    {
        slug: 'lucy',
        title: 'Lucy',
        startDate: 'Feb 2018',
        endDate: 'Feb 2018',
        awards: [{
            award: 'Second Place',
            from: 'Startup Weekend',
            date: 'Feb 2018'
        }],
        shortDesc: 'Prototype software for a gig economy centered around recurring jobs like lawn care and grocery pickup',
        desc: '',
        technologies: null,
        startup: true
    },
    {
        slug: 'ndht',
        title: 'Notre Dame Dining Hall Tracker',
        cardImg: '/assets/card/dining-hall-tracker.png',
        startDate: '2017',
        endDate: '2018',
        awards: [],
        shortDesc: 'Android client giving users an easier way to see what items are at the dining hall on a given day',
        desc: 'After being at Notre Dame for a semester, I rapidly discovered that the dining halls had different meal schedules on different days and I found a need to be alerted when my favorite items would be at the dining hall. Since I had worked with Android apps before a little bit, I thought it would be a good way to develop my Android skills.',
        challenge: 'One of the most interesting challenges I faced was trying to set up geofences, such that when you entered into the range of the dining hall, it would alert you of which of your favorites were at the dining hall.',
        outcomes: 'By the end of my time developing the application I had put it up on the Android Play store and given several demonstrations at the app fair Notre Dame held to showcase student app developers. I hope to revisit the app and improve it using new Android functionality in the future.',
        technologies: ['Java', 'Android'],
        imgs: [
            'image0.png',
            'image1.png',
            'image2.png',
            'image3.png',
            'image4.png',
            'image5.png',
            'image6.png',
            'image7.png',
            'image8.png'
        ].map(img => '/assets/screenshots/ndht/' + img)
    },
    {
        slug: 'lab',
        title: 'Labyrinthine',
        startDate: '2013',
        endDate: '2015',
        awards: [],
        shortDesc: 'My first major project, a Tile-based Roguelike built as a Java Desktop Application',
        desc: 'When I first started out learning Java, I figured that the easiest way to quickly get a lot of experience with all the various features of Java was to simply start by building an actual application with a GUI and learn the pieces as I went. At the time, I was well familiar with the genre of the Rogue-like and thought it would be the most straight-forward (as in dealing mostly with function rather than graphics) game that would allow me some complexity and room to have some fun.',
        challenge: 'The greatest challenge I faced was that of making the level / floor generator - the algorithm that generates the rooms and hallways that the player navigates through. I originally tried to generate all the rooms and then connect them all with straight hallways or hallways with a single bend using Prim\'s algorithm. However, this approach had the problem that sometimes the hallways would intersect and would not actually connect to the rooms. Eventually I moved to a different algorithm, wherein I would first generate the rooms, then generate a maze in all of the empty (non-room spaces), eventually connecting the rooms to the maze and then pruning the maze tree down to remove dead-ends.',
        outcomes: 'While I was initially successful in creating a working game that generated levels and allowed one to battle enemies, I started to work on several pieces at once that ended up breaking the application, which led to a rewrite of the code, which ended in a similar fashion as well. However, the project was successful in that I learned much about the core Java libraries and also learned a lesson about project management and organization.',
        technologies: ['Java', 'Swing']
    },
    {
        slug: 'cards',
        title: 'Can I Have That',
        startDate: '2017',
        endDate: 'Current',
        awards: [],
        shortDesc: 'Implementation of a card game my grandmother popularized in our family, currently for command line but other platforms coming soon',
        desc: 'At some point in 2017, since I had never done a significant project in Python and was feeling inspired to make an online version of my grandmother\'s card game like there are of so many other games, I decided to create a Python command line implementation of the game that users could play.',
        challenge: 'The greatest challenge I have faced so far has been making an artificial intelligence that can play the game as well as a human could. The game is fairly tricky for a human to play and this is also seen for the AI. I had never had any experience with making a game AI save for the limited experience I had from the Labyrinthine game. Finding the optimum strategy way to pick cards could be done by counting all the potential cards that could be obtained and finding the chance of victory for each, but counting cards is considered cheating for humans. The current, imperfect approach instead looks at the cards and tries to see how adding the card improves the AI\'s current standings',
        outcomes: 'Currently, one is able to play the game locally against several AI opponents, in the Python version, as well as the Typescript version I am migrating the codebase to. Future plans include making a networked version for command line, and a web (Websocket) and Electron interface.',
        technologies: ['Python', 'Typescript']
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
