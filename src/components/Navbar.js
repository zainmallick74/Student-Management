
import image from "./image student management.png";
import { Link } from "react-router-dom";

function Navbar() {
  return(
    <div className="flex w-11/12 mx-auto text-[#1f2937] text-xl justify-between items-center border mt-5 p-3 h-16  border-gray-200 bg-white shadow">
       <div>
         <img src={image} className="h-12"/>
         
       </div>

       <div className="flex gap-10">
        <Link to="/" className="hover:text-blue-600 transition">Dashboard</Link> 
        <Link to="/add-student" className="hover:text-blue-600 transition">Add Student</Link>
        <Link to="/students" className="hover:text-blue-600 transition">Students</Link> 
       </div>

    </div>
  )
}

export default Navbar;