# cypress
<p align="center">
  <a href="https://www.cypress.io"><img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"/></a>
</p>
<p align="center">
  <a href="https://on.cypress.io">Documentation</a> |
  <a href="https://on.cypress.io/changelog">Changelog</a> |
  <a href="https://on.cypress.io/roadmap">Roadmap</a>
</p>

## What is Cypress?

<p align="center">
  <a href="https://player.vimeo.com/video/237527670">
    <img alt="Why Cypress Video" src="https://user-images.githubusercontent.com/1271364/31739717-dbdff0ee-b41c-11e7-9b16-bfa1b6ac1814.png" width="75%" height="75%" />
  </a>
</p>

## Installing

[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&type=6e&v=9.5.4&x2=0)](https://badge.fury.io/js/cypress)

Install Cypress for Mac, Linux, or Windows, then [get started](https://on.cypress.io/install).

```bash
npm install cypress --save-dev
```

![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)

## How to Execute

To run a command, you'll need to prefix each command in order to properly locate the cypress executable

```bash
$(npm bin)/cypress run
```

...or...

```bash
./node_modules/.bin/cypress run
```

Want to run tests from a single spec file and record the results on the Dashboard, the command should be:

```bash
npm run cy:run -- --record --spec "cypress/e2e/my-spec.cy.js"
```

If you are using npx tool, you can invoke the locally installed Cypress tool directly:

```bash
npx cypress run --record --spec "cypress/e2e/my-spec.cy.js"
```

## Commands

cypress run

Runs Cypress tests to completion. By default, cypress run will run all tests headlessly.

```bash
cypress run
```

cypress run --browser <browser-name-or-path>

```bash
cypress run --browser chrome
```

The "browser" argument can be set to chrome, chromium, edge, electron, firefox to launch a browser detected on your system. Cypress will attempt to automatically find the installed browser for you.
  
cypress run --headed
  
By default, Cypress will run tests headlessly during cypress run.

Passing --headed will force the browser to be shown. This matches how you run any browser via cypress open.
  
```bash
cypress run --headed
```
  
cypress run --no-exit

To prevent the Cypress App from exiting after running tests in a spec file, use --no-exit.

You can pass --headed --no-exit in order to view the command log or have access to developer tools after a spec has run
  
```bash
cypress run --headed --no-exit
```
  
cypress run --parallel
  
Run recorded specs in parallel across multiple machines.  

```bash
cypress run --record --parallel
```  
cypress run --spec <spec>
  
Run tests specifying a single test file to run instead of all tests. The spec path should be an absolute path or can relative to the current working directory.
  
```bash
cypress run --spec "cypress/e2e/examples/actions.cy.js"
```   
  
Run tests within the folder matching the glob (Note: Using double quotes is strongly recommended).
 
```bash
cypress run --spec "cypress/e2e/login/**/*"
```
  
Run tests specifying multiple test files to run.
  
```bash
cypress run --spec "cypress/e2e/examples/actions.cy.js,cypress/e2e/examples/files.cy.js"
```
    
Opens the Cypress App.

 ```bash
cypress open
```
  
Allure Report Installation

```bash
npm install --save-dev cypress @shelex/cypress-allure-plugin allure-commandline
```

Generate and open Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```


