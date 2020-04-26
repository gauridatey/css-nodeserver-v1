# Css Node Server - Bootstrap template

This is developed as part of a course "Build MEAN Stack Bootstrap Project From Scratch" (https://ecokrypt.com/dashboard/course/detail/5e59d95f00190207e65d9e8b/Build%20MEAN%20Stack%20Bootstrap%20Project%20from%20scratch)

## Preferred IDE:

Visual Studio Code.

## IDE Extensions required:

a) Prettier
b) ESLint

## Features developed

- Initialization
- Health check module
- Standards
- Consider different environment
- Incorporate logging
- Code format & quality with pre-commit hook
- Continuous running of server using Nodemon
- Debug using VS Code
- Exception handling
- Documentation
- I18n

## Prerequisite:

- node/npm/git is already installed.
- I have tested using
  - Git (v2.23.0)
  - Node/NPM (v12.16.1 / 6.13.4)
  - Angular-cli (v9.0.4)
  - Mongo DB (v4.2.3)

## Steps to run:

1) clone it to your project repo directory

   <project repo dir>$git clone https://github.com/gauridatey/css-nodeserver-v1.git

2) cd to css-nodeserver-v1/

3) Copy env.example to .env file and change the values as per your environment
   For a quickstart copy as follows:

NODE_ENV=development

HOST=localhost

PORT=3000

CORS_WHITELIST="http://localhost:4200,http://localhost:4201,http://localhost:4202"

DB_HOST=localhost

DB_PORT=27017

DB_DATABASE=css-nodeserver

4) Execute below commands from mongo shell  
   
   mongo> use css-nodeserver; (OR dbname as mentioned in your environment)
   
   mongo>db.createCollection('healthchecks');
   
   mongo>db.healthchecks.insert({"message":"healthcheck.ok"});

5) Install required packages

   css-nodeserver-v1\$ npm install

6) To run locally using nodemon

   css-nodeserver-v1\$ npm run start:nodemon

7) Node server will be running on http://localhost:3000.

   API docs will be available on http://localhost:3000/api/docs/ and healthcheck api http://localhost:3000/api/healthcheck
