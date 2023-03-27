import React from "react";
import "../style/about.css";

function About() {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Lorem ipsum dolor sit amet..</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
          iusto!
        </p>
      </div>
      <h2 style={{ textAlign: "center" }}>Our Team</h2>

      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                perspiciatis tempore voluptates deserunt distinctio itaque est
                alias quis perferendis ipsa!.
              </p>
              <p>mike@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                perspiciatis tempore voluptates deserunt distinctio itaque est
                alias quis perferendis ipsa!.
              </p>
              <p>mike@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default About;
