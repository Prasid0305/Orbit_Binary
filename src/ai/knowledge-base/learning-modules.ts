// src/ai/knowledge-base/learning-modules.ts

const unifiedUrl = "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/";

export const learningModules = [
  {
    role: "Backend",
    summary: "These are the recommended learning modules for backend engineers, including Java basics, Spring Boot, databases, microservices, testing, and APIs.",
    modules: [
      {
        title: "Java & OOP Refresher",
        type: "Internal Doc",
        description: "Collections, streams, exception handling.",
        link: unifiedUrl
      },
      {
        title: "Spring Boot Fundamentals",
        type: "Video Course",
        description: "REST APIs, dependency injection, JPA/Hibernate.",
        link: unifiedUrl
      },
      {
        title: "Database & ORM",
        type: "Book",
        description: "SQL basics, schema design, JPA queries.",
        link: unifiedUrl
      },
      {
        title: "Microservices",
        type: "Article",
        description: "Service discovery, configuration, inter-service communication.",
        link: unifiedUrl
      },
      {
        title: "Testing with JUnit & Mockito",
        type: "Tutorial",
        description: "Learn how to write effective unit tests.",
        link: unifiedUrl
      },
      {
        title: "APIs & Integration",
        type: "Documentation",
        description: "Swagger/OpenAPI, Postman, REST standards.",
        link: unifiedUrl
      },
      {
        title: "Sensor Data Context",
        type: "Wiki",
        description: "Data models for oilfield/factory sensors.",
        link: unifiedUrl
      }
    ]
  },
  {
    role: "Frontend",
    summary: "These are the recommended learning modules for frontend engineers, focusing on TypeScript, Angular, state management, API integration, and testing.",
    modules: [
        { title: "TypeScript Basics", type: "Video Course", description: "Variables, types, interfaces, classes.", link: unifiedUrl },
        { title: "Angular Fundamentals", type: "Book", description: "Components, modules, services, routing.", link: unifiedUrl },
        { title: "UI & State Management", type: "Internal Doc", description: "RxJS, forms, Angular Material.", link: unifiedUrl },
        { title: "API Integration", type: "Article", description: "HttpClient, error handling, observables.", link: unifiedUrl },
        { title: "Testing with Jasmine & Karma", type: "Tutorial", description: "Learn how to test your Angular components.", link: unifiedUrl },
        { title: "Sensor Dashboards", type: "Wiki", description: "Domain knowledge on sensor dashboards & visualizations.", link: unifiedUrl },
    ]
  },
  {
    role: "QA",
    summary: "This learning path for QA engineers covers manual testing, automation tools, API testing, CI/CD integration and domain knowledge.",
    modules: [
        { title: "Manual Testing", type: "Video Course", description: "Test case design, test plans.", link: unifiedUrl },
        { title: "Automation Tools", type: "Book", description: "Selenium/WebDriver, JUnit/TestNG.", link: unifiedUrl },
        { title: "API Testing", type: "Internal Doc", description: "Postman, REST Assured.", link: unifiedUrl },
        { title: "CI/CD Integration", type: "Article", description: "Jenkins/GitHub Actions.", link: unifiedUrl },
        { title: "Sensor Data Domain", type: "Wiki", description: "Understanding sensor data accuracy & thresholds.", link: unifiedUrl },
    ]
  },
  {
    role: "DevOps",
    summary: "This learning path for DevOps engineers covers Linux, shell scripting, CI/CD, containers, Kubernetes, monitoring and cloud fundamentals.",
    modules: [
        { title: "Linux & Shell Scripting", type: "Video Course", description: "Core concepts for server management.", link: unifiedUrl },
        { title: "CI/CD Pipelines", type: "Book", description: "Jenkins/GitHub Actions.", link: unifiedUrl },
        { title: "Containerization", type: "Internal Doc", description: "Docker, Docker Compose.", link: unifiedUrl },
        { title: "Orchestration with Kubernetes", type: "Article", description: "The basics of K8s.", link: unifiedUrl },
        { title: "Monitoring & Logging", type: "Tutorial", description: "ELK, Prometheus, Grafana.", link: unifiedUrl },
        { title: "Cloud & Security", type: "Wiki", description: "AWS/Azure/GCP basics.", link: unifiedUrl },
    ]
  },
  {
    role: "Data Science",
    summary: "This learning path for Data Scientists covers big data concepts, Apache Flink, Kafka, data science libraries, visualization and domain-specific knowledge.",
    modules: [
        { title: "Big Data Concepts", type: "Video Course", description: "Streams vs batch processing.", link: unifiedUrl },
        { title: "Apache Flink", type: "Book", description: "DataStream API, windowing, checkpoints.", link: unifiedUrl },
        { title: "Kafka/Messaging Basics", type: "Internal Doc", description: "Understanding message queues.", link: unifiedUrl },
        { title: "Data Science Essentials", type: "Article", description: "Pandas, NumPy, scikit-learn.", link: unifiedUrl },
        { title: "Visualization", type: "Tutorial", description: "Matplotlib/Seaborn.", link: unifiedUrl },
        { title: "Domain Knowledge", type: "Wiki", description: "Sensor anomalies, predictive maintenance.", link: unifiedUrl },
    ]
  }
];
