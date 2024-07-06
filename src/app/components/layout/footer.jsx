import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
<div className="  ">
  <footer className=" card-footer  bg-dark text-center text-white">

    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      
      <p>
      &copy; {currentYear} Copyright: 
      </p>
      <a className="text-white" href="https://Vimage.com/">Vimage.com</a>
    </div>
  </footer>
</div>
    </div>
  )
}



