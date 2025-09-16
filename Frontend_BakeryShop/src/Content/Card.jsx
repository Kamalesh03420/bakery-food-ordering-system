import React, { useContext } from 'react'
import Data from '../Context/Data'

const Card = ({items}) => {
    const {addToCart}=useContext(Data)
  return (
    <>
        {items?.map((item)=>
                <li className='d-flex border m-2 p-2 bg-white rounded-4' key={item.id}>
                    <img src={`http://localhost:8080/${item.about}/${item.id}/image`} 
                      height={'150px'}
                      width={'150px'}
                      alt={item.caption}
                      className='me-2 rounded-4'
                    />
                    <div className='d-flex flex-column justify-content-around text-center'>
                      <h3>{item.caption}</h3>
                      <h2>{item.price}</h2>
                      <button className='addToCart' onClick={()=>addToCart(item)}>Add to Cart</button>
                    </div>
                </li>)
        }
    </>
  )
}

export default Card