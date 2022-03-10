const cv = {
    aboutMe: {
        position: 'Automation QA Lead/SDET',
        content: 'Hey, how are you, buddy? Hope all is well! I am Viacheslav Kharchenko and this is my CV.'
    },
    experiences: [
        {
            position: 'Sr. Automation QA / AQA Lead ',
            company: 'Parimatch Tech',
            duration: 'AQA: March 2020 – August 2022, AQA Lead: September 2022 - till present',
            projectLinks: ['https://en.parimatch.com/en/'],
            tasks: [
                'Create AQA processes from scratch',
                'Configure infrastructure for UI/API/Integration tests (Including CI/CD)',
                'Create, execute, maintain automation scripts',
                'Create docker-compose files for up services and testing them in isolation',
                'Work with Gitlab CI/CD',
                'Integrate tests result with the test management system, reporting system, slack bot',
                'Write performance tests for services (Sending batch of messages in Kafka and wait until a service resolve all of them)',
            ],
            technologicalStack: ['JavaScript', 'TypeScript', 'Webdriver.io', 'Mocha', 'Moon', 'Docker', 'ReportPortal', 'TestRail', 'Kafka', 'Postgres', 'Redis', 'EventStore', 'ELK Stack', 'AWS', 'K8s']
        },
        {
            position: 'Sr. Automation QA',
            company: 'Ciklum',
            duration: 'September 2018 – March 2020',
            projectLinks: ['https://www.madlan.co.il/' , 'https://www.localize.city/', 'https://www.nzz.ch/'],
            tasks: [
                'Create, execute, maintain automation scripts',
                'Help to configure infrastructure for automation',
                'Visual testing with Applitools',
                'Monitor, maintain, and provide reports for bug tracking and defect resolution to the team and assist in process improvement in these areas',
            ],
            technologicalStack: ['JavaScript', 'TypeScript', 'Webdriver.io', 'Selenoid', 'GGR', 'Jasmine', 'Mocha', 'Travis CI', 'Jenkins', 'Report Portal', 'Applitools']
        },
        {
            position: 'Automation QA',
            company: 'Evo.company',
            duration: 'Manual QA: December 2016 - September 2017, AQA: December 2017 – August 2018',
            projectLinks: ['https://prom.ua/'],
            tasks: [
                'Create, execute, maintain automation scripts',
                'Monitor, maintain, and provide reports for bug tracking and defect resolution to the team and to assist in process improvement in these areas',
                'Functional and non-functional testing of web-application, testing specifications and creating test documentation (checklists, test cases, bug reports)',
                'Testing API, Analytics, Localization',
                'Monitoring errors in Kibana, Grafana',
            ],
            technologicalStack: ['Python', 'Jenkins', 'Allure', 'Selenium', 'Selenium grid', 'Pytest', 'ELK stack', 'Grafana']
        },
        {
            position: 'Manual QA Engineer',
            company: 'ENIXAN Entertainment',
            duration: 'March 2015 – October 2016',
            projectLinks: [
                // 'https://apps.facebook.com/royalgardengame/',
                // 'https://apps.facebook.com/cloudkingdomgame/',
                // 'https://apps.facebook.com/secretgardengame/'
            ],
            tasks: [
                'Testing flash for social networks',
                'Testing mobile games'
            ],
            technologicalStack: ['ActionScript', 'MongoDB', 'SVN', 'Unity', 'C#']
        },
    ],
    skill: {
        automation: {
            skills: [
                'Experience in creating AQA processes from scratch. Hiring and mentoring teammates',
                'Experience in writing integration tests for microservices. Integrated them in the pipeline for running it for each commit',
                'Experience in writing automated UI/API tests: JavaScript/Typescript (WebdriverIO, Mocha, Chai)',
                'Experience in writing automated UI/API tests: Python (Pytest, Selenium)',
                'Experience in visual testing with Applitools',
                'Familiar with writing performance tests with JMeter',
            ],
            chips: ['UI/API testing', 'Integration testing', 'Visual testing']
        },
        manual: {
            skills: [
                'Experience in the use different types of testing (functional, GUI, usability, smoke, sanity, regression)',
                'Practical skills in the creation of test documentation (checklists, test cases, bug reports)',
                'Experience in testing Localization',
                'Experience in testing API',
                'Experience in testing Analytics',
            ],
            chips: ['Documentation', 'Api', 'Analytics', 'Localization'],
        },
        technology: {
            skills: [
                'Language: JavaScript/TypeScript (preferable), Python',
                'Test runners: Mocha, Jasmine, Pytest',
                'Frameworks: WebdriverIO, Selenium Webdriver, familiar with Cypress',
                'Visual testing tools: Applitools',
                'Git: GitLab, GitHub',
                'CI/CD tools: Travis CI, Jenkins, Gitlab',
                'SQL/NoSQL Databases: PostgreSQL, MongoDB, Redis, Memcached',
                'Reporting systems: ReportPortal, familiar with Allure',
                'Test management tools: TestRail',
                'Selenium servers: Selenoid, GGR, Moon',
                'Containerization: Docker/Docker-compose',
                'API: Postman',
                'Familiar with ELK stack, Grafana, JMeter, AWS (EC2 instances, S3 buckets and etc), Kafka, HTTP, HTML, CSS, XML, XPath',
            ],
            chips: ['JavaScript', 'TypeScript', 'Python']
        }
    },
    info: {
        email: 'slava.charodey@gmail.com',
        phone: '+38(099)504-4113',
        location: 'Kyiv, Ukraine'
    }
}

export default cv;