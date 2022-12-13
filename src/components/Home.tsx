import React from 'react';
import BlogBGImage1 from '../assets/blog-image1.jpg';
import AuthorImage1 from '../assets/author-image1.jpg';
import BlogImage2 from '../assets/blog-image2.jpg';
import AuthorImage2 from '../assets/author-image2.jpg';
import BlogImage3 from '../assets/blog-image3.jpg';
import BlogImage4 from '../assets/blog-image4.jpg';
import { Footer } from './Footer';
const home = () => {
  return (
    <div>
      {/* Home Section  */}
      <section id='home' className='main-home parallax-section'>
        <div className='overlay'></div>
        <div id='particles-js'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12'>
              <h1>Hello! This is Scripter.</h1>
              <a href='#blog' className='smoothScroll btn btn-default'>
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Blog Section --> */}

      <section id='blog'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-offset-1 col-md-10 col-sm-12'>
              <div className='blog-post-thumb'>
                <div className='blog-post-image'>
                  <a href='single-post.html'>
                    <img
                      src={BlogBGImage1}
                      className='img-responsive'
                      alt='Blog Images'
                    />
                  </a>
                </div>
                <div className='blog-post-title'>
                  <h3>
                    <a href='single-post.html'>
                      We Help You Create Perfect Modern Design
                    </a>
                  </h3>
                </div>
                <div className='blog-post-format'>
                  <span>
                    <a href='#/'>
                      <img
                        src={AuthorImage1}
                        className='img-responsive img-circle'
                        alt='authorBackgroundImage'
                      />
                      Jen Lopez
                    </a>
                  </span>
                  <span>
                    <i className='fa fa-date'></i> July 22, 2017
                  </span>
                  <span>
                    <a href='#/'>
                      <i className='fa fa-comment-o'></i> 35 Comments
                    </a>
                  </span>
                </div>
                <div className='blog-post-des'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <a href='single-post.html' className='btn btn-default'>
                    Continue Reading
                  </a>
                </div>
              </div>

              <div className='blog-post-thumb'>
                <div className='blog-post-image'>
                  <a href='single-post.html'>
                    <img
                      src={BlogImage2}
                      className='img-responsive'
                      alt='Blog Images'
                    />
                  </a>
                </div>
                <div className='blog-post-title'>
                  <h3>
                    <a href='single-post.html'>
                      In pretium tellus et ante accumsan
                    </a>
                  </h3>
                </div>
                <div className='blog-post-format'>
                  <span>
                    <a href='#/'>
                      <img
                        src={AuthorImage2}
                        className='img-responsive img-circle'
                        alt='author2 background Images'
                      />
                      Leo Dennis
                    </a>
                  </span>
                  <span>
                    <i className='fa fa-date'></i> June 10, 2017
                  </span>
                  <span>
                    <a href='#/'>
                      <i className='fa fa-comment-o'></i> 48 Comments
                    </a>
                  </span>
                </div>
                <div className='blog-post-des'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <a href='single-post.html' className='btn btn-default'>
                    Continue Reading
                  </a>
                </div>
              </div>

              <div className='blog-post-thumb'>
                <div className='blog-post-video'>
                  <div className='embed-responsive embed-responsive-16by9'>
                    <iframe
                      className='embed-responsive-item'
                      src='https://www.youtube.com/embed/Pgmx7z49OEk'
                      title='iframe'
                    ></iframe>
                  </div>
                </div>
                <div className='blog-post-title'>
                  <h3>
                    <a href='single-post.html'>
                      Nam interdum maximus dolor faucibus
                    </a>
                  </h3>
                </div>
                <div className='blog-post-format'>
                  <span>
                    <a href='#/'>
                      <img
                        src={AuthorImage1}
                        className='img-responsive img-circle'
                        alt='author Images'
                      />
                      Jen Lopez
                    </a>
                  </span>
                  <span>
                    <i className='fa fa-date'></i> May 30, 2017
                  </span>
                  <span>
                    <a href='#/'>
                      <i className='fa fa-comment-o'></i> 63 Comments
                    </a>
                  </span>
                </div>
                <div className='blog-post-des'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <a href='single-post.html' className='btn btn-default'>
                    Continue Reading
                  </a>
                </div>
              </div>

              <div className='blog-post-thumb'>
                <div className='blog-post-image'>
                  <a href='single-post.html'>
                    <img
                      src={BlogImage3}
                      className='img-responsive'
                      alt='Blog Images'
                    />
                  </a>
                </div>
                <div className='blog-post-title'>
                  <h3>
                    <a href='single-post.html'>
                      The ingredients that make a great burger
                    </a>
                  </h3>
                </div>
                <div className='blog-post-format'>
                  <span>
                    <a href='#/'>
                      <img
                        src={AuthorImage2}
                        className='img-responsive img-circle'
                        alt='author images'
                      />
                      Leo Dennis
                    </a>
                  </span>
                  <span>
                    <i className='fa fa-date'></i> April 18, 2017
                  </span>
                  <span>
                    <a href='#/'>
                      <i className='fa fa-comment-o'></i> 124 Comments
                    </a>
                  </span>
                </div>
                <div className='blog-post-des'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <a href='single-post.html' className='btn btn-default'>
                    Continue Reading
                  </a>
                </div>
              </div>

              <div className='blog-post-thumb'>
                <div className='blog-post-image'>
                  <a href='single-post.html'>
                    <img
                      src={BlogImage4}
                      className='img-responsive'
                      alt='Blog Images'
                    />
                  </a>
                </div>
                <div className='blog-post-title'>
                  <h3>
                    <a href='single-post.html'>
                      Vestibulum vel mauris nec ex tempus
                    </a>
                  </h3>
                </div>
                <div className='blog-post-format'>
                  <span>
                    <a href='#/'>
                      <img
                        src={AuthorImage1}
                        className='img-responsive img-circle'
                        alt='author images'
                      />
                      Jen Lopez
                    </a>
                  </span>
                  <span>
                    <i className='fa fa-date'></i> March 12, 2017
                  </span>
                  <span>
                    <a href='#/'>
                      <i className='fa fa-comment-o'></i> 256 Comments
                    </a>
                  </span>
                </div>
                <div className='blog-post-des'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <a href='single-post.html' className='btn btn-default'>
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default home;
