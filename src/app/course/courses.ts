import { Course } from '../models/course';

export const courses: Course[] = [
    {
        subj: 'ACMS',
        num: 10145,
        name: 'Stats for Business and Econ I',
        hidden: true
    },
    {
        subj: 'CHEM',
        num: 10171,
        name: 'Intro to Chemical Principles',
        hidden: true
    },
    {
        subj: 'ECON',
        num: 10010,
        name: 'Principles of Microeconomics',
        hidden: true
    },
    {
        subj: 'ECON',
        num: 10020,
        name: 'Principles of Macroeconomics',
        hidden: true
    },
    {
        subj: 'EG',
        num: 10111,
        name: 'Intro to Engineering Systems I',
        hidden: true
    },
    {
        subj: 'FYS',
        num: 10101,
        name: 'Moreau First Year Experience',
        hidden: true
    },
    {
        subj: 'MATH',
        num: 10550,
        name: 'Calculus I',
        hidden: true
    },
    {
        subj: 'MATH',
        num: 10560,
        name: 'Calculus II',
        hidden: true
    },
    {
        subj: 'MATH',
        num: 20550,
        name: 'Calculus III',
        hidden: true
    },
    {
        subj: 'PHYS',
        num: 10091,
        name: 'Principles of Physics I',
        hidden: true
    },
    {
        subj: 'PHYS',
        num: 10093,
        name: 'General Physics I',
        hidden: true
    },
    {
        subj: 'PHYS',
        num: 10094,
        name: 'General Physics II',
        hidden: true
    },
    {
        subj: 'POLS',
        num: 10098,
        name: 'American Politics',
        hidden: true
    },
    {
        subj: 'THEO',
        num: 13183,
        name: 'Theology University Seminar',
        hidden: true
    },
    {
        subj: 'ACMS',
        num: 30440,
        name: 'Probability and Statistics',
        hidden: true
    },
    {
        subj: 'EG',
        num: 10112,
        name: 'Intro to Engineering Systems II',
        desc: 'The second of a two-course sequence intended to continue the introduction of first-year intents to the engineering \
disciplines. Multidisciplinary projects are used to illustrate the application of engineering modeling, analysis, and design principles \
to solve a variety of practical problems. The projects are intended to span areas of interest in all departments of the College of \
Engineering. Structured programming and software skills are further developed. Spring.',
        primaryLang: 'Matlab',
        semester: ['Spring', 2017],
        projects: [
            {
                title: 'GE Align Lighting',
                duration: 'Semester-Long',
                shortDesc: 'Software application built to drive a multi-channel colored lightbulb using Matlab and Arduino',
                desc: 'Our group was tasked with developing a model and prototype for a single energy-efficient, color-tunable LED \
light bulb capable of producing both the energizing effect of the GE Align AM bulb and the soothing effect of the GE Align PM bulb. \
A combined AM/PM bulb is easier for customers to install and use, and enables them to manage their circadian rhythms more effectively.',
                technologies: ['Matlab', 'Arduino'],
                imgs: ['/assets/GE-Align.png'],
                outcomes: 'Developed an application that would allow a user to manually specify the hue they desired the bulb to show, \
as well as set a desired wake-up and bedtime which our model would then appropriately change to simulate the AM and PM bulbs based on \
the time of day. We had developed a linear model matching each channel of our bulb to coordinates in the CIE color space using provided \
color matching functions. Our system then powered an Arduino to appropriately modulate (PWM) the desired channel to give the bulb a \
certain hue and brightness',
                links: [
                    {
                        link: 'https://www.youtube.com/watch?v=PaCzTv-gPG4',
                        type: 'youtube',
                        description: 'Final video presentation of our project.'
                    }
                ]
            }
        ]
    },
    {
        subj: 'FYS',
        num: 10102,
        name: 'Moreau First Year Experience',
        hidden: true
    },
    {
        subj: 'MATH',
        num: 20580,
        name: 'Intro Linear Alg and Diff Eqtn',
        hidden: true
    },
    {
        subj: 'WR',
        num: 13300,
        name: 'Multimedia Writing & Rhetoric',
        hidden: true
    },
    {
        subj: 'CSE',
        num: 20110,
        name: 'Discrete Mathematics',
        desc: 'Introduction to mathematical techniques fundamental to computer engineering and computer science. Topics: mathematical \
logic, induction, set theory, relations, functions, recursion, recurrence relations, introduction to asymptotic analysis, algebraic \
structures, graphs, and machine computation.',
        semester: ['Fall', 2017]
    },
    {
        subj: 'CSE',
        num: 20221,
        name: 'Logic Design',
        desc: 'Boolean algebra and switching circuits, Karnaugh maps, design of combinational and of sequential logic networks, and \
sequential machines.',
        primaryLang: 'Verilog',
        semester: ['Fall', 2017],
        projects: [
            {
                title: 'Brok-man',
                duration: 'Final Project',
                shortDesc: 'Pac-Man-esque game implemented on a FPGA board using a keyboard and VGA monitor',
                desc: 'The goal behind the final project was to make an application for the Altera FPGA board in Verilog that also \
utilized a VGA connection to a screen as well as a keyboard input. We eventually decided to make a game because it best fit these \
goals and seemed entertaining.',
                outcomes: 'In the end, we implemented Brok-Man, a clone of Pac-Man named after our professor. As seen in the video, \
one can move the character around the level, avoiding the ghosts while picking up points along the way.',
                technologies: ['Verilog'],
                links: [
                    {
                        link: 'https://www.youtube.com/watch?v=cSL-TNYXvBs',
                        description: '',
                        type: 'youtube'
                    }
                ]
            }
        ]
    },
    {
        subj: 'CSE',
        num: 20311,
        name: 'Fundamentals of Computing',
        desc: 'This is the first part of a two-course computer programming sequence, intended primarily for computer science and \
computer engineering majors. It introduces fundamental concepts and principles of computer science, from formulating a problem and \
analyzing it conceptually, to designing, implementing, and testing a program on a computer. Using data and procedural abstractions as \
basic design principles for programs, students learn to define basic data structures, such as lists and trees, and to apply various \
algorithms for operating on them. The course also introduces object-oriented methods.',
        primaryLang: 'C++',
        semester: ['Fall', 2017],
        projects: [
            {
                title: 'Untitled Game',
                duration: 'Final Project',
                technologies: ['C++'],
                shortDesc: 'Developed on my own an implementation of Pac-Man more similar to the original game using C++ and a simple \
graphics library',
                desc: ''
            }
        ]
    },
    {
        subj: 'EG',
        num: 40421,
        name: 'Integrated EG and Bus. Fund.',
        hidden: true,
        desc: 'The course is designed to improve the effectiveness of engineers working in corporations by teaching how and why \
businesses operate. Subjects covered include business financial reporting, business plans, the development processes, project \
management, the supply chain, and a history of quality topics. Numerous guest speakers are utilized to give the students exposure to \
successful business executives and reinforce the business processes covered in class. Fall.',
        semester: ['Fall', 2017]
    },
    {
        subj: 'PHIL',
        num: 10111,
        name: 'God and the Good Life',
        hidden: true
    },
    {
        subj: 'CSE',
        num: 20289,
        name: 'Systems Programming',
        desc: 'Systems Programming is a core Computer Science course that explores the fundamentals of computing systems. This course \
introduces students to the Unix programming environment where they will explore numerical representation, memory management, system \
calls, data structures, networking, and concurrency. Examining these topics will enable students to become familiar and comfortable \
with the lower level aspects of computing, while providing the foundation for further study in subsequent systems courses such as \
computer architecture and operating systems.',
        primaryLang: 'Python',
        semester: ['Spring', 2018]
    },
    {
        subj: 'CSE',
        num: 20312,
        name: 'Data Structures',
        desc: 'This is the second part of a two-course introduction-to-computing sequence intended for Computer Science and Computer \
Engineering majors. This course deepens and broadens student exposure to imperative and object-oriented programming and data \
structures. Topics covered include modularity, specification, data abstraction, classes and objects, genericity, inheritance. This \
course will focus these topics on design and use of elementary data structures such as lists, stacks, queues, and trees, as well as \
advanced techniques such as divide-and-conquer, sorting, searching and graph algorithms. More advanced data structures such as priority \
queues and search trees will also be covered.',
        primaryLang: 'C++',
        semester: ['Spring', 2018],
        projects: [
            {
                title: 'Hungry Leprechaun',
                duration: 'Final Project',
                technologies: ['PHP', 'C++', 'Bootstrap', 'Google Maps'],
                shortDesc: 'Implemented a location-based searh engine finding nearby restaurants that meet certain criteria',
                desc: 'The project goal was to develop an application using an interesting (not discussed in class) data structure. We chose to use a kd-tree implementation to easily manipulate locational data',
                outcomes: 'We successfully developed an application that allows you to query restaurants around Notre Dame\'s campus, finding those closest to you, and plotting them on a map',
                links: ['https://github.com/lukesonggg/HungryLeprechaun']
            }
        ]
    },
    {
        subj: 'CSE',
        num: 30321,
        name: 'Computer Architecture',
        desc: 'Introduction to basic architectural concepts that are present in current scalar machines, together with an introduction \
to assembly language programming, computer arithmetic, and performance evaluation. Commercial computer-aided-design software is used to \
deepen the student\'s understanding of the top-down processor design methodology. MIPS-based assembly language will be used.',
        semester: ['Spring', 2018]
    },
    {
        subj: 'EG',
        num: 40422,
        name: 'Adv. Topics: Intergr. EG & Bus',
        hidden: true,
        desc: 'The second course in the sequence integrates the elements taught in the fundamentals course. Subjects covered include a \
team-oriented Web-based business simulation exercise, management, effective communications, and a review of leading-edge trends in \
modern corporations. Spring.',
        semester: ['Spring', 2018]
    },
    {
        subj: 'THEO',
        num: 20260,
        name: 'The Trinity',
        hidden: true
    },
    {
        subj: 'CSE',
        num: 30246,
        name: 'Database Concepts',
        desc: 'Effective techniques in managing, retrieving and updating information from a database system. Focusing         primarily on \
relational databases, the course presents the entity-relationship model, query processing, and normalization. Topics such as relational \
calculus and algebra, integrity constraints, distributed databases, and data security will also be discussed. A final project will \
consist of the design and the implementation of a database system with a Web interface.',
        primaryLang: 'PHP',
        semester: ['Fall', 2018],
        projects: [{
            title: 'Breaddit',
            duration: 'Semester-Long',
            shortDesc: 'Our databases project was to create a better version of Reddit that we naturally called \'Breaddit\'',
            desc: 'Our two primary goals for the project were to: 1) remove images that were posted multiple times and link their tags together, and 2) to recommend posts/memes to the user based on their interestes and on the interests of similar people.',
            challenge: 'The most interesting challenge I faced was creating a MYSQL query that calculated how interested a user might be in a particular post based on the post\'s tags and based on how in-line those are with that user\'s interests, and similar user\'s interests.',
            technologies: ['PHP', 'MySQL'],
            links: ['https://github.com/samanthaccorn/reddit_data_processing'],
            imgs: ['/assets/screenshots/breaddit.png'],
            cardImg: '/assets/card/breaddit.png'
        }]
    },
    {
        subj: 'CSE',
        num: 30264,
        name: 'Computer Networks',
        desc: 'This course introduces students to fundamental topics on the principles, design, implementation, and performance of \
computer networks. Topics include: Internet architecture, protocols, socket programming, congestion control, switching and routing, \
local area networks, mobile and ad-hoc networks, network security, the end-to-end arguments and resource allocation.',
        primaryLang: 'C',
        semester: ['Fall', 2018],
        /*
        projects: [{
            title: 'Chat Client-Server',
            shortDesc: 'Implementation of a basic client-server application allowing for users to log in and chat with others both through private and public messages.',
            desc: 'Client-Server application written in C++ using TCP allowing for users to communicate with each other through private and public messages.',
            links: ['https://web.archive.org/web/20200528022244/https://www3.nd.edu/~dwang5/courses/fall18/programming/prog3.html'],
            technologies: ['C++', 'pthread']
        },{
            title: 'FTP Client-Server',
            shortDesc: 'Basic FTP Client-Server written in C allowing for users to upload, download, and explore files on a remote host.',
            desc: 'Basic FTP Client-Server written in C allowing for users to upload, download, and explore files on a remote host.',
            links: ['https://web.archive.org/web/20200528022248/https://www3.nd.edu/~dwang5/courses/fall18/programming/prog2.html'],
            technologies: ['C']
        }, {
            title: 'Networked Pong Game',
            shortDesc: 'Modification of a Pong implementation to support playing against a remote player.',
            desc: 'Modification of a Pong implementation to support playing against a remote player.',
            technologies: ['C'],
            links: ['https://web.archive.org/web/20200528022254/https://www3.nd.edu/~dwang5/courses/fall18/programming/prog4.html']
        }],
        */
        links: ['https://web.archive.org/web/20200528022223/https://www3.nd.edu/~dwang5/courses/fall18/']
    },
    {
        subj: 'CSE',
        num: 30332,
        name: 'Programming Paradigms',
        desc: 'Programming language overview: imperative and functional languages; logic programming. Scripting languages and tools. \
Development environments. Multilanguage interfacing. Case studies. Comprehensive programming practice using several languages.',
        primaryLang: '',
        semester: ['Fall', 2018],
        /*
        projects: [{

        }]
        */
    },
    {
        subj: 'CSE',
        num: 30872,
        name: 'Programming Challenges',
        desc: 'This course encourages the development of practical programming and problem solving skills through extensive practice \
and guided learning. The bulk of the class revolves around solving "brain-teaser" and puzzle-type problems that often appear in \
programming contests, online challenges, and job interviews. Topics covered in this course include: performing I/O, processing strings, \
using data structures, performing searching and sorting, utilizing recursion, manipulating graphs, and applying advanced algorithmic \
techniques such as dynamic programming. Additionally, basic software engineering practices such as debugging, testing, and source code \
management will be utilized throughout the course.',
        primaryLang: 'Java',
        semester: ['Fall', 2018]
    },
    {
        subj: 'CSE',
        num: 40923,
        name: 'Case Studies - Computer-Based Entrepreneurship',
        desc: 'The purpose of this course is to Inform, Introduce and (hopefully) Inspire you. You will become Informed about \
 computing-based entrepreneurship case studies across a wide variety of areas: computer software, computer hardware, healthcare \
 technologies, databases, web services, data analytics and more. You will also become Informed about different aspects of the \
 entrepreneurship challenge. You will be Introduced to guest speakers who are, or who have been, principals in developing technology, \
 founding companies, running companies, selecting technologies for venture capital investment, etc. As a result, you will hopefully be \
Inspired to consider pursuing computing-based entrepreneurship opportunity.',
        primaryLang: '',
        semester: ['Fall', 2018]
    },
    {
        subj: 'CSE',
        num: 48901,
        name: 'Undergraduate Research',
        hidden: true
    },
    {
        subj: 'CSE',
        num: 34151,
        name: 'Theory of Computing',
        desc: 'Introduction to formal languages and automata, computability theory, and complexity theory with the goal of developing \
 understanding of the power and limits of different computational models. Topics covered include: regular languages and finite automata; \
 context-free grammars and pushdown automata; Turing machines; undecidable languages; the classes P and NP; NP completeness.',
        primaryLang: '',
        semester: ['Spring', 2019]
    },
    {
        subj: 'CSE',
        num: 34341,
        name: 'Operating Systems-SV',
        desc: 'Introduction to OS: OS Structure, Hardware features and OS. Processes: Independent and Co-operative processes, \
Synchonisation Mechanisms, Deadlocks and Starvation. Memory Management: Binding and Relocation, Memory Organisations (fixed and \
variable partitions), Paging Technique, Segmentation Technique, Virtual Memory. File Management: File System structures, Files, \
Directories, File System Implementation. Introduction to Security and Protection: Basic Issues, Security Problem, Authentication, \
Encryption, Protection Problem, Trusted Systems. Case Studies: Unix, WinNT.',
        primaryLang: 'C',
        semester: ['Spring', 2019]
    },
    {
        subj: 'CSE',
        num: 34794,
        name: 'Silicon Valley Internship',
        hidden: true
    },
    {
        subj: 'DESN',
        num: 24205,
        name: 'Design Thinking SVS Immersion',
        desc: 'Students will engage in the principles and methodology known as design thinking to identify problems and compelling \
solutions that lead to human-centered innovation.',
        semester: ['Spring', 2019]
    },
    {
        subj: 'PHIL',
        num: 24448,
        name: 'Tech & Innovation Ethics',
        hidden: true
    },
    {
        subj: 'CSE',
        num: 40175,
        desc: 'This course seeks to develop a solid foundation for reasoning about ethical, professional, and social issues \
that arise in the context of computer science and engineering. Emphasis is placed on identifying appropriate legal, \
professional and moral contexts and on applying sound critical thinking skills to a problem. Topics covered include \
professional codes of ethics, safety-critical systems, whistle blowing, privacy and surveillance, freedom of speech, \
intellectual property, and cross-cultural issues. This course relies heavily on case studies of real-world incidents.',
        name: 'Ethical and Professional Issues',
        semester: ['Fall', 2019]
    },
    {
        subj: 'CSE',
        num: 40113,
        name: 'Design/Analysis of Algorithms',
        desc: 'Techniques for designing efficient computer algorithms and for analyzing computational costs of algorithms. \
Common design strategies such as dynamic programming, divide-and-conquer, and Greedy methods. Problem-solving approaches \
such as sorting, searching, and selection; lower bounds; data structures; algorithms for graph problems; geometric \
problems; and other selected problems. Computationally intractable problems (NP-completeness).',
        semester: ['Fall', 2019]
    },
    {
        subj: 'CSE',
        num: 40243,
        name: 'Compilers and Language Design',
        desc: 'Compilers is a challenging and fun course for students who are planning a career in advanced software development. \
In this class, students will design and implement a complete compiler for a C-like language from top to bottom. The course brings \
together many different elements of computer science, ranging from the theoretical (formal grammar classes) to the very practical \
(x86 assembly language) with a pinch of software engineering in the middle. After completing the course, you will be able to write \
programs that manipulate computer languages in different ways, ranging from simple interactive calculators to programs that translate \
one language to another. Students completing the course may also experience some side effects: (1) You will learn how to use pointers \
really well. (2) You will gain experience in engineering a complex piece of software including revision control, testing, and \
evolution. (3) You will understand the C language inside and out, which will make you a better programmer all around.',
        primaryLang: 'C',
        projects: [{
            semester: ['Fall', 2019],
            duration: 'Semester-Long',
            title: 'B-Minor Compiler',
            shortDesc: 'A fully-fledged compiler for the language B-Minor, featuring type-checking and code generation.',
            desc: 'In the compilers course, we built up a compiler from the ground, creating a scanner, parser, typechecker, and code generator for the language B-Minor.',
            technologies: ['C', 'Flex', 'Bison'],
            links: [
                'https://web.archive.org/web/20200527201515/https://www3.nd.edu/~dthain/courses/cse40243/fall2019/bminor.html'
            ]
        }],
        links: [
            'https://web.archive.org/web/20200527201332/https://www3.nd.edu/~dthain/courses/cse40243/fall2019/',
            'https://web.archive.org/web/20200527201354/https://www3.nd.edu/~dthain/courses/cse40243/fall2019/syllabus.html'
        ],
        semester: ['Fall', 2019]
    },
    {
        name: 'Social Sensing / Cyber-Physical Systems',
        subj: 'CSE',
        num: 40437,
        desc: 'Online social media (e.g., Twitter, Facebook), smartphones, and ubiquitous internet connectivity have greatly \
facilitated data sharing at scale, allowing for a firehose of human and sensor observations to pour in about the physical world \
in real-time. This opens up unprecedented challenges and opportunities in the field of social sensing and cyber-physical systems \
where the goal is to efficiently organize the real-time data feeds and accurately reconstruct the "states of the world," both \
physical and social. This course offers students the opportunity to learn the theoretical foundations, state-of-the-art \
techniques, and hands-on experience in this exciting area. The topic of this class is timely due to the increasing interest \
in online social networks, big data, and human-in-the-loop systems, as well as the proliferation of computing artifacts that \
interact with or monitor the physical world. In particular, the class contains four main components: (i) the introduction to \
social sensing and cyber-physical systems; (ii) key technical challenges (e.g., big data analytics, system reliability, user \
mobility, energy, privacy, etc.); (iii) state-of-art techniques and systems (e.g., MapReduce/Hadoop, fact-finding, data cube, \
etc); (iv) emerging applications (smartphone-based crowdsensing, online social media sensing, participatory/opportunistic \
sensing, intelligent transportation, smart buildings, body area networks etc). The students will have the opportunities to work \
with real world social sensing and cyber-physical system problems.',
        hidden: false,
        links: [

        ],
        primaryLang: 'Python',
        // projects: [{
        //     title: 'Social Movie Recommender',
        //     duration: 'Semester-Long',
        //     shortDesc: 'A project to build a movie recommender based on user\'s past tweets and interests',
        //     desc: '',
        //     challenge: '',
        //     technologies: ['Python'],
        //     links: ['https://github.com/msalaman/movieRecommender'],
        //     imgs: [],
        //     cardImg: ''
        // }],
        semester: ['Spring', 2020]
    },
    {
        name: 'Open Source Software Dev.',
        subj: 'CSE',
        num: 40677,
        desc: 'Students will work as a team to construct a significant open source software product over the course of a semester. \
In addition to the software itself, students will develop the infrastructure necessary to sustain the software as part of an open \
source community, such as public web pages, documentation, discussion groups, bug tracking, and automated testing. Interested \
students should first form a small group of 4-6 students willing to work together, and then contact the instructor for permission \
to register.',
        hidden: false,
        links: [

        ],
        primaryLang: 'Typescript',
        projects: [{
            semester: ['Spring', 2020],
            title: 'WebTerminal',
            shortDesc: 'The hope of the WebTerminal project was to create a terminal like Jupyter that could be opened in the browser and be easier to use for new programmers.',
            desc: 'The WebTerminal project, done in the context of our open source projects course, was meant to be a larger project created with the intent to potentially allow external developers also come in and develop, and thus the project was more than the code at face value would suggest. The idea of the project was to create an application that can be opened in the web browser like Jupyter but instead is based on the terminal programmers use. The user installs and starts the Python client which links them to the browser side and gives them a unique code so that they can then enter commands.',
            technologies: ['Typescript', 'Python', 'Angular', 'Websockets'],
            links: [{
                link: 'https://github.com/danielle-galvao/web-terminal',
                type: 'github'
            }],
            imgs: ['/assets/screenshots/web-terminal/authentication.png', '/assets/screenshots/web-terminal/screenshot.png'],
            cardImg: '/assets/card/web-terminal.png'
        }],
        semester: ['Spring', 2020]
    },
    {
        name: 'Advanced Database Projects',
        subj: 'CSE',
        num: 40746,
        desc: 'Advanced topics in database concepts; the course\'s main goal is a major final project, where groups will compete for \
prizes and awards.',
        hidden: false,
        links: [

        ],
        primaryLang: 'SQL',
        projects: [{
            semester: ['Spring', 2020],
            title: 'tiNDer',
            shortDesc: 'An dating application for the discerning Notre Dame, Holy Cross, or Saint Mary\'s student providing a more laid-back environment than mainline dating apps.',
            desc: 'In the course we were meant to choose between the topics of restaurants and dating for the app we were making. We thought that creating a dating app tailored for the Notre Dame community would be a novel idea, but would allow us to get some experience with a level of complexity that doesn\'t normally come up in normal projects.',
            challenge: 'The greatest challenge for the two of us was, since we decided to push ourselves and use popular technologies we hadn\'t worked with yet, getting all the pieces to mesh together and dealing with the various issues that came up we hadn\'t experienced before.',
            technologies: ['SQL', 'OracleDB', 'Vue', 'Node', 'Express', 'Javascript', 'GraphQL', 'Websockets'],
            links: [{
                link: 'https://github.com/rkarim0598/not-tiNDer',
                type: 'github'
            }]
        }],
        semester: ['Spring', 2020]
    },
    {
        name: 'Game-Based AI Agents',
        subj: 'CSE',
        num: 40971,
        desc: 'This course seeks to develop an understanding of core topics in game-based artificial intelligence (AI) also \
commonly called bots. Emphasis is placed on exploring topics in game AI in practice using an open source bot for the popular \
real-time strategy video game StarCraft. Topics covered include agent pathfinding, resource management, task automation, \
developing scripted strategy playbooks, and applying heuristics for real-time decision making with incomplete information.',
        hidden: false,
        links: [

        ],
        primaryLang: 'Java',
        projects: [{
            semester: ['Spring', 2020],
            title: 'Settlers of BOTan',
            shortDesc: 'Bot developed for the game Settlers of Catan using the open-source Java \'JSettlers2\' implementation.',
            desc: 'Our team decided to implement a bot for the game Settlers of Catan since our team was all pretty familiar with the game and we thought it would be feasible to create a bot that performed reasonably well.',
            outcomes: 'The bot we were able to create by the end of the semester performs pretty well against a player, but tends to have problems in the late game against the built-in bot. Since that bot was built as the result of a PhD thesis, we are very happy with its performance.',
            links: [{
                link: 'https://github.com/sambattalio/settlers_of_botan',
                type: 'github'
            }],
            imgs: ['/assets/screenshots/settlers-of-botan/game-outcome.png'],
            technologies: ['Java']
        }],
        semester: ['Spring', 2020]
    },
    {
        name: 'Theory II',
        subj: 'MUS',
        num: 20002,
        desc: 'A systematic approach to the understanding and manipulation of the basic materials of music. Required of and \
intended for music majors and minors, but open to students with sufficient musical background.',
        hidden: true,
        semester: ['Spring', 2020]
    }
];
