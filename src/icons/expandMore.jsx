import React from 'react';

const ExpandMoreIcon = props => (
    <svg width="15" height="15" {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
      <path d="M75.4 15.157l127.599 127.599 15.556-15.556L90.956-.399 75.4 15.157z" fill={props.color}/>
      <path d="M75.4 239.243l127.599-127.599 15.556 15.556L90.956 254.799 75.4 239.243z" fill={props.color}/>
  </svg>
);

export default ExpandMoreIcon;