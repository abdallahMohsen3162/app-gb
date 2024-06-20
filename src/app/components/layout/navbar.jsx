"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Navbar() {
  const router = useRouter();
  const [id, setId] = useState(false);
  useEffect(() => {
    setId(localStorage.getItem('id')? true : false)
  }, [])

  
  const logout = () => {
    axios.get("api/auth/logout").then((response) => {
      console.log(response)
      localStorage.clear()
    })  
    router.push('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" href="/" passHref>
       Navbar
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" href="/home" passHref>
              Home
            </Link>
          </li>
   
          {
            id ? null : <li className="nav-item"><Link className="nav-link" href="/login" passHref>Login</Link></li>
          }
          
          {
            id ? <li className="nav-item">
              <button className="nav-link" onClick={logout}>
               logout
              </button>
            </li> : null
          }

          {
            id ? null : <li className="nav-item"><Link className="nav-link" href="/register" passHref>Register</Link></li>
          }

          {
            id ? <li className="nav-item"><Link className="nav-link" href="/dashboard" passHref>Dashboard</Link></li> : null
          }
        </ul>
      </div>
    </div>
  </nav>
  )
}



