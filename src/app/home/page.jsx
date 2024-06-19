"use client";
import Image from 'next/image'
import UploadImage from '../components/Upload_image';
import UploadIVideo from '../components/Upload_video';
import "@/style/home.css"
import Navbar from '../components/layout/navbar'
// import UploadImage from '././components/Upload_image';


export default function Home() {
  return (
    <>
    < Navbar />
    <div className='container-fluid'>
      


      <UploadImage />
      
      {/* <UploadIVideo /> */}


      

     

    </div>
    </>
  )
}
