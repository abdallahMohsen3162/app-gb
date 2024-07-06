"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';



export default function Navbar({load_data = false}) {
  const router = useRouter();
  const [id, setId] = useState(false);
  useEffect(() => {
    setId(localStorage.getItem('id')? true : false)
  }, [])

  const logoStyle = {
    height: '40px',
    width: '120px'
  };
  console.log("$$$$$$$$$$$", load_data);

  const logout = () => {
    axios.get("api/auth/logout")
      .then((response) => {
        console.log(response);
        localStorage.clear(); // Clear local storage if needed

        // Redirect to login page
        router.push('/login');
      })
      .catch((error) => {
        console.error("Logout error:", error);
        // Handle error if necessary
      });
  };
  return (
    <nav className="position-relative navbar navbar-expand-lg text-light  bg-dark  border-bottom border-body fixed-top overflow-hidden" data-bs-theme="dark" >
      {
        load_data ? <div className="load_navbar"></div> : null
      }
    <div className="container-fluid">
      <Link className="navbar-brand" href="/" passHref>
      <img className='hello' style={logoStyle} src="https://firebasestorage.googleapis.com/v0/b/prompt-397314.appspot.com/o/media%2Fmedia%2FWhatsApp%20Image%202024-06-21%20at%2014.58.42_3db90db1.jpg?alt=media&token=aa782216-bb71-4039-959e-b71fb0d10541" alt="VImage" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {
            (id)?(
              <li className="nav-item">
            <Link className="nav-link nav-link active" href="/home" passHref>
              Home
            </Link>
          </li>
            ):(
              ''
            )
          }

          
             <li className="nav-item"><Link className="nav-link nav-link active" href="/About" passHref>About</Link></li>


             <li className="nav-item"><Link className="nav-link nav-link active" href="/HowUsing" passHref>How to use use ?</Link></li>
    
          
   
        
         
            <li className="nav-item"><Link className="nav-link nav-link active" href="/Contact" passHref>Contact</Link></li>
        
         
         <li className="nav-item"><Link className="nav-link nav-link active" href="/Pricing" passHref>Pricing</Link></li>
     

          {
            id ? <li className="nav-item"><Link className="nav-link nav-link active" href="/dashboard" passHref>Dashboard</Link></li> : null
          }
        </ul>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">

<li className="nav-item ">
    <ul className=' list-unstyled d-flex       '>
      <li> 
      <i className="mx-2 fa-brands fa-facebook bg-black"></i>
      </li>

      <li> 
      <i className="mx-2 fa-brands  fa-instagram"></i>
      </li>


      <li> 
      <i className="mx-2 fa-brands   fa-twitter"></i>
      </li>


      <li> 
      <i className="mx-2 fa-brands fa-linkedin"></i>
      </li>










    </ul>
  </li>

  {
            id ? null : <li className="nav-item"><Link className="nav-link nav-link active" href="/login" passHref>Login</Link></li>
          }
          
          {
            id ? <li className="nav-item">
              <button className="nav-link nav-link active" onClick={logout}>
               logout
              </button>
            </li> : null
          }

          {
            id ? null : <li className="nav-item"><Link className="nav-link nav-link active" href="/register" passHref>Register</Link></li>
          }










 
</ul>
      </div>
    </div>
  </nav>
  )
}



