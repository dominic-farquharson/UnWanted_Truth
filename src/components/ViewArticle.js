import React, {Component} from 'react';
// Importing React Facebook
import FacebookProvider, { Comments } from 'react-facebook';
import Loading from './Loading';
import Footer from './Footer';
import dotenv from 'dotenv';

// const ViewArticle = (props) => {
//     console.log('this.props', props.match.path, props)
//     return (
//         <div>This is the story {renderArticles(props.match.path)}</div>
//     )
// }

// const renderArticles = (id)=> {
//     const articleId = id.split('/')[2];
//     console.log('split', articleId)
//     if(articleId === '1') {
//     return <section>This is article{id}{articleId}</section>
//     }
// }


    


class ViewArticle extends Component {
    constructor() {
        super();

        this.state = {
            article: {},
            loaded: false,
            apod: false,
            story: false,
        }
    }

    componentWillMount() {
        console.log(this.props.match.url.substring(1,));
        let url;
        const path = this.props.match.url.substring(1,);
        if(path === 'apod') {
         url = 'https://powerful-sierra-34429.herokuapp.com/api/apod';
        // fetching from api
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({article: res, loaded: true, tag: 'Nasa'}))
            .catch(err => console.log(err))
        }

    }

    // changing document title when component mounts
    componentDidMount() {
        console.log('props', this.props)
        document.title = 'Animorphs Chapter 1';                      
    }

    // changing to default document title
    componentWillUnmount() {
        document.title = 'UnWanted Truth';
        // $('#facebook-jssdk').remove();
    }

    render() {
        return (
            <main className="articleWrapper">
                { this.state.loaded? (
                <article>
                    <section className="articleHeading">
                        {/* Logo - Story Tag */}
                        <p className="storyLogo">{this.state.tag}</p>
                        {/* Title */}
                        <h2> {this.state.article.title}</h2>
                        {/* Line */}
                        <span></span>
                        <p>by {this.state.article.author || 'unkown'} <br /> {this.state.article.date} </p>
                        {/* Chapter Image */}
                        <div><img style={{width: '100%', height: '400px', margin:'auto'}} src={this.state.article.url} /></div>
                    </section>
                    <section className="articleBody">
                        <p>{this.state.article.explanation}</p>

                        {/*<h3>Subtitle 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                        </p>
                        <h3>Subtitle 2</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                        </p>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                        </p>*/}
                        {/*<h3>Subtitle 3</h3>                        
                        <img src="http://placehold.it/200x200" alt="placeholder" title="placeholder" />
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                        </p>
                        <img src="http://placehold.it/200x200" alt="placeholder" title="placeholder" />    */}
                        <p>Enjoyed the article? Leave a comment!</p>
                        <section>
                        {/* Facebook Comments component */}
                        <FacebookProvider appId="1479210838795778">
                            {/* Changing default width */}
                            <Comments href={"localhost:3000"+ this.props.match.path} width="100%" />
                        </FacebookProvider>
                        </section>
                    </section>

                </article>) : <Loading /> }
                <Footer />
            </main>
        )
    }
}

export default ViewArticle;