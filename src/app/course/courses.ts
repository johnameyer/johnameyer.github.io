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
        semester: 'Spring 2017',
        projects: [
            {
                title: 'GE Align Lighting',
                dates: 'Semester-long',
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
        semester: 'Fall 2017'
    },
    {
        subj: 'CSE',
        num: 20221,
        name: 'Logic Design',
        desc: 'Boolean algebra and switching circuits, Karnaugh maps, design of combinational and of sequential logic networks, and \
sequential machines.',
        primaryLang: 'Verilog',
        semester: 'Fall 2017',
        projects: [
            {
                title: 'Brok-man',
                dates: 'Final Project',
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
        semester: 'Fall 2017',
        projects: [
            {
                title: 'Final Project',
                dates: '',
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
        semester: 'Fall 2017'
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
        semester: 'Spring 2018'
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
        semester: 'Spring 2018',
        projects: [
            {
                title: 'Hungry Leprechaun',
                dates: '',
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
        semester: 'Spring 2018'
    },
    {
        subj: 'EG',
        num: 40422,
        name: 'Adv. Topics: Intergr. EG & Bus',
        hidden: true,
        desc: 'The second course in the sequence integrates the elements taught in the fundamentals course. Subjects covered include a \
team-oriented Web-based business simulation exercise, management, effective communications, and a review of leading-edge trends in \
modern corporations. Spring.',
        semester: 'Spring 2018'
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
        semester: 'Fall 2018',
        projects: [
            {
                title: 'Breaddit',
                dates: 'Semester-long',
                shortDesc: '',
                desc: '',
                technologies: ['PHP', 'MySQL'],
                links: ['https://github.com/samanthaccorn/reddit_data_processing'],
                imgs: ['/assets/databases.png']
            }
        ]
    },
    {
        subj: 'CSE',
        num: 30264,
        name: 'Computer Networks',
        desc: 'This course introduces students to fundamental topics on the principles, design, implementation, and performance of \
computer networks. Topics include: Internet architecture, protocols, socket programming, congestion control, switching and routing, \
local area networks, mobile and ad-hoc networks, network security, the end-to-end arguments and resource allocation.',
        primaryLang: 'C',
        semester: 'Fall 2018'
    },
    {
        subj: 'CSE',
        num: 30332,
        name: 'Programming Paradigms',
        desc: 'Programming language overview: imperative and functional languages; logic programming. Scripting languages and tools. \
Development environments. Multilanguage interfacing. Case studies. Comprehensive programming practice using several languages.',
        primaryLang: '',
        semester: 'Fall 2018'
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
        semester: 'Fall 2018'
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
        semester: 'Fall 2018'
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
         semester: 'Spring 2019'
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
        semester: 'Spring 2019'
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
        semester: 'Spring 2019'
    },
    {
        subj: 'PHIL',
        num: 24448,
        name: 'Tech & Innovtion Ethics',
        hidden: true
    }
];
