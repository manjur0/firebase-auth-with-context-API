import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="text-center my-12 text-blue-600"><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivetRouts;