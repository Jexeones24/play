const newsApiKey = 'd0d0224f01224291b0eae8445d16b638'
const url = 'https://newsapi.org/v2/top-headlines?'

export const getTopBBC = () => {
  return fetch(`${url}sources=bbc-news&apiKey=${newsApiKey}`)
  .then(resp => resp.json())
}

export const getStarWarsChars = () => {
  return fetch('https://swapi.co/api/people')
  .then(resp => resp.json())
}

export const getNasaInfo = () => {
  return fetch('https://api.nasa.gov/planetary/apod?api_key=KuYOdyuvISb2L0SEaSHrYqnswEbDb2XzNPXEf01d')
  .then(resp => resp.json())
}
