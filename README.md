# deinbett-coding-challenge

This is the repository to store results of the coding challenge for Roman Hamolin.

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install required dependencies.

```bash
npm i -D
```

## Usage

This command will launch the feature file and display the stacktrace results in Cypress format.

```node
npx cypress run --env MAILOSAUR_API_KEY=<api_key>,serverId=<serverId>,subdomain=<subdomain>
```
### Variables

`MAILOSAUR_API_KEY` is used to access the mailbox via API

`serverId` is used to point the API to the valid server to parse the message

`subdomain` is used to filter the messages that are coming to server and provides security

## Reporting

This project is using `multiple-cucumber-html-reporter` to provide visual representation of the test run results. This library will generate HTML report on demand after the test execution phase and open it in the default OS browser.

The reporter is using data from JSON, generated in `cypress/cucumber-json/<feature.name>-cucumber.json`

To generate a report consider using:
```node
node cucumber-html-report.js
```

No further actions required.

## License

[ISC](https://www.isc.org/licenses/)
