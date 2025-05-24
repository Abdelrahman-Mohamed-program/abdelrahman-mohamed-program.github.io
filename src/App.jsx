import Navbar from "./components/shared/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import NotFound from "./components/error404/NotFound.jsx"
import AdminDashboard from "./components/pages/AdminDashboard.jsx";
import Login from "./components/pages/login.jsx";
import  AuthProvider  from "./components/contexts/AuthProvider.jsx";
import ProtectedRoute from "./components/contexts/ProtectedRoute.jsx";
import Footer from "./components/shared/Footer.jsx";





function App() {
return (
    <>
<AuthProvider>
    <Navbar/>
    <Routes>
    <Route path="/"element={ <Home/>}/>
   
  <Route path="/admin"element={ 
     <ProtectedRoute>
      <AdminDashboard/>
       </ProtectedRoute>}/>

  <Route path="/login" element={<Login/>} />
  <Route path="/*" element={<NotFound/>} />
    </Routes>
    </AuthProvider>
    <Footer/>
    </>
)
}


export default App;