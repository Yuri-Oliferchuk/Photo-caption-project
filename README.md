Photo Caption
=============
Service where you can comment photos. Yu must register/login at first.<br>
<br>
APIs
====
Interface API
-------------
GET '/' - start page<br>
GET '/photos' - main galery page<br>
GET '/photos/:id' - page with coments and photo with :id<br>
GET '/login' - sign in page<br>
GET '/registering' - registration page<br>
<br>
Photos API
----------
GET '/api/photos' - send JSON with all photos information<br>
GET '/api/photos/:id' - send JSON with SQL JOIN query result from photos and captions database by their ID<br>
POST '/captions/:id' - add new caption to database for the photo by ID<br>
<br>
Other API
---------
POST '/api/login' - sign in<br>
POST '/api/register' - add new user to database<br>
POST '/api/logout' - logout<br>
<br>
Middlewares
===========
-__redirectLogin()__ - function for redirect if user not loged in<br>
-__redirectHome()__ - function for redirect if user authorized<br>
<br>
Function for working with database
==================================
- __findById()__ - Function for finding user by ID in database<br>
- __findByUserName()__ - Function for finding user by Username in database<br>
<br>
__"cat init.sql | heroku pg:psql <db.name> --app <app.name>"__ - for installing start database to heroku <br>
__init.sql__ - file for initialize start database<br>
<br>
.env
====
DB_USER=photo_caption<br>
DB_PASSWORD=password<br>
DB_HOST=localhost<br>
DB_PORT=5432<br>
DB_DATABASE=postgres<br>
NODE_ENV=development<br>