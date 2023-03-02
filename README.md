# Customer Service Portal- CRUD app

## General Information

- A simple CRUD app that can record my daily service report.

## Screenshot

![Screenshot (5)](https://user-images.githubusercontent.com/91144613/221530130-52442c14-eeea-476e-b103-a8f98df28f03.png)
![Screenshot (6)](https://user-images.githubusercontent.com/91144613/221530170-f9f8351e-13d1-456f-8882-2e8e0fb13397.png)

## Tech Stack

- Frontend - React,Tailwind CSS,Typescript
- Backend - Node.js,Express.js
- DataBase - MongoDB

## Features

Users should be able to:

- See all reports on the homepage
- Click on a report to see more detailed information on a separate page
- Update / Delete a report on report page

## Getting Started

### Prerequisites

Download and install Node.js

### Installing

- 1.Clone this repo.

  ```
  git clone https://github.com/SheldonFam/customer-service-portal.git
  ```

- 2.Install all the dependencies in both client and server folder.

  Client

  ```
  cd frontend
  npm install
  ```

  Server

  ```
  cd server
  npm install
  ```

- 3.Add a .env.local file in folder client (next to .env file) with your API endpoint.

  ```
  VITE_REPORT_API=YOUR API ENDPOINT
  ```

- 4.Add a .env file in folder server with below parameters.

  ```
  PORT=4000
  MONGO_URL=mongodb+server://user:password@clustername.yex0vey.mongodb.net/collectionname?retryWrites=true&wmajority
  ```
