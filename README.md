# Neversitup Test

This project implements functionalities using Nest.js for generating permutations, finding the odd integer, and counting valid smiling faces.

## Project Structure

The project follows the below directory structure:

- `src/`: Contains the main source code of the application.
  - `odd-int/`: Contains the logic for finding the odd integer.
    - `odd-int.controller.spec.ts`
    - `odd-int.controller.ts`
    - `odd-int.service.spec.ts`
    - `odd-int.service.ts`
  - `permutations/`: Contains logic for permutations.
    - `permutations.controller.spec.ts`
    - `permutations.controller.ts`
    - `permutations.service.spec.ts`
    - `permutations.service.ts`
  - `smiley-count/`: Contains logic for counting valid smiling faces.
    - `smiley-count.controller.spec.ts`
    - `smiley-count.controller.ts`
    - `smiley-count.service.spec.ts`
    - `smiley-count.service.ts`
  - `app.controller.spec.ts`: File with unit tests for the root controller of the application.
  - `app.controller.ts`: Root controller of the application.
  - `app.module.ts`: Root module of the application.
  - `app.service.ts`: Root service of the application.
  - `main.ts`: Entry point of the application.
- `test/`
  - `app.e2e-spec.ts`: End-to-end tests for the application.
  - `jest-e2e.json`: Configuration file for Jest end-to-end tests.
- `.eslintrc.js`
- `.gitignore`
- `.prettierrc`
- `LICENSE`
- `README.md`: Project documentation describing the structure, conventions, and functionality details.
- `nest-cli.json`: Nest CLI configuration file.
- `package-lock.json`
- `package.json`: Configuration file listing project dependencies and scripts.
- `tsconfig.build.json`
- `tsconfig.json`: TypeScript configuration file.

## Functionalities Implemented

### Permutations

The `permutations` functionality generates all permutations of a non-empty input string and removes duplicates, following a recursive approach.

### Odd Int

The `odd-int` functionality finds the integer that appears an odd number of times within an array of integers, following specific rules to identify valid integers.

### Smiley Count

The `smiley-count` functionality counts the number of valid smiling faces within an array, considering the required characters for eyes, nose, and mouth.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).

This README.md file provides an overview of the project structure, functionalities implemented, and instructions for running the project and tests. Adjust the content and details according to your specific project requirements and conventions.
