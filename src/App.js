import React, {useState } from 'react';
import axios from 'axios';
import logo from './logo.png';
import './App.css';

const ResultPage=({result})=>{
  console.log(result);
  if (result.status === "ok") {
    return(
      <div className='download-container'>
        <h2>&#128071; Please Click the Download Button &#128071;</h2>
        <button><a style={{ color: "white", textDecoration: "none" }} href={result.link}>DOWNLOAD</a></button>
      </div>);
  }
  else if(result.status==="demo"){
    return(
      <div className='download-container'>
        <h2></h2>
      </div>);
  }
  else {
    return(
      <div className='download-container'>
        <h2>Please Enter Valid Video Url</h2>
      </div>);
  }
}
function App() {
  const [url, setUrl] = useState("");
  const[data,setData]=useState("");
  const[flag,setFlag]=useState(false);
  return (
    <>
    <div className='container'>
      <nav>
        <img src={logo} alt="logo" />
        <h1>YT MP3</h1>
      </nav>
      <h1>YOUTUBE TO MP3</h1>
      <h4>Convert YouTube Videos into Mp3 file for Free</h4>
      <input onChange={(e) => {
        setUrl(e.target.value);
      }} placeholder="Enter Your Video's Url Here..." />
      <button onClick={() => {
        let urll = url.split(/(vi\/|v=|.be\/|\/v\/|youtu\.be\/|\/embed\/)/);
        let videoId = (urll[2] !== undefined) ? urll[2].split(/[^0-9a-z_\-]/i)[0] : urll[0];
        const options = {
          method: 'GET',
          url: 'https://youtube-mp3-download1.p.rapidapi.com/dl',
          params: { id: videoId },
          headers: {
            'X-RapidAPI-Key': 'dfb9b7d5b7msh58605fff4558064p180b18jsnce10425639e1',
            'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
          }
        };
        axios.request(options).then(function (response) {
          setData(response.data);
          setFlag(true);
        }).catch(function (error) {
          console.error(error);
        });
      }
      }>CONVERT MP3</button>
      <h5 className='dev-info'>MADE WITH &#128154; BY BHS HARISH</h5>
    </div>
    {
      flag?<ResultPage result={data}/>:<h1></h1>
    }
    </>
  );
}

export default App;
