import React from 'react';
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
// importing Stories component
import Stories from './components/Stories';
import Footer from './components/Footer';
// component to view individual article/chapter
import ViewArticle from './components/ViewArticle';

const About = (props) => (
  <section className="flex-container" style={{textAlign: 'center'}}>
    <h1>About</h1>
    {console.log(props)}
    <img 
      //style={{display: 'block', width: '50%', height: '50%', margin: '0 auto'}} 
      style={{display: 'block', width: '50vw', height: '75vh', margin: '0 auto'}}
      src="https://image.freepik.com/free-vector/coming-soon-background-with-spotlight_23-2147501119.jpg" 
      alt="coming soon" title="comint soon" 
    />
    <Footer />
  </section>
)



const Contact = () => (
  <section className="flex-container" style={{textAlign: 'center'}}>
    <h1>Contact</h1>
    <img 
      // style={{display: 'block', width: '50%', height: '50%', margin: '0 auto'}} 
      style={{display: 'block', width: '50vw', height: '75vh', margin: '0 auto'}}
      src="https://image.freepik.com/free-vector/coming-soon-background-with-spotlight_23-2147501119.jpg" 
      alt="coming soon" title="comint soon" 
    />
    <Footer />    
  </section>
)

const NoMatch = ({location}) => (
  <section style={{textAlign: 'center'}}>
    <h1>The route <code>{location.pathname}</code> does not exist</h1>
    <img 
      style={{width: '50%', height: '50%', margin: '0 auto'}} 
      // Credit: Blog Extremem Adivde 
      src="http://blog.extreme-advice.com/wp-content/uploads/2013/01/error.png" 
      title="Error page" alt="Selected route doesn't exist"
     />    
    <Footer />     
  </section>
)

// Acceptable routes for stories - should change variable name
const stories = [
  {
    path:'/Stories/1',
    component: Stories
  },
  {
    path:'/Stories/2',
    component: Stories
  },
  {
    path: '/Stories/3',
    component: Stories
  }
];

// Acceptable Routes for Animorphs
const animorphsChapters = [
   {
    path:'/Animorphs/1',
    component: ViewArticle
  },
  {
    path:'/Animorphs/2',
    component: Stories
  },
  {
    path: '/Animorphs/3',
    component: Stories
  },
   {
    path: '/Animorphs/4',
    component: Stories
  },
   {
    path: '/Animorphs/5',
    component: Stories
  }
];

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
            stories.map( (story, i) => <Route key={i} {...story} /> )
          }
          {/*<Route exact path="/Stories/:id" render={ (route)=>{return <div>This is story {route.match.params.id}</div>}} />          */}
          <Route exact path="/Animorphs" component={Stories} /> 
          {/* Acceptable Routes for Animorphs */}  
          {
            animorphsChapters.map( (chapter, i) => <Route key={i} {...chapter} /> )
          }   
          {/* APOD Route */}
          <Route exact path="/apod" component={ViewArticle} />
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


