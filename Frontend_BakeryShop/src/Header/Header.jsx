import { useContext } from "react"
import { Link } from "react-router-dom"
import Data from '../Context/Data'

const Header = () => {
  const {Search,setSearch}=useContext(Data)
  return (
    <div className="d-flex bg-dark justify-content-between px-4 py-4">
        <div><Link className="link topic" to='/'>Baker's Magic</Link></div>
        <div className="d-flex align-items-center" >
            <div className="mx-2" ><Link className="link" to='/cart'>Cart</Link></div>
            <div className="mx-2" ><Link className="link" to='/search'><input type="text" placeholder="Search Something..." value={Search} onChange={(e)=>setSearch(e.target.value)}/></Link></div>
            <div className="mx-2" ><Link className="link" to='/admin'>Admin</Link></div>
        </div>
    </div>
  )
}

export default Header

