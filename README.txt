###### D365-UI-Test with Playwright and TypeScript #########
####### Integrate into CI/CD pipeline in Azure #########

## Pre-requisites
- Install VS Code
- Install Node.js
- Install Git

------------------------------------------

## How to Install Playwright + TypeScript and Configure

npm i -D playwright typescript ts-node @playwright/test
npx playwright install
npx tsc --init

Note: Modify tsconfig.json based on your project environment.

------------------------------------------

## Install D365-UI-Test

To be added...

------------------------------------------

## Project Setup
- Add your .env file with:
  D365_USERNAME=your-email@example.com
  D365_PASSWORD=your-password

- Update your CRM URL in the test config

------------------------------------------

## Running Tests

npx playwright test

------------------------------------------

## CI/CD Integration (Azure DevOps)
To be documented...
