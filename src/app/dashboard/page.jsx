"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/layout/navbar";
import Img from "../components/img";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrash, faVideo } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import Refaat from "../components/Refat";
export default function Home() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [storage, setStorage] = useState(0);
  const [dataloaded , setDataloaded] = useState(false);

  const handleDelete = (imageUrl, id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        destroy(imageUrl, id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  };

  const loading = () => {
    axios.get('/api/storage').then((response) => {
      console.log(response);
      setStorage(response.data.data);
    })
    console.log(storage/Math.pow(10,6));
    setDataloaded(true)
  }
  
  useEffect(() => {
    loading()
  })

  const destroy = (url, _id) => {
    
    axios.delete('api/destroy', { data: {_id} }).then((response) => {
      console.log(response.data)
    })

    axios.post('http://127.0.0.1:5000/deletefb', { data: [url] }).then((response) => {
      console.log(response)
    })
    loading()
    
  }
    

  useEffect(() => {
    setDataloaded(false)
    axios.get('/api/images').then((response) => {
      console.log("UIMAGEs");
      console.log(response.data);
      setImages(response.data.data); // Assuming response.data is structured as { data: [...] }
    }).catch((error) => {
      console.error('Error fetching images:', error);
    });

    axios.get('/api/videos').then((response) => {
      console.log(response.data);
      setVideos(response.data.data); 
    }).catch((error) => {
      console.error('Error fetching images:', error);
    });
    setDataloaded(true)
    console.log(dataloaded);
  }, []);

  return (
      <>
      {
        dataloaded?
        <Navbar load_data={false}/>
        :
        <Navbar load_data={true}/>
      }
      
      

        <div className="container-fluid">
          <h1 className="text-center">Dashboard</h1>
          <h2>Images</h2>
        <div className="row" key={"Math.random() * 1000"}>
            {
              Array.isArray(images) && images.length > 0 ? (
                images.map((el, index) => (
                  <div className="col-lg-2 col-md-3 col-sm-4" key={`${Math.random() * 1000}`}>
                    <Img size={el.size} url={el.image_url} id={el.id}/>
                    
                  </div>
                ))
              ) : (
                <p></p>
              )
            }
        </div>

            <br />
            <br />
            <br />
            <br />

        <div className="container">
        {
            Array.isArray(videos) && videos.length > 0 ? (
              videos.map((el, index) => (
                <div className="video-wrapper position-relative mb-3" key={index}>
                  <a href={el.image_url} className="video-box position-relative overflow-hidden w-100" style={{ maxHeight: '150px' }}>
                    <div className="wallpaper position-absolute d-flex align-items-center justify-content-center w-100 h-100">
                      <FontAwesomeIcon icon={faVideo} />
                    </div>
                    <div className="position-relative w-100 h-100">
                      <video className="video w-100 h-100" src={el.image_url} controls></video>
                    </div>
                  </a>
                  <button 
                    onClick={() => handleDelete(el.image_url, el.id)}
                    className="trash btn btn-danger position-absolute end-0 top-0"
                    style={{ zIndex: 10 }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ))
            ) : (
              <p></p>
            )
          }

         
          </div>
        </div>
    </>
  );
}
