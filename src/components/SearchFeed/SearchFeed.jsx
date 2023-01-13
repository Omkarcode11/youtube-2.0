import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context';
import SideVidoeCard from '../videoCard/SideVidoeCard';
import './SearchFeed.css';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '54b2231028mshf3cf08fe8472fbdp11562fjsne49ecb0683dc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

function SearchFeed() {
  const [searchVideos, setSearchVideos] = useState([]);

  const { value } = useContext(AppContext);

  useEffect(()=>{

    fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${value}&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date`,
      options
      )
      .then((res) => res.json())
      .then((res) => setSearchVideos(res.item));
    },[value])

  return (
    <div>
      {searchVideos?.map((item,i) => (
        <SideVidoeCard key={i} thumb={item} />
      ))}
    </div>
  );
}

export default SearchFeed;
