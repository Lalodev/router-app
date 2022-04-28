import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import CategoriesRouter from "./CategoriesRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/" component={HomePage} />

          <Route exact path="/profile/:username" component={ProfilePage} />

          <Route path="/categories" component={CategoriesRouter} />

          <Route exact path="/singin">
            <Redirect to="/login" />
          </Route>

          <PublicRoute exact path="/login" component={LoginPage} />
          <PublicRoute exact path="/register" component={RegisterPage} />

          <PrivateRoute exact path="/dashboard" component={DashboardPage} />
          <PrivateRoute exact path="/payments" component={PaymentsPage} />

          <Route path="/404" component={NotFoundPage} />
          <Route path="*" component={NotFoundPage}>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
