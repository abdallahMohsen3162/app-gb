"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { detectTypeImage, positiveFeedback } from '../../../helpers/fileHelper';
import Loading from './Loading';
import ImageBox from './imagebox';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Refaat from './Refat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
const time_delay = 900000000

let image_server_path = [''];
let classes = [''];
let sizes = []
let retbefore = [];
let low_res_array = [-1,32, 64, 128, 256, 512, 1024]
//car, human, sign

function UploadImage() {
  const [image, setImage] = useState(null);
  const [c, setc] = useState(0)
  const [fileType, setFileType] = useState(null);
  const [loading, setloading] = useState(false);
  const [allowToUploaad, setUploadBtton] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [low_res, set_lowres] = useState(-1);
  const [useYolo, setUseYolo] = useState("false");
  const [zoom, setzoom] = useState('');
  const [low_zoom, setlow_zoom] = useState('');
  const router = useRouter();



  useEffect(() => {
    window.onabort = () => {
      console.log('Aborted');
    }
    window.onkeydown = (e) => {
      if(e.key == 'Escape'){
        setzoom('');
      }
    }
  }, []);

  const del = () => {
    axios.post('http://127.0.0.1:5000/delete', { data: image_server_path }, { timeout: time_delay })
      .then(response => {
      })
      .catch(error => {
        // Handle error if needed
        console.error('Error deleting:', error);
      });
  }


  const popUp = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
      allowOutsideClick: false // Prevent closing without a choice
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setLoading2(true);
        store();
      } else if (result.isDenied) {
        del();
      }
    });
  };

    console.log(low_res);

  const store = () => {
    axios.post('http://127.0.0.1:5000/store', { data: image_server_path }, { timeout: time_delay })
      .then(response => {
        console.log(response.data);
        setLoading2(false);
        positiveFeedback("Saved on cloud");
      })
      .catch(error => {
        // Handle error if needed
        console.error('Error deleting:', error);
      });
  }


  useEffect(() => {
    setUploadBtton(fileType == "IMAGE")
    console.log(fileType == "IMAGE");
  }, [fileType])

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    setImage(file);
    if (file) {
      setFileType(detectTypeImage(file.name).toLocaleUpperCase())
    }
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImage(file);


    if (file) {
      setFileType(detectTypeImage(file.name).toLocaleUpperCase())
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  }


  const handleUpload = async () => {
    if(!image){
      return;
    }
    setloading(true);
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('low_res', low_res);
      formData.append('yolo', useYolo);
      const response = await axios.post('http://127.0.0.1:5000/upload_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: time_delay
      });
      console.log(response.data);
      setloading(false);
      retbefore = response.data.retbefore
      image_server_path = response.data.message;
      classes = response.data.classes;
      sizes = response.data.sizes
      console.log(response.data);
      setc(c + 1);
      // popUp();
    } catch (error) {
      console.log(error);
    }
  };

  // const handlefocus = (i) => {
  //   setSpecial(i);
  // }

  return (
    <div className='images-yolo mt-5'>
      <div
        className='drag-drop'
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
      >
        <p>Drag and drop a image here or click to browse</p>
        <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
        <button className='button browse-btn' onClick={() => document.querySelector('input[type="file"]').click()}>Browse</button>
        {
          (fileType)?(
            <p>{fileType} File Detected</p>
          ):(
            ""
          )
        }
      </div>
      {
        (allowToUploaad)?(
          <button className='button save-btn' onClick={handleUpload}>Upload Image</button>
        ):('')
      }

      
    <p>Choose your image approximate resolution</p>
    <div className={`btn-group`} >
        {
          low_res_array.map((el, idx) => {
            
            return (
              <button
                key={idx}
                className={`btn btn-dark text-light choice-res btn ${low_res == el ? 'btn-color' : ''}`}
                onClick={() => set_lowres(el)}
              >
                {el == -1 ? "Original" : el}
              </button>
            );
          })
        }
    </div>

        <button onClick={() => setUseYolo(useYolo=="false"? "true" : "false")} className={`btn btn-dark text-light btn ${useYolo =='true'? 'btn-color' : ''}`}>
          {useYolo == 'true'? "Disable Yolo" : "Enable Yolo"}
        </button>

      <div className='container'>
        <div className='row'>
            {
            (c)?(
              image_server_path.map((el, idx) => {
                return(
                  <div className='col-sm-12 col-md-6' key={idx} >
                   <div onClick={() => {setzoom(image_server_path[idx]) ; setlow_zoom(retbefore[idx])}}>
                   <ImageBox size={sizes[idx]} cls={classes[idx]} url={image_server_path[idx]} />
                   </div>
                  </div>
                )
              })
            ):(
              ""
            )
          }
        </div>
      </div>
      {
        (loading)?(
          < Loading ltype="process"/>
        ):("")
      }
      
      {
        (loading2)?(
          < Loading ltype="storing"/>
        ):("")
      }

         
      {
        (zoom)?(
          <div className='zoom-container'>
          <button className='btn btn-danger' onClick={() => setzoom('')}>
            <FontAwesomeIcon icon={faX} />
          </button>
          <br />
          <Refaat img_url={zoom} img_url2={low_zoom}/>
        </div>
        ):("")
      }
    </div>
  );
}

export default UploadImage;
