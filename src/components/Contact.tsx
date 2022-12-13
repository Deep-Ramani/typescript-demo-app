import React from 'react';
import { Footer } from './Footer';

const Contact = () => {
  return (
    <div>
      {/* <!-- Home Section --> */}

      <section id='home' className='main-contact parallax-section'>
        <div className='overlay'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12'>
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}

      <section id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-offset-1 col-md-10 col-sm-12'>
              <h2>Say hello..</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <form action='#' method='post'>
                <div className='col-md-4 col-sm-4'>
                  <input
                    name='name'
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Name'
                  />
                </div>
                <div className='col-md-4 col-sm-4'>
                  <input
                    name='email'
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Email'
                  />
                </div>
                <div className='col-md-4 col-sm-4'>
                  <input
                    name='subject'
                    type='text'
                    className='form-control'
                    id='subject'
                    placeholder='Subject'
                  />
                </div>
                <div className='col-md-12 col-sm-12'>
                  <textarea
                    name='message'
                    rows={5}
                    className='form-control'
                    id='message'
                    placeholder='Message'
                  ></textarea>
                </div>
                <div className='col-md-3 col-sm-6'>
                  <input
                    name='submit'
                    type='submit'
                    className='form-control'
                    id='submit'
                    value='Send'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
