import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import Nav from './Navigation';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import Nasa from './NasaArticles';

// Carousel component - React bootrap 
const carouselInstance = (
  <Carousel>
    <Carousel.Item>
      {/* Credit : annie sprat */}
     <Link to='/Stories/1'><img className="slideImage"style={{width: '100%'}} alt="900x500" src="../../assets/slide1.jpg"/></Link>
      <Carousel.Caption>
        <h3>Invasion</h3>
        <p>Chapter preview - use substring</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Link to="/Stories/2"><img className="slideImage" style={{width: '100%'}} alt="900x500" src="https://www.wallpapereast.com/static/images/Desktop-Wallpaper-330.jpg"/></Link>
      <Carousel.Caption>
        <h3>Invasion</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Link to="/Stories/3"><img className="slideImage" style={{width: '100%'}} alt="900x500" src="https://www.largehdwallpapers.com/wp-content/uploads/2016/03/Colourful-3D-HD-Wallpapers-For-Desktop.jpg" /></Link>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);


const Home = () => {

  return(
    <main>
      <section className="home">
       {/*<Nav />*/}
         <article id="slideshow">{carouselInstance}</article>
         {/*<img id="siteHeader" src="https://images.unsplash.com/photo-1451481454041-104482d8e284?dpr=1&auto=compress,format&fit=crop&w=1199&h=800&q=80&cs=tinysrgb&crop=&bg=" />*/}
         <article className="homeArticles"> 
           <h1>Latest</h1> 
            <Nasa /> 
           <h1>Misc</h1>
            <Nasa />            
         </article>
        <Footer />
        </section>
    </main>
  )
}





export default Home;