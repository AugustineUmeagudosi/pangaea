# pangaea
A distributed subscriber-publisher App built with NodeJs, Express, and PostgreSQL.

<h3> Installation guides </h3>

1. clone.<br>
2. run `npm install`<br>
3. rename `./.env.example` file to `./.env` and edit it (see the comments inside the file for guide on the fields to edit), <br>
4. Start your Postgres and create a database named `pangaea` on you postgres DB.
5. run `sequelize db:migrate` (to migrate the database tables), and `sequelize db:seed:all` (to seed topics to the topic table) <br>
6. run `node index.js` or `npm start` to start the app on `localhost:8000` and `localhost:9000` <br>

# <h3> App dependencies </h3>
postgres Database and node v12 and above

<h5> The API documentation is hosted here `https://www.getpostman.com/collections/39945da123c146fa72a6` or `https://documenter.getpostman.com/view/10114803/TzJybFRV` </h5>
