import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SSignin from './pages/Home/SSignin';
import AdminSignin from './pages/Admin/ASignin';
import ASignin from './pages/Home/ASignin';
import Protected from './Protected';
import AHome from './pages/Admin/AHome';
import ABookDetails from './pages/Admin/ABookDetails';
import AdminIssuedBook from './pages/Admin/AIssuedBook';
import AStudentDetails from './pages/Admin/AStudentDetails';
import AFeedback from './pages/Admin/AFeedBack';
import AdminIssueBook from './pages/Admin/AIssueBook';

import AddBook from "./pages/Admin/AddBook/index"

//importing this to show the toast after every successful or unsuccessful attempt
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StudentHome from './pages/Student/SHome';
import AAddStudent from './pages/Admin/AAddStudent';
import SFeedback from './pages/Student/Feedback';
import SProfile from './pages/Student/Profile/index';
import SEdit from './pages/Student/Profile/SEdit';
import SALLBooks from './pages/Student/AllBooks';
import SIssuedBooks from './pages/Student/IssuedBooks';
import PDF from './pages/Student/ViewPdf';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<SSignin/>}/>
                <Route path='/Stud-Signin' element={<SSignin/>}/>
                <Route path='/Admin-Signin' element={<ASignin/>}/>
                <Route path="/AdminHome" element={<AHome/>} />
                <Route path="/AdminBookDetails" element={<ABookDetails />} />
                <Route path="/AdminIssuedBooks" element={<Protected Cmp={AdminIssuedBook} />} />
                <Route path="/AdminStudentDetails" element={<Protected Cmp={AStudentDetails} />} />
                <Route path="/AdminFeedbacks" element={<Protected Cmp={AFeedback} />} />
                <Route path="/AdminIssueBook" element={<Protected Cmp={AdminIssueBook} />} />
                <Route path="/AddBook" element={<Protected Cmp={AddBook} />} />
                <Route path="/AddStudent" element={<Protected Cmp={AAddStudent} />} />
          
                
                <Route path="/SHome" element={<Protected Cmp={StudentHome} />} />
                <Route path="/SFeedback" element={<SFeedback />} />
                <Route path="/SProfile" element={<SProfile />} />
                <Route path="/SEdit" element={<SEdit />} />
                <Route path="/SAllBooks" element={<SALLBooks />} />
                <Route path="/SIssuedBooks" element={<SIssuedBooks />} />
                <Route path="/pdfPage" element={<PDF />} />
          
            </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
