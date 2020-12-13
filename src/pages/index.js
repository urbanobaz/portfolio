import React from "react"
import { Helmet } from "react-helmet"
// import { Link } from "gatsby"
import headshot from "../../public/images/urbano4.jpeg"
import cs50x from "../../public/images/cs50x.jpeg"
import googleit from "../../public/images/googleit.jpeg"
import books from "../../public/images/books.jpeg"
import miami from "../../static/images/miami.jpg"
import portfolio from "../../public/images/portfolio.jpeg"
// import Card from "../components/Card"

function Index() {
  return (
    <div>
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
      <div id="wallpaper" className="wallpaper" data-image={miami}></div>
      <div className="content">
        <aside className="side">
          <figure id="picture" className="picture">
            <div className="picture-shadow"></div>
            <img
              id="pictureImage"
              className="picture-image"
              src={headshot}
              alt="Portrait of Urbano Baz"
              width="320"
              height="320"
            ></img>
          </figure>
        </aside>
        <main className="about">
          <h1 className="name">Hi, I'm Urbano Baz</h1>
          <p className="job">Front End Web Developer</p>
          <hr className="hr" />
          <div className="description">
            <p>
              I am a (mostly) self-taught web developer who loves creating UIs
              with React.
            </p>
          </div>
          <div className="contact">
            <a className="button main-button" href="mailto:urbanobaz@yahoo.com">
              Get in touch
            </a>
          </div>
          <ul className="social" id="social">
            <li>
              <a href="https://twitter.com/ubaz_3">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/urbanobaz">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/urbanobaz">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </main>
      </div>
      <section className="projects">
        <h1 className="section-heading">Projects</h1>

        <div className="project-cards">
          <div className="card">
            <img src={cs50x} alt="headshot" className="card-image"></img>
            <div className="container">
              <h2>
                <b>Project 1: CS50x Website</b>
              </h2>
              <p>
                <strong>Info:</strong> Website built for CS50x at Miami Dade
                College.
              </p>
              <p>
                <strong>Technologies used:</strong> React (Gatsby) on the front
                end, API call to the Google books page to add books. Custom
                cards using NextJS's initial page.
              </p>
              <a href="urbanobaz.com">cs50x.herokuapp.com</a>
            </div>
          </div>

          <div className="card">
            <img src={googleit} alt="headshot" className="card-image"></img>
            <div className="container">
              <h2>
                <b>Project 2: Google IT Website</b>
              </h2>
              <p>
                <strong>Info:</strong> Website built for Google IT: Automation
                with Python course at Miami Dade College.
              </p>
              <p>
                <a href="http://cs50x.herokuapp.com/">Website Link</a>
              </p>
              <p>
                <strong>Technologies used:</strong> React (Gatsby) on the front
                end, API call to the Google books page to add books. Custom
                cards using NextJS's initial page.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={books} alt="headshot" className="card-image"></img>
            <div className="container">
              <h2>
                <b>Project 3: Books&More</b>
              </h2>
              <p>
                <strong>Info:</strong> Personal project to keep track of some of
                the books that I had read. Used the Google books API to add new
                books.
              </p>
              <p>
                <strong>Technologies used:</strong> React on the front end, API
                call to the Google books page to add books. Custom cards using
                NextJS's initial page.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={portfolio} alt="headshot" className="card-image"></img>
            <div className="container">
              <h2>
                <b>Project 4: Portfolio Page</b>
              </h2>
              <p>
                <strong>Info: </strong>Website highlighting some projects and a
                little bit more about me.
              </p>
              <p>
                <strong>Technologies used:</strong> React (Gatsby) on the front
                end, API call to the Google books page to add books. Custom
                cards using NextJS's initial page.
                <a href="http://cs50x.herokuapp.com/">Website Link</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
