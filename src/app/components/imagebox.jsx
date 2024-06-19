"use client"
import "../../style/object.css";
import React, { useState } from 'react'
import Image from "react"
import "../../style/object.css"
let classname = "";

// export default function YoloObject(params) {
//   classname = params.cls;
//   const [specialView, setSpecial] = useState(false);
//   return (  
//     <div className={`${specialView ? 'fullScreen' : ''}`}>
//       <h4>{params.cls}</h4>
//       <img src={params.url} alt="" onClick={() => setSpecial(!specialView)}/>
//     </div>
//   )
// }

export default function YoloObject(params) {
  classname = params.cls;
  const store = () => {
    const _id = localStorage.getItem('id');
    const url = "asdasdas";
    const size = 300;
    axios.post('api/store', { _id , url, size}).then((response) => {
      console.log(response.data)
    })
  };
  
  return (  
    <div class="image-box ">
        <div class="loading-overlay ">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
        <img style={{maxHeight: '80%'}} src={params.url} alt="Image" class="img-fluid" />
        <button class="btn btn-primary ">Save</button>
    </div>
  )
}
