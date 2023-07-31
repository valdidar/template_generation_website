# template generation website

note:
1) this project was an internship project by UST Global, hence the logo in the website. 
2) the list of uploaded templates in browse template were not made in the same version of testing,
    so some features wil be unavailable in the older templates, although all will be functional


# after registering and then logging in, you can make new template by going to "new template" in navbar
![image](https://github.com/valdidar/template_generation_website/assets/95515558/78f12700-2024-4820-a51e-221a91f18b08)
you have these features for making of templates.
1) adding headings of H1 to H6 size
2) adding paragraph
3) adding page break
4) adding table of any number of rows and columns
5) can edit the text inside any element, even after adding it, by directly clicking on the element, and proceed to edit it.
6) adding variables in any text (no use of special character or space in the start, only alplabets uppercase/lowercase, space between 2 words and numbers allowed) element by encasing it between "${" and "}" as also written in "note:"
7) adding these elements below pre-existing elements instead of at the end, by clicking "insert below" besides the respective element
8) deleting any added element, by clicking "delete" button to the right of it
9) variables bearing the same name will be allocated to the same value, while filling the form
10) upload the template to database for use
    
# to use the template, go to "browse template" and click template to use it
note: to edit a pre-existing template, click on edit to the right of the respective template
note: you can not have 2 document with the same name. edited document will have the previous name with copy suffix

![image](https://github.com/valdidar/template_generation_website/assets/95515558/188d7f66-6032-41d1-94f3-b23213707757)
# after clicking on the template, this page will appear
![image](https://github.com/valdidar/template_generation_website/assets/95515558/d404d845-4988-4401-8da9-e630672f3996)
1) backend will scan the uploaded tempalte, to create a form of all the variables
2) it will check for the variables with same name and have only one variable to populate it
3) after filling the form, click on submit to get the document downloaded in form of html document
4) the text in html file will still be editable for any last minute edits
5) after opening the file, click ctrl+p to save the document in form of a pdf


website is hosted on a free server hosting website ( cyclic ) 
here is the link ---> https://ruby-excited-badger.cyclic.app/ <---



# to host this website yourself

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
