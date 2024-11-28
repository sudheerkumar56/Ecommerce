import react, { useContext, useState } from 'react';
import "./Navbar.css"
import logo from "../assets/logo.png"
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
const Navbar=()=>{
    const {gettotalcartitems}=useContext(ShopContext)
    const [menu ,setmenu]=useState("shop")
   return(
    <div className='navbar'>
    <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>shopper</p>
    </div>
    <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link> {menu==='men'?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link> {menu==='women'?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
        <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link>
        <Link style={{textDecoration:'none'}}  to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{gettotalcartitems()}</div>

    </div>
</div>
   )

};
export default Navbar;