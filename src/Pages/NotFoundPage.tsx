import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
interface Props {};
const NotFoundPage:FC<Props> = () => {

  return (
    <div className='not-found-container'>
      <h1>Not Found</h1>
      <p>I'm sorry, the page you're trying to reach could not be found. Please try again or <Link to='/portfolio'>return to the home page!</Link></p>
    </div>
  )
};

export default NotFoundPage;