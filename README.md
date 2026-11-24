# Portfolio Website

A modern, fully responsive **Portfolio Website** built with the **MERN Stack** (MongoDB, Express.js, React.js, and Node.js).

Designed for developers, designers, freelancers, and professionals, this platform provides a customizable way to showcase projects, technical skills, services, work experience, and personal branding.

The application includes a dedicated **Admin Dashboard** for managing projects, profile information, social links, resume uploads, and website content. Visitors can explore portfolio content, download resumes, and submit work inquiries.

---

## 🚀 Features

### 👤 User Features

- User registration and login
- Email verification with OTP
- Forgot password and password reset
- Google OAuth authentication
- GitHub OAuth authentication
- Browse featured and latest projects
- Project search and category filtering
- Server-side pagination
- Detailed project pages
- Skills and services showcase
- Professional experience section
- About page
- Contact form
- Resume/CV download
- Social media links
- Responsive design
- Secure logout

### 👨💼 Admin Features

- Single-admin registration restriction
- Secure authentication
- Project management:
  - Add projects
  - View projects
  - Update projects
  - Delete projects
- Profile management
- Resume upload and update
- About section management
- Portfolio information updates
- Password reset via OTP
- Secure logout

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React.js | User interface |
| Tailwind CSS | Styling |
| React Router DOM | Client-side routing |
| Context API | State management |
| Axios | HTTP requests |
| Code Splitting | Performance optimization |

### Admin Dashboard

| Technology | Purpose |
|---|---|
| React.js | Admin interface |
| Tailwind CSS | Styling |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| REST APIs | API architecture |
| ES Modules | Module system |

### Database & Storage

| Technology | Purpose |
|---|---|
| MongoDB Atlas | Database |
| Cloudinary | Image and file storage |
| Multer | File upload handling |

### Authentication & Security

| Technology | Purpose |
|---|---|
| JWT | Authentication |
| bcrypt | Password hashing |
| HTTP Cookies | Token storage |
| Google OAuth | Google authentication |
| GitHub OAuth | GitHub authentication |
| Upstash Redis | API rate limiting |

### Email Services

| Technology | Purpose |
|---|---|
| Nodemailer | Email delivery |
| SMTP | Email transport |

### Deployment

| Component | Platform |
|---|---|
| Public frontend | Vercel |
| Admin dashboard | Vercel |
| Backend API | Render |
| Database | MongoDB Atlas |

---

## 📂 Project Structure

```text
Portfolio-Website/
├── frontend/           # Public portfolio website
├── admin/              # Admin dashboard
├── backend/            # Express API and business logic
└── README.md
```

---

## ✨ Core Functionalities

### 🏠 Portfolio Home Page

Visitors can explore:

- Latest projects
- Featured projects
- Technical skills
- Services offered
- Professional highlights
- Personal branding information

### 📁 Project Showcase

Each project can include:

- Project images
- Project title
- Detailed description
- Features list
- Technology stack
- Category information
- Latest project flag
- Coming soon flag

**Project information structure:**

| Field | Description |
|---|---|
| Project Name | Name of the project |
| Category | Project category |
| Description | Detailed project description |
| Features | List of project features |
| Technology Stack | Technologies used |
| Project Images | Images associated with the project |
| Status | Project status |

### 👨💻 About Section

The About page displays:

- Professional biography
- Work experience
- Technical skills
- Career highlights
- Personal information

### 📄 Resume Management

Visitors can:

- View professional information
- Download the resume/CV
- Access social profiles
- Contact the portfolio owner

Administrators can upload and update the resume through the Admin Dashboard.

### 📬 Contact System

The contact form allows visitors to:

- Send work inquiries
- Request freelance services
- Discuss collaborations
- Submit hiring requests

Messages can be delivered through configured SMTP email services.

---

## 🔐 Authentication System

### 👤 User Authentication

The application supports the following authentication methods.

**Email and password authentication**

- User registration
- User login
- Email verification with OTP
- Password reset
- Secure logout

**OAuth authentication**

Supported providers:

- Google OAuth
- GitHub OAuth

### 👨💼 Admin Authentication

