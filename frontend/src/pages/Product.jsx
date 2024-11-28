import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrumps/Breadcrum';
import Productdisplay from '../components/Productdisplay/Productdisplay';
import Description from '../components/Descriptionbox/Description';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productid}=useParams();
  const product=all_product.find((e)=>e.id===Number(productid))
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product;