# Primetrade.ai Frontend Developer Intern Assignment
## Web App with Authentication & Task Management Dashboard

This repository contains the solution for the Frontend Developer Intern assignment. It is a modern, full-stack application demonstrating scalable architecture, secure authentication, and a responsive task management dashboard.

### 🚀 Live Deployment
- **Frontend**: [https://primetrade-todo.netlify.app](https://primetrade-todo.netlify.app)
- **Backend API**: [https://primetrade-ai-server.onrender.com/api](https://primetrade-ai-server.onrender.com)

---

## 🎯 Assignment Deliverables Checklist

### ✅ Frontend Architecture
- **Framework**: Built with **React.js (Vite)** for optimal performance.
- **Styling**: **TailwindCSS** used for a fully responsive, mobile-first design.
- **Validation**: Comprehensive form validation on both client (React) and server sides.
- **Routing**: **React Router** implementation with **Protected Routes** ensuring the dashboard is inaccessible without valid authentication.

### ✅ Backend Implementation
- **Tech Stack**: **Node.js** & **Express** server providing a robust API.
- **Database**: **MongoDB** (Mongoose) for flexible and scalable data storage.
- **Authentication**: Secure **JWT-based system**.
- **API Endpoints**:
  - User Registration & Login (JWT).
  - Profile Management (`/user/me`).
  - Full CRUD capabilities for the 'Task' entity.

### ✅ Dashboard Capabilities
- **User Profile**: Fetches and displays authenticated user details.
- **Task Management**: Create, Read, Update, and Delete tasks.
- **Search & Filter**: Real-time filtering and searching of tasks.
- **Session**: Secure logout flow clearing http-only cookies/tokens.

### ✅ Security & Best Practices
- **Password Security**: **Bcrypt** hashing implemented before database storage.
- **Auth Security**: **JWT** middleware protects private routes; tokens stored in **HTTP-Only cookies** to prevent XSS.
- **Error Handling**: Centralized error handling providing clear feedback to the UI.

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React.js, Vite, TailwindCSS, Axios, React Router, React Hot Toast |
| **Backend** | Node.js, Express.js, JWT, Bcrypt, Cookie-Parser |
| **Database** | MongoDB, Mongoose |
| **Deployment** | Netlify (Client), Render (Server) |

---

## 🏗 Project Structure (Scalable Architecture)

The project is structured to separate concerns, making it easy to scale and maintain.

```
├── client/                    # Frontend Application
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.jsx      # Centralized API configuration
│   │   ├── components/
│   │   │   ├── Loader.jsx     # Loading UI component
│   │   │   ├── Login.jsx      # Authentication forms
│   │   │   ├── Navbar.jsx     # Navigation & Search
│   │   │   └── Register.jsx   # Registration forms
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx  # Main Task Board
│   │   │   └── NotFound.jsx   # 404 Error Page
│   │   ├── App.jsx            # Main App Component
│   │   ├── index.css          # Tailwind Directives
│   │   └── main.jsx           # Entry Point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── Server/                    # Backend API
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── task.controller.js     # Task Logic
│   │   │   └── userAuth.controller.js # Auth Logic
│   │   ├── DB/
│   │   │   └── db.js                 # Database Connection
│   │   ├── middleware/
│   │   │   └── userAuth.middleware.js # JWT Protect Middleware
│   │   ├── model/
│   │   │   ├── task.model.js          # Task Schema
│   │   │   └── user.model.js          # User Schema
│   │   ├── routers/
│   │   │   ├── task.route.js          # Task Routes
│   │   │   └── user.route.js          # User Routes
│   │   └── app.js                     # Express App Setup
│   ├── server.js                      # Server Entry Point
│   └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB Connection String

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd "Primetrade test"
   ```

2. **Backend Setup**
   ```bash
   cd Server
   npm install
   
   # Create a .env file in /Server with:
   PORT=3000
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_secure_secret_key
   CLIENT_URL=http://localhost:5173
   NODE_ENV=development
   
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   
   # Create a .env file in /client with:
   VITE_API_URL=http://your-server-domain/api
   
   npm run dev
   ```

---

## 📖 API Documentation

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/user/register` | Register new user | ❌ |
| POST | `/api/user/login` | Login user | ❌ |
| GET | `/api/user/me` | Get current profile | ✅ |
| GET | `/api/tasks` | Get all tasks | ✅ |
| POST | `/api/tasks` | Create task | ✅ |
| PUT | `/api/tasks/:id` | Update task | ✅ |
| DELETE | `/api/tasks/:id` | Delete task | ✅ |

---

## 📈 Scalability Strategy & Production Notes

To ensure this application scales effectively for production use, the following strategies are implemented and recommended:

1.  **Stateless Authentication (JWT)**:
    -   Using JWTs allows the backend to be stateless. This means we can horizontally scale the backend across multiple servers or containers (e.g., using Kubernetes or Docker Swarm) without worrying about sticky sessions.

2.  **Database Indexing & Optimization**:
    -   MongoDB schemas are designed with `ref` relationships (User <-> Tasks). For high-volume production, indexes on `userId` and `status` fields would be strictly enforced to ensure query performance remains O(log n) as dataset grows.

3.  **Frontend Optimization**:
    -   The frontend connects to a centralized API URL. In production, static assets are served via CDN (Netlify/Vercel) while API requests hit the backend.
    -   Lazy loading of routes (React.lazy) would be implemented for larger features to reduce initial bundle size.

4.  **Environment Isolation**:
    -   Strict separation of Development and Production environments using `.env` variables ensures credentials remain secure and debugging tools are disabled in production.

---

## 🔮 Future Improvements

To further enhance the application's functionality and user experience, the following features are planned:

1.  **Testing Suite**:
    -   Implement Unit Tests (Jest/React Testing Library) for frontend components.
    -   Integration Tests (Supertest) for backend API endpoints to ensure reliability.

2.  **Advanced Task Management**:
    -   **Drag-and-Drop**: Implement Kanban-style board for better task visualization.
    -   **Due Dates & Reminders**: Specific deadlines and email notifications.
    -   **Categories & Tags**: Custom tagging system for better organization.

3.  **Performance & UX**:
    -   **PWA Support**: Make the application installable and capable of working offline.
    -   **Dark/Light Mode**: User preference toggle for theme.
    -   **Infinite Scroll**: For better performance with large task lists.

4.  **DevOps & CI/CD**:
    -   Automated testing and deployment pipelines via GitHub Actions.
    -   Docker containerization for consistent development and deployment environments.

---

**Submitted by:** Gobind Choudhary
