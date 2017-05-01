import React, {Component} from 'react';
// Importing React Facebook
import FacebookProvider, { Comments } from 'react-facebook';

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
    }

    // changing document title when component mounts
    componentDidMount() {
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
                <article>
                    <section className="articleHeading">
                        <p className="storyLogo">Animorphs</p>
                        <h2>Chapter 1</h2>
                        {/* Line */}
                        <span></span>
                        <p>by Dominic Farquharson</p>
                        {/* Chapter Image */}
                        <div><img style={{width: '100%', height: '400px', margin:'auto'}} src="http://placehold.it/100x100" /></div>
                    </section>
                    <section className="articleBody">
                        <h3>Subtitle 1</h3>
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
                        </p>
                        <h3>Subtitle 3</h3>                        
                        <img src="http://placehold.it/200x200" alt="placeholder" title="placeholder" />
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur modi aliquid officia illo minima saepe corporis, sint, commodi. Temporibus quos ipsum nesciunt, sapiente rerum sequi. Dolorum rerum tempore dolorem.
                        </p>
                        <img src="http://placehold.it/200x200" alt="placeholder" title="placeholder" />    
                        <p>Enjoyed the article? Leave a comment!</p>
                        <section>
                        {/* Facebook Comments component */}
                        <FacebookProvider appId="1479210838795778">
                            {/* Changing default width */}
                            <Comments href="localhost:3000/Animorphs/1" width="100%" />
                        </FacebookProvider>
                        </section>
                    </section>

                </article>
            </main>
        )
    }
}

export default ViewArticle;