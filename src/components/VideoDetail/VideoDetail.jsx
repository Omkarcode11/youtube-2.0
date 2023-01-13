import React from 'react';
import SuggestedVideos from '../../SuggestedVideos/SuggestedVideos';
import VideoBox from '../VideoBox/VideoBox';
import './VideoDetail.css';

function VideoDetail() {
  return (
    <div className="videoDetail-layout">
      <div className="videoBox-layout">
        <VideoBox className="video" />
      </div>
      <div className="suggestedVideos-layout">
      <SuggestedVideos />
      </div>
    </div>
  );
}

export default VideoDetail;
