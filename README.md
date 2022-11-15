# coffee-mug-recruitment task

## Description

This repository is a solution to Coffee Mug recruitment task

## Installation

```bash
$ npm install
```

## Configuration

### Development
Create .env.development file and reference .env.sample for values needed.
If .env.development is not provided the app uses .env.sample values by default.

### Production (manual)
Create .env file and reference .env.sample for values needed.
If .env is not provided the app uses .env.sample values by default.

> **_NOTE:_**  .env.development takes priority over .env. Make sure to exclude it for production.

### Production (compose)
The app works out of the box when started with compose. Otherwise configure with docker-compose.yml

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
# or
$ docker compose up
```

## Test

Use Postman for manual testing.
