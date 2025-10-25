# AI Coding Assistant Instructions for Slack Clone

## Project Architecture

This is a full-stack Slack clone with separate frontend and backend services:

### Frontend (`/frontend`)
- React + Vite application
- Uses latest React 19.x with modern features
- ESLint configuration for code quality
- Fast Refresh enabled via `@vitejs/plugin-react`

### Backend (`/backend`) 
- Express.js REST API
- MongoDB database (configured via env variables)
- ESM modules enabled (`type: "module"` in package.json)
- Environment configuration in `src/config/env.js`

## Key Workflows

### Development Setup
1. Backend:
```bash
cd backend
npm install
# Create .env file with MONGO_URI, PORT, NODE_ENV
npm run dev  # Starts nodemon dev server
```

2. Frontend:
```bash
cd frontend
npm install
npm run dev  # Starts Vite dev server
```

### Environment Configuration
- Backend config is centralized in `backend/src/config/env.js`
- Required env variables:
  - `MONGO_URI`: MongoDB connection string
  - `PORT`: Server port (defaults to 5002)
  - `NODE_ENV`: Environment name

## Project Conventions

### Module System
- Both frontend and backend use ES Modules (import/export)
- Config imports in backend should use absolute paths (e.g., `import { ENV } from "/config/env.js"`)

### API Structure
- Express routes are defined in `backend/src/server.js`
- Current endpoints:
  - GET `/`: Basic health check endpoint

## Common Tasks

### Adding New API Endpoints
1. Define routes in `backend/src/server.js`
2. Use ES Module syntax for imports
3. Access config via `ENV` object from env.js

### Frontend Development
1. Add new components in `frontend/src/components`
2. Use `.jsx` extension for React components
3. Follow existing ESLint rules (run `npm run lint` to check)

## Key Files
- `backend/src/server.js`: Main Express application setup
- `backend/src/config/env.js`: Environment configuration
- `frontend/src/App.jsx`: Main React component
- `frontend/vite.config.js`: Vite build configuration