import React from 'react'
import {Routes,Route} from 'react-router-dom'
import TeacherCompleteAssesment from './TeacherCompleteAssesment'
import CompleteDetailTeacherAsses from './CompleteDetailTeacherAsses'
import TeacherUploadAsses from './TeacherUploadAsses'

const TeacherRouter = () => {
  return (
  <>
   <Routes>
       <Route exact path='/teacher/complete' element={<TeacherCompleteAssesment/>}/>
       <Route exact path='/teacher/completeDetail' element={<CompleteDetailTeacherAsses/>}/>
       <Route exact path='/teacher/createAsses' element={<TeacherUploadAsses/>}/>
   </Routes>
  </>
  )
}

export default TeacherRouter