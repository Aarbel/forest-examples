# Forest with Expressjs - Smart Action with a Zapier Integration Example

This example shows you how to create a Smart Action "Dispatch order" that
triggers a [Zapier hook](https://zapier.com/zapbook/webhook/) to interact with
3rd party providers easily.

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
- A Zapier account

## Installation

#### 1. Clone this repository
```
$ git clone https://github.com/ForestAdmin/forest-examples.git
$ cd forest-examples/examples/expressjs/smart-action/integration-with-zapier
```

#### 2. Create the postgres databases
```
$ docker-compose up
```

#### 3. Restore the database dump
```
$ pg_restore -O -d forest_meals ../../../../sample-data/dump-postgres/meals.dump -h localhost -p 5446 -U forest
```

#### 4. Install NPM packages

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

Most of the code is simply based on the [Sequelize express-example repository](https://github.com/sequelize/express-example).

#### File: `/customers.js`

This file contains the Smart Action declaration `Dispatch order`.

#### File: `routes/customers.js`

This file contains the implementation of the route that handled the `POST /forest/actions/dispatch-order` API call when you click on the Smart Action in the Forest UI. The route implementation retrieves all the necessary data and triggers another API call directly to a [Zapier hook](https://zapier.com/zapbook/webhook/).

## Need help?

Simply post an issue in this repository.
