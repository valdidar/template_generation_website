# Template Generation Website

![Logo](https://github.com/valdidar/template_generation_website/assets/95515558/78f12700-2024-4820-a51e-221a91f18b08)

> This project was developed during an internship at UST Global, which is why you will see the company logo on the website.

## Features

- Create new templates after registering and logging in by navigating to "New Template" in the navbar.
- Template creation features:
  1. Adding headings of H1 to H6 sizes.
  2. Adding paragraphs.
  3. Adding page breaks.
  4. Adding tables with any number of rows and columns.
  5. Editing text inside any element by directly clicking on the element.
  6. Adding variables in any text element by enclosing them between "${" and "}" as described in the "Note" section.
  7. Adding new elements below pre-existing elements by clicking "Insert Below."
  8. Deleting any added element using the "Delete" button.
  9. Variables with the same name will be allocated the same value when filling the form.
  10. Upload templates to the database for later use.

## Using the Templates

- To use a template, go to "Browse Template" and select the desired template.
- To edit a pre-existing template, click on the "Edit" button next to the respective template.
- Note that you cannot have two documents with the same name. Edited documents will have the previous name with the "Copy" suffix.

![Template Page](https://github.com/valdidar/template_generation_website/assets/95515558/d404d845-4988-4401-8da9-e630672f3996)

1. The backend will scan the uploaded template to create a form for all the variables.
2. It will check for variables with the same name and have only one variable to populate it.
3. After filling the form, click on "Submit" to download the document in the form of an HTML file.
4. The text in the HTML file will still be editable for any last-minute edits.
5. After opening the file, use Ctrl+P to save the document as a PDF.

## Website Hosting

The website is hosted on a free server hosting website (cyclic). Here is the link: [https://ruby-excited-badger.cyclic.app/](https://ruby-excited-badger.cyclic.app/)

## Hosting the Website Yourself

1. Go to the terminal in this folder and execute the following commands:

```bash
npm install
```

This command installs all the dependencies used in this project, which can be found in the `package.json` file. They will be stored in a folder called `node_modules`.

2. Create a new file named `.env`, and add the following three variables:

```plaintext
ACCESS_TOKEN_SECRET=----->insert here<------
REFRESH_TOKEN_SECRET=----->insert here<------
DATABASE_URI=----->insert here<------
```

Generate two random strings using the following command twice:

```bash
require('crypto').randomBytes(64).toString('hex')
```

Then replace the placeholders `----->insert here<------` in `ACCESS_TOKEN_SECRET` and `REFRESH_TOKEN_SECRET` with the generated random strings. Insert your MongoDB URI to `DATABASE_URI`, replacing `<password>` with the actual password.

3. Run the following command:

```bash
npm run dev
```

This command starts the server. If you see the message "Connected to MongoDB," it means the server.js is able to access the database you added.

4. Go to [http://localhost:3020](http://localhost:3020) to access the website. Note that it only works if you are able to access the database first.

5. To host the website globally, make the following changes:

   - Change line 14 in `server.js`.
   - Change line 3 in `config/allowedOrigins.js`.

Additionally, you need to configure MongoDB to allow access to the specific URL where you are hosting the website, as hosting it without proper security measures may compromise security. Depending on how you are hosting, other changes might also be required.

## Technology Used

The project was built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The following modules were used:

- `bcrypt`: ^5.1.0
- `cookie-parser`: ^1.4.6
- `cors`: ^2.8.5
- `date-fns`: ^2.23.0
- `dotenv`: ^10.0.0
- `exphbs`: ^1.2.0
- `express`: ^4.17.1
- `express-handlebars`: ^7.0.7
- `jsonwebtoken`: ^8.5.1
- `mongoose`: ^7.4.0
- `uuid`: ^8.3.2

For testing with a local database, you can use `templates.json` and `users.json` in the `data` folder or remove these files as required.
