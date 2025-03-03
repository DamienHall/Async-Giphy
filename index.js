require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

async function getImages(query) {
  const endpoint = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`);
  const data = await endpoint.json();
  const gifURL = data.data[0].url;
  console.log(gifURL);
}

getImages("dogs");
return getImages(`C:\Users\DaBr583\Documents\HP SWE GitHub\week5\Async-Giphy\assets\CreateApp.p`)