Admin authentication includes:

- `ADMIN_EMAIL` restriction
- Single-admin account enforcement
- Admin registration and login
- Session verification
- OTP-based password reset
- JWT authentication
- Protected admin routes

---

## 👨💼 Admin Dashboard

The Admin Dashboard provides centralized management of portfolio content.

### 📁 Project Management

Administrators can create and manage projects with the following information:

- Project title
- Description
- Category
- Technology stack
- Project images
- Latest project flag
- Coming soon flag

**Available operations:**

| Operation | Description |
|---|---|
| Create | Add new projects |
| Read | View existing projects |
| Update | Modify project information |
| Delete | Remove projects |

### 👤 Profile Management

Administrators can update:

- Name
- Biography
- Technical skills
- Work experience
- Services
- Social media links
- Resume/CV

### 📄 Resume Management

Administrators can:

- Upload a PDF resume
- Update the existing resume
- Manage the downloadable CV
- Store professional documents

---

## 📱 Pages & Screens

### User Frontend

| Page | Description |
|---|---|
| Register | User registration |
| Login | User authentication |
| Home | Portfolio overview |
| Projects | Project listing |
| Project Detail | Individual project information |
| About | Professional information |
| Contact | Contact form |
| Privacy Policy | Privacy information |
| Forgot Password | Password recovery |
| Email Verification | OTP verification |

### Admin Dashboard

| Page | Description |
|---|---|
| Register | Admin registration |
| Login | Admin authentication |
| Add Project | Create a new project |
| Project List | Manage projects |
| Update Project | Edit an existing project |
| Profile Management | Update portfolio information |
| Resume Upload | Upload and manage resume |
| Forgot Password | Password recovery |
| OTP Verification | Verify password reset OTP |

---

## 🌐 API Architecture

The backend follows a REST API architecture, with separate routes for user and admin operations.

### Base Routes

```js
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
```

### 👤 User APIs

**Base URL:** `/api/v1/user`

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/register` | Register user |
| `POST` | `/login` | User login |
| `GET` | `/verify` | Verify user session |
| `POST` | `/logout` | Logout user |
| `GET` | `/profile` | Get user profile |
| `GET` | `/user-profile` | User profile alias |
| `GET` | `/admin-profile` | Get admin profile |
| `GET` | `/send-verify-email-otp` | Send verification OTP |
| `POST` | `/verify-email-otp` | Verify email OTP |
| `POST` | `/send-reset-password-otp` | Send password reset OTP |
| `POST` | `/verify-reset-password-otp` | Verify reset OTP |
| `POST` | `/reset-password` | Reset password |
| `GET` | `/allprojects` | Get projects |
| `POST` | `/send-contact-message` | Send contact message |
| `GET` | `/google` | Start Google OAuth |
| `GET` | `/google/callback` | Google OAuth callback |
| `GET` | `/github` | Start GitHub OAuth |
| `GET` | `/github/callback` | GitHub OAuth callback |

### 👨💼 Admin APIs

**Base URL:** `/api/v1/admin`

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/register` | Register admin |
| `POST` | `/login` | Admin login |
| `GET` | `/verify` | Verify admin session |
| `POST` | `/logout` | Logout admin |
| `GET` | `/profile` | Get admin profile |
| `PATCH` | `/updateprofile` | Update profile |
| `POST` | `/addproject` | Add project |
| `PATCH` | `/updateproject/:id` | Update project |
| `DELETE` | `/deleteproject/:id` | Delete project |
| `GET` | `/allprojects` | Get projects |
| `POST` | `/send-reset-password-otp` | Send password reset OTP |
| `POST` | `/verify-reset-password-otp` | Verify reset OTP |
| `POST` | `/reset-password` | Reset password |

---

## ☁️ Database & Storage

### MongoDB Atlas

MongoDB Atlas stores the application's data, including:

- User accounts
- Admin accounts
- Portfolio projects
- Contact requests
- Skills and services information
- Social links
- Resume URLs
- Profile metadata

### Cloudinary

Cloudinary is used to store and manage:

- Project images
- Resume PDFs
- Media assets
- Uploaded files

