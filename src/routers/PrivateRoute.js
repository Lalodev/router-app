import { Route, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

//const user = null;
//const user = { id: 1, username: "luis" };

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    <Route {...rest}>
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
