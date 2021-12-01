const fs = require("fs");

const installedJson = JSON.parse(
  fs.readFileSync("./vendor/composer/installed.json", "utf-8")
);

const requires = {};
installedJson.forEach((item) => {
  requires[item.name] = item.version;
});

const composer = {
  require: requires,
};

console.log(JSON.stringify(composer));
