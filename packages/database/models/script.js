import { error, warn } from "logger";
import Template from "./Template.js";

Template.sync()
  .then(() => warn(`Template Created.`))
  .catch(error);
