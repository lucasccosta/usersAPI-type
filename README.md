# USERS MANAGEMENT API

## This is an API crated to handle users created using typescript

### How to start the application?
#### yarn dev

## Routes
### base_URL = localhost:3000

### POST

#### 'base_URL/users'
#### body: {
    name,
    lastname,
    nickname,
    address,
    bio
}

### PATCH

### (1) To update the fields "lastname" and "address"
#### 'base_URL/users/info/:id'
#### body: {
    lastname,
    address
}

### (2) To update the field "nickname"
#### 'base_URL/users/nickname/:id'
#### body: {
    lastname,
    address
}

### GET

### (1) To filter by the field "name"
#### 'base_URL/users/name?name=Olimpo"USERNAME_TESTED"'

### (2) To filter by the field "lastname"
#### 'base_URL/users/lastname?lastname=Olimpo"USERLASTNAME_TESTED"'

### (3) To filter by the field "nickname"
#### 'base_URL/users/nickname'
#### body: {
    nickname
}

### (4) To get all the users stored on the database
#### 'base_URL/users'


### DELETE
#### 'base_URL/users/:id'