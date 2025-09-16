import { Navigate, Outlet } from "react-router";
import { useAuth } from "../provider/AuthProvider";

export default function PrivateRoute() {
  const {authInfo} = useAuth();
  return (
    <>
      {authInfo ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
