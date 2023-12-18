// const { Configuration, OpenAIApi } = require("openai");
// require("dotenv").config();

// const configuration = new Configuration({
//   apiKey: process.env.OPEN_AI_KEY
// });
// console.log(apiKey);
// const openai = new OpenAIApi(configuration);

// module.exports = openai;
const { Configuration, OpenAI } = require("openai");


require("dotenv").config();
// import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
});