import React from 'react'

export default function CircledNumber(props) {
  return (
    <svg width="100%" height="100%" {...props} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.41421">
        <path fill={props.color} d="M259.441,14.443c129.153,0 234.009,104.856 234.009,234.009c0,129.152 -104.856,234.008 -234.009,234.008c-129.153,0 -234.008,-104.856 -234.008,-234.008c0,-129.153 104.855,-234.009 234.008,-234.009Zm0,39.226c107.503,0 194.782,87.279 194.782,194.783c0,107.503 -87.279,194.782 -194.782,194.782c-107.503,0 -194.782,-87.279 -194.782,-194.782c0,-107.504 87.279,-194.783 194.782,-194.783Z"/>
        <text fill={props.color} x="201.26px" y="366.942px" font-family="HurmeGeometricSans3W03-Bold" font-weight="700" font-size="340px">
            {props.number}
        </text>
    </svg>

  )
}
