import React from 'react'


function Image(props) {
  

  
  return (
    <div>
        <img style={{height:'50vh', width:'50vw', margin:'5vh'}}  src={props.url} className="Randomimage"  alt='Loading'   />
    </div>
  )
}

export default Image