# Orbit - Your First Stop in the Company Galaxy

Orbit is an AI-powered onboarding application designed to help new engineers seamlessly integrate into their teams. It provides a personalized and interactive experience, guiding new joiners through their first few weeks.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** ShadCN UI & Tailwind CSS
- **Generative AI:** Genkit with Google's Gemini
- **State Management:** React Context

## Getting Started

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

### 4. Run the Development Server

Now you can start the development server:

```bash
pnpm dev
```

The application should now be running at [http://localhost:9002](http://localhost:9002).

### 5. Start the Genkit AI server

For the AI chatbot to work, you also need to run the Genkit server in a separate terminal:

```bash
pnpm genkit:dev
```

This will start the Genkit development server, allowing the Next.js application to communicate with the AI flows.

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
