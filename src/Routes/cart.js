import './cart.css';
import {useCart } from "react-use-cart";
import Data from './data';


export default function cartlist(val) {
   

       return(
        <>
        {
        val.map((cartitem,cartindex)=>{

return(
    <div className='Container'>
        {<img src={val.img} alt='' />}
    </div>
        )
        })
        
  }
  </>
  )
}