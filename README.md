# Swaati Enterprises - Enterprise System Architecture

This repository contains the production-ready modular architecture for **Swaati Enterprises**, consisting of the **Public Website**, **Internal CRM**, **Backend API**, and **Shared Libraries**.

---

## 🏗 System Architecture

```text
Swaati Enterprises
│
├── Public Website (website/)
│   └── Next.js + React (Port 3000)
│
├── Internal CRM (crm/)
│   └── Next.js + React (Port 3001)
│
├── Backend API (backend/)
│   └── Node.js + Express + PostgreSQL (Port 4000)
│
└── Shared Resources (shared/)
    └── Types, Constants, RBAC Definitions
```

---

## 🚀 Applications & Ports

| Application | Technology Stack | Local Development URL | Directory |
| :--- | :--- | :--- | :--- |
| **Public Website** | Next.js 14, React, Tailwind CSS | [http://localhost:3000](http://localhost:3000) | `website/` |
| **Internal CRM** | Next.js 14, React, Tailwind CSS | [http://localhost:3001](http://localhost:3001) | `crm/` |
| **Backend API** | Node.js, Express, PostgreSQL | [http://localhost:4000](http://localhost:4000) | `backend/` |

---

## 🛠 Local Development Commands

You can run each application independently:

### 1. Public Website
```bash
npm run dev:website
# OR
cd website && npm run dev
```

### 2. Internal CRM
```bash
npm run dev:crm
# OR
cd crm && npm run dev
```

### 3. Backend API
```bash
npm run dev:backend
# OR
cd backend && npm run dev
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
