import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cakes from './Cakes'
import Sweets from './Sweets'
import Snacks from './Snacks'
import Bevarages from './Bevarages'
import Cart from './Cart'
import Search from './Search/Search'
import Admin from './Admin/Admin'
import Data from '../Context/Data'

const Content = () => {
  const {Notification}=useContext(Data)
  return (
    <>
      {Notification && <div className="notification">✔️ Added Successfully</div>}
      <div className='container-fluid back ' >
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cakes' element={<Cakes/>}/>
            <Route path='/sweets' element={<Sweets/>}/>
            <Route path='/snacks' element={<Snacks/>}/>
            <Route path='/bevarages' element={<Bevarages/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/admin' element={<Admin/>}/>
        </Routes>
    </div>
    </>
    
  )
}

export default Content