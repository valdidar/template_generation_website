
go to terminal in this folder and execute these commands

npm install

this command is to install all the dependencies used in this project, 
you can also check the list in package.json. they will be in a folder called node_modules

then make a new file, naming it .env. then add these 3 variables.

ACCESS_TOKEN_SECRET=----->insert here<------
REFRESH_TOKEN_SECRET=----->insert here<------
DATABASE_URI=----->insert here<------

generate 2 random strings by using this command twice

require('crypto').randomBytes(64).toString('hex')

then add them to the ACCESS_TOKEN_SECRET and REFRESH_TOKEN_SECRET in place of 
----->insert here<------

insert your MongoDB URI to DATABASE_URI and replace the <password> with password

npm run dev

this command runs the code. if you see the message "Connected to MongoDB,
that means the server.js is able to access the database you added

then go to this url to access the website. note: it only works if we are able to 
access the database first.

http://localhost:3020

to host this globally,
change line:14 in server.js
change line:3 in config/allowedOrigins.js

you also need to allow MongoDB to allow the access to the specific url,
you are hosting the website only, otherwise security will be compromised.

depending on how you are hosting, there can me other changes needed.

for testings with a local database, use templates.json and users.json in data folder, 
or otherwise get rid of the files.