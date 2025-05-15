# InfoDeck - Personal Dashboard Web App

## Project Overview
InfoDeck is a personal dashboard web app that allows users to customize and view panels with information they care about - from sports results and game releases to movie premieres and more. Panels are modular and plug-and-play, letting users tailor their dashboard to match their interests. The app will support both guest mode and authenticated mode, making it easy to try out or save custom dashboards.

## Architecture Plan
- **Frontend:** 
  - React (TypeScript) - Modular design with React Router, Zustand for state management, and TanStack Query for API data handling.
  - Hosted on Azure Static Web Apps.

- **Backend:** 
  - FastAPI (Python) with RESTful API structure.
  - Dockerized for scalable deployment (Gunicorn + Uvicorn).
  - JWT Authentication (validated using Supabase-provided JWT).

- **Database:** 
  - Supabase PostgreSQL (Managed PostgreSQL).
  - User authentication and JWT management handled by Supabase.

- **Infrastructure:**
  - Azure Cloud:
    - Frontend: Azure Static Web Apps.
    - Backend: Azure App Service (Docker Container).
    - Database: Supabase PostgreSQL (Managed).

- **CI/CD:**
  - GitHub Actions for automated build and deployment (both frontend and backend).
  - Separate workflows for frontend (React) and backend (FastAPI).

## Deployment Workflow
1. **Frontend:** 
   - Hosted on Azure Static Web Apps.
   - Automated deployment triggered on push to main using GitHub Actions.
     
2. **Backend:** 
   - Dockerized FastAPI application (Gunicorn + Uvicorn).
   - Deployed to Azure App Service using Docker image.
     
3. **CI/CD Pipeline:**
   - GitHub Actions configured for both frontend and backend.
   - Automated build, test, and deployment for each push to main.

## Local Setup Instructions (WIP)
Setup instructions are currently being finalized and will be added soon.
