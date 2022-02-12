import React from 'react'
import {Routes,Route} from 'react-router-dom';
import CompleteAssesment from './CompleteAssesment';
const StudentRouter = () => {
  return (
    <>
     <Routes>
     <Route exact path='/student/complete' element={<CompleteAssesment/>}/>
     </Routes>
    </>
  )
}

export default StudentRouter