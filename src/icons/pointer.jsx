import React from 'react';
import SvgLines from 'react-mt-svg-lines'; 

const Pointer = props => (
    <SvgLines timing="ease-in" animate={ true } duration={ 800 } style={{display: props.show ?  "block" : "none"}}>
        <svg height="15px" viewBox="0 0 126 47" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5">
            <path d="M11.5 23.411h91.198" fill="none" stroke="#000" stroke-width="23"/>
            <circle cx="101.894" cy="23.411" r="23.411" fill="#ffa700"/>
        </svg>
    </SvgLines>
);

export default Pointer;
