import React from 'react'
import { Link } from 'react-router-dom'
import './SideVidoeCartd.css'

function SideVidoeCard(props) {
  return (
    <Link className="Link text-light sideVideo" to={`/video/${props.thumb.id.videoId}`}>
          <div className="img-suggested">
            <img src={props.thumb.snippet.thumbnails.high.url} className="img-layout" alt="Card title" />
          </div>
            <div className="card-body">
              <h5 className="card-title">{props.thumb.snippet.title}</h5>
              <p className="card-text">{props.thumb.snippet.channelTitle}</p>
              <p className="card-text">
                <small className="text-muted">{new Date(props.thumb.snippet.publishedAt).toLocaleDateString()}</small>
              </p>
            </div>
    </Link>
  );
}

export default SideVidoeCard

//   <Link className="Link" to={`/video/${props.thumb.id.videoId}`} >
//       <div>
//         <div className="card">
//           <img className="card-img-top " src={props.thumb.snippet.thumbnails.high.url} alt="Title" />
//           <div className="card-body">
//             <h5 className="card-title ">{props.thumb.snippet.title}</h5>
//             <p className="card-text">{props.thumb.snippet.channelTitle}</p>
//             <small className="card-text">Created At }</small>
//           </div>
//         </div>
//       </div>
//     </Link>