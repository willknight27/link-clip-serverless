# Link Clip - Serverless functions

# Serverless Project for URL Data Extraction

This project is developed in Node.js using TypeScript and follows a serverless architecture. It's responsible for extracting relevant data from a given URL, such as the title, description, main image, and domain.

## Installation

To install and run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Ensure you have Node.js and npm installed.
3. Install dependencies

## Using the Function

You can utilize the function to extract data from a provided URL by sending a GET request to the function URL with the `url` parameter containing the URL you wish to process. Below is an example of how to do this:

### **GET** :  https://example-domain/.netlify/functions/getUrlData?url=https://www.youtube.com/watch?v=4xDzrJKXOOY
### Expected Response

The function will respond with a JSON object containing the extracted information from the provided URL:

```json
{
  "title": "synthwave radio 🌌 - beats to chill/game to - YouTube",
  "description": "🎼 | Listen on Spotify, Apple music and more→  https://fanlink.tv/ChillSynthwave🎶 | Subscribe to this channel for more synthwave music→  https://bit.ly/synt...",
  "source": "https://www.youtube.com/watch?v=4xDzrJKXOOY",
  "img": "https://i.ytimg.com/vi/4xDzrJKXOOY/maxresdefault_live.jpg",
  "domain": "https://www.youtube.com"
}
```

## Dependencies

* @netlify/functions
```bash
npm install @netlify/functions
```

axios
```bash
npm installl axios
```

cheerio
```bash
npm install cheerio
```

## Dev dependencies

* typescript
* @types/node
* rimraf
* ts-node-dev
* commit-and-tag-version
```bash
npm install -D typescript @types/node ts-node-dev rimraf commit-and-tag-version
```

* netlify/cli
```bash
npm install -D netlify-cli 
```

* @types/cheerio
```bash
npm install --save-dev @types/cheerio
```

##  TypeScript config (tsconfig.json)
```bash
npm run tsc:init
```
