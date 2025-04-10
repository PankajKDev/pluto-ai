# Pluto AI

Pluto AI is an advanced interview application that leverages AI to conduct mock interviews, providing insightful feedback and analytics to improve your performance.

---

## Features

- **AI-Powered Interviews:** Conduct interviews using advanced AI models like VAPI and Gemini API.
- **Performance Analytics:** Receive detailed feedback on answers, tone, and response time.
- **Customizable Interview Templates:** Tailor interview questions to specific roles or industries.
- **Real-Time Feedback:** Get instant suggestions for improvement during mock interviews.
- **Multi-Platform Support:** Fully responsive design for desktop, tablet, and mobile devices.

---

## Technology Stack

### Frontend

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui aceternity/ui

### Backend

- **API:** VAPI and Gemini API for AI functionalities
- **Database:** MongoDB
- **Authentication:** Clerk Auth

### DevOps

- **Deployment:** Vercel

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PankajKDev/pluto-ai.git
   cd pluto-ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:

   ```env
   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # VAPI
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
   NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id

   # Gemini
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_generative_ai_api_key

   # MongoDB
   DATABASE_URL=your_database_url
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Contact

For questions or feedback, reach out at [pankajkdev.0000@gmail.com](mailto:pankajkdev.0000@gmail.com).
