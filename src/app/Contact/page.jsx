"use client";
import React from 'react'
import '../Contact/Contact.css' 
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';

function Contact() {
    return <>

    <Navbar/>


<section id="contact" className="contact pt-5 ">
  <div className="container-fluid pt-4 mb-3">
    <div className="row ">
      <div className="col-md-6  ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502595.146296284!2d-119.30660699999999!3d37.2691675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2seg!4v1701347328417!5m2!1sen!2seg" width="100%" height={800} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>   
      <div className="col-md-5 offset-md-1">
        <div className="title-contact  mt-2">
          <div className="title-l-contact d-flex justify-content-start align-items-center  ">
            <h2 className="l-contact">G</h2>
            <h2 className="text-dark title-layer-contacts position-absolute">Get In Touch</h2>
          </div>
          <div className="p-contact m-auto  mb-5">
            <h4 className="text-secondary">Let's work together.</h4>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="exampleInputName" className="form-label"> Your Name</label>
            <input type="text" className="form-control input-contact border border-1 border-secondary" id="exampleInputName" aria-describedby="NameHelp" name="name" />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
            <input type="email" className="form-control input-contact border border-1 border-secondary" id="exampleInputEmail" aria-describedby="emailHelp" name="email" />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword" className="form-label">Password</label>
            <input type="password" className="form-control input-contact border border-1 border-secondary" id="exampleInputPassword" name="password" />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleFormControlTextarea" className="form-label">Your Message</label>
            <textarea className="form-control message-contact border border-1 border-secondary" id="exampleFormControlTextarea" rows={3} name="message" defaultValue={""} />
          </div>
          <button type="submit" className="btn btn-primary .btn-color">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>

<Footer/>






    
    
    
    
    
    </>
}

export default Contact
