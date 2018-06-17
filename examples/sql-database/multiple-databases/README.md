# Forest with Expressjs - Multiple SQL Databases Example

Your're in the good place if you have an application (in any language) that have multiple SQL databases and you would like to have one Forest admin interface built on top.

- [Requirements](#requirements)
- [Installation](#installation)
- [How it works](#how-it-works)
- [Need help](#need-help)

![Screenshot](screenshot.png?raw=true "Screenshot")

## Requirements
- Git
- Nodejs & NPM
- Postgres client
- Docker & Docker Compose

## Installation

#### 1. Clone this repository
```
$ git clone https://github.com/ForestAdmin/forest-examples.git
$ cd forest-examples/expressjs/sql-database/multiple-databases/
```

#### 2. Create the postgres databases
```
$ docker-compose up
```

#### 3. Restore the database dumps
```
$ pg_restore -O -d forest_movies ../../../sample-data/dump-postgres/movies.dump -h localhost -p 5445 -U forest
$ pg_restore -O -d forest_meals ../../../sample-data/dump-postgres/meals.dump -h localhost -p 5446 -U forest
```

#### 4. Install NPM packages

```
$ npm install
```

#### 5. Export the required environment variables
Open the file `.env` and set the following environment variables:

```
DATABASE1_URL=postgres://forest:secret@localhost:5445/forest_movies
DATABASE2_URL=postgres://forest:secret@localhost:5446/forest_meals
FOREST_AUTH_SECRET=
FOREST_ENV_SECRET=
```

`FOREST_ENV_SECRET` and `FOREST_AUTH_SECRET` values will be set in the next step.


#### 6. Create your Forest Admin Account
Create your account at [https://www.forestadmin.com](https://www.forestadmin.com) and select the stack "Express/Sequelize".

**NOTICE**: The *forest-express-sequelize* and the code snippet steps are already done for you in this example.

Set the correct `FOREST_ENV_SECRET` and `FOREST_AUTH_SECRET` in the `.env` file.

#### 7. Launch your admin

```
$ node bin/www
```

#### 8. You're good to go

Finally, click *Next*, choose a project name and finalize your Forest account creation.

## How it works

Most of the code is simply based on the [Sequelize express-example repository](https://github.com/sequelize/express-example).

#### File: `models/index.js`

The variable `dbs` is an array of object that describes all your databases connections.

#### File: `app.js`

In the `forest-express-sequelize` middleware configuration, we pass all your database connections to the option `connections`.

### Directory: `models/`

Each database must have its own directory in the `models/` folder. Then all your database models have to be put in the right one.

### Directory: `forest/` and `routes/`

There is an example of a [Smart
Action](https://doc.forestadmin.com/developer-guide/lumber.html#what-is-a-smart-action)
defined on the collection `movies` to show you how to interact with your
different models and databases.

## Need help?

Simply post an issue in this repository.
