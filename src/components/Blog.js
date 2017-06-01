import React from 'react';
import Footer from './Footer';

const Blog = () => (
  <section className="flex-container" style={{textAlign: 'center'}}>
    <h1>Blog</h1>
    <img 
      style={{display: 'block', width: '50vw', height: '75vh', margin: '0 auto'}}
      src="https://image.freepik.com/free-vector/coming-soon-background-with-spotlight_23-2147501119.jpg" 
      alt="coming soon" title="comint soon" 
    />
    <Footer />
  </section>
)


export default Blog;