import React from 'react';
import GalleryImage1 from '../assets/gallery-image1.jpg';
import GalleryImage2 from '../assets/gallery-image2.jpg';
import GalleryImage3 from '../assets/gallery-image3.jpg';
import GalleryImage4 from '../assets/gallery-image4.jpg';
import GalleryImage5 from '../assets/gallery-image5.jpg';
import GalleryImage6 from '../assets/gallery-image6.jpg';
import { Footer } from './Footer';

const Gallery = () => {
  return (
    <div>
      {/* <!-- Home Section --> */}

      <section id='home' className='main-gallery parallax-section'>
        <div className='overlay'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12'>
              <h1>Image Gallery</h1>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Gallery Section --> */}

      <section id='gallery'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-offset-1 col-md-10 col-sm-12'>
              <h2>Beautiful Images with Magnific Popup..</h2>
              <p>
                Aliquam blandit velit nisi, sed fringilla felis lacinia sed.
                Integer vitae porta felis. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Phasellus non tristique lacus. Suspendisse ut tortor vitae risus
                lacinia tristique. Aliquam sed consectetur libero.
              </p>
              <p>
                Morbi tellus dolor, porta dignissim enim sit amet, dapibus
                sagittis erat. In blandit elit sit amet dui aliquet congue nec
                vel quam. Integer id tristique libero.
              </p>
              <span></span>
              <div className='col-md-6 col-sm-6'>
                <div className='gallery-thumb'>
                  <a href={GalleryImage1} className='image-popup'>
                    <img
                      src={GalleryImage1}
                      className='img-responsive'
                      alt='Gallery Images'
                    />
                  </a>
                </div>
              </div>

              <div className='col-md-6 col-sm-6'>
                <div className='gallery-thumb'>
                  <a href={GalleryImage2} className='image-popup'>
                    <img
                      src={GalleryImage2}
                      className='img-responsive'
                      alt='Gallery Images'
                    />
                  </a>
                </div>
              </div>

              <div className='col-md-6 col-sm-6'>
                <div className='gallery-thumb'>
                  <a href={GalleryImage3} className='image-popup'>
                    <img
                      src={GalleryImage3}
                      className='img-responsive'
                      alt='Gallery Images'
                    />
                  </a>
                </div>
              </div>

              <div className='col-md-6 col-sm-6'>
                <div className='gallery-thumb'>
                  <a href={GalleryImage4} className='image-popup'>
                    <img
                      src={GalleryImage4}
                      className='img-responsive'
                      alt='Gallery Images'
                    />
                  </a>
                </div>
              </div>

              <div className='col-md-6 col-sm-6'>
                <div className='gallery-thumb'>
                  <a href={GalleryImage5} className='image-popup'>
                    <img
                      src={GalleryImage5}
                      className='img-responsive'
                      alt='Gallery Images'
                    />
                  </a>
                </div>
              </div>

              <div className='col-md-6 col-sm-6'>
                <div className='gallery-thumb'>
                  <a href={GalleryImage6} className='image-popup'>
                    <img
                      src={GalleryImage6}
                      className='img-responsive'
                      alt='Gallery Images'
                    />
                  </a>
                </div>
              </div>

              <div className='col-md-12 col-sm-12'>
                <p>
                  Aliquam blandit velit nisi, sed fringilla felis lacinia sed.
                  Integer vitae porta felis. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Phasellus non tristique lacus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Gallery;
