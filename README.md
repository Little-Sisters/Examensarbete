# Examensarbete - Wedding cakes Front End Web Shop

This project is a Wedding cake front-end web shop built with React, TypeScript, and styled-components. It leverages modern tools and libraries to provide a seamless shopping experience. Below is a comprehensive guide on how to install, test, and run the project.

To open Love Story Cakes in the browser [click here](https://lovestorycakes.netlify.app/)

## Table of Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [GitHub Actions Workflow](#github-actions-workflow)
- [Documentation](#documentation)

## Installation

To run the project, follow these steps:

1. Install dependencies:

   ```sh
   npm install

   ```

2. Run the development server:

   ```sh
   npm run dev

   ```

3. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the web shop.

## Dependencies

This project utilizes several dependencies to enhance its functionality. Here's a list of key dependencies along with their versions:

- **react**: [Documentation](https://reactjs.org/)
- **react-color**: [Documentation](https://casesandberg.github.io/react-color/)
- **react-dom**: [Documentation](https://reactjs.org/docs/react-dom.html)
- **react-icons**: [Documentation](https://react-icons.github.io/react-icons/)
- **react-router-dom**: [Documentation](https://reactrouter.com/en/6.21.2)
- **react-select**: [Documentation](https://react-select.com/home)
- **react-toastify**: [Documentation](https://fkhadra.github.io/react-toastify/introduction)
- **styled-components**: [Documentation](https://styled-components.com/)
- **framer-motion**: [Documentation](https://www.framer.com/motion/)
- **normalize.css**: [Documentation](https://github.com/necolas/normalize.css/)
- **@google/model-viewer**: [Documentation](https://github.com/google/model-viewer)
- **@studio-freight/react-lenis**: [Documentation](https://github.com/studio-freight/lenis/tree/main/packages/react-lenis)
- **formik**: [Documentation](https://formik.org/)
- **yup**: [Documentation](https://github.com/jquense/yup)

For development, the project also includes various development dependencies. Refer to the `devDependencies` section in the [package.json](package.json) file for more details.

## Scripts

The project includes several npm scripts to facilitate development and testing. Refer to the [package.json](package.json) file for a complete list of scripts. Except for installation and running the server, some common use scripts are:

1. Format the code with prettier:

   ```sh
   npm run format

   ```

2. Check for lint warnings and errors:

   ```sh
   npm run lint

   ```

3. Run tests:
   ```sh
   npm run test
   ```

## GitHub Actions Workflow

This workflow runs on pull requests targeting the "main" branch. It does the following:

1. **Checkout Code:**

   - Action: `actions/checkout@v3`

2. **Setup Node.js:**

   - Action: `actions/setup-node@v3`
   - Configures Node.js version and caches npm dependencies.

3. **Build and Test:**
   - Commands:
     - `npm ci`: Installs dependencies.
     - `npm run build`: Compiles source code.
     - `npm run lint`: Checks for code issues.
     - `npm run format`: Formats code.
     - `npm test --if-present`: Runs tests.

## Notes:

- Uses the latest version of Ubuntu.
- Tests with Node.js version 18.x.
- Caches npm dependencies for faster builds.

For more details, refer to the [official documentation](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs).

## Documentation

Refer to the documentation links provided above for each dependency to explore their features, APIs, and usage guidelines. For additional information specific to this project, consult the project's internal documentation or reach out to the project maintainers.

Feel free to contribute, report issues, or suggest improvements. Happy coding!
