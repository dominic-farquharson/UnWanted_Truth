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
                        {this.props.title} <br /> 
                        <span style={{fontSize: '.75em', fontWeight: 'none'}}>{this.props.date}</span>
                    </h1>
                    {/*<p>{this.props.description}</p>*/}
                    {/* Linking to story route */}
                    <Link to={this.props.path}>
                        {/* Appears on hover */}
                        {/*<section className="cardHover">
                            <div className="cardContainer">
                                <p>{this.props.description}</p>                    
                                <h1>Start Reading <br />{this.props.title}</h1>
                            </div>
                        </section>*/}
                    </Link>
                </section>
            );
        }
        return (
            <section> Card for <h1>Stories path: <code>{this.props.path}</code></h1></section>
            // <section>Card for {this.props.path}</section>
        )
    }
}

export default Card;