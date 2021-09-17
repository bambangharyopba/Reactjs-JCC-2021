import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Tugas9 from "./Tugas 9/Tugas9";
import Tugas10 from "./Tugas 10/Tugas10";
import Tugas11 from "./Tugas-11/Tugas11";
import Tugas12 from "./Tugas-12/Tugas12";
import Tugas13 from "./Tugas-13/Tugas13";
import Tugas14Table from "./Tugas-14/Tugas14Table";
import Tugas14Form from "./Tugas-14/Tugas14Form";
import Tugas15Table from "./Tugas-15/Tugas15Table";
import Tugas15Form from "./Tugas-15/Tugas15Form";
import Navbar from "./Tugas-15/Navbar";
import { MahasiswaProvider } from "./Tugas-13/MahasiswaContext";
import { MahasiswaProvider2 } from "./Tugas-14/MahasiswaContext2";
import { ThemeProvider } from "./Tugas-14/ThemeContext";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Navbar />
          <Switch>
            <Redirect exact from="/" to="/Tugas9" />
            <Route path="/Tugas9">
              <Tugas9 />
            </Route>
            <Route path="/Tugas10">
              <Tugas10 />
            </Route>
            <Route path="/Tugas11">
              <Tugas11 />
            </Route>
            <Route path="/Tugas12">
              <Tugas12 />
            </Route>
            <Route path="/Tugas13">
              <MahasiswaProvider>
                <Tugas13 />
              </MahasiswaProvider>
            </Route>
            <MahasiswaProvider2>
              <Route exact path="/Tugas14">
                <Tugas14Table />
              </Route>
              <Route exact path="/Tugas14/form">
                <Tugas14Form />
              </Route>
              <Route exact path="/Tugas15">
                <Tugas15Table />
              </Route>
              <Route exact path="/Tugas15/form">
                <Tugas15Form />
              </Route>
            </MahasiswaProvider2>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
