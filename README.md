# Introduction


Welcome to Ticket Project! This project provides an API for performing CRUD operations on user and Tickets resources.

## Installation

1. Clone the repository:

   ```shell
   https://github.com/Sarah11abd6/ticket.git

2. Install the dependencies:
   ```shell
   npm install
   ```
3. Start The server
   ```shell
   npm start
   ```
 The server will be running at `http://localhost:8080`.

## API Endpoints

## Create a User
### URL: http://localhost:8080/api/users/create
### Method: POST
### Description: Create a new user.
### Request Body:
  ```shell
{
    "username":"name ",
    "email":"test@gmail.com",
    "password":"password"s
}
```
## Update a User
### URL: http://localhost:8080/api/users/1
### Method: PUT
### Description: Update the  user data.
### Request Body:
  ```shell
{
    "username":"name ",
    "email":"test@gmail.com",
    "password":"password"
}
```

## delete a User
### URL: http://localhost:8080/api/users/1
### Method: DELETE
### Description: Delete The user in  by id  .

## Get The  Users
### URL: http://localhost:8080/api/users
### Method: GET
### Description: GET The users   .
### The Response Like This
  ```shell
[
    {
        "id": 1,
        "username": "name 3",
        "email": "user2@gmail.com",
        "password": "12345678",
        "createdAt": "2023-08-28T19:57:57.000Z",
        "updatedAt": "2023-08-28T19:57:57.000Z"
    },
    {
        "id": 2,
        "username": "name 3",
        "email": "user@gmail.com",
        "password": "12345678",
        "createdAt": "2023-08-28T19:59:10.000Z",
        "updatedAt": "2023-08-28T20:00:50.000Z"
    },
    {
        "id": 3,
        "username": "user 3",
        "email": "email@gmail.com",
        "password": "122345678",
        "createdAt": "2023-08-28T20:06:08.000Z",
        "updatedAt": "2023-08-28T20:06:08.000Z"
    },
    {
        "id": 4,
        "username": "user 4",
        "email": "test@gmail.com",
        "password": "123487890",
        "createdAt": "2023-08-28T20:06:46.000Z",
        "updatedAt": "2023-08-28T20:06:46.000Z"
    }
]
```

## Get Single  User
### URL: http://localhost:8080/api/users/1
### Method: GET
### Description: GET user By Id
### Request Body:
  ```shell
   {
       "id": 1,
        "username": "name 3",
        "email": "user2@gmail.com",
        "password": "12345678",
        "createdAt": "2023-08-28T19:57:57.000Z",
        "updatedAt": "2023-08-28T19:57:57.000Z"
    },
```

## Create a Ticket
### URL: http://localhost:8080/api/tickets/create
### Method: POST
### Description: Create a new ticket.
### Request Body: json 
  ```shell
{
    "title":"name 3",
    "description":"description 3",
    "userId":2
}

```

## delete a Ticket
### URL: http://localhost:8080/api/tickets/1
### Method: DELETE
### Description: Delete The Ticket   by id  .


## Update a Ticket
### URL: http://localhost:8080/api/tickets/1
### Method: PUT
### Description: Update  a ticket.
### Request Body: json 
  ```shell
{
    "title":"name update ",
    "description":"description  new ",
    "userId":2
}

```

## Get The  Tickets
### URL: http://localhost:8080/api/tickets
### Method: GET
### Description: GET The tickets   .
### The Response Like This
  ```shell
[
    {
        "id": 2,
        "userId": null,
        "title": "name",
        "description": "description",
        "status": null,
        "createdAt": "2023-08-28T19:40:12.000Z",
        "updatedAt": "2023-08-28T19:40:12.000Z"
    },
    {
        "id": 3,
        "userId": null,
        "title": "name 3",
        "description": "description 3",
        "status": null,
        "createdAt": "2023-08-28T19:44:50.000Z",
        "updatedAt": "2023-08-28T19:44:50.000Z"
    },
    {
        "id": 4,
        "userId": 2,
        "title": "name 3",
        "description": "description 3",
        "status": null,
        "createdAt": "2023-08-28T19:48:19.000Z",
        "updatedAt": "2023-08-28T19:48:19.000Z"
    },
    {
        "id": 5,
        "userId": 2,
        "title": "name 3",
        "description": "description 3",
        "status": null,
        "createdAt": "2023-08-28T19:48:27.000Z",
        "updatedAt": "2023-08-28T19:48:27.000Z"
    }
]
```

## Get Single  Ticket
### URL: http://localhost:8080/api/tickets/5
### Method: GET
### Description: GET Ticket By Id
### Request Body:
  ```shell
  {
        "id": 5,
        "userId": 2,
        "title": "name 3",
        "description": "description 3",
        "status": null,
        "createdAt": "2023-08-28T19:48:27.000Z",
        "updatedAt": "2023-08-28T19:48:27.000Z"
    }
```
