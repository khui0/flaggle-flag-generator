import * as fs from "fs";
import chalk from "chalk";
import sharp from "sharp";

const codes: { [key: string]: string } = JSON.parse(
  fs.readFileSync("./src/source/codes.json", "utf-8"),
);

const outputDir = "./dist";

let processed: number = 0;

interface Datum {
  code: string;
  name: string;
}

let data: Array<Datum> = [];

const HEIGHT: number = 240;
const RATIO: number = 1.5;

console.log(chalk.bgBlue(`Generating ${HEIGHT * RATIO}x${HEIGHT}`));

if (!fs.existsSync(outputDir)) {
  console.log(chalk.green("Creating output directory (./dist)"));
  fs.mkdirSync(outputDir);
}

Object.entries(codes).forEach(([code, name]) => {
  const path = `./src/source/svg/${code}.svg`;
  if (fs.existsSync(path)) {
    sharp(path)
      .resize(HEIGHT * RATIO, HEIGHT, { fit: "fill" })
      .toFile(`${outputDir}/${code}.png`);
    processed++;
    data.push({
      code,
      name,
    });
  }
});

fs.writeFileSync(`${outputDir}/data.json`, JSON.stringify(data, null, 2));

console.log(
  chalk.green(`Finished (${processed}/${Object.keys(codes).length})`),
);
