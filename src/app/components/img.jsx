import { faDownload, faEllipsisVertical, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import axios from 'axios';
import "../../style/object.css";
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Refaat from './Refat';

export default function Img(params) {
  const [load, setLoad] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [collapse, setCollapse] = useState(false);

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

  const destroy = (imageUrl, id) => {
    setLoad(true);
    axios.post('http://127.0.0.1:5000/deletefb', { data: [imageUrl] }).then((response) => {
      console.log(response);
      setLoad(false);
    });

    axios.delete('api/destroy', { data: { '_id': id } }).then((response) => {
      console.log(response);
      setDeleted(true);
    });
  };

  if (deleted) {
    return '';
  }


  return (
    <div className={`image-box ${load ? 'loading' : ''}`} >
      <div className="loading-overlay">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">
            {/* loading */}
          </span>
        </div>
      </div>
      <img style={{ maxHeight: '80%' }} src={params.url} alt="Image" className="img-fluid" />
      <div className="buttons-box row">
        <button
          className="collapse-trash position-absolute left-0 top-0 end-0 btn btn-dark"
          type="button"
          onClick={() => setCollapse(!collapse)}
          aria-expanded={collapse}
          aria-controls="collapseDelete"
        >
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>
      <div className={`collapse ${collapse ? 'show' : ''}`} id="collapseDelete">
        <button onClick={() => handleDelete(params.url, params.id)} className="btn btn-danger">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
