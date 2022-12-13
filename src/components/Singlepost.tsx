import React from 'react';
import { Footer } from './Footer';
import AuthorImage1 from '../assets/author-image1.jpg';
import BlogImage3 from '../assets/blog-image3.jpg';
import BlogImage1 from '../assets/blog-image1.jpg';
import BlogImage2 from '../assets/blog-image2.jpg';
import CommentImg1 from '../assets/comment-image1.jpg';
import CommentImg2 from '../assets/comment-image2.jpg';
import AuthorImage2 from '../assets/author-image2.jpg';
const Singlepost = () => {
  return (
    <div>
      {/* <!-- Home Section --> */}

      <section id='home' className='main-single-post parallax-section'>
        <div className='overlay'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12'>
              <h1>Single Post</h1>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Blog Single Post Section --> */}

      <section id='blog-single-post'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-offset-1 col-md-10 col-sm-12'>
              <div className='blog-single-post-thumb'>
                <div className='blog-post-title'>
                  <h2>We Help You Create Perfect Modern Design</h2>
                </div>

                <div className='blog-post-format'>
                  <span>
                    <a href='#/'>
                      <img
                        src={AuthorImage1}
                        className='img-responsive img-circle'
                        alt=''
                      />{' '}
                      Jen Lopez
                    </a>
                  </span>
                  <span>
                    <i className='fa fa-date'></i> July 22, 2017
                  </span>
                  <span>
                    <a href='#/'>
                      <i className='fa fa-comment-o'></i> 124 Comments
                    </a>
                  </span>
                </div>

                <div className='blog-post-des'>
                  <p>
                    Vivamus euismod tempor interdum. Vivamus non scelerisque ex,
                    et interdum leo. In bibendum lacus vitae felis egestas, at
                    consectetur metus facilisis. Morbi tellus dolor, porta
                    dignissim enim sit amet, dapibus sagittis erat. In blandit
                    elit sit amet dui aliquet congue nec vel quam. Integer id
                    tristique libero.
                  </p>
                  <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{' '}
                  </blockquote>
                  <p>
                    Integer vestibulum vitae arcu vel consectetur. Morbi nisl
                    enim, elementum eget enim nec, posuere commodo mi. Proin
                    elementum metus et dolor posuere placerat. Proin in sagittis
                    justo. Nulla tincidunt eu velit elementum accumsan.
                  </p>

                  <div className='blog-post-image'>
                    <img
                      src={BlogImage3}
                      className='img-responsive'
                      alt='Blog Images 3'
                    />
                  </div>

                  <h3>What is Personal Blog Theme?</h3>
                  <p>
                    Nulla tincidunt eu velit elementum accumsan. Vivamus euismod
                    tempor interdum. Vivamus non scelerisque ex, et interdum
                    leo. In bibendum lacus vitae felis egestas, at consectetur
                    metus facilisis. Morbi tellus dolor, porta dignissim enim
                    sit amet, dapibus sagittis erat. In blandit elit sit amet
                    dui aliquet congue nec vel quam. Integer id tristique
                    libero.
                  </p>
                </div>

                <div className='blog-single-post-image'>
                  <div className='col-md-4 col-sm-4'>
                    <img
                      src={BlogImage1}
                      className='img-responsive'
                      alt='Blog Images 1'
                    />
                  </div>
                  <div className='col-md-4 col-sm-4'>
                    <img
                      src={BlogImage2}
                      className='img-responsive'
                      alt='Blog Images 2'
                    />
                  </div>
                  <div className='col-md-4 col-sm-4'>
                    <img
                      src={BlogImage3}
                      className='img-responsive'
                      alt='Blog Images 3'
                    />
                  </div>
                </div>
                <p>
                  Aliquam blandit velit nisi, sed fringilla felis lacinia sed.
                  Integer vitae porta felis. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Phasellus non tristique lacus. Suspendisse ut tortor vitae
                  risus lacinia tristique. Aliquam sed consectetur libero.
                </p>

                <div className='blog-author'>
                  <div className='media'>
                    <div className='media-object pull-left'>
                      <img
                        src={AuthorImage1}
                        className='img-circle img-responsive'
                        alt='blog'
                      />
                    </div>
                    <div className='media-body'>
                      <h3 className='media-heading'>
                        <a href='#/'>Jen Lopez ( Designer )</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='blog-comment'>
                  <h3>Comments</h3>
                  <div className='media'>
                    <div className='media-object pull-left'>
                      <img
                        src={CommentImg1}
                        className='img-responsive img-circle'
                        alt='Blog Images 11'
                      />
                    </div>
                    <div className='media-body'>
                      <h3 className='media-heading'>David Jones</h3>
                      <span>3 days ago</span>
                      <p>
                        Aliquam gravida arcu at risus blandit, in interdum metus
                        varius. Cras efficitur, ex sit amet tincidunt rhoncus,
                        dui ex hendrerit risus, ac dapibus ligula mi id leo. In
                        auctor dui justo, ac consequat dui posuere ac.
                      </p>
                    </div>
                  </div>
                  <div className='media'>
                    <div className='media-object pull-left'>
                      <img
                        src={CommentImg2}
                        className='img-responsive img-circle'
                        alt='Blog Images 22'
                      />
                    </div>
                    <div className='media-body'>
                      <h3 className='media-heading'>Omar Larus</h3>
                      <span>5 days ago</span>
                      <p>
                        Maecenas ultricies ante dignissim, iaculis ligula sed,
                        gravida ipsum. Pellentesque lobortis velit mi, sed
                        volutpat enim facilisis.
                      </p>
                    </div>
                  </div>
                  <div className='media'>
                    <div className='media-object pull-left'>
                      <img
                        src={AuthorImage2}
                        className='img-responsive img-circle'
                        alt='Blog Images 33'
                      />
                    </div>
                    <div className='media-body'>
                      <h3 className='media-heading'>Walker Jen</h3>
                      <span>July 27, 2017</span>
                      <p>
                        In eu posuere nulla, sit amet semper lectus. Aliquam
                        gravida arcu at risus blandit, in interdum metus varius.
                        Cras efficitur, ex sit amet tincidunt rhoncus, dui ex
                        hendrerit risus, ac dapibus ligula mi id leo.
                      </p>
                    </div>
                  </div>
                  <div className='media'>
                    <div className='media-object pull-left'>
                      <img
                        src={AuthorImage1}
                        className='img-responsive img-circle'
                        alt='Blog Images 44'
                      />
                    </div>
                    <div className='media-body'>
                      <h3 className='media-heading'>Jen Lopez</h3>
                      <span>July 24, 2017</span>
                      <p>
                        In auctor dui justo, ac consequat dui posuere ac. Lorem
                        ipsum dolor sit amet, maecenas eget vestibulum justo
                        imperdiet, wisi risus purus augue vulputate voluptate
                        neque, curabitur.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='blog-comment-form'>
                  <h3>Leave a Comment</h3>
                  <form action='#' method='post'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Name'
                      name='name'
                      required
                    />
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                      name='email'
                      required
                    />
                    <textarea
                      name='message'
                      rows={5}
                      className='form-control'
                      id='message'
                      placeholder='Message'
                      required
                    ></textarea>
                    <div className='col-md-3 col-sm-4'>
                      <input
                        name='submit'
                        type='submit'
                        className='form-control'
                        id='submit'
                        value='Post Your Comment'
                      />
                    </div>
                  </form>
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

export default Singlepost;
