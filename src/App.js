import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [formData,setFormData]=useState({});
  const [inputData,setInputdata]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3200/form/getForm').then((res)=>{
      setFormData(res.data.data);
      console.log(formData);
      for (const type in formData) {
        setInputdata([...inputData,type])
      }

    })
  },[])
  return (
    <div className="App">
      {
        inputData.map(data=>{
          <p>{data}</p>
        })
      }
    </div>
  );
}

export default App;
