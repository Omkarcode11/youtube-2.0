import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SideVidoeCard from '../components/videoCard/SideVidoeCard';
import './SuggestedVideos.css'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '54b2231028mshf3cf08fe8472fbdp11562fjsne49ecb0683dc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

function SuggestedVideos() {
  const [videos,setVideo] = useState('')
  const {id} = useParams()


  useEffect(()=>{

    fetch(
      `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`,
      options
      )
      .then((response) => response.json())
      .then((response) => setVideo(response.items))
      .catch((err) => console.error(err));
    },[id])
  return( 
    <div className='suggested-videos'>
  {videos && videos.map((items)=>
    <SideVidoeCard thumb={items}/>
    )}
  </div>
  )
}

export default SuggestedVideos;