---

## 📧 Email Services

The application uses **Nodemailer** with **SMTP** for email delivery.

Supported email operations include:

- Email verification OTPs
- Password reset OTPs
- Contact form messages
- Account notifications

---

## ⚙️ Environment Variables

Configure the following environment variables before running the application.

### Backend — `backend/.env`

```env
PORT=

ADMIN_EMAIL=

MONGODB_URI=
DB_NAME=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_CALLBACK_URL=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SENDER_EMAIL=
```

### Frontend — `frontend/.env`

```env
VITE_BACKEND_URL=http://localhost:8002
```

### Admin Dashboard — `admin/.env`

```env
VITE_BACKEND_URL=http://localhost:8002
```

> **Note:** Update the backend URL according to your local or production deployment environment.

---

## 🚀 Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Jabbirkhan/Full-Stack-Portfolio-Website-MERN-STACK-.git
cd portfolio-website
```

### 2. Install Dependencies

Install dependencies separately for each application.

**Backend**

```bash
cd backend
npm install
```

**Frontend**

```bash
cd frontend
npm install
```

**Admin Dashboard**

```bash
cd admin
npm install
```

### 3. Configure Environment Variables

Create the following environment files:

```text
backend/.env
frontend/.env
admin/.env
```

Configure the required credentials for:

- MongoDB Atlas
- Cloudinary
- SMTP
- Google OAuth
- GitHub OAuth
- Upstash Redis

### 4. Start the Backend Server

```bash
cd backend
npm run server
```

### 5. Start the Frontend

Open a separate terminal:

```bash
cd frontend
npm run dev
```

### 6. Start the Admin Dashboard

Open another terminal:

```bash
cd admin
npm run dev
```

The frontend, backend, and admin dashboard run as separate applications.

---

## 🔒 Security Features

The application includes several security mechanisms:

- bcrypt password hashing
- JWT cookie-based authentication
- Protected routes
- Google and GitHub OAuth authentication
- Email verification
- OTP-based password recovery
- File upload validation
- API rate limiting with Upstash Redis
- Input validation
- Centralized error handling

---

## 📱 Responsive Design

The application is designed to provide a consistent experience across different screen sizes.

Supported devices:

- Desktop computers
- Laptops
- Tablets
- Mobile devices

---

## ☁️ Deployment

The application uses the following deployment architecture:

| Component | Platform |
|---|---|
| Public frontend | Vercel |
| Admin dashboard | Vercel |
| Backend REST API | Render |
| Database | MongoDB Atlas |
| File and media storage | Cloudinary |

---

## 🎨 Customization Guide

The portfolio can be customized according to individual professional requirements.

Administrators can manage:

- Personal information
- Professional biography
- Technical skills
- Work experience
- Services
- Social media links
- Resume/CV
- Portfolio projects
- Project categories
- Project images

All supported content can be managed through the Admin Dashboard.

---

## ✅ Testing Checklist

### Authentication

- [ ] User registration
- [ ] User login
- [ ] User logout
- [ ] Email verification
- [ ] Password reset
- [ ] Google OAuth
- [ ] GitHub OAuth
- [ ] Admin authentication

### Portfolio Features

- [ ] Project creation
- [ ] Project editing
- [ ] Project deletion
- [ ] Image uploads
- [ ] Resume upload
- [ ] Resume download
- [ ] Category filtering
- [ ] Server-side pagination

### General

- [ ] Contact form email delivery
- [ ] Responsive layouts
- [ ] Production environment configuration

---

## 🚀 Future Enhancements

Potential features for future versions:

- Blog integration
- Testimonials section
- Client reviews
- Project analytics
- Dark mode
- Multi-language support
- Project tags and advanced search
- Downloadable portfolio PDF
- Multi-user portfolio support

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨💻 Author

Developed using the MERN Stack, including:

- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Cloudinary
- JWT authentication
- Google and GitHub OAuth
- Tailwind CSS

A customizable portfolio solution for developers, designers, freelancers, and professionals looking to showcase their work, skills, and professional experience online.

**Built with ❤️ using the MERN Stack.**
