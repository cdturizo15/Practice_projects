
const apiKey = "8I2UmFC5bpAuX89skOqN5mGEsdPZCrEW&q"
export default function getGifs({key  = "cats"}={}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${key}&limit=25&offset=0&rating=g&lang=en`
    return fetch(apiURL)
    .then(res=>res.json())
    .then(response=>{
      const {data} = response
      const gifs = data.map(image =>{
        const {id,images,title} = image
        const {url} = image.images.downsized_medium
        return {id,images,title,url}
      })

      return gifs
    }) 
    .catch(error=>console.log(error))
} 