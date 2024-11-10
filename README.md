# DigiProc - NestJS Server with Prisma and PostgreSQL (Neon)

This project is a NestJS server application that interacts with a PostgreSQL database using Prisma. 
It enables user account creation, login, product browsing, and the ability to add reviews to products. The application uses JWT with Passport for authentication.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Environment Variables](#environment-variables)
  - [Running Prisma Migrations](#running-prisma-migrations)
  - [Running the Server](#running-the-server)

---

## Features

- User account creation and login with JWT authentication.
- Fetch all products from the database.
- Add reviews to products.

## Tech Stack

- **Backend**: [NestJS](https://nestjs.com/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL (hosted on [Neon](https://neon.tech/))
- **Authentication**: JWT (using Passport strategy)

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20.18 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. **Fork the repository**:
   Start by forking this repository to your GitHub account.

2. **Clone the repository**:
   ```bash
   git clone https://github.com/Hidnish/digiproc-server.git
   cd <your-forked-repo>

3. **Install dependencies**:
	```bash
   npm install
	 #or
   yarn install
	 ```
## Database Setup

1. **Using Neon**:
   - Create a PostgreSQL database using [Neon](https://neon.tech/).
   - Obtain the connection URL for your Neon database.

## Environment Variables

Create a `.env` file in the project root and add the following:

```dotenv
# Prisma Database URL
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?schema=public"

# JWT Secret Key
JWT_SECRET="your_jwt_secret_key"

# JWT expiration time
JWT_EXPIRATION=10h

# Port for the server
PORT=3001

````

## Running Prisma Migrations

1. **Generate Prisma client**:
   ```bash
   npx prisma generate
1. **Apply migrations**:
	```bash
	npx prisma migrate dev
## Running The Server

**Install dependencies**:

 ```bash
npm install
#or
yarn install
 ```

