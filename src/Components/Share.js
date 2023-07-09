import '../Styles/Share.css'
import React from 'react'
 import {RWebShare} from 'react-web-share'

const Share= (props) => {
  return (
    <div className='Butons'>
      <RWebShare
          data={{
              text: "Image Share",
              url:props.url ,
              title: "Image",
          }}
      >
          <button className="button button1" >Share</button>
      </RWebShare>        
    </div>
  )
}

export default Share