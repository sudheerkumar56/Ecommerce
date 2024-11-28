import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const Productdisplay = (props) => {
  const {product}=props;
  const {addtocart}= useContext(ShopContext)
    
  return (
    <div className='productdisplay'>
<div className="productdisplay-left">
  <div className="productdisplay-img-list">
    <img src={product.image} alt="hi" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
  </div>
  <div className="productdisplay-img">
    <img src={product.image} alt="" className='productdisplay-main-img'/>
  </div>
</div>
<div className="productdisplay-right">
  <h1>{product.name}</h1>
  <div className="productdisplay-right-stars">
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_dull_icon} alt="" />
    <p>122</p>
  </div>
  <div className="productdisplay-right-prices">
    <div className="productdisplay-right-price-old">${product.old_price}</div>
    <div className="productdisplay-right-price-new">${product.new_price}</div>
  </div>
  <div className="productdisplay-right-description"> some description about item and notes </div>
  <div className="productdisplay-rightsize">
    <h1>Select Size</h1>
    <div className="productdisplay-rightsize">
     <div>S</div>
     <div>M</div>
     <div>L</div>
     <div>XL</div>
     <div>XXL</div>

    </div>
  </div>
  <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
  <p className="productdisplay-right-category"><span>CATEGORY:</span>Women ,T-shirt ,crop-top</p>
  <p className="productdisplay-right-category"><span>Tags:</span>Modern ,Latest</p>

</div>
    </div>
  )
}

export default Productdisplay