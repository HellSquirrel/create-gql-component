#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

if (process.argv.length < 3) {
  console.error("Component name should be provided");
  process.exit(1);
}

const componentName = process.argv[process.argv.length - 1];

const dir = path.join(process.cwd(), componentName);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
} else {
  console.error(`Directory ${dir} already exists`);
  process.exit(1);
}

function writeToFile(name, data = "") {
  const pathToFile = path.join(dir, name);
  fs.writeFile(path.join(dir, name), data, { encoding: "utf8" }, err => {
    if (err) {
      console.error("Error writing file!", err);
      process.exit(1);
    } else {
      console.log("Creating", pathToFile);
    }
  });
}

writeToFile("operations.graphql");
writeToFile(
  "index.js",
  `import React from 'react';
import cs from './styles.module.css';

const ${componentName} = () => (
  <div className={cs.${componentName.toLowerCase()}}>👋</div>
);

export default ${componentName};`
);
writeToFile(
  "styles.modules.css",
  `.${componentName.toLowerCase()} {

}`
);
