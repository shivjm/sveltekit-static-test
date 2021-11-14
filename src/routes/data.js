import fs from "fs";

import { load } from "js-yaml";

const PATH = "_data/foo.yaml";

const DATA = load(fs.readFileSync(PATH));

export function get() {
  return {
    status: 200,
    body: DATA,
  };
}
