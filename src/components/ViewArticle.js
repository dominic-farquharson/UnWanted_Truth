import React, {Component} from 'react';
import $ from 'jquery';

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
                    </section>
                    <section>
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
                        <section>
                            <div className="fb-comments" data-width="600" data-href="http://localhost:3000/Animorphs/1" data-numposts="5"></div>                 
                        </section>
                    </section>

                </article>
            </main>
        )
    }
}

export default ViewArticle;