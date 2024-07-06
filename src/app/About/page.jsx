"use client";
import React, { useEffect } from 'react';
import { initMDB, Collapse } from 'mdb-ui-kit'; // Import Collapse and initMDB from 'mdb-ui-kit'



import '../About/about.css'
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';

function About() {

    useEffect(() => {
        // Initialize MDB-UI-Kit only in client-side
        if (typeof window !== 'undefined') {
            initMDB({ Collapse }); // Initialize with Collapse component
        }
    }, []);
    
    return <>

<Navbar/>

  


<section id="about" class="about py-5  m-5">
            <div class="container py-4  ">
                <div class="main-about d-flex justify-content-center align-items-center flex-column mx-auto ">
                    <h6 class="text-center mb-3">WHO WE ARE</h6>
                    <div class="p-about mb-4">
                        <p class="fw-300 text-center text-secondary" > We are an innovative company. We develop and design <span class="auto-type main-color"></span> for</p>
                        <p class="fw-300 text-center text-secondary"> costumers around the world. Our clients are some of the most forward-
                         
                         
                         </p>
                         <p class="fw-300 text-center text-secondary">looking companies in the world.</p>
                    </div>
                
                        <button type="button" class="btn btn-sm border border-1 ">READ MORE</button>
                </div>
            </div>
        </section>


<div className=" mb-5     ">

<div className="w-75 m-auto py-5 mb-5 ">


<h2 className=' h1 text-center mb-4'>
Got any questions ?
</h2>

<div class="accordion" id="accordionExampleY">
<div class="accordion-item">
<h2 class="accordion-header" id="headingOneY">
<button data-mdb-collapse-init class="accordion-button" type="button" data-mdb-toggle="collapse"
data-mdb-target="#collapseOneY" aria-expanded="true" aria-controls="collapseOneY">
<i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>What is the concept of Super-resolution?
</button>
</h2>
<div id="collapseOneY" class="accordion-collapse collapse show" aria-labelledby="headingOneY"
data-mdb-parent="#accordionExampleY">
<div class="accordion-body">
Super-resolution techniques operate on the principle that by combining a series of low-resolution (potentially noisy) images of a scene, it becomes possible to generate a high-resolution image or sequence. The primary objective is to reconstruct the original scene image with enhanced resolution, utilizing a set of observed images captured at lower resolutions. Through advanced algorithms, super-resolution algorithms strive to restore fine details and overall image quality, resulting in a high-resolution representation that closely resembles the original scene.

</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingTwoY">
<button data-mdb-collapse-init class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
data-mdb-target="#collapseTwoY" aria-expanded="false" aria-controls="collapseTwoY">
<i class="fas fa-question-circle fa-sm me-2 opacity-70 how"></i> When should I use Super-resolution?
</button>
</h2>
<div id="collapseTwoY" class="accordion-collapse collapse" aria-labelledby="headingTwoY"
data-mdb-parent="#accordionExampleY">
<div class="accordion-body">
If you possess older or low-resolution photos that you wish to enhance for print quality, Spyne AI photo editor offers a valuable solution through its photo upscaler feature.
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingThreeY">
<button data-mdb-collapse-init class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
<i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>What is the Super-resolution of an Image ?
</button>
</h2>
<div id="collapseThreeY" class="accordion-collapse collapse" aria-labelledby="headingThreeY"
data-mdb-parent="#accordionExampleY">
<div class="accordion-body">
Image Super-Resolution is a machine learning task that involves increasing the resolution of an image by a factor of 4x or more while preserving its content and details. The result is a high-resolution version of the original image..
</div>
</div>
</div>

<div class="accordion-item">
<h2 class="accordion-header" id="headingFourY">
<button data-mdb-collapse-init class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
data-mdb-target="#collapseFourY" aria-expanded="false" aria-controls="collapseFourY">
<i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>What is the Super-resolution of a Video ?
</button>
</h2>
<div id="collapseFourY" class="accordion-collapse collapse" aria-labelledby="headingFourY"
data-mdb-parent="#accordionExampleY">
<div class="accordion-body">
Video super-resolution is the process of enhancing the resolution of a video beyond its original quality. It uses techniques like single-frame or multi-frame processing, often leveraging deep learning models to predict high-resolution details from lower-resolution inputs. This improves visual quality for applications in entertainment, surveillance, medical imaging, and machine learning.

</div>
</div>
</div>

<div class="accordion-item">
<h2 class="accordion-header" id="headingfiveY">
<button data-mdb-collapse-init class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
data-mdb-target="#collapsefiveY" aria-expanded="false" aria-controls="collapsefiveY">
<i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>What is the best resolution to use ?
</button>
</h2>
<div id="collapsefiveY" class="accordion-collapse collapse" aria-labelledby="headingfiveY"
data-mdb-parent="#accordionExampleY">
<div class="accordion-body">
Frequently known as 'Full HD,' the resolution of 1080 (1920 x 1080 pixels) has established itself as the industry standard for achieving a sharp high-definition (HD) digital video without consuming excessive storage space.

</div>
</div>
</div>


<div class="accordion-item">
<h2 class="accordion-header" id="headingsexY">
<button data-mdb-collapse-init class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
data-mdb-target="#collapsesexY" aria-expanded="false" aria-controls="collapsesexY">
<i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>What are the benefits of Super-resolution  ?
</button>
</h2>
<div id="collapsesexY" class="accordion-collapse collapse" aria-labelledby="headingsexY"
data-mdb-parent="#accordionExampleY">
<div class="accordion-body">
The key advantage of super-resolution is the improvement in resolving power, offering various options that enable imaging of structures below 200 nm. Super-resolution techniques provide enhanced capabilities for visualizing fine details and capturing intricate structures with unprecedented clarity.

</div>
</div>
</div>




</div>





</div>

</div>






    <Footer/>
    
    
    
    
    
    
    
    </>
    
}

export default About
