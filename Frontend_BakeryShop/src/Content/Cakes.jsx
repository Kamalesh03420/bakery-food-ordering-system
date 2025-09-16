import React, { useContext } from 'react'
import Card from './Card'
import Data from '../Context/Data'

const Cakes = () => {
  const {Cakes}=useContext(Data)
  return (
    <div className='container-fluid p-3'>
        <h1 className='text-center'>Cakes</h1>
        <ul className='d-flex flex-wrap'>
          <Card items={Cakes}/>
        </ul>
    </div>
  )
}

export default Cakes