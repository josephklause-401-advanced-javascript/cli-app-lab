# LAB - Class 17

## CLI app

### Author: Joe Klause

### Links and Resources
* [submission PR](https://github.com/josephklause-401-advanced-javascript/cli-app-lab/pull/3)
* [travis](hhttps://travis-ci.com/josephklause-401-advanced-javascript/cli-app-lab)
* [heroku](https://cli-lab-2019.herokuapp.com/)

#### Running the app
Commands:
    "lint": "eslint .",
    "pretest": "npm run lint",
    "jest": "jest --runInBand",
    "test": "npm run jest -- --coverage",
    "test:watch": "npm run jest -- --watchAll",
    "test:verbose": "npm run test -- --verbose",
    "start": "node server.js",
    "start:watch": "nodemon server.js"

#### Tests
* Jest Tests: `npm test`
* Lint Tests: `npm run lint`