# flaggle-flag-generator

Produce images of country flags with a common aspect ratio to use in Flaggle

## Usage

First, install dependencies. This will also fetch `codes.json` from [flagpedia.net](https://flagpedia.net/) using cURL.

```bash
npm i
```

Then, create images using

```bash
npm run start
```

Generates 360x240 PNG images by default (3:2 or 1.5 aspect ratio). This can be changed by editing `src/index.ts`
