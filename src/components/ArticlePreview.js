import React from 'react';
import {Link} from 'react-router-dom';

const ArticlePreview = props => 
    /*<article className="articlePreview">
        <h3>{props.name}</h3>
        <img src={props.img} title={props.name} alt={props.name}/>
        {console.log(props.summary)}
        <p>{props.summary.substring(0,100)}...</p>
    </article>;*/
      <article className="chapterCard articlePreview">
                    <section className="heading">
                        <div> 
                            <h3>{props.name}</h3> 
                        </div>
                    </section>
                    <section style={{position: 'relative'}}className="cardBody">
                        <img src={props.img} title={props.name} alt={props.name} style={{width: '100%', height: '400px'}}/>
                    </section>
                    <section className="cardFooter">
                        <p>{props.summary.substring(0,100)}..</p>                        
                    </section>
                    {/*<img src="https://placehold.it/100x100" alt="placeholder" title="placeholder" />*/}
                </article>


export default ArticlePreview;
