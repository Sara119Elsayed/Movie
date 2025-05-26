import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
            <p><a href="/" className="text-reset text-decoration-none">Home</a></p>
            <p><a href="/about" className="text-reset text-decoration-none">About</a></p>
            <p><a href="/contact" className="text-reset text-decoration-none">Contact</a></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Follow Us</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
            <p><a href="#" className="text-reset text-decoration-none">Twitter</a></p>
            <p><a href="#" className="text-reset text-decoration-none">LinkedIn</a></p>
            <p><a href="#" className="text-reset text-decoration-none">GitHub</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
