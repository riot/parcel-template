/**
 * Setup the unit test to support the .riot files import and to add the DOM globals
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import jsdomGlobal from "jsdom-global";

jsdomGlobal();
register("@riotjs/register", pathToFileURL("./"));
