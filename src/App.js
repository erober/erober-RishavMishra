import './App.css';
import ImageComponent from './Components/ImageComponent';
import Share from './Components/Share';
import { useState,useEffect } from 'react';

function App() {
  const [Image, setImage] = useState() 
  
  useEffect(() => {
    fetch("https://picsum.photos/200")
    .then((res)=>res.url) 
    .then(Imagee =>{
      setImage(Imagee)
    })
  }, []);

  return (
    <div className="App">
      <center>
        <ImageComponent url={Image} />
        <Share url={Image} />
      </center>
    </div>
  );
}

export default App;
