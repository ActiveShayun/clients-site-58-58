import { useContext } from "react";
import { AuthContext } from "../auth-context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Loading/>;
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={location?.pathname}></Navigate>


};

export default PrivateRoute;