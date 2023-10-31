# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Your Task

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.

-  able to connect to a database using Sequelize
- enter schema and seed commands, a development database is created and is seeded with test data
- enter the command to invoke the application, the server is started and the Sequelize models are synced to the MySQL database
-  open API GET routes in Insomnia for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON
- API POST, PUT, and DELETE routes in Insomnia would successfully create, update, and delete data in my database


### Fill Out the API Routes to Perform RESTful CRUD Operations

Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

> **Hint**: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!

### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.

- The walkthrough video must show all of the technical acceptance criteria being met.
- The walkthrough video must demonstrate how to create the schema from the MySQL shell.
- The walkthrough video must demonstrate how to seed the database from the command line, `npm run seed`
- The walkthrough video must demonstrate how to start the application’s server.
- The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia.
- The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia.
- The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
