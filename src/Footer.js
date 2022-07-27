import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-3 footer-sub-div">
              <h4 className="text-center">company</h4>
              <ul>
                <li>about</li>
                <li>about</li>
                <li>about</li>
                <li>about</li>
              </ul>
            </div>
            <div className="col-10 col-md-3 footer-sub-div">
              <h4 className="text-center">support</h4>
              <ul>
                <li>about</li>
                <li>about</li>
                <li>about</li>
                <li>about</li>
              </ul>
            </div>
            <div className="col-10 col-md-3 footer-sub-div">
              <h4 className="text-center">services</h4>
              <ul>
                <li>about</li>
                <li>about</li>
                <li>about</li>
                <li>about</li>
              </ul>
            </div>
            <div className="col-10 col-md-3 footer-sub-div">
              <h4 className="text-center">follow us</h4>
              <div className="text-center social-link">
                <i className="fab fa-facebook-f"></i>

                <i className="fab fa-instagram"></i>

                <i className="fab fa-twitter"></i>
              </div>
            </div>
            <hr />
            <p className="text-center footer-p">Copyright @ 2021 OnlinePay</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
