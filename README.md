📊 Dashboard App (React + Vite)
A beautiful frontend-only dashboard built with React.js and Vite, featuring:

🔒 Simple user authentication

📈 Dynamic sales data chart

🧑 User profile info

⏰ Live clock + analog clock

☁️ Weather info based on city

🖼 Auto-rotating image carousel

📂 Project Structure
pgsql
Copy
Edit
src/
├── App.jsx
├── index.jsx
├── login/
│   ├── Login.jsx
│   └── Login.css
├── dashboardPages/
│   ├── Dashboard.jsx
│   ├── Dashboard.css
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── MainFile.jsx
│   └── components/
│       ├── ChartCard.jsx
│       ├── ProfileCard.jsx
│       ├── TimeCard.jsx
│       ├── WeatherCard.jsx
│       ├── PictureSlider.jsx
🚀 How to Run Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/dashboard-app.git
cd dashboard-app
Install dependencies:

bash
Copy
Edit
npm install
Start development server:

bash
Copy
Edit
npm run dev
(Default runs at http://localhost:5173)

🎯 Features Implemented
Authentication: Login and SignUp stored using sessionStorage.

Sales Chart: Dynamic chart (toggle between bar and line) using ag-charts-react.

Profile Info: Displays user name, email, password after login.

Clock: Shows current digital time + analog clock using react-clock.

Weather Info: Displays current temperature and weather using WeatherAPI.

Image Carousel: Auto-sliding photo gallery using react-slick.

📸 Dashboard Overview

Feature	Status
User Authentication	✅ Done
Sales Chart (bar/line toggle)	✅ Done
User Profile Display	✅ Done
Real-time Clock + Analog Clock	✅ Done
Weather Info with API	✅ Done
Photo Art Image Carousel	✅ Done
6th Card	❌ Empty / Future Use
🔑 Notes
Weather API Key must be set manually inside WeatherCard.jsx.

Images for the photo carousel should be stored in /public/photos/.

This project is frontend-only — no backend/database.

User session clears on page refresh (uses sessionStorage, not localStorage).

🛠 Tech Stack
React.js

Vite

Tailwind CSS (optional)

ag-charts-react

react-clock

react-slick

📝 Future Improvements (Optional)
Fill 6th card (e.g., World Clock, Device Info, News Feed)

Add dark/light theme toggle

Save user settings (favorite city, profile picture)

Deploy on GitHub Pages or Vercel

🎯 Conclusion
"A minimal and beautiful dashboard app made with React and Vite, featuring authentication, charts, weather, and a photo slider."
