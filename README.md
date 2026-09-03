# Swaati Enterprises - Enterprise System Architecture & SEMS

This repository contains the modular architecture for **Swaati Enterprises**, consisting of the **Public Website**, **SEMS (Swaati Enterprises Management System - Task Management & CRM)**, **Backend API**, and **Shared Libraries**.

---

## 🏗 System Architecture

```text
Swaati Enterprises
│
├── Public Website (website/)
│   └── Next.js + React (Port 3000)
│   └── Direct route /sems proxies to SEMS CRM
│
├── SEMS CRM & Task Management (crm/)
│   └── Next.js + React (Port 3001, BasePath: /sems)
│
├── Backend API (backend/)
│   └── Node.js + Express + PostgreSQL (Port 4000)
│
└── Shared Resources (shared/)
    └── Types, Constants, RBAC Definitions
```

---

## 🚀 Applications & URLs

| Application | Technology Stack | Local URL | Direct Port | Directory |
| :--- | :--- | :--- | :--- | :--- |
| **Public Website** | Next.js 14, React, Tailwind CSS | [http://localhost:3000](http://localhost:3000) | `3000` | `website/` |
| **SEMS Portal (via Website)** | Next.js 14, Proxy Route | [http://localhost:3000/sems](http://localhost:3000/sems) | `3000` -> `3001` | `website/` & `crm/` |
| **SEMS Portal (Direct)** | Next.js 14, React, Tailwind CSS | [http://localhost:3001/sems](http://localhost:3001/sems) | `3001` | `crm/` |
| **Backend API** | Node.js, Express, PostgreSQL | [http://localhost:4000](http://localhost:4000) | `4000` | `backend/` |

---

## 🛠 Local Development Commands

### 🌟 Run Everything (Website + SEMS)
```bash
npm run dev
```

### Run Individual Apps:

#### 1. Public Website
```bash
npm run dev:website
```

#### 2. SEMS Portal / CRM
```bash
npm run dev:sems
# OR
npm run dev:crm
```

#### 3. Backend API
```bash
npm run dev:backend
```

---

## 🔐 Environment Variables

Copy `.env.example` to create your local `.env` configuration:

```env
PORT_WEBSITE=3000
PORT_CRM=3001
PORT_BACKEND=4000

NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d

DB_HOST=localhost
DB_PORT=5432
DB_NAME=swaatienterprises_db
DB_USER=postgres
DB_PASSWORD=postgres
```

---

## 📡 Versioned API Endpoints (`/api/v1/`)

The backend API follows a modular versioned route structure:

- `GET /api/v1/health` - API server health check
- `/api/v1/auth` - Authentication & token verification
- `/api/v1/employees` - Employee management
- `/api/v1/attendance` - Attendance tracking
- `/api/v1/tasks` - Task allocation & management
- `/api/v1/leads` - Lead & enquiry management
- `/api/v1/customers` - Customer database
- `/api/v1/follow-ups` - Lead follow-up tracking
- `/api/v1/products` - Product catalog data
- `/api/v1/files` - File upload & document storage
- `/api/v1/reports` - Analytics & reporting

---

## 🔒 Security & RBAC Architecture

- **Token Authentication**: JWT middleware (`backend/src/middleware/auth.js`).
- **Server-Side Authorization**: Role-Based Access Control (`backend/src/middleware/rbac.js`).
- **Supported Roles**: `ADMIN`, `MANAGER`, `EMPLOYEE`.
- **Domain Isolation**: The public website and CRM interact with database models only through the Backend API layer.

---

## 🌐 Production Routing Vision

- **Public Website**: `https://swaatienterprises.in/`
- **Internal CRM**: `https://swaatienterprises.in/app`
- **Backend API**: `https://api.swaatienterprises.in/`
