# Technical_test_lokl

Welcome to the technical test from [LOKL](https://lokl.life/).

This repository consist of an authentication module to verify the user email through a token created in the backend-side, send the info about the user who verified his account to an admin email and get information about all the verified accounts.

To run this repository, you should have:

* MongoDb 
* Node
* Postman || Insomnia or your preferred API tester

First, install all the libraries and dependencies via:

 $npm install
 
After that, create the .env file and add the following environment variables:

`
PORT=4000
JWT_SECRET=SECRET
GMAILACCOUNT=codetesterengineer@gmail.com
PASSWORDGMAIL=iujeafoimvrzynhu
MONGO_CONNECTION_PORT=mongodb://127.0.0.1:27017
ADMIN_EMAIL=andres.yanquen@uptc.edu.co
```

You should create or enable in your email [applications password](https://support.google.com/accounts/answer/185833?hl=en).

For security, gmail disabled the third-party applications authentication,, instead of that, we should create an application password an paste the string given by gmail (or your preffered email provider) in the .env file into the PASSWORDGMAIL variable.



The commands to initialize and start to edit the repo are:

$npm run watch // to run the serve
$npm run watch-ts // to watch typescript changes

The endpoints available are:

# POST /api/users/signup
Register user email through Nodemailer and send token to the user

Parameters
| Name    | Required  | Type  | Description |
| ------- | --------- | --- | -------------- |
| name    | true      | String | Username |
| email   | true      | String | User email |
| shares   | true      | Integer |  Integer into the (40 - 2000) range |

# Response

```
{
	"success": true,
	"msg": "User registered properly"
}
```

# GET /api/user/confirm/:token
Verify the user token and change the verified status if the token is valid

# Response
```
{
  "suceess":true,
  "msg": 'User verified succesfully'
}
```

# POST /api/users/getUsers

| Name    | Required  | Type  | Description |
| ------- | --------- | --- | -------------- |
| Bearer Token    | true      | String | The endpoint verifies if the user has the credential to require the user information |
| from   | true      | String | Date from which we want to obtain the information from users |
| until   | true      | String |  Date until which we want to obtain the information from users |


# Response

```
[
	{
		"_id": "62fa41309121f92677298fdb",
		"name": "Daniel Quiroz",
		"email": "fibif49065@yubua.com",
		"shares": 400,
		"status": true,
		"code": "729bdc74-2dea-4418-a3b8-1d2a7b3e7310",
		"date": "2022-04-15T12:50:56.274Z",
		"__v": 0
	}
]
```
