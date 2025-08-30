import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="start">
      {/* Hero Section */}
      <section 
        className="rounded-lg text-white p-8 mb-12 bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2023/01/13/04/52/cool-7715273_960_720.jpg)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-black font-bold mb-4">Sustainable Fertilizer Usage Optimizer</h1>
          <p className="text-black mb-8">A data-driven approach to enhance crop yield while maintaining soil health</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="px-6 py-3 ">
            <button type="button" className="btn btn-dark px-6 py-3">Get Started</button>
            </Link>
            <Link to="/dashboard" className="px-6 py-3">
            <button type="button" className="btn btn-dark px-6 py-3">Try Dashboard</button>
            </Link>
          </div>
        </div>
      </section>
      {/* <section>
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
      </section> */}
      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Tailored Recommendations",
              description: "Get customized fertilizer recommendations based on your soil data and crop type.",
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              title: "Real-time Weather Integration",
              description: "Incorporates weather data to adjust fertilizer recommendations for optimal results.",
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
            },
            {
              title: "Historical Data Tracking",
              description: "Monitor soil health and fertilizer effectiveness over time with detailed analytics.",
              icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { img: "https://img.freepik.com/premium-vector/leaf-soil-logo-rounded-floral_545635-143.jpg", title: "Input Soil Data", description: "Enter your soil pH, nutrient levels, and select your crop type" },
              { img: "https://as1.ftcdn.net/v2/jpg/01/08/95/58/1000_F_108955843_l71TvBvBG8XJ8CCWk7kvqtt9OUCyP9G1.jpg", title: "Weather Analysis", description: "System integrates local weather patterns" },
              { img: "https://png.pngtree.com/png-clipart/20230410/original/pngtree-blue-recommended-label-png-image_9042599.png", title: "Get Recommendations", description: "Receive optimal fertilizer type and quantity suggestions" },
              { img: "https://tse3.mm.bing.net/th?id=OIP.6l4fxMj_gLIxGPu0WhNlBgAAAA&pid=Api&P=0&h=180", title: "Track Results", description: "Log and monitor soil health improvements over time" },
            ].map((step, index) => (
              <div key={index}>
                <img className="logos w-16 h-16 mx-auto mb-3" src={step.img} alt={step.title} />
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Our Recommendations:-</h1>
          <div className="imgs">
            <div className="i"><img src="https://media.bighaat.com//wsfbanners/d29ab038-98f9-475c-a573-36219aca31f2.webp?w=640&q=80" alt="fertilizer" className='im'/>
            <h4>Fito</h4>
            </div>
            <div className="i"><img src="https://tse4.mm.bing.net/th?id=OIP.TMoHjPunUSDslRVlIXmhDAHaHa&pid=Api&P=0&h=180" alt="fertilizer" className='ims'/>
            <h4>Earth care plus</h4>
            </div>
            <div className="i"><img src="https://media.bighaat.com//wsfbanners/5f3b1322-e8bd-4e69-9fbf-9a37afdf6d76.webp?w=640&q=80" alt="fertilizer" className='im'/>
            <h4>Nema Prime</h4>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="text-center bg-green-600 p-8 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Farm's Productivity?</h2>
        <p className="text-lg mb-6">Join thousands of farmers benefiting from sustainable farming practices</p>
        <Link to="/register" className="px-6 py-3">
        <button type="button" class="btn btn-success">Sign up today</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
