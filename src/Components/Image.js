import React from 'react'
import { useState,useEffect } from 'react';

function Image() {
    const [Image, setImage] = useState() 
  
  useEffect(() => {
    fetch("https://picsum.photos/200")
    .then((res)=>res.url) 
    .then(Imagee =>{
      setImage(Imagee)
    })
  }, []);

  
  return (
    <div>
        <img src={Image} className="Randomimage"  alt='Loading'   />
    </div>
  )
}

export default Image