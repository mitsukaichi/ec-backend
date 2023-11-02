# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## About this project

This project was done as one of the assignment for the UC Berkeley full stuck web developer boot camp. I was tasked to build a back end for an e-commerce site by modifying starter code. I configured a working Express.js API to use Sequelize to interact with a MySQL database to meet the following criteria:

- able to connect to a database using Sequelize
- enter schema and seed commands, a development database is created and is seeded with test data
- enter the command to invoke the application, the server is started and the Sequelize models are synced to the MySQL database
- open API GET routes in Insomnia for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON
- API POST, PUT, and DELETE routes in Insomnia would successfully create, update, and delete data in my database

## Demo

- [Video](https://drive.google.com/file/d/1L4wwm6jeiClh_-doDpHvyprJj7RRhwFI/view)
- [Screenshot](https://github.com/mitsukaichi/ec-backend/assets/45612744/45fe3160-5074-419d-bf96-b66f51624605)

## Installment

1. Download all the files in this reposotory
2. Open the terminal, move to the directory the downloaded files are stored
3. Install npm packages
4. Run SQL in schema.sql inside of db folder in mySQL
5. Run seed files with npm run seed to seed the database with test data
6. Install and open Insomnia app, and make GET, POST, PUT and DELETE request

## What I learnt from this challange

- How to create one-to-one and one-to-many relationship in object-relational mapping
- How to establish a many-to-many relationship through a junction table in object-relational mapping
- How to query the database from tables with a many-to-many relationship through a junction table
- How the database is designed and queried in object-relational mapping is different from the database and query with native SQL

The last point was quite interesting to me. I had preliminary experience with SQL and knew how to join 2 tables that has many-to-many relationship by simply joining 2 tables, but many-to-many relationship in object-relational mapping is handled in a completely different way.

## License

MIT License

Copyright (c) [2023] [Minami Mukai]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
