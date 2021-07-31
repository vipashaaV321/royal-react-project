import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const params = useParams();
  return (
    <div>
      <h4>product detail page...</h4>
      <h6>{params.productId}</h6>
      <h6>{params.productName}</h6>
    </div>
  );
};
