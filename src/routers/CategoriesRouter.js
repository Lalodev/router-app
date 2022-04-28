import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import CategoriesPage from "../pages/CategoriesPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

const CategoriesRouter = () => {
  const { url } = useRouteMatch();
  console.log(url);

  return (
    <div>
      <ul>
        <li>
          <NavLink exact to={`${url}`} activeClassName="active">
            All
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/terror`} activeClassName="active">
            Terror
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/action`} activeClassName="active">
            Action
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/anime`} activeClassName="active">
            Anime
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/categories" component={CategoriesPage} />
        <PrivateRoute path="/categories/terror" component={TerrorRouter} />
        <Route exact path="/categories/action">
          <h1>Category Action</h1>
        </Route>
        <Route exact path="/categories/anime">
          <h1>Category Anime</h1>
        </Route>
        <Route path="*" component={NotFoundPage}>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
};

export default CategoriesRouter;

const TerrorRouter = () => {
  const { url } = useRouteMatch();
  console.log(url);

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}`}>All</Link>
        </li>
        <li>
          <Link to={`${url}/gore`}>Gore</Link>
        </li>
        <li>
          <Link to={`${url}/suspense`}>Suspense</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${url}`}>
          <h3>Category Terror</h3>
        </Route>
        <Route exact path={`${url}/gore`}>
          <h3>Gore</h3>
        </Route>
        <Route exact path={`${url}/suspense`}>
          <h3>Suspense</h3>
        </Route>
        <Route path="*" component={NotFoundPage}>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
};
