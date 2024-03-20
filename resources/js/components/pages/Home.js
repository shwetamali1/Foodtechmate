import React, { useState } from 'react';

function Home() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
      <>
            
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	    	<a className="navbar-brand" href="index.html">Accounting</a>
	    	<button className="navbar-toggler" type="button" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
	      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="ftco-nav">
	        <ul className="navbar-nav m-auto">
	        	<li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
	        	<li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
	        	<li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
	          <li className="nav-item"><a href="cases.html" className="nav-link">Case Study</a></li>
	          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
      <div className="hero-wrap">
	    <div className="home-slider owl-carousel">
	      <div className="slider-item">
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row no-gutters slider-text align-items-center justify-content-center">
		          <div className="col-md-8 ftco-animate">
		          	<div className="text w-100 text-center">
		          		<h2>We Business Grow</h2>
			            <h1 className="mb-4">We Help You Businesses Innovate and Grow</h1>
			            <p><a href="#" className="btn btn-white">Connect with us</a></p>
		            </div>
		          </div>
		        </div>
	        </div>
	      </div>

	      <div className="slider-item">
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row no-gutters slider-text align-items-center justify-content-center">
		          <div className="col-md-8 ftco-animate">
		          	<div className="text w-100 text-center">
		          		<h2>We Support Business</h2>
			            <h1 className="mb-4">The Best Business Support</h1>
			            <p><a href="#" className="btn btn-white">Connect with us</a></p>
		            </div>
		          </div>
		        </div>
	        </div>
	      </div>

	      <div className="slider-item">
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row no-gutters slider-text align-items-center justify-content-center">
		          <div className="col-md-8 ftco-animate">
		          	<div className="text w-100 text-center">
		          		<h2>We Give Advice</h2>
			            <h1 className="mb-4">Expert Financial Advice</h1>
			            <p><a href="#" className="btn btn-white">Connect with us</a></p>
		            </div>
		          </div>
		        </div>
	        </div>
	      </div>
	    </div>
	  </div>
   	
 
        </>
    );
}

export default Home;
