import React, { useContext } from 'react'
import Data from '../Context/Data'

const Cart = () => {
  const {CartList,removeCartList}=useContext(Data)
  const sum=CartList.reduce((carry,cart)=>carry+cart.price,0)
  return (
    <div className='cart-container'>
      <div className='cart-list'>
        <h1>Cart</h1>
          {CartList.length?
            <ul>
              {CartList.map((cart)=> 
                <li className='cart-item' key={cart.id}>
                    <h3>{cart.caption}</h3>
                    <h2>{cart.price}</h2>
                    <button className='remove' onClick={()=>removeCartList(cart.id)}>Remove</button>
                </li>)
              }
            </ul>
          :
          <h1 className='text-danger'>Cart is Empty...</h1>
          }
      </div>
      <div className='bill-box'>
        <h1>Bill</h1>
        <h1>{sum}</h1>
      </div>
    </div>
  )
}

export default Cart