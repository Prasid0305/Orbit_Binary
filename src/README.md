# Orbit - Your First Stop in the Company Galaxy

## Team
- **Team Name**: mPACT2WO (Molex)
- **Members**: The team includes roles such as Backend, Frontend, QA, DevOps, and Data Science. The detailed reporting structure for various sub-teams (Corrosion, Air Compliance, Pipeline, Analytics, Platform) can be viewed in the "Know Your Team" section of the application.

## Overview
Orbit is an AI-powered onboarding application designed to help new engineers seamlessly integrate into their teams at Molex. It provides a personalized and interactive experience, guiding new joiners through their first few weeks by consolidating essential information, providing role-specific learning paths, and offering an AI chatbot to answer questions.

The application features:
- A personalized dashboard with onboarding progress.
- Role-based learning paths and first tasks.
- An AI chatbot (Orbit) trained on an internal knowledge base.
- Guides for environment setup and team processes.
- An interactive "Know Your Team" section with reporting structures.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **UI**: ShadCN UI & Tailwind CSS
- **Generative AI**: Genkit with Google's Gemini Models
- **State Management**: React Context for user session data.

## Model & Data Details
- **Model Architecture**: The application utilizes Google's `gemini-2.0-flash` model via the Genkit framework for its chatbot functionality. This is a generative large language model (LLM) optimized for speed and multimodal capabilities.
- **Training/Inference Details**: The model is used purely for inference. It does not undergo any training or fine-tuning within this application. Its primary task is to generate answers based on a prompt that includes the user's question and a curated knowledge base.
- **Datasets Used**: The application does not use a traditional dataset for training. Instead, it relies on a hand-curated knowledge base located in `src/ai/knowledge-base/`. This collection of TypeScript files contains information about team processes, tech stack, learning modules, and FAQs, which is injected into the prompt at runtime to provide context for the LLM.
- **Metrics**: There are no formal evaluation metrics implemented within this project.

## Setup
Follow these steps to get the project running on your local machine.

### 1. Clone the Repository
First, clone the repository to your local system:
```bash
git clone <your-repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
This project uses `pnpm` as the package manager. To install the dependencies, run:
```bash
pnpm install
```
If you don't have `pnpm` installed, you can install it via npm: `npm install -g pnpm`

### 3. Set Up Environment Variables
You'll need a Google AI API key for the chatbot functionality to work.
1.  Create a new file named `.env` in the root of the project.
2.  Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
3.  Add your key to the `.env` file:
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

### 4. Run the Development Servers
The application requires two separate processes to run concurrently.

- **Start the Next.js frontend:**
  ```bash
  pnpm dev
  ```
  The application should now be running at [http://localhost:9002](http://localhost:9002).

- **Start the Genkit AI server:** (in a new terminal)
  ```bash
  pnpm genkit:dev
  ```
  This starts the Genkit development server, allowing the Next.js application to communicate with the AI flows.

## Usage
1.  Navigate to `http://localhost:9002` in your browser.
2.  You will land on the onboarding page. Fill in your name and select your role and team to personalize your experience.
3.  Explore the various sections using the sidebar navigation:
    - **Dashboard**: Get a quick overview of your progress and access quick links.
    - **Orbit Chatbot**: Ask questions about the team, tech stack, or processes.
    - **Environment Setup**: Follow the checklist to prepare your local machine.
    - **Know Your Team**: See the organizational structure for your team.
    - **Knowledge Transfer**: Find learning paths, first tasks, and important documents.

## Known Issues/Limitations
- All external links for learning modules, documents, and videos currently point to a single unified URL (`udemy.com`) as a placeholder. These need to be updated with actual resource links.
- The user's progress on checklists is stored in the component's state and is not persisted. Refreshing the page will reset the progress.
- The team avatars are placeholders from `picsum.photos` and should be replaced with actual team member photos.

## Deployment
This application is configured for deployment using [Firebase App Hosting](https://firebase.google.com/docs/app-hosting).

### 1. Install Firebase CLI
If you haven't already, install the Firebase Command Line Interface (CLI) globally:
```bash
npm install -g firebase-tools
```

### 2. Log in to Firebase
Log in to your Google account using the Firebase CLI:
```bash
firebase login
```

### 3. Deploy the Application
Once you are logged in, you can deploy your application with a single command:
```bash
firebase deploy
```
The CLI will build your Next.js application and deploy it to Firebase App Hosting. Once the deployment is complete, you will be given a live URL where you can access your Orbit application.

## References
- [Next.js Documentation](https://nextjs.org/docs)
- [Genkit Documentation](https://firebase.google.com/docs/genkit)
- [ShadCN UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
