export const firstTasksData = {
    backend: [
        {
            title: "Week 1: Foundations",
            tasks: [
                { id: "w1-task1", label: "Set up local Spring Boot project and run existing services", status: "Todo", details: "Follow the project README." },
                { id: "w1-task2", label: "Meet your onboarding buddy", status: "Todo", details: "Scheduled for Wednesday at 10am." },
                { id: "w1-task3", label: "Review the mPACT2WO Team Charter", status: "Todo", details: "Link in the /docs page." },
            ]
        },
        {
            title: "Your First Ticket",
            tasks: [
                { id: "ticket-task1", label: "Write a REST API to fetch sensor metadata from DB", status: "Todo", details: "Ticket: SENSOR-API-101" },
                { id: "ticket-task2", label: "Add unit tests for a service class using JUnit & Mockito", status: "Todo", details: "Cover the new metadata service." },
                { id: "ticket-task3", label: "Document the new endpoint with Swagger/OpenAPI", status: "Todo", details: "Ensure all params are documented." },
            ]
        }
    ],
    frontend: [
        {
            title: "Week 1: Foundations",
            tasks: [
                { id: "w1-task1", label: "Set up your Angular development environment", status: "Todo", details: "Follow the /setup guide." },
                { id: "w1-task2", label: "Meet your onboarding buddy", status: "Todo", details: "Scheduled for Wednesday at 10am." },
                { id: "w1-task3", label: "Familiarize yourself with the Angular Material components", status: "Todo", details: "Explore the official documentation." },
            ]
        },
        {
            title: "Your First Ticket",
            tasks: [
                { id: "ticket-task1", label: "Build a simple sensor list component", status: "Todo", details: "Ticket: UI-FIX-201" },
                { id: "ticket-task2", label: "Connect the component to the backend API to fetch sensor data", status: "Todo", details: "Use the HttpClient module." },
                { id: "ticket-task3", label: "Add basic form validation for a user query input", status: "Todo", details: "e.g., ensure search query is not empty." },
            ]
        }
    ],
    qa: [
        {
            title: "Week 1: Foundations",
            tasks: [
                { id: "w1-task1", label: "Explore existing test cases and coverage reports", status: "Todo", details: "Located in the test management tool." },
                { id: "w1-task2", label: "Meet your onboarding buddy", status: "Todo", details: "Scheduled for Wednesday at 10am." },
                { id: "w1-task3", label: "Get access to Postman and API collections", status: "Todo", details: "Request access from the team lead." },
            ]
        },
        {
            title: "Your First Ticket",
            tasks: [
                { id: "ticket-task1", label: "Write manual test cases for a new API endpoint", status: "Todo", details: "Ticket: QA-101" },
                { id: "ticket-task2", label: "Automate a UI flow (login -> sensor dashboard navigation)", status: "Todo", details: "Use Selenium/WebDriver." },
                { id: "ticket-task3", label: "Log 3 issues (can be minor) in the bug tracking tool (Jira)", status: "Todo", details: "Practice the bug logging workflow." },
            ]
        }
    ],
    devops: [
        {
            title: "Week 1: Foundations",
            tasks: [
                { id: "w1-task1", label: "Set up Docker environment and run a service locally", status: "Todo", details: "Follow the repo guide." },
                { id: "w1-task2", label: "Meet your onboarding buddy", status: "Todo", details: "Scheduled for Wednesday at 10am." },
                { id: "w1-task3", label: "Explore the CI/CD pipeline and document its flow", status: "Todo", details: "Focus on the main service pipeline." },
            ]
        },
        {
            title: "Your First Ticket",
            tasks: [
                { id: "ticket-task1", label: "Deploy a Spring Boot microservice to the dev K8s cluster", status: "Todo", details: "Ticket: INFRA-50" },
                { id: "ticket-task2", label: "Add a new monitoring dashboard in Grafana for one service", status: "Todo", details: "Monitor CPU and memory usage." },
                { id: "ticket-task3", label: "Write a small shell script to automate a cleanup task", status: "Todo", details: "e.g., clearing old log files." },
            ]
        }
    ],
    'data-science': [
        {
            title: "Week 1: Foundations",
            tasks: [
                { id: "w1-task1", label: "Set up a Flink job to consume mock sensor data from Kafka", status: "Todo", details: "Follow the tutorial in Confluence." },
                { id: "w1-task2", label: "Meet your onboarding buddy", status: "Todo", details: "Scheduled for Wednesday at 10am." },
                { id: "w1-task3", label: "Document the differences between real-time and batch pipelines", status: "Todo", details: "Create a page in Confluence." },
            ]
        },
        {
            title: "Your First Ticket",
            tasks: [
                { id: "ticket-task1", label: "Write a Flink transformation job to filter faulty sensor readings", status: "Todo", details: "Ticket: DATA-99" },
                { id: "ticket-task2", label: "Analyze a small dataset for anomaly detection using Pandas", status: "Todo", details: "The dataset is in the shared drive." },
                { id: "ticket-task3", label: "Create a simple visualization with Matplotlib", status: "Todo", details: "Plot sensor values over time." },
            ]
        }
    ],
    default: [
         {
            title: "Week 1: Foundations",
            tasks: [
                { id: "w1-task1", label: "Complete HR onboarding in Workday", status: "Done", details: "Due by EOD Monday." },
                { id: "w1-task2", label: "Set up your development environment", status: "In Progress", details: "Follow the /setup guide." },
                { id: "w1-task3", label: "Meet your onboarding buddy", status: "Todo", details: "Scheduled for Wednesday at 10am." },
                { id: "w1-task4", label: "Review the Orbit Team Charter", status: "Todo", details: "Link in the /docs page." },
            ]
        },
        {
            title: "Your First Ticket",
            tasks: [
                { id: "ticket-task1", label: "Claim ticket ORB-101: 'Fix typo on landing page'", status: "Todo", details: "Find it on the Jira board." },
                { id: "ticket-task2", label: "Create a feature branch following the git strategy", status: "Todo", details: "e.g., `feature/ORB-101-fix-landing-typo`" },
                { id: "ticket-task3", label: "Open a pull request for review", status: "Todo", details: "Add your onboarding buddy as a reviewer." },
            ]
        }
    ]
};
