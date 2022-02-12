import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Student from './component/student/Student';
import Teacher from './component/Teacher/Teacher';
import Render from './component/Render';
import StudentRouter from './component/student/StudentRouter';
import TeacherRouter from './component/Teacher/TeacherRouter';
function App() {
  return (
    <Router>
     <Render/>
     <Routes>
       <Route exact path='/student' element={<Student/>}/>
       <Route exact path='/teacher' element={<Teacher/>}/>
     </Routes>
     {/* ======Student Route======= */}
      <StudentRouter/>
     {/* =====Teacher Router========  */}
     <TeacherRouter/>
    </Router>
  );
}

export default App;
