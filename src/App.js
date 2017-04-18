import React from 'react';
import logo from './logo.svg';
import './App.css';
// importing home component
import Home from './components/Home';
// importing Blog component
import Blog from './components/Blog';
// importing Navigation component
import Nav from './components/Navigation';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';


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







export default App;


