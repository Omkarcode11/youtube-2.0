const BaseUrl =
  'https://youtube-v31.p.rapidapi.com';

const options = {
  //   method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.Api_Key  ,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};
 

export const fetchApi = async(url)=>{
const response = await fetch(`${BaseUrl}/${url}`, options)
let data = await response.json()
console.log(data )
return data
}

//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
