import React from "react"
import cs50x from "../../public/images/cs50x.jpeg"
import { Helmet } from "react-helmet"

export default function Card(props) {
  return (
    <>
      <Helmet title={"Urbano's Portfolio"}>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="../styles/minireset.min.css"
        ></link>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"
        ></script>
      </Helmet>
      <a href="https://www.urbanobaz.com/" className="card-link">
        <div className="card">
          <img src={cs50x} alt="headshot" className="card-image"></img>
          <div className="container">
            <h4>
              <b>Project 1: CS50x Website</b>
            </h4>
            <p>Info</p>
          </div>
        </div>
      </a>
    </>
  )
}
