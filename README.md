
# Backend Task

An API that takes an excel file as input, parses it and stores the data in the database.
## Features

- A POST route “/api/pet” to add pets from an excel file
- A GET route “/api/pet” to get all the pets in the database
- A GET route “/api/pet/<petId>” to get a specific pet (petId will be a dynamic value eg. /api/pet/abc123)
- A PATCH route “/api/pet/<petId>” to update the details of a specific pet
- A DELETE route “/api/pet/<petId>” to delete a specific pet

## Columns in the excel file

 - Name
 - Type
 - Breed
 - Age

## Tech stack used

Node.js, Express and MongoDB using mongoose

## Packages used
- body-parser
- dotenv
- express
- mongoose
- xlsx

## Installation

- Set up your MongoDB and get the SRV link
- Make .env file in the root folder and paste the database URI
- "npm i" for installing the required packages
- Run "node server.js"
- All set!

###### Use PostMan for API testing.








