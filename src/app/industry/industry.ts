import { IndustryPosition } from '../models/industry-position';

export const industryPositions: IndustryPosition[] = [
  {
    slug: 'sde-ii-aws',
    title: 'SDE II',
    company: 'Amazon Web Services (AWS)',
    companyLogo: '/assets/company-logos/aws.jpg',
    cardImg: '/assets/card/aws.png',
    shortDesc:
      'Leads high visibility team features, influences product direction, and continually raises the operational bar.',
    desc: 'Leads high visibility team features, influences product and team direction, and continually raises the operational bar. Led other developers in design and implementation of year-long Microsoft Teams integration project and delivered key features like message delivery, interaction handling, Cloudformation support. Wrote narratives exploring top user experience pain points and opportunities and drove prioritization and release in an incremental manner with product stakeholders. Designed and developed cross-team initiatives like the Runbooks experience. Identified team inefficiencies and saved months of developer time through automation and other optimizations.',
    technologies: ['Java', 'Kotlin', 'Gradle', 'AWS'],
    startDate: 'Oct 2021',
    endDate: 'Current',
    projects: [
      {
        title: 'Microsoft Teams',
        launchDate: 'Q1 2023',
        shortDesc: '',
        desc: 'AWS Chatbot previously only supported Slack and Amazon Chime which hindered our market adoption and awareness. I led a team of four developers to build out the integration with full parity with Slack - including commands and CloudFormation support. I took direct resposibility in the early project phases for the initial task breakdown & scoping, diving deep into understanding Microsoft teams APIs and authorizations, and identifying the new technologies for the team to begin adopting. During implementation, he picked up key portions like the dataplane (i.e. transforming and delivering notifications to channel), interactive element handling, and the Cloudformation resource.',
        technologies: ['Kotlin', 'Gradle', 'AWS', 'Smithy'],
        imgs: [
          {
            src: '/assets/screenshots/aws/teams-cw-alarm.png',
            description: 'Cloudwatch composite alarm notification in MS Teams',
          },
          {
            src: '/assets/screenshots/aws/teams-cw-alarm-graph.png',
            description: 'Cloudwatch alarm notification with graph in MS Teams',
          },
        ],
        links: [
          {
            link: 'https://aws.amazon.com/blogs/aws/aws-chatbot-now-integrates-with-microsoft-teams/',
            type: ['fas', 'rocket'],
            title: 'Launch Announcement',
          },
          {
            link: 'https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html',
            type: 'aws',
            title: 'Setup Tutorial',
          },
        ],
      },
      {
        title: 'UX Enhancements',
        launchDate: 'Q3 2023',
        shortDesc: '',
        desc: "I led an initiative to increase the all-around usability of Chatbot to promote general usage beyond our user's habitual processes. As part of this, I made several key suggestions and organized over 100 related tasks in our backlog, culminating in a document grouping these items into themes. I fully embraced the concept of progressive disclosure, taking it from an speculative, unrealized concept to a platform capability and implementing six concrete transformational features in this vein. I implemented the logic to enable updating messages across our integrations and then utilized this to update in place for paginated command outputs, for prompting users to input parameters and approve the command, and for breaking up our help pages into discrete grokkable chunks (which are being interacted with around 400 times each week). All together, these improve the customer experience by decreasing channel and thread noise and making it easier to understand the outputs in a collaborative environment. These improvements have cut down the number of responses sent as new messages by more than 40%. Additionally, Jack fixed long standing customer pain points where users would have a hard time progressing by improving the default region prompt to avoid having users re-input their command (also improving more than 400 interactions each week) and allowing for better validations of user inputs avoiding runtime exceptions from their command execution. All together these improvements vastly improve day to day activities and especially impact the initial user experience where users might be unsure about the Chatbot value proposition.",
        technologies: ['Kotlin', 'Gradle', 'AWS'],
        imgs: [
          {
            src: '/assets/screenshots/aws/required-param.png',
            description: 'Enhanced parameter experience utilizing update-in-place and input fields',
          },
          {
            src: '/assets/screenshots/aws/pagination.png',
            description: 'Command output pagination utilizing update-in-place',
          },
          {
            src: '/assets/screenshots/aws/optional-param-new.png',
            description: 'Optional parameter input experience with enum dropdown',
          },
        ],
        links: [],
      },
      {
        title: 'Tagging',
        launchDate: 'Q2 2024',
        shortDesc: '',
        desc: 'AWS Chatbot had never supported tagging despite it being an enterprise focussed feature useful for consistent authorization control and billing across all AWS resources. I picked up the project from a teammate who had left and drove it to completion with two other developers. In particular, I showed a great amount of due dilligence in ensuring all loose ends from the handover were resolved and the cross-team integration abided by the contract.',
        technologies: ['Kotlin', 'Gradle', 'AWS', 'Smithy'],
        imgs: [
          {
            src: '/assets/screenshots/aws/tags.png',
            description: 'Tagging editor component',
          },
        ],
        links: [
          {
            link: 'https://aws.amazon.com/about-aws/whats-new/2024/05/aws-chatbot-tagging-chatbot-resources/',
            type: ['fas', 'rocket'],
            title: 'Launch Announcement',
          },
          {
            link: 'https://docs.aws.amazon.com/chatbot/latest/adminguide/tagging-resources.html',
            type: 'aws',
            title: 'Documentation',
          },
        ],
      },
      {
        title: 'SSM Runbooks',
        launchDate: 'Q4 2021',
        shortDesc: '',
        desc: 'I effectively led a cross-team integration effort to improve the SSM Automation Document ("runbook") execution experience. I worked closely with product and UX to determine the most necessary features and structured them as a series of incremental bite-sized pieces. I effectively allowed for cross-team integration by defining the modifications as hooks which would avoid the integrating team to avoid needing intrinsic knowlege of the workings of the service.',
        technologies: ['Kotlin', 'Gradle', 'AWS'],
        imgs: [
          {
            src: '/assets/screenshots/aws/ssm-runbook-name.png',
            description: 'Enhanced runbook invocation featuring dropdown populated with user runbooks',
          },
          {
            src: '/assets/screenshots/aws/ssm-runbook-params.png',
            description: 'Enhanced runbook invocation featuring JSON parameter skeleton',
          },
        ],
        links: [
          {
            title: 'Feature Launch Blog Post',
            link: 'https://aws.amazon.com/blogs/mt/manage-aws-resources-in-your-slack-channels-with-aws-chatbot/#:~:text=Task%206.%20Run%20an%20AWS%20Systems%20Manager%20runbook%20to%20restart%20an%20Amazon%20EC2%20instance',
            type: ['fas', 'rocket'],
          },
        ],
      },
    ],
  },
  {
    slug: 'sde-i-aws',
    title: 'SDE I',
    company: 'Amazon Web Services (AWS)',
    companyLogo: '/assets/company-logos/aws.jpg',
    shortDesc: '',
    desc: 'Implemented several key Chatbot commands features (prettified lambda invoke output, optional parameter experience) as well as important operational items to improve Chatbot oncall experience (e2e latency improvements, backup and restore strategy). Mentored and influenced an intern as well as the many new folks joining our team as we continue to grow.',
    technologies: ['Java', 'Kotlin', 'Gradle', 'AWS'],
    imgs: [
      {
        src: '/assets/screenshots/aws/lambda-prettify.png',
        description: '`Prettified` lambda invoke experience, printing objects as JSON and strings without any escaping',
      },
      {
        src: '/assets/screenshots/aws/optional-param.png',
        description: 'Optional params experience, allowing for a user to continue multiturn selection of parameters',
      },
    ],
    startDate: 'Sept 2020',
    endDate: 'Sept 2021',
  },
  {
    slug: 'sde-intern-aws',
    title: 'SDE Intern',
    company: 'Amazon Web Services (AWS)',
    companyLogo: '/assets/company-logos/aws.jpg',
    shortDesc: 'Developed Security Hub function for AWS Chatbot and a rapid onboarding solution for other services',
    desc: 'During my time at AWS, I was fortunate enough to get to work on AWS Chatbot, which had its public beta release during my time there. The AWS Chatbot platform, as of the initial release, allows for developers to monitor their various services like Cloudwatch Alarms in the chat services they use, like Slack and Chime, allowing developers to move towards the “ChatOps” paradigm.\n\nMy first project after joining the team was to develop the functionality that allows for a user to get notifications from Security Hub in their chatroom, which was actually released during my time there in the public beta. As well, I also improved the functionality further during my time on the team. After that was released, I turned to my main project, which was to improve the onboarding process for services that wished to be supported by AWS Chatbot, getting their functionality on the platform faster. I was responsible for creating a 20-page design document detailing the needs and possible solutions, and then implemented it by the end of the summer, with the intent that it would become production-ready and used after I left the company.',
    technologies: ['Java', 'AWS'],
    links: [
      {
        title: 'Monitor Amazon EventBridge events in your Slack channels with AWS Chatbot',
        link: 'https://aws.amazon.com/blogs/mt/monitor-amazon-eventbridge-events-in-your-slack-channels-with-aws-chatbot/',
        type: ['fas', 'blog'],
      },
    ],
    startDate: 'Jun 2019',
    endDate: 'Aug 2019',
  },
  {
    slug: 'sde-intern-bricleir',
    title: 'Part-Time Software Engineering Intern',
    company: 'Bricleir',
    companyLogo: '/assets/company-logos/bricleir.jpg',
    shortDesc:
      'Developed the Bricleir website and product using primarily Rails and Postgres while taking courses in Silicon Valley',
    desc: "Worked at Bricleir 20 hrs/week as part of the Silicon Valley Semester while taking classes the other days. Was responsible for developing new functionality on Bricleir's web platform in Rails and Postgres.\n\nDuring my time there, I worked on consolidating all of the various notifications a user gets into a single notifications queue, improving the company matches a user sees, and creating a new landing page for logged in users to see all the various activities on the platform.",
    technologies: ['Ruby', 'Ruby on Rails'],
    startDate: 'Jan 2019',
    endDate: 'May 2019',
  },
  {
    slug: 'sde-intern-8451',
    title: 'Software Development Intern',
    company: '84.51',
    companyLogo: '/assets/company-logos/8451.jpg',
    shortDesc: "Built an Angular/Spring Boot application assisting 84.51's launch of data science into the cloud",
    desc: "Our team of interns developed a piece of a cloud-based application for launching data science beyond on-premises servers into the cloud, enabling data analysts to start-up 'ephemeral IDEs' like RStudio and Jupyter very simply. We worked extensively with other teams at 84.51 and Kroger to mesh many moving parts together. Our team had an alpha and beta release during the summer, and was being rolled out for analysts at the company to begin beta testing by the end of the summer. We worked in an agile methodology, utilizing two week sprints to discuss current priorities in spite of rapidly shifting goals.\n\nMy principal emphasis while on the team was enhancing the user experience. I was responsible for creating the page where a user saw all of the deployments they had running at one time, as well as a page that deployed the status of a user’s deployment (and then launched them into the IDE when it was ready). As well, I enhanced the error system, developing it so it was clear the user what error occurred (on both the frontend and the backend), and logged it to our systems when a frontend error occurred, along with several other additional improvements.",
    technologies: ['Angular', 'Java', 'Spring Boot', 'NX/NRWL'],
    startDate: 'Jun 2018',
    endDate: 'Aug 2018',
  },
  {
    slug: 'sde-intern-great-american',
    title: 'Software Development Intern',
    company: 'Great American Insurance',
    companyLogo: '/assets/company-logos/great-american.jpg',
    shortDesc: '',
    desc: "Developed an internal application (JQuery Mobile, JSP, Spring Boot) to improve how Great American recruited, especially at career fairs. Specifically, a HR agent would be able to put the application into a mode allowing for many applicants to sign up at a career fair, able to then view all of those applicants and search and filter them, and reach out to them. Applicants could update their information too. Our team built the existing prototype application the previous interns had built and fleshed out lacking functionality.\n\nAside from debugging and improving current functionality, I also worked to give the HR agents an easier way to search applicants with more fine-grained search. Up to that point, the search was a pure text filter over all the fields of the applicant, but I improved it to allow for more natural and joined queries like 'fname like john and gpa > 3.' As well, I made it easier to login for applicants by adding Google and Facebook one-click sign-ins.",
    technologies: ['Spring Boot', 'JQuery', 'MySQL'],
    startDate: 'May 2017',
    endDate: 'Aug 2017',
  },
  {
    slug: 'sde-intern-cerkl',
    title: 'Software Development Intern',
    company: 'Cerkl',
    companyLogo: '/assets/company-logos/cerkl.jpg',
    shortDesc: '',
    desc: "I worked at Cerkl for two consecutive summers after meeting the CEO, Tarek. I worked closely with the small team to design and create important functionality on their main platform and website (PHP and JQuery) that the company needed to continue growing.\nBetween the two summers, I personally was responsible for developing a new contact us form, a way to tag users, a way to embed our article recommendation engine into offsite 'widgets,' as well as other debugging and improvements. As well, I contributed to creating a notifications queue and migrating our application to a new RESTful API that we created.",
    technologies: ['PHP', 'JQuery', 'MySQL'],
    startDate: 'Jun 2015',
    endDate: 'Aug 2016',
  },
];
