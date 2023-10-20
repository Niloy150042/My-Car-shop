import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "./providers/Authprovider";


const Navbar = () => {


  const {user,logout}=useContext(Authcontext)

  const handlesignout =()=>{

    logout()
    .then()
    .catch()


  }

    return (
        <div className="navbar bg-[url('https://i.ibb.co/DYHfw6m/photo-1611566026373-c6c8da0ea861.jpg')] bg-no-repeat lg:w-full  bg-cover mb-3 shadow-2xl shadow-black rounded-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        <li><a>Item 1</a></li>
        <li>
          <a href=""> item 2</a>
         
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img src="https://i.ibb.co/DYHfw6m/photo-1611566026373-c6c8da0ea861.jpg" className="h-[40px] w-[40px] rounded-full " alt="" />
    <a className=" normal-case text-3xl  font-mono ml-6  lg:text-gray-400  font-bold">Car-superior</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="flex items-center gap-5">
      <Link to='/' ><button className="btn bg-gray-400 text-black ">Home</button></Link>
      <li>
      <Link to='/addproduct' ><button className="btn  bg-gray-400 text-black ">Add-product </button></Link>
        
      </li>
      <Link to='/cart' ><button className="btn bg-gray-400 text-black">My-cart</button></Link>
      
    </ul>
  </div>
  <div className="navbar-end flex gap-3 ">

  
         {
          user? <img src="https://i.ibb.co/MNGKG3P/niloy-profile-pic.jpg" className="rounded-full h-[40px]"/>:<img className="rounded-full h-[40px]" src="https://i.ibb.co/Jt2XCnT/1000-F-199454533-GIBKQvb-UBlu0hl5xhn64p-JOHp1nn5-W2-C.jpg" alt=""></img>
         }
        

  {
    user?<button onClick={handlesignout} className="btn btn-secondary">Log-out</button>:<Link to={'/login'}><a className="btn bg-gray-400">Sign-in</a></Link>
  }
  </div>
</div>
 
    );
};

export default Navbar;