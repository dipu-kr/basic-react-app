import React from "react";
import data2 from "./Page2Data";

const Page2 = () => {
  return (
    <>
      {/* ---------------------first part------------------- */}
      <section className=" page2 page2-part1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 page2-left-img">
              <img
                src="./images/pic8.jpeg"
                className="img-fluid page2-img"
                alt="page2-img"
              />
            </div>
            <div className="col-12 col-lg-7 page2-right-content">
              <h5>--available @ google and ios app store only</h5>
              <h3>how to use app?</h3>

              {data2.map((data) => {
                return (
                  <div className="row page2-row">
                    <div className="col-1">
                      <p className="number">{data.id}</p>
                    </div>
                    <div className="col-10">
                      <h6 className="title">{data.title}</h6>
                      <p className="info">{data.info}</p>
                    </div>
                  </div>
                );
              })}
              <div className="page2-button-div">
                <button className="page2-button">learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page2;
