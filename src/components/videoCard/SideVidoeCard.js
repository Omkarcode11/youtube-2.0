import React from 'react'
import { Link } from 'react-router-dom'
import './SideVidoeCartd.css'

function SideVidoeCard(props) {
  return (
    <Link className="Link sideVideo" to={`/video/${props.thumb.id.videoId}`}>
      <div className="card mb-3 sideVideo">
        <div className="row g-0">
          <div className="col-md-4 img">
            <img src={props.thumb.snippet.thumbnails.high.url} className="img-fluid rounded-start" alt="Card title" />
          </div>
          <div className="col-md-8 text-all">
            <div className="card-body">
              <h5 className="card-title">{props.thumb.snippet.title}</h5>
              <p className="card-text">{props.thumb.snippet.channelTitle}</p>
              <p className="card-text">
                <small className="text-muted">{new Date(props.thumb.snippet.publishedAt).toLocaleDateString()}</small>
              </p>
            </div>
          </div>
        </div>
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