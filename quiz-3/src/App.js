import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import About from "./components/About";
import MobileList from "./components/MobileList";
import { MobileAppProvider } from "./components/MobileAppContext";
import MobileForm from "./components/MobileForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MobileSearch from "./components/MobileSearch";

function App() {
  return (
    <div className="App">
      <Router>
        <MobileAppProvider>
          <Navbar />

          <div className="body">
            <div className="content-wrapper">
              <Route exact path="/" component={Home} />
              <Route path="/mobile-list" component={MobileList} />
              <Route exact path="/mobile-form" component={MobileForm} />
              <Route
                exact
                path="/mobile-form/edit/:Id"
                component={MobileForm}
              />
              <Switch>
                <Redirect from="/search/" to="/" exact />
                <Route
                  exact
                  path="/search/:valueOfSearch"
                  component={MobileSearch}
                />
              </Switch>
              <Route path="/about" component={About} />
            </div>
          </div>

          <footer>
            <h5>&copy; Quiz 3 ReactJS Sanbercode</h5>
          </footer>
        </MobileAppProvider>
      </Router>
    </div>
  );
}

export default App;
