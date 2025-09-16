import React, { useContext } from 'react'
import Data from '../../Context/Data'
import SearchList from './SearchList'

const Search = () => {
  const {Cakes,Sweets,Snacks,Bevarages,Search}=useContext(Data)
  return (
    <div className='container-fluid'>
      {Search ?
        <div className='me-4'>
          <div>
            <ul>
              <SearchList items={Cakes.filter((cake)=>cake.caption.toLowerCase().includes(Search.toLowerCase()))}/>
            </ul>
          </div>
          <div>
            <ul>
              <SearchList items={Sweets.filter((sweet)=>sweet.caption.toLowerCase().includes(Search.toLowerCase()))}/>
            </ul>
          </div>
          <div>
            <ul>
              <SearchList items={Snacks.filter((snack)=>snack.caption.toLowerCase().includes(Search.toLowerCase()))}/>
            </ul>
          </div>
          <div>
            <ul>
              <SearchList items={Bevarages.filter((bevarage)=>bevarage.caption.toLowerCase().includes(Search.toLowerCase()))}/>
            </ul>
          </div>
        </div>
        :
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <h1 className='text-center'>Search Something...</h1>
        </div>
      }
    </div>
  )
}

export default Search