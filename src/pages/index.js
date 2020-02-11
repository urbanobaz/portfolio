import React from 'react';
import { Helmet } from 'react-helmet';
import headshot from '../../static/images/urbano.jpeg';
import miami from '../../static/images/miami.jpg';

function Index() {
  return (
    <div>
      <Helmet title={"Urbano's Portfolio"}>
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" type="text/css" href="../styles/minireset.min.css"></link>
        <script defer src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"></script>
      </Helmet>
      <div id="wallpaper" className="wallpaper" data-image={miami}></div>
      <div className="content">
        <aside className="side">
          <figure id="picture" className="picture">
            <div className="picture-shadow"></div>
            <img id="pictureImage" className="picture-image" src={headshot}
                alt="Portrait of Urbano Baz"
                width="320"
                height="320"></img>
          </figure>
        </aside>
        <main className="about">
          <h1 className="name">
            Hi, I'm Urbano Baz
          </h1>
          <p className="job">
            Front End Web Developer
          </p>
          <hr className="hr"/>
          <div className="description">
            <p>
              I am a (mostly) self-taught web developer who loves creating UIs with React.
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
    </div>
  )
}

export default Index;