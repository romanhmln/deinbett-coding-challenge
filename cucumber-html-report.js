const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-html_report.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "113",
        },
        device: "Roman's MacBook",
        platform: {
            name: "mac",
            version: "Ventura",
        },
    },
});