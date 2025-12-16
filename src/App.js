import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import AddStudents from "./Pages/AddStudent";
import EditStudent from "./Pages/EditStudent";
import StudentDetails from "./Pages/StudentDetails";
import Students from "./Pages/Students";

function App() {
  return (
    <div >

    <Navbar />
    
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-student" element={<AddStudents />} />
      <Route path="/edit-student" element={<EditStudent />} />
      <Route path="/student-details" element={<StudentDetails />} />
      <Route path ="/Students" element={<Students />} />

    </Routes>
    
     
    </div>
  );
}

export default App;
