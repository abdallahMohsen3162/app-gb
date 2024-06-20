"use client"
import "../../style/object.css";
import React, { useState } from 'react'
import Image from "react"
import "../../style/object.css"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch , faDownload, faSave, faGears, faEllipsisVertical} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
let classname = "";


export default function ImageBox(params) {
  const [load, setload] = useState(false);
  classname = params.cls;
  const store = () => {
    setload(true);
    const _id = localStorage.getItem('id');
    const url = params.url;
    const size = params.size;
    const type = "image";
    axios.post('http://127.0.0.1:5000/store',{data: [url]}).then((response) => {
    
      let firebase_url = response.data.images_url;
      axios.post('api/store', { '_id':_id , 'url':firebase_url[0], 'size':size, 'type':type}).then((res) => {
        console.log(res)
        setload(false);
      })
    })
  };
  
  return (  
    <div className={`image-box ${load ? 'loading' : ''}`}>
          <div className="btn-group position-absolute top-0 end-0">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <button className="btn btn-dark" onClick={() => downloadImage(params.url, classname)}>
                      <FontAwesomeIcon style={{fontSize:"25px"}} icon={faDownload}></FontAwesomeIcon>
                    </button>
                  </li>
       
                  <li>  
                      <button onClick={store} className="btn btn-dark">
                      <FontAwesomeIcon style={{fontSize:"25px"}} icon={faSave}></FontAwesomeIcon>
                      </button>
                  </li>

                </ul>
                
          </div>


        <div className="loading-overlay">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
        
        <img style={{maxHeight: '80%'}} src={params.url} alt="Image" className="img-fluid" />
        <div className="buttons-box row">


        </div>
      </div>
  )
}
