import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

function ProtectedRoute({children}) {
   const{login,user} =useContext (AuthContext);


       if (!login) {
         withReactContent(Swal).fire({ 
                    icon: "error",
                    title: "this page is not accessible",
                    text: "Please login first",
                  });
         return <Navigate to="/login" />;
       }else if(!user.isAdmin){
        withReactContent(Swal).fire({ 
            icon: "error",
            title: "Sorry this page is not accessible",
          });
          return  <Navigate to="/" />;
       }

       return children
}

export default ProtectedRoute;