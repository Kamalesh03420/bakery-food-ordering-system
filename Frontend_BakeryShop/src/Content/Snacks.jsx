import React, { useContext } from 'react'
import Card from './Card'
import Data from '../Context/Data'

const Snacks = () => {
  const {Snacks}=useContext(Data)
  return (
    <div className='container-fluid p-3'>
        <h1 className='text-center'>Snacks</h1>
        <ul className='d-flex flex-wrap'>
          <Card items={Snacks}/>
        </ul>
    </div>
  )
}

export default Snacks