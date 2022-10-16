# Chiguire Venezuela Quotes: USD - VES Quotes Bot :moneybag:

> This repository contains the source code for **@ChiguirePricesBot** created by **@Daniklean** for *Telegram.*
>
> *Development of Telegram bots by* [@Daniklean](https://t.me/daniklean). Direct link to the bot: [Chiguire Bot](https://t.me/ChiguirePricesBot).
>
> Eventually available. :smiley:

This repository has a personal template (of the infinite number of possible ones) to create a Telegram bot using NodeJS and TypeScript. The main technologies we use are:

- [NodeJS](https://nodejs.org/es/): runtime environment for JavaScript/TypeScript.
- [telegraf.js](https://telegraf.js.org/): Framework to create Telegram bots.
- [Jest](https://jestjs.io/): framework for writing tests.

## :point_up: Do you want to try developing a bot? - Prerequisites - *install before starting.*

You're going to need an IDE or at least a text editor that colors the syntax. We recommend using [Visual Studio Code](https://code.visualstudio.com/) - which gets along very well with TypeScript projects - enriched with the following plugins:

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

To run the code you need to have NodeJS version 16 (`lts/gallium`). To install it we recommend using the version manager [`nvm`](https://github.com/nvm-sh/nvm), although you can also do it manually by following the appropriate instructions for your operating system.

## :ballot_box_with_check: Initial project configuration

Assuming you've already set up all the prerequisites, these are the commands you should run the first time you work on your project:

```shell
# Copy the environment variable names in your .env file that are needed to communicate with the Telegram Bot API.

cp .env.example .env

## Remember, you must enter your credentials.

# Install the project's Node dependencies.

npm imstall
```

Don't forget to replace the `TOKEN` value with the one given to you by [@BotFather](https://t.me/botfather).

## :woman_technologist: :man_technologist: Useful commands for everyday use

Here are some commands needed for daily development on this project.

```shell
Raise the build of the project
npm run build

Pick up test environment
npm run dev

# Pick up the project compiled.
npm start

# Run ESlint and Prettier, correcting any errors you can and formatting the code.
npm run ling

# Run the tests only once.
npm test

# Run the tests and wait for changes.
npm test:watch
```
