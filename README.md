# Studio Media Wave

Studio Media Wave is a premium podcast and video recording studio booking platform. The platform is divided into a modern React frontend and a robust Express.js/MongoDB backend.

## Architecture

- **Frontend**: A modern React Single Page Application (SPA) built with Vite. Features a responsive, clean, white-themed UI for browsing studios, booking sessions, and contacting the team.
- **Backend**: An Express.js REST API that connects to MongoDB to securely store booking requests and contact messages.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/) running locally on port 27017

### Installation & Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd "Studio Media Wave"
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```
   Start the backend server (runs on `http://localhost:3000`):
   ```bash
   npm start
   ```

3. **Frontend Setup**:
   Open a new terminal window/tab:
   ```bash
   cd frontend-new
   npm install
   ```
   Start the frontend development server (runs on `http://localhost:5173`):
   ```bash
   npm run dev
   ```

## Features
- **Browse Studios**: View detailed setups for Studio A and Studio B.
- **Booking System**: Select your studio, date, and time, and submit your booking to the database.
- **Contact Form**: Reach out to the team directly from the website.
- **Premium Gallery**: View high-quality photos of the studio setups.

## Tech Stack
- **Frontend**: React, Vite, HTML5, CSS3
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB

---
&copy; 2026 Studio Media Wave. All rights reserved.
