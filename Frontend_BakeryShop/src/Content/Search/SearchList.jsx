import React, { useContext } from 'react'
import Data from '../../Context/Data'

const SearchList = ({items}) => {
    const {addToCart}=useContext(Data)
  return (
    <>
        {items?.map((item)=>
                <li className='d-flex border justify-content-around m-3 p-2 align-items-center bg-white rounded-4' key={item.id}>
                    <img src={`http://localhost:8080/${item.about}/${item.id}/image`} 
                      height={'100px'}
                      width={'100px'}
                      alt={item.caption}
                    />
                    <h3>{item.caption}</h3>
                    <h2>{item.price}</h2>
                    <button className="addToCart" onClick={()=>addToCart(item)}>Add to Cart</button>
                </li>)
        }
    </>
  )
}

export default SearchList