"use client";

import axios from "axios";
import { useEffect } from "react";




export default function Home() {

  useEffect(() => {
    axios.get("api/download").then((response) => {
      console.log(response.data)  ;
    })
  })
  return (  
    <div>
  
    <h1 className="text-center">dashboard</h1>
    <div className="container">
      <h1>Welcome to Next.js with Bootstrap!</h1>
      <button className="btn btn-primary">Primary Button</button>
    </div>
    </div>
  )
}