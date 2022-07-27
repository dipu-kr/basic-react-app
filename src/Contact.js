import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <h2 className="text-center contact-heading">contact us</h2>
          <div className="row">
            <div className="col-12 col-lg-5 contact-left-section">
              <h4>connect with our sales team.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
                commodo ligula eget dolor.
              </p>
              <div className="img-div">
                <img
                  src="./images/pic3.jpeg"
                  alt="contact-img"
                  className="img-fluid contact-img"
                />
              </div>
            </div>
            <div className="col-12 col-lg-7 contact-right-section">
              <form method="POST">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone number"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add address"
                    name=""
                    id=""
                  />
                </div>
                <div className="col-12">
                  <textarea
                    type="text"
                    className="form-control row='10'"
                    placeholder="Enter your message"
                    name=""
                    id=""
                  ></textarea>
                </div>
                <div className="col-12 form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> I
                    agree with form contact details.
                  </label>
                </div>
                <div className="col-12 form-button">
                  <button type="submit" className="btn form-btn">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
