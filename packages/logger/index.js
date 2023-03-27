import chalk from "chalk";
import requestLogger from "./requestLogger.js";

export const log = console.log;
export const error_log = console.trace;

export const warn = (message) => log(chalk.yellow(message));
export const error = error_log;
export const info = (message) => log(chalk.inverse(message));
export const green = (message) => log(chalk.green(message));

export { requestLogger };
