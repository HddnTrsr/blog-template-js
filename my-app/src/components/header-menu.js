import React from "react"
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import './css/header-menu.css'
import About from "../pages/about";
import Home from "../pages/home";
import Blogs from "../pages/blogs";
function HeaderMenu() {
    return ( 
      <Router>
      <div>
        <nav className="Hovering-effect">
          <ul className ="App-header-menu">
            <li>
              <Link to="/" className="Hovering-effect"><strong>Home</strong></Link>
            </li>
            <li>
              <Link to="/blogs" className="Hovering-effect"><strong>Blogs</strong></Link>
            </li>
            <li>
              <Link to="/about" className="Hovering-effect"><strong>About</strong></Link>
            </li>
          </ul>
        </nav>
          <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default HeaderMenu;