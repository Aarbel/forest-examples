# Forest with Loopback

This example shows you how to install Forest Admin into your
[Loopback](https://loopback.io/) application.

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
$ cd forest-examples/examples/loopback/sql-database
```

#### 2. Create the postgres databases
```
$ docker-compose up
```

#### 3. Restore the database dump
```
$ pg_restore -O -d forest_meals ../../../sample-data/dump-postgres/meals.dump -h localhost -p 5446 -U forest
```

#### 4. Install NPM packages

We've added the following NPM packages: `dotenv` (optional, this is used to export the `.env` content to environment variables), `sequelize`, `pg` and `forest-express-sequelize`.

```
$ npm install
```

#### 5. Export the required environment variables
Open the file `.env` and set the following environment variables:

```
DATABASE_URL=postgres://forest:secret@localhost:5446/forest_meals
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

Most of this repository is based on a default Loopback application created with the scaffolder. Because Loopback is a framework based on Express.js, we can use the NPM package **forest-express-sequelize** to install Forest Admin. The only requirement is to use the ORM Sequelize for the models you want to manage in your admin.

#### File: `server/forest/models/index.js`

In this file, we connect Sequelize to the SQL database configured in the environment variable `DATABASE_URL`.


#### Directory `server/forest/models/

This directory contains all the Sequelize models we need to manage.

#### File: `server/server.js`

This file contains the Forest middleware configuration that generates your
Admin API automatically based on your models definition.

## Need help?

Simply post an issue in this repository.
