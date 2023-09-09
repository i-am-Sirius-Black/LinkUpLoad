import {useRef,useEffect, useState} from 'react';
import './App.css';
import {uploadFile} from './service/api';

function App() {
  const [file, setFile]= useState('');
  const[result, setResult]= useState('');
  console.log(file);
  
  const fileInputRef =useRef();

  useEffect(()=> {
       const getImage = async () => {
        if(file){
          const data = new FormData();
          data.append("name",file.name);
          data.append("file", file);
          
          const response = await uploadFile(data);
          setResult(response.path);
        }
       }
       getImage();

  }, [file]);  

  
  const onUploadClick=()=>{
    fileInputRef.current.click();
  };

  return (
    <div className='main-wrapper' style={{backgroundImage: `url('https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`}}>
    <div className='container'>
      <div className= 'wrapper'>
        <h1>ShareNest
        <h3>A File Sharing Platform!</h3>
        </h1>
        
        <p>Upload and share the download link</p>

        <button onClick={()=>onUploadClick()}>Upload</button>
        <input type='file' ref={fileInputRef} style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])} />
        

      <a href={result} target='_blank'>{result}</a>
      </div>
     </div>
    </div>
  );
}

export default App;
