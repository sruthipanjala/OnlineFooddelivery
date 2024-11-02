import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import pizza_1 from '../../assets/biryani.jpeg'; // Ensure images are correctly located
import pizza_2 from '../../assets/chinese.jpeg';
import pizza_3 from '../../assets/tiffin.jpeg';

import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-50" src={pizza_1} alt="First slide" />
          </div>
          
          <div className="carousel-item">
            <img className="d-block w-50" src={pizza_2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-50" src={pizza_3} alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
