"use client";
import Image from 'next/image'
import UploadImage from '../components/Upload_image';
import UploadIVideo from '../components/Upload_video';
import "@/style/home.css"
import Navbar from '../components/layout/navbar'
import { useEffect, useState } from 'react';
import SidebarComponent from '../components/Sidebar/page';
import axios from 'axios';
// import UploadImage from '././components/Upload_image';


export default function Home() {
  const [Type, setType] = useState('image');
  const [storage, setStorage] = useState(0);
  const loading = () => {
    axios.get('/api/storage').then((response) => {
      console.log(response);
      setStorage(response.data.data);
    })
    console.log(storage/Math.pow(10,6));
  }
  useEffect(() => {
    loading();
  }, []);
  
  return (
    <>
    < Navbar />
    <div className='d-flex'>
        <div>
        <SidebarComponent/>
        </div>

         <div className='w-100 d-flex justify-content-center align-items-center'>
        
         <div className='w-100 text-center'>
          <label htmlFor="myRange">
            <h3>Storage : {(storage/Math.pow(10,6)).toFixed(1)} MB</h3>
          </label>
          <br />
          <meter className='meter-storage' value={storage/Math.pow(10,6)} min="0" max="100">
          </meter>
         </div>
         </div>
    </div>
      
    </>
  )
}

