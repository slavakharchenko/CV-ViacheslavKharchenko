const cv = {
    aboutMe: {
        position: 'Automation QA Lead / SDET',
        age: '21.01.1992',
        location: 'Ukraine/Kiyv',
    },
    experiences: [
        { 
            position: 'Senior Automation QA / AQA Lead',
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
                'Write performance tests for services. Send a lot of messages in Kafka and wait until a service resolve all of them',
            ],
            technologicalStack: 'JavaScript, TypeScript, Webdriver.io, Mocha, Chai, Moon, Docker, Docker-compose ReportPortal, TestRail, Kafka, Postgres, Redis, EventStore, ELK, AWS, K8s'
        },
        {
            position: 'Senior Automation QA',
            company: 'Ciklum',
            duration: 'September 2018 – March 2020',
            projectLinks: ['https://www.madlan.co.il/' , 'https://www.localize.city/'],
            tasks: [
                'Create, execute, maintain automation scripts',
                'Help to configure infrastructure for automation',
                'Visual testing with Applitools',
                'Monitor, maintain, and provide reports for bug tracking and defect resolution to the team and assist in process improvement in these areas',               
            ],
            technologicalStack: 'TypeScript, Webdriver.io, Selenoid, GGR, Jasmine, Jenkins, Report Portal, Applitools'
        }
    ],
    skill: {
        automation: [
            'Experience in creating AQA processes from scratch. Hiring and mentoring teammates',
            'Experience in writing integration tests for microservices. Integrated them in the pipeline for running it for each commit',
            'Experience in writing automated UI/API tests: JavaScript/Typescript (WebdriverIO, Mocha, Chai)',
            'Experience in writing automated UI/API tests: Python (Pytest, Selenium)',
            'Experience in visual testing with Applitools',
            'Familiar with writing performance tests with JMeter',
        ],
        manual: [
            'Experience in the use different types of testing (functional, GUI, usability, smoke, sanity, regression)',
            'Practical skills in the creation of test documentation (checklists, test cases, bug reports)',
            'Experience in testing API',
            'Experience in testing analytics',
        ],
        technology: [
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
            'Containerizations: Docker/Docker-compose',
            'API: Postman',
            'Familiar with ELK stack, Grafana, JMeter, AWS (EC2 instances, S3 buckets and etc), Kafka, HTTP, HTML, CSS, XML, XPath',
        ],
    },
}

export default cv;