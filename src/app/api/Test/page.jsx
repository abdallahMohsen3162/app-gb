import React from 'react'
import '../Test/Test.css'



function Test() {
    return <>


    <div className="first-section">
  <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active  text-white">
        <div className="info-home">
          <h1 className="pb-4">Get Awesome.</h1>
          <p className="pb-2">We are an innovative company making digital stuff.</p>
          <div className="btn-home">
            <button className="btn  .btn-color me-3 btn-more">Read More</button>
            <button className="btn  .btn-color btn-contact">Contact</button>
          </div>
        </div>
      </div>
      <div className="carousel-item text-white">
        <div className="info-home">
          <h1 className="pb-4">Create With Bezel.</h1>
          <p className="pb-2">We help ambitious companies create new value.</p>
          <div className="btn-home">
            <button className="btn  .btn-color me-3 btn-more">Read More</button>
            <button className="btn  .btn-color btn-contact">Contact</button>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div> 
</div>


  


    
    
    
    
    </>
}

export default Test
