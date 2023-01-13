// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import AppContext from '../../context';
import './Videos.css';

function Video(props) {
  return (
    <Link className="Link" to={`/video/${props.thumb.id.videoId}`} >
      <div>
        <div className="card">
          <img className="card-img-top " src={props.thumb.snippet.thumbnails.high.url} alt="Title" />
          <div className="card-body">
            <h5 className="card-title ">{props.thumb.snippet.title}</h5>
            <p className="card-text">{props.thumb.snippet.channelTitle}</p>
            <small className="card-text">Created At {new Date(props.thumb.snippet.publishedAt).toLocaleDateString()}</small>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Video;
