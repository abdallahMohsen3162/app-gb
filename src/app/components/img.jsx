import { faDownload, faEllipsisVertical, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import axios from 'axios';
import "../../style/object.css";
export default function Img(params) {
  const [load, setload] = useState(false);
  console.log(params);
  const destroy = () => {
    setload(true);
    const _id = params.id;
    const url = params.url;

    axios.post('http://127.0.0.1:5000/deletefb', { data: [url] }).then((response) => {
      console.log(response)
      setload(false);
    })

    axios.delete('api/destroy', { data: {_id} }).then((response) => {
      console.log(response.data)
    })
  }

  return (
    <div className={`image-box ${load ? 'loading' : ''}`}>

    <div className="loading-overlay">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">
              {/* loading */}
            </span>
        </div>
      </div>


  
      <img style={{maxHeight: '80%'}} src={params.url} alt="Image" className="img-fluid" />
      <div className="buttons-box row">
      </div>

      <button onClick={() => destroy()} className="btn btn-danger">
          Delete
      </button>
    </div>
  )
}
