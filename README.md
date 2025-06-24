# Login Frontend - Next.js Application

A modern, responsive login and signup frontend built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🔐 Secure user authentication (login/signup)
- 🎨 Modern, responsive UI design
- ✅ Form validation with real-time feedback
- 🔄 Automatic token refresh
- 📱 Mobile-friendly interface
- 🚀 Built with Next.js 15.3.4 and TypeScript

## Tools Used

This project leverages the following key technologies and libraries:

- **Next.js 15.3.4**: A React framework for building full-stack web applications.
- **React 19.0.0 & React DOM 19.0.0**: JavaScript libraries for building user interfaces.
- **TypeScript 5**: A strongly typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS 4.1.10**: A utility-first CSS framework for rapidly building custom designs.
- **`@hookform/resolvers` 5.1.1**: Integrates schema validation libraries with React Hook Form.
- **`axios` 1.10.0**: A promise-based HTTP client for the browser and Node.js.
- **`js-cookie` 3.0.5**: A simple, lightweight JavaScript API for handling browser cookies.
- **`react-hook-form` 7.58.1**: A performant, flexible, and extensible forms library for React.
- **`zod` 3.25.67**: A TypeScript-first schema declaration and validation library.
- **ESLint 9**: For identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **PostCSS 8.5.6 & Autoprefixer 10.4.21**: Tools for transforming CSS with JavaScript.

## Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Backend API running (see `login-backend` repository for setup instructions)

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/login-frontend.git
    cd login-frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up environment variables:
    ```bash
    cp .env.example .env.local
    ```
    Edit `.env.local` and update the `NEXT_PUBLIC_API_URL` to point to your backend API.

4.  Start the development server:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable              | Description     | Default             |
| :-------------------- | :-------------- | :------------------ |
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:3001` |

## Available Scripts

-   `npm run dev` - Starts the development server with Turbopack.
-   `npm run build` - Builds the application for production.
-   `npm run start` - Starts the Next.js production server.
-   `npm run lint` - Runs ESLint to check for code quality issues.

## Future Scope

This project provides a solid foundation for a login and signup system. Future enhancements could include:

-   **Two-Factor Authentication (2FA)**: Implement additional security layers for user logins.
-   **Social Logins**: Integrate authentication via Google, GitHub, Facebook, etc.
-   **Password Reset Functionality**: Add a secure way for users to reset forgotten passwords.
-   **User Profile Management**: Allow users to view and update their profile information.
-   **Role-Based Access Control (RBAC)**: Implement different user roles with varying permissions.
-   **Email Verification**: Send verification emails upon registration to confirm user identity.
-   **Improved UI/UX**: Further refine the user interface and experience with more animations, transitions, and accessibility features.
-   **Unit and Integration Tests**: Expand test coverage for both frontend components and API integrations.
-   **Containerization**: Dockerize the application for easier deployment and scalability.
-   **CI/CD Pipeline Enhancements**: Automate deployment to various environments (staging, production).

## Contributing

Contributions are welcome! Please feel free to fork the repository, create a feature branch, and submit a pull request.

## License

This project is open-source and available under the MIT License.

---

**Author**: Prabha


