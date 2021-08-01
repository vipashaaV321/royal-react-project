import React from 'react';
import { Link } from 'react-router-dom';
export const Product = () => {
  return (
    <div>
      product page
      <ul>
        <li>
          {' '}
          <Link to="/product/p1">PRODUCT</Link>
        </li>
        <li>Laptop</li>
        <li>bluetooth jack</li>
      </ul>
    </div>
  );
};
