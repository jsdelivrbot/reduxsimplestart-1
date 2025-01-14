import React, { Component } from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
   // const video = props.video;
   // this is the same as VideoListItem = (props)
   // It's short hand so say that this component's props are video

   const imageUrl = video.snippet.thumbnails.default.url;

   return (

      <li onClick={() => onVideoSelect(video)} className="list-group-item">
         <div className="video-list media">
            <div className="media-left">
               <img className="media-object" src={imageUrl} />
            </div>
         </div>

         <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
         </div>
      </li>
      
   );
};


export default VideoListItem;