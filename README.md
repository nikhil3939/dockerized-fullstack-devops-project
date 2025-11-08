# Dockerized Full-Stack DevOps Project on AWS EC2

A complete, beginner-friendly **DevOps project** designed to demonstrate real-world cloud deployment, containerization, automation, and reverse proxy configuration. This project is fully deployed on **AWS EC2**, uses **Docker Compose**, integrates **Nginx Reverse Proxy**, and includes a **GitHub Actions CI/CD pipeline**.

This README is written to impress senior engineers, managers, and CTOs by clearly explaining the architecture, components, workflows, and value of your solution.

---

## ✅ Project Overview

This project demonstrates a production-style deployment pipeline for a simple full-stack application. It includes:

* **Frontend** (HTML/CSS/JS served via Nginx)
* **Backend API** (Node.js + Express)
* **Database** (MongoDB container)
* **Nginx Reverse Proxy** routing frontend + backend
* **Docker Compose** for multi-container orchestration
* **GitHub Actions CI/CD Pipeline** for automated deployments to EC2
* **AWS EC2 Linux Instance** as deployment server

This setup mirrors essential patterns used in real companies and showcases your DevOps capabilities as a fresher.

---

## ✅ Architecture Diagram

```
GitHub Repo → GitHub Actions CI/CD → AWS EC2
                                 │
                                 ▼
                       Docker Compose (4 services)
┌──────────────────────────────────────────────────────────────┐
│ frontend (nginx)  |  backend (node.js)  |  mongo  |  nginx proxy │
└──────────────────────────────────────────────────────────────┘
```

---

## ✅ Technology Stack

### **Infrastructure:**

* AWS EC2 (Amazon Linux)

### **DevOps & Automation:**

* Docker
* Docker Compose
* GitHub Actions (CI/CD)
* Nginx Reverse Proxy

### **Application:**

* Node.js + Express backend
* MongoDB database
* HTML/CSS/JS frontend

---

## ✅ Project Structure

```
dockerized-fullstack-devops-project/
│
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── Dockerfile
│   └── index.html
│
├── nginx/
│   └── nginx.conf
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
└── docker-compose.yml
```

---

## ✅ Frontend

A simple form-based UI that sends messages to the backend API.

* Served via Nginx
* Communicates with backend through `/api` route
* Routed by reverse proxy

---

## ✅ Backend (Node.js + Express)

The backend exposes:

* `GET /api/health` → service status
* `POST /api/message` → stores message in MongoDB

Connected to MongoDB through the internal Docker network.

---

## ✅ Nginx Reverse Proxy

Handles routing:

* `/` → frontend container
* `/api/` → backend container

This enables a clean single-domain architecture commonly used in production.

---

## ✅ Docker Compose (Multi-Service Orchestration)

Runs all services using one command:

```
docker-compose up -d
```

Services include:

* frontend
* backend
* mongo
* nginx reverse proxy

---

## ✅ GitHub Actions CI/CD Pipeline

The pipeline automates deployments on each push to the `main` branch.

**Pipeline Tasks:**

1. Checkout repository
2. Copy project files to EC2 over SCP
3. SSH into EC2
4. Rebuild and restart Docker Compose

This ensures zero manual deployment steps.

---

## ✅ Secrets Configuration (GitHub)

You must add the following repository secrets:

* **EC2_HOST** → your EC2 public IP
* **EC2_KEY** → contents of your PEM private key

These are used by GitHub Actions for secure SSH connectivity.

---

## ✅ How Deployment Works

### 1. Developer pushes code to GitHub `main` branch

### 2. GitHub Actions triggers automatically

### 3. Pipeline connects to EC2 via SSH

### 4. Latest code is copied to EC2

### 5. Docker Compose rebuilds and restarts containers

### 6. Updated application is live on EC2 public IP

This demonstrates full automation.

---

## ✅ Commands Used (Reference)

Install Docker:

```
sudo apt install docker docker.io -y
```

Install Docker Compose:

```
sudo apt install docker-compose -y
```

Run application:

```
docker-compose up -d --build
```

View logs:

```
docker logs backend
```

Stop application:

```
docker-compose down
```

---

## ✅ This Project Incudes

* practical DevOps implementation
* Uses real cloud deployment (AWS EC2)
* Demonstrates multi-container architecture
* Includes CI/CD automation
* Uses standard industry tools (Docker, Nginx)
* Clean architecture & documentation

---

## ✅ Conclusion

This project is a complete, real-world DevOps workflow demonstrating:

* Deployment
* Automation
* Infrastructure understanding
* Containerization
* Reverse proxy routing
* CI/CD pipelines


