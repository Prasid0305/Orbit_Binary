// This file contains the knowledge base content for the AI chatbot.
// It's stored as a TypeScript constant for easy import into Genkit flows.
import { learningModules } from './learning-modules';

const welcome = `Welcome to the team! This document is designed to answer the most common questions new engineers might have regarding environment setup, tech stack, processes, and knowledge transfer.`;

const environmentSetup = `
## Environment Setup (MacOS + Local Development)
- **Operating System**: macOS (latest supported version recommended)
- **IDE/Editor**: IntelliJ IDEA (preferred), VS Code optional for scripting/quick edits
- **Package Manager**: Homebrew (for installing dependencies)
- **Java Version**: Ensure you have the team’s supported JDK (check with tech lead, usually Java 11 or Java 17)
- **Build Tool**: Maven/Gradle (confirm project-specific usage)
- **Big Data Tools**: Apache Flink & Apache Spark (local setup required)
- **Configuration Management**: .env files or config YAMLs (refer to project README)

**Quick Setup Commands**
\`\`\`bash
# Install brew if not available
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Java
brew install openjdk@17

# Install Maven or Gradle
brew install maven
brew install gradle

# Install Flink & Spark
brew install apache-flink
brew install apache-spark
\`\`\`
`;

const techStack = `
## Tech Stack Overview

Our technology stack is diverse and tailored to the needs of each team. Here is a breakdown of the key technologies used across our main product areas.

### General Infrastructure & Deployment
- **Container Orchestration**: We use Amazon EKS (Elastic Kubernetes Service) for deploying and managing our containerized applications.
- **Rule Engine**: A dedicated Rule Engine Cluster is used for processing complex business logic.
- **Data Storage**: MongoDB is our primary database, and we leverage AWS S3 for object storage and AWS IoT Core for device connectivity.

### Team-Specific Stacks

- **Pipeline Team**:
  - **Core Technologies**: Apache Flink, Spring Boot
  - **Architecture**: Focuses on real-time streaming services. Includes a centralized Device Management Service that handles all aspects of device onboarding and acts as a representative for all devices, managing the flow of data to the customer.

- **Corrosion Team**:
  - **Core Technologies**: Spring Boot Application, MongoDB, AWS S3
  - **Orchestration**: Uses DAGs (Directed Acyclic Graphs) for scheduling and orchestrating tasks. The DAG layer sits above our core orchestration tools to manage complex workflows. Changes are reflected immediately.

- **Platform Team**:
  - **Core Technologies**: Spring Boot, MongoDB
  - **Architecture**: This team does not use DAGs. Their primary responsibility is to maintain the complete hierarchical details of our customers, mapping data from the physical world into our software systems.

- **AirCompliance Team**:
  - **Core Technologies**: AWS Lambda, AWS S3
  - **Services**: Utilizes AWS SNS (Simple Notification Service) for sending notifications.

- **Data Analytics Team**:
  - **Core Technologies**: Apache Spark, Scala
  - **Architecture**: Primarily focused on batch processing jobs. Uses DAGs for scheduling complex data analysis tasks.
`;

const knowledgeTransfer = `
## Knowledge Transfer & Documentation
- **Ticketing Tool**: Jira (Scrum methodology, sprints, story points)
- **Documentation**: Confluence/Project Wiki (check Jira for links)
- **Code Reviews**: Pull Requests (GitHub standard flow)
- **Branching Strategy**: \`main\` (production), \`develop\` (integration), feature branches per Jira ticket
`;

const teamProcesses = `
## Team Processes
- **SDLC**: Scrum — 2-week sprints, daily standups, sprint planning, retrospectives
- **Meetings**: 
  - Daily Standup (time varies per team)
  - Sprint Planning (bi-weekly)
  - Sprint Retrospective (bi-weekly)
- **Collaboration Tools**: Slack/MS Teams (confirm with manager)
`;

const accessAndCredentials = `
## Access & Credentials
- **Access Management**: All services are accessed via SSO (Single Sign-On)
- **Initial Access**:
  - Email IT/Admin for GitHub org invite
  - Request Jira + Confluence access
  - VPN (if required, check with IT)
- **Secrets Management**: Environment variables stored in .env or vault (ask lead for access)
`;

const faqs = `
## FAQs

**Q: Which JDK version should I use?**  
A: Default is Java 17 unless project specifies otherwise.

**Q: How do I run tests locally?**  
A: Use \`mvn test\` or \`gradle test\` inside the project folder.

**Q: How do I contribute code?**  
A: Create a feature branch → Commit & Push → Open Pull Request → Await Review.

**Q: Where can I find architecture diagrams?**  
A: Stored in Confluence under project documentation.

**Q: How do deployments work?**  
A: GitHub Actions triggers CI/CD pipelines (merge to \`main\` → deployment).
`;

const mission = `
## A Proud Mission — Why You Should Be Excited to Join

### Transforming Industrial Safety and Sustainability
You’re stepping into a team that’s revolutionizing industrial monitoring—using AIoT-enabled early detection systems to detect emissions and corrosion before they become costly, dangerous problems. These solutions help plants act proactively—not reactively.

### Championing “Operator-First” Experiences
mPACT2WO brings the intuitiveness of consumer apps to industrial settings. Our tools speak the language of frontline operators, require no training manuals, and integrate seamlessly into on-the-ground workflows to enable fast, confident decisions.

### Driving Real-World Impact
Our solutions aren’t theoretical—they’re making a tangible difference. For example, mRegz™ detected a leak in just 7 hours, drastically cutting environmental and cleanup impacts. At remote sites, emissions were resolved within hours rather than days or weeks.

### Backed by Innovation & Industry Legacy
As part of Molex, a leader in electrical and fiber-optic connectivity systems, we combine deep engineering expertise with cutting-edge AIoT innovation.

### Aligned with Safety, Efficiency & ESG Goals
Our work helps uphold regulatory compliance, increases operational efficiency, elevates safety standards, and visibly supports environmental, social, and governance initiatives.

Welcome aboard 🚀 — If you feel anything is missing from this KB, raise a PR to update it!
`;

export const aiKnowledgeBase = {
  welcome,
  environmentSetup,
  techStack,
  knowledgeTransfer,
  teamProcesses,
  accessAndCredentials,
  faqs,
  mission,
  learningModules, 
};
