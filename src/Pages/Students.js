import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const students = [
  {id:1,name:"Zain" , roll:101,course:"B.Tech",status:"Active"},
  {id:2 , name:"Aman",roll:102 , course:"BCA" , status:"Active"}
]

function Students() {
  return(
    <div className="w-11/12 mx-auto mt-10">
      
       <h1 className="text-2xl font-semibold text-blue-600 mb-8 text-center">Students</h1>

       <table className="w-full border border-gray-300 border-collapse">
         <thead>
            <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Rol No.</th>
                <th className="border border-gray-300 px-4 py-2">Course</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
         </thead>

         <tbody>
          
          {students.map((student) =>(
             <tr key={student.id}>
             <td className="border border-gray-300 px-4 py-2 text-center">{student.name}</td>
             <td className="border border-gray-300 px-4 py-2 text-center">{student.roll}</td>
             <td className="border border-gray-300 px-4 py-2 text-center">{student.course}</td>
             <td className="border border-gray-300 px-4 py-2 text-center">{student.status}</td>
             <td className="border border-gray-300 px-4 py-2 text-center space-x-3">
              <Link 
              to={`/student-details/${student.id}`}
              className="text-blue-600 hover:underline"
              >
                View
              </Link>
              <button className="text-indigo-600 hover:underline">Edit</button>
              <button className="text-red-600 text-xl"> <FaTrash /> </button>
             </td>

           </tr>
          )
          )}

         </tbody>

       </table>

    </div>
  )
}



export default Students;