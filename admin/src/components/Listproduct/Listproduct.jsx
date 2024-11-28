import React, { useEffect, useState } from 'react'
import './listproduct.css'
import list_remove from '../../assets/cross_icon.png'

const Listproduct = () => {
    const [allproducts,setallproducts]=useState([])
    
    const fetchinfo=async ()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>{setallproducts(data)})
    }
    useEffect(()=>{
        fetchinfo()
    },[])
    

    const removeproduct=async (id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'DELETE',
            headers:{
                Accept:'application/JSON',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                id:id,
            })   
        })
        await fetchinfo()
    }
   

  return (
  <div className="listproduct">
    <h1>All Products List</h1>
    <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>old_price</p>
        <p>new_price</p>
        <p>category</p>
        <p>Remove</p>
        
    </div>
    <div className="listproducts-allproducts">
    <hr/>
            {allproducts.map((product,index)=>{

                return (<>
                <div key={index} className="listproduct-format-main ">
                    <img src={product.image} alt="" className='listproduct-producticon' />
                    <p>{product.name}</p>
                    <p>{product.old_price}</p>
                    <p>{product.new_price}</p>
                    <p>{product.category}</p>
                    <img src={list_remove} alt="" className='listproduct-remove' onClick={()=>{removeproduct(product.id)}}/>
                </div>
                <hr />
                </>)
            })}
            </div>
</div>
  
  )
}

export default Listproduct