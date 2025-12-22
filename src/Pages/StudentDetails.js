import { useParams } from "react-router-dom";
import { students } from "./Students";


function StudentDetails() {
  
  const {id} = useParams();

  const student = students.find(
    (s) => s.id === Number(id)
  );
   
  return(
    <div className="max-w-md mx-auto bg-white border border-gray-200 shadow-sm rounded-lg p-6 mt-10">
      <h1 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Student Details </h1>

       <div className="flex flex-col justify-between py-2 border-b last:border-b-0">

          {student ? (
         <>
           <p><span className="font-medium">Name:</span> {student.name}</p>
           <p><span className="font-medium">Roll:</span> {student.roll}</p>
           <p><span className="font-medium">Course:</span> {student.course}</p>
           <p><span className="font-medium">Status:</span> {student.status}</p>
         </>
        ) : (
          <p>Student not found</p>
        )}

       </div>

    </div>
  )
}

export default StudentDetails;