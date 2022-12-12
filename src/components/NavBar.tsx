import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Style.css';
export const NavBar = () => {
  return (
    <div className='navbar navbar-default navbar-static-to'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            className='navbar-toggle'
            data-toggle='collapse'
            data-target='.navbar-collapse'
          >
            <span className='icon icon-bar'></span>
            <span className='icon icon-bar'></span>
            <span className='icon icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>
            BLoG
          </Link>
        </div>
        <div className='collapse navbar-collapse'>
          <ul className='nav navbar-nav navbar-right'>
            <li className='active'>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/About'>AboutPage</Link>
            </li>
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>
            <li>
              <Link to='/Gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='/Singlepost'>Single</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
