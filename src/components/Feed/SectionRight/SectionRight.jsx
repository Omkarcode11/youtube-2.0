import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../context';
import Video from '../../Video/Video';
import './SectionRight.css';
// import { fetchApi } from '../../../utils/fetchApi'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '54b2231028mshf3cf08fe8472fbdp11562fjsne49ecb0683dc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};
function SectionRight() {
  const [videos, setVideos] = useState([]);
  // const url = 'search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50'

  const { value } = useContext(AppContext);

  useEffect(() => {
    fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${value}&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setVideos(response.items);
      })
      .catch((err) => console.error(err));
  }, [value]);

  return (
    <div className="right-video-section">
      {videos?.map((item, index) => (
        <Video thumb={videos[index]} key={index} />
      ))}
    </div>
  );
}

export default SectionRight;
