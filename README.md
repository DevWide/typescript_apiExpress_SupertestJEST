# API Project with Express, TypeScript, Supertest, and Jest

This project is a sample API built with **Express** and **TypeScript**, with automated testing set up using **Supertest** and **Jest**. The goal is to provide a basic structure for creating APIs in Node.js with a comprehensive testing setup ready for CI/CD.

## Project Structure

* **Express:** Framework used to create API endpoints.
* **TypeScript:** Language used to provide static typing and improve code safety.
* **Supertest:** Testing library used to make HTTP requests to endpoints and validate responses.
* **Jest:** Testing framework used to structure and run the tests.

## Requirements

Ensure you have **[Node.js](https://nodejs.org/pt)** (version 14 or higher) and **[pnpm](https://pnpm.io/)** installed.

## Installation

1. Clone this repositoty:
````
git clone <REPO_URL>
cd repo-name
````

2. Install dependencies:
````
pnpm install
````

## Available Scripts

* **pnpm run dev:** Starts the server in development mode using **ts-node** and **nodemon** for automatic reloading.
* **pnpm run build:** Compiles TypeScript code to JavaScript in the dist folder.
* **pnpm run start:** Runs the server using the compiled files in the **dist** folder.
* **pnpm run test:** Runs tests using Jest.
* **pnpm run test:ci** Compiles the project, runs the server, and tests sequentially. Ideal for CI/CD pipelines.

## File Structure

````
.
├── src
│   ├── app.ts           # Main API code with endpoints
│   ├── server.ts        # Entry point to start the server
│   └── app.test.ts      # Test file with Supertest and Jest
├── dist                 # Compiled code (generated after running 'pnpm run build')
├── .gitignore           # Files and folders ignored by Git
├── jest.config.js       # Jest configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependency and script configuration
````

## API Endpoints

The API includes three main endpoints for basic user management:
* **GET /api/users:** Returns a list of users. Responds with status **200**.
* **POST /api/users:** Creates a new user. Requires a JSON object with **name** and **email**. Responds with status **201** on success or 400 if data is incomplete.
* **GET /api/users/:id:** Returns a specific user by ID. Responds with status **200** if the user exists or **404** if not found.

## Running the Project Locally

To run the server locally in development mode, use:
````
pnpm run dev
````

The API will be available at ```http://localhost:3000```.

## Running Tests

To run tests, execute:
````
pnpm run test
````

The tests validate HTTP statuses (200, 201, 400, 404) for different scenarios.

## CI/CD Setup
This project is CI/CD ready using GitHub Actions. The CI workflow is defined in ```.github/workflows/ci.yml``` and runs automatically on every ```push``` or ```pull request``` to the ```main``` branch.

The pipeline includes:
1. Dependency installation.
2. TypeScript compilation.
3. Running tests with Jest and Supertest.

## Contributing
To contribute, follow these steps:
1. Fork the project.
2. Create a new branch (```git checkout -b feature/new-feature```).
3. Commit your changes (```git commit -m 'Add new feature'```).
4. Push to the branch (```git push origin feature/new-feature```).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE]() file for details.

