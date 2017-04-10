import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';


const Home = () => (
  <div>Home</div>
)

const Stories = (x) => {
  console.log(x);
  if(x.match.path==='Animorphs') {
    return <div>Animorphs</div>
  }
  if(x.match.path === '/Stories/1') {
    return <div>This is page 1</div>
  }
  return <div>Stories {x.match.url}</div>
}

const About = () => (
  <div>About</div>
)

const Blog = () => (
  <div>Blog</div>
)

const Contact = () => (
  <div>Contact</div>
)

const NoMatch = () => (
  <div>That route does not exist</div>
)

// Acceptable routes
const stories = [
  {
    path:'/Stories/1',
    component:Stories
  },
  {
    path:'/Stories/2',
    component:Stories
  }
]

// App Component
const App = () => (
  // Router uses the HTML5 history API to sync UI w/ URL
  <BrowserRouter>
    {/* Wrapping Switch in a container (can't be direct child of router) */}
    <div>
      <Nav />
        {/* Exclusively renders a component - renders the first match*/}
        <Switch>
          {/* Route component - renders component for the requested route */}        
          <Route exact path="/" component={Home} />
          <Route exact path="/Stories" component={Stories} />
          {/* Mapping over Stories array, creating acceptable routes */}
          {
            stories.map( (story, i)=> {
              return <Route key={i} {...story} />
            })
          }
          {/*<Route exact path="/Stories/:id" render={ (route)=>{return <div>This is story {route.match.params.id}</div>}} />          */}
          <Route exact path="/Animorphs" component={Stories} />          
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Blog" component={Blog} />
          {/* No match found */}
          <Route component={NoMatch} />
        </Switch>
    </div>
  </BrowserRouter>

)

// Nav Component
const Nav = () => (
    <nav>
      <ul>
        <li>
          <NavLink
            // match url exactly - boolean value
            exact
            // Path to link to
            to="/"
            // Active class for selected link
            activeClassName="selectedLink"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Stories"
            activeClassName="selectedLink"
          >
            Stories
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/About"
            activeClassName="selectedLink"
          >
            About
          </NavLink> 
        </li>
        <li>
          <NavLink
            exact
            to="/Blog"
            activeClassName="selectedLink"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Contact"
            activeClassName="selectedLink"
          >
            Contact
          </NavLink>
        </li>
      </ul>    
    </nav>
)





export default App;


