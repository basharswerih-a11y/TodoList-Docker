# Project Development Notes

## 1. Docker Build Issue

During the Docker build process, I faced an error when running `npm ci`.

The error indicated that the package `yaml@2.9.1` was missing from the package-lock.json file.

## 2. How I Solved It

I updated the package-lock.json file using the same Node.js version used in the Docker build environment.

I ran the following command:


docker run --rm -v "${PWD}:/app" -w /app node:22-alpine npm install --package-lock-only


Then, I rebuilt the Docker image:


docker compose build --no-cache


The build completed successfully.

## 3. What I Learned

- How to write a Dockerfile for a React application.
- How to build and run Docker containers.
- How to use Docker Compose.
- How to publish a project to GitHub.
- Why package-lock.json must be synchronized with package.json.
- How to troubleshoot Docker build errors.

## 4. GitHub

Repository: https://github.com/basharswerih-a11y/TodoList-Docker