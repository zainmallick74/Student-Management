function Dashboard() {
  return(
    <div className="mt-10 w-11/12 mx-auto bg-gray-50 min-h-screen
 ">
     <h1 className="text-2xl font-semibold text-blue-600 mb-8 text-center">Dashboard</h1>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center mt-20 ">

         <div className=" bg-white shadow-sm rounded-lg border border-gray-200 text-center p-8 w-64">
           <h1 className="bg-blue-50 text-blue-600 ">Total Student</h1>
           <h1 className="text-gray-800 text-3xl font-semibold mt-2">100</h1>
         </div>

         <div className="bg-white shadow-sm rounded-lg border border-gray-200 text-center p-8 w-64">
             <h1 className="bg-blue-50 text-blue-600">Active Student</h1>
            <h1 className="text-gray-800 text-3xl font-semibold mt-2">60</h1>
         </div>

         <div className="bg-white shadow-sm rounded-lg border border-gray-200 text-center p-8 w-64">
             <h1 className="bg-blue-50 text-blue-600">Inactive Student</h1>
             <h1 className="text-gray-800 text-3xl font-semibold mt-2">40</h1>
          </div>

     </div>

    </div>
  )
}

export default Dashboard;