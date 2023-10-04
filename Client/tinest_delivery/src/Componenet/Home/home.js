
import React from 'react';
import './colorful.css';
import './home.css'
import { Navbar, Nav, Button } from 'react-bootstrap';

class Home extends React.Component {
  

  render() {
    return (
     
        <div>
        {/* Navbar */}
        <Navbar expand="md" fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="#"><b>Tinset Delivery</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar3SupportedContent" />
          <Navbar.Collapse id="navbar3SupportedContent">
            <Nav className="ml-auto">
              <Button variant="outline-light" href="#where">Login</Button>
              <Button variant="outline-light" href="#where">Signup</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

          {/* Other sections of the page */}
           <div className="py-5 text-center cover d-flex flex-column bg-dark" id='dark'>
            <div class="container my-auto">
              <div class="row">
                <div class="mx-auto col-lg-6 col-md-8"  className='desc'>
                  <h1 class>Tinest Delivery</h1>
                  <h3 class="mb-4" ><b>ALL of a team at your disposal</b></h3>
                  With unrivaled speed and reliability, we bridge distances,<br />
                  ensuring your parcels and packages reach their destinations on time.
                  <br />
                  Experience hassle-free shipping with Tinset – your trusted partner for efficient, global deliveries.
                </div>
              </div>
            </div>
            <div class="container mt-auto">
              <div class="row">
                <div class="mx-auto col-lg-6 col-md-8 col-10">
                  {/* <a href="#mission"><i class="d-block fa fa-angle-down fa-2x"></i></a> */}
                </div>
              </div>
            </div>
          </div>
         <div id='mission' class="py-5 filter-dark cover bg-fixed">
  <div class="container my-auto">
    <div class="row">
              <div class="col-md-8 p-3 text-white desc" className='desc'>
        <h2 class="mb-4">Our Mission</h2>
        <p class="lead"><i>Our mission is to ensure swift and dependable transportation of goods,<br/> connecting businesses and customers seamlessly.<br /> Through efficient logistics and a dedicated team,<br /> we strive to exceed expectations by providing timely and secure deliveries,<br /> contributing to the success of our clients and the satisfaction of their customers. <br />Our commitment to reliability and excellence drives us to consistently innovate and adapt,<br /> creating a stronger bridge between supply and demand in today's fast-paced world.</i></p>
      </div>
              <div class="swan-row swan-mb-11">
                <div class="swan-col-10 swan-col-offset-1">
                  <div class="detail-banner-howitworks swan-details-banner swan-details-banner-text-left swan-bg-short">
                    <div class="details-banner-text-howitworks swan-details-banner-text">
                    
                     
                      <p style={{ marginBottom: '0px' , fontSize:'25px' }}>Experience the ultimate convenience with door-to-door delivery. Sit back and relax as we bring your package directly to your doorstep, saving you time and hassle. Enjoy seamless delivery without ever leaving your home.</p>
                    </div>
                    <div class="swan-details-banner-image">
                      <span style={{ paddingBottom: '120%' }} class="swan-responsive-image-wrapper swan-aspect-ratio-container">
                        <span class="swan-aspect-ratio-content">
                          <div class="swan-responsive-image" ></div>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swan-row swan-mb-11">
                <div class="swan-col-10 swan-col-offset-1">
                  <div class="detail-banner-howitworks swan-details-banner2 swan-details-banner-text-left swan-bg-short">
                    
                    <div class="swan-details-banner-image">
                      <span style={{ paddingBottom: '120%' }} class="swan-responsive-image-wrapper swan-aspect-ratio-container">
                        <span class="swan-aspect-ratio-content">
                          <div class="swan-responsive-image2" ></div>
                        </span>
                      </span>
                    </div>
                    <div class="details-banner-text-howitworks swan-details-banner-text">
                    
                     
                      <p style={{ marginBottom: '0px' , fontSize:'25px' }}>Track your deliveries effortlessly on-the-go with our mobile app.<br/> Stay updated in real-time, knowing exactly where your package is and when it will arrive.<br/> Enjoy the convenience of tracking, all from the palm of your hand.</p>
                    </div>
                  </div>
                </div>
              </div>

{/* <div class="container" id='image'>
  <div class="row">
    <div class="col-md-6">
      <div class="cover2">
        <div class="text-right p-3">
          <p>Text related to Cover2</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="cover3">
        <div class="text-left p-3">
          <p>Text related to Cover3</p>
        </div>
      </div>
    </div>
  </div>
              </div> */}
              </div>
  </div>
</div>
          <div class="py-5 bg-light" id="what">
            <div class="container">
              <div class="row text-center">
                <div class="col-md-10 mx-auto px-4">
                  <h2 class="text-muted mb-4">What do we do</h2>
                  <div class="row text-left">
                    <div class="p-3 col-lg-4 col-md-6">
                      <div class="row mb-3">
                        <div class="text-center col-3"><i class="d-block mx-auto fa text-muted fa-4x fa-truck"></i></div>
                        <div class="align-self-center d-flex align-items-center px-0 px-md-2 col-9">
                          <h5 class="mb-0"><b>&nbsp; &nbsp;Efficient Deliveries</b></h5>
                        </div>
                      </div>
                      <p class="text-muted">Our expertise lies in prompt and secure deliveries, ensuring your goods reach their destinations on time.</p>
                    </div>
                    <div class="p-3 col-lg-4 col-md-6">
                      <div class="row mb-3">
                        <div class="text-center col-3"><i class="d-block mx-auto fa text-muted fa-4x fa-shield"></i></div>
                        <div class="align-self-center d-flex align-items-center px-0 px-md-2 col-9">
                          <h5 class="mb-0"><b>&nbsp; Safe Handling</b></h5>
                        </div>
                      </div>
                      <p class="text-muted">We prioritize the safety and protection of your goods throughout the delivery process.</p>
                    </div>
                    <div class="p-3 col-lg-4">
                      <div class="row mb-3">
                        <div class="text-center col-3"><i class="d-block mx-auto fa text-muted fa-4x fa-globe"></i></div>
                        <div class="align-self-center d-flex align-items-center px-0 px-md-2 col-9">
                          <h5 class="mb-0"><b>&nbsp; Global Reach</b></h5>
                        </div>
                      </div>
                      <p class="text-muted">We connect businesses worldwide, enabling efficient deliveries across the globe.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="text-muted">Deliver with Precision - Reach Every Destination</h2>
                </div>
              </div>
              <div class="row">
                <div class="text-right col-md-6">
                  <div class="row my-5">
                    <div class="order-lg-2 text-center col-lg-2 col-3">
                      <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-stack-1x fa-truck text-white"></i>
                      </span>
                    </div>
                    <div class="text-lg-right text-left order-lg-1 col-lg-10 col-9">
                      <h4>Efficient Deliveries</h4>
                      <p>Timely and secure transportation of goods to ensure efficient deliveries.</p>
                    </div>
                  </div>
                  <div class="row my-5">
                    <div class="order-lg-2 text-center col-lg-2 col-3">
                      <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-secondary"></i>
                        <i class="fa fa-stack-1x fa-lock text-white"></i>
                      </span>
                    </div>
                    <div class="text-lg-right text-left order-lg-1 col-lg-10 col-9">
                      <h4>Secure Handling</h4>
                      <p>Ensuring the safety and protection of goods during every step of the delivery process.</p>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="order-lg-2 text-center col-lg-2 col-3">
                      <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-stack-1x fa-clock text-white"></i>
                      </span>
                    </div>
                    <div class="text-lg-right text-left order-lg-1 col-lg-10 col-9">
                      <h4>Timely Services</h4>
                      <p>Delivering goods promptly and on schedule to meet clients' time-sensitive needs.</p>
                    </div>
                  </div>
                </div>
                <div class="text-left col-md-6">
                  <div class="row my-5">
                    <div class="text-center col-lg-2 col-3">
                      <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-info"></i>
                        <i class="fa fa-stack-1x fa-globe text-white"></i>
                      </span>
                    </div>
                    <div class="col-lg-10 col-9">
                      <h4>Global Reach</h4>
                      <p>Connecting businesses worldwide and enabling efficient deliveries across the globe.</p>
                    </div>
                  </div>
                  <div class="row my-5">
                    <div class="text-center col-lg-2 col-3">
                      <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-success"></i>
                        <i class="fa fa-stack-1x fa-handshake-o text-white"></i>
                      </span>
                    </div>
                    <div class="col-lg-10 col-9">
                      <h4>Reliable Partnerships</h4>
                      <p>Building strong collaborations to ensure dependable delivery services for clients.</p>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="text-center col-lg-2 col-3">
                      <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-warning"></i>
                        <i class="fa fa-stack-1x fa-flag-checkered text-white"></i>
                      </span>
                    </div>
                    <div class="col-lg-10 col-9">
                      <h4>Completion Assurance</h4>
                      <p>Guaranteeing successful delivery completion and customer satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5 section bg-light">
  <div class="container p-3">
    <div class="row align-items-center mb-4">
      <div class="col-lg-3">
        <h2 class="mb-3">Delighted Clients: Our Happy Partners</h2>
      </div>
      <div class="pl-lg-4 col-lg-8 mb-2">
        <p class="lead mb-0 text-muted">Our commitment to impeccable delivery services has earned us the trust and satisfaction of our esteemed partners. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
    {/* <div class="row d-flex align-items-center justify-content-between">
      <div class="col-md-2 col-4">
        <img class="center-block img-fluid d-block" src="https://via.placeholder.com/100" alt="Logo 1" />
      </div>
      <div class="col-md-2 col-4">
        <img class="center-block img-fluid d-block" src="https://via.placeholder.com/100" alt="Logo 2" />
      </div>
      <div class="col-md-2 col-4">
        <img class="center-block img-fluid d-block" src="https://via.placeholder.com/100" alt="Logo 3" />
      </div>
      <div class="col-md-2 col-4">
        <img class="center-block img-fluid d-block" src="https://via.placeholder.com/100" alt="Logo 4" />
      </div>
      <div class="col-md-2 col-4">
        <img class="center-block img-fluid d-block" src="https://via.placeholder.com/100" alt="Logo 5" />
      </div>
      <div class="col-md-2 col-4">
        <img class="center-block img-fluid d-block" src="https://via.placeholder.com/100" alt="Logo 6" />
      </div>
    </div> */}
  </div>
</div>
        {/* Footer */}
        <div class="text-white bg-dark" id="where">
          <div class="container">
            <div class="row">
              <div class="p-5 col-md-6">
                <h3><b>Tinest</b></h3>
                <p class="">
                  Quai Gustave-Ador 35 <br />1207 - Geneve (CH)
                </p>
                <p class="">
                  contact@tinest.tn
                </p>
                <p class="mb-3">
                  +216 24655072&nbsp;
                </p>
               <i class="fa d-inline fa-lg mr-3 text-white fa-linkedin"></i>
                <i class="fa fa-facebook d-inline fa-lg mr-3 text-white"></i>
              </div>
              <div class="p-5 col-md-6">
                <h3>Get in touch</h3>
                <form>
                  <div class="form-group">
                    <input type="email" class="form-control form-control-sm" placeholder="Email" required="required" name="email" /> </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-sm" id="inlineFormInput" placeholder="Subject" required="required" name="subject" /> </div>
                  <div class="form-group"><textarea class="form-control p-1 form-control-sm" id="exampleTextarea" rows="3" placeholder="Your message" name="message"></textarea></div>
                  <button type="submit" class="btn btn-outline-light btn-sm">SUBMIT</button>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-3">
                <p class="text-center text-muted">© Copyright 2023 TINEST - All rights reserved. </p>
              </div>
            </div>
          </div>
        
        {/* Yellow Modal */}
        
        
        {/* Other modals */}
        
        {/* Scripts */}
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
        <script src="js/smooth-scroll.js"></script>
                    
                    </div> </div>
                    
                 
    );
  }
}

export default Home;