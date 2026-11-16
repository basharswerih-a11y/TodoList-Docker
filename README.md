# Todo List App – Docker

## Project Overview
This project is a simple Todo List web application built with React. It allows users to manage their tasks through a web interface.

The application is containerized using Docker to make it easy to build and run in a consistent environment.

## Technologies Used
- React.js
- JavaScript
- HTML & CSS
- Docker
- Docker Compose
- Nginx

## Project Structure

todo-list/
├── public/
├── src/
├── docs/
│   ├── notes.md
│   └── screenshots/
├── Dockerfile
├── compose.yaml
├── .dockerignore
├── package.json
├── package-lock.json
└── README.md


## Requirements
- Docker Desktop installed and running.
- Git installed (optional, for cloning the repository).

## How to Run the Project

### 1. Clone the Repository

git clone https://github.com/basharswerih-a11y/TodoList-Docker.git
cd TodoList-Docker


### 2. Build the Docker Image

docker compose build

### 3. Run the Container

docker compose up -d


### 4. Open the Application
Open your browser and visit:

http://localhost:3000

## Docker Configuration
- The first stage uses Node.js to install dependencies and build the React application.
- The second stage uses Nginx to serve the production build.
- Port `3000` on the host machine is mapped to port `80` inside the container.
- No environment variables are required.

## Stop the Application

docker compose down


## Author
Bashar Swerih

## GitHub Repository
https://github.com/basharswerih-a11y/TodoList-Docker