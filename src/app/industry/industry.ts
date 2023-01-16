import { IndustryPosition } from '../models/industry-project';

export const industryPositions: IndustryPosition[] = [{
    slug: 'sde-ii-aws',
    title: 'SDE II',
    company: 'Amazon Web Services (AWS)',
    companyLogo: '/assets/company-logos/aws.jpg',
    shortDesc: 'Leads high visibility team features, influences product direction, and continually raises the operational bar.',
    desc: 'Leads high visibility team features, influences product direction, and continually raises the operational bar. Especially focussed on enhancing the end user experience. Designed and developed cross-team initiatives like the Systems Manager Runbooks experience (mentioned in blog post).',
    technologies: ['Java', 'Kotlin', 'Gradle', 'AWS'],
    links: [{
        title: 'Feature Launch Blog Post',
        link: 'https://aws.amazon.com/blogs/mt/manage-aws-resources-in-your-slack-channels-with-aws-chatbot/',
        type: ['fas', 'blog']
    }],
    imgs: [{
        img: '/assets/screenshots/aws/ssm-start-automation-dropdown.png',
        description: 'Enhanced runbook execution featuring dropdown for selection (rather than needing to first determine the name)'
    }, {
        img: '/assets/screenshots/aws/ssm-start-automation-params.png',
        description: 'Enhanced runbook execution featuring JSON parameter skeleton'
    }],
    startDate: 'Oct 2021',
    endDate: 'Current'
}, {
    slug: 'sde-i-aws',
    title: 'SDE I',
    company: 'Amazon Web Services (AWS)',
    companyLogo: '/assets/company-logos/aws.jpg',
    shortDesc: '',
    desc: 'Implemented several key Chatbot commands features (prettified lambda invoke output, optional parameter experience) as well as important operational items to improve Chatbot oncall experience (e2e latency improvements, backup and restore strategy). Mentored and influenced an intern as well as the many new folks joining our team as we continue to grow.',
    technologies: ['Java', 'Kotlin', 'Gradle', 'AWS'],
    imgs: [{
        img: '/assets/screenshots/aws/lambda-invoke.png',
        description: '`Prettified` lambda invoke experience, printing objects as JSON and strings without any escaping'
    }, {
        img: '/assets/screenshots/aws/optional-param.png',
        description: 'Optional params experience, allowing for a user to continue multiturn selection of parameters'
    }],
    startDate: 'Sept 2020',
    endDate: 'Sept 2021'
}, {
    slug: 'sde-intern-aws',
    title: 'SDE Intern',
    company: 'Amazon Web Services (AWS)',
    companyLogo: '/assets/company-logos/aws.jpg',
    shortDesc: '',
    desc: 'Created a system to allow for faster development of onboarded notifications and reduced operational ownership on partner service teams. Regrettably did not ship during my internship, but evolved into a new team that realized this in the form of supporting all Amazon EventBridge events.',
    technologies: ['Java', 'AWS'],
    links: [{
        title: 'Monitor Amazon EventBridge events in your Slack channels with AWS Chatbot',
        link: 'https://aws.amazon.com/blogs/mt/monitor-amazon-eventbridge-events-in-your-slack-channels-with-aws-chatbot/',
        type: ['fas', 'blog']
    }],
    startDate: 'Jun 2019',
    endDate: 'Aug 2019'
},{
    slug: 'sde-intern-bricleir',
    title: 'Software Engineering Intern',
    company: 'Bricleir',
    companyLogo: '/assets/company-logos/bricleir.jpg',
    shortDesc: '',
    desc: '',
    technologies: ['Ruby', 'Ruby on Rails'],
    startDate: 'Jan 2019',
    endDate: 'May 2019'
}, {
    slug: 'sde-intern-8451',
    title: 'Software Development Intern',
    company: '84.51',
    companyLogo: '/assets/company-logos/8451.jpg',
    shortDesc: '',
    desc: 'Responsible for building an important user-facing Angular and Java Spring application that will be used extensively internally and eventually by company clients in addition. Worked in the Agile methodology within the team and collaborated heavily with other teams at the company.',
    technologies: ['Angular', 'Java', 'Spring Boot', 'NX/NRWL'],
    startDate: 'Jun 2018',
    endDate: 'Aug 2018'
}];
