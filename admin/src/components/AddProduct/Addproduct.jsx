import React, { useState } from 'react'
import './addproduct.css'
import upload_area from '../../assets/upload_area.svg'

const Addproduct = () => {
    const [image,setimage]=useState(false);
    const [productdetails,setproductdetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })
    const imagehandler=(e)=>{
            setimage(e.target.files[0]);
    }
    const changehandler=(e)=>{
            setproductdetails({...productdetails,[e.target.name]:e.target.value})
    }
    const addproduct=async ()=>{
        let responsedata;
        let product=productdetails;
        let formdata=new FormData();
        formdata.append('product',image);
        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',

            },
            body:formdata,
        }).then((response)=>response.json())
            .then((data)=>{responsedata=data})
        if(responsedata.success){
            product.image=responsedata.image_url;
            
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:"application/json",
                   'content-type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((response)=>response.json())
            .then((data)=>{
                data.success?alert("product added"):alert('failed')
            })
        }
        
    }
  return (
   <div className="addproduct">
<div className="addproduct-itemfield">
    <p>product title</p>
    <input type="text" value={productdetails.name} onChange={changehandler} name='name' placeholder='Type here'/>

</div>
<div className="addproduct-price">
    <div className="addproduct-itemfield">
        <p>price</p>
        <input type="text" value={productdetails.old_price} onChange={changehandler} name='old_price' placeholder='Type here'/>
    </div>
    <div className="addproduct-itemfield">
        <p>offer price</p>
        <input type="text" name='new_price' placeholder='Type here'  value={productdetails.new_price} onChange={changehandler}/>
    </div>
    
</div>
<div className="addproduct-itemfield">
        <p>category</p>
       <select name="category" className='add-product-selector'  value={productdetails.category} onChange={changehandler}>
        <option value="women">women</option>
        <option value="men">men</option>
        <option value="kid">kid</option>
       </select>
    </div>
    <div className="addproduct-itemfield">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt="" />
        </label>
        <input type="file" name='image'   onChange={imagehandler} id='file-input' hidden/>
    </div>
    <button className='addproduct-btn' onClick={()=>{addproduct()}}>ADD</button>
   </div>
  )
}

export default Addproduct