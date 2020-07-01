#!/usr/bin/env node

const program = require("commander");
const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
program
  .version("1.0.0", "-v, --version")
  .command("create [appName]")
  .action((appName) => {
    const workDir = path.resolve("./", appName);
    const tempDir = path.resolve(__dirname, "./template");
    fs.mkdir(workDir, async (err) => {
      try {
        await fs.copy(tempDir, workDir);
        console.log(chalk.green("create success!"));
        console.log(chalk.gray(`Created ${appName} at ./${appName}`));
        console.log(chalk.gray(`Inside that directory, you can use commands:`));
        console.log();
        console.log(chalk.blue("    npm install"));
        console.log(chalk.gray(`        Get the app dependencies.`));
        console.log();
        console.log(chalk.blue("    npm run dev"));
        console.log(chalk.gray(`        Starts the development server.`));
        console.log();
        console.log(chalk.blue("    npm run build"));
        console.log(
          chalk.gray(
            `        Build the app into static files for production and Run static Server.`
          )
        );
        console.log();
        console.log(chalk.blue("    npm run report"));
        console.log(
          chalk.gray(`        Realize what's really inside your bundle.`)
        );
        console.log();
      } catch (err) {
        console.error(err);
      }
    });
  });

program.parse(process.argv);
