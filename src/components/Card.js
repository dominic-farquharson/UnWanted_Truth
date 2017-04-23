import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Card extends Component {
    constructor() {
        super()
    }

    render() {
        // List of Stories - Stories Route
        if(this.props.title && this.props.path) {
            return(
                <section className="articleCard">
                    <h1>
                        {/*{this.props.title} <br /> */}
                        {/*<span style={{fontSize: '.75em', fontWeight: 'none'}}>{this.props.date}</span>*/}
                        <p className="visitArticle"><Link to={this.props.path}> Start Reading {this.props.title} </Link> </p>
                    </h1>
                    {/*<p>{this.props.description}</p>*/}
                    {/* Linking to story route */}
                    {/*<Link to={this.props.path}>*/}
                        {/* Appears on hover */}
                        {/*<section className="cardHover">
                            <div className="cardContainer">
                                <p>{this.props.description}</p>                    
                                <h1>Start Reading <br />{this.props.title}</h1>
                            </div>
                        </section>*/}
                    {/*</Link>*/}             
                </section>     
            );
        } else if (this.props.chapterTitle) {
            return (
                <li className="chapterCard">
                    <h1> {this.props.chapterTitle}</h1>
                    <img src="https://placehold.it/100x100" alt="placeholder" title="placeholder" />
                </li>
            )
        }
        return (
            <section> Card for <h1>Stories path: <code>{this.props.path}</code></h1></section>
            // <section>Card for {this.props.path}</section>
        )
    }
}

export default Card;