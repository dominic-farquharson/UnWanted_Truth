import React, {Component} from 'react';
import fetch from 'node-fetch';
import Loading from './Loading';
import ArticlePreview from './ArticlePreview';

class Nasa extends Component {
  constructor() {
    super();

    // inital state
    this.state = {
      articles: {},
      loaded: false
    }

    // binding
    this.printArticles = this.printArticles.bind(this);
  }

  componentDidMount() {
    const url = 'https://powerful-sierra-34429.herokuapp.com/api/apod';
    // fetching from api
    fetch(url)
        .then(res => res.json())
        .then(res => this.setState({articles: res, loaded: true}))
        .catch(err => console.log(err))
  }

  printArticles() {
     let x = [0,1,2,3];
     return x.map(_ => <ArticlePreview
            name={this.state.articles.title}
            img={this.state.articles.hdurl}
            summary={this.state.articles.explanation}
     /> )
    //   }
    //  );
  }

  render() {
    return (
      <section className="flexContainer"> 
        {/* Rendering loading component if articles not fetched */}
        { this.state.loaded ? this.printArticles() : <Loading /> }
      </section>
    )
  }
}

export default Nasa;