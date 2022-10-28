import React from 'react';
import { Link } from 'react-router-dom';



export function Home() {

  return (
    <>
      <ol>
        <li><Link to='/form'> Fill out the Form.</Link></li>
        <li><Link to='/Searchandchange'> Search and replace element form input.</Link></li>
      </ol>
    </>

  )
}

