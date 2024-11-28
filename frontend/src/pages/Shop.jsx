import React from 'react'
import Hero from '../components/hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import NewCollections from '../components/Newcollections/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';


 const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      
    </div>
  )
}

export default Shop;