import React, {Component} from 'react';

class Card extends Component {
    constructor() {
        super()
    }

    render() {
        if(this.props.title) {
            return(
                <section className="articleCard">
                    <h1>
                        {this.props.title} <br /> 
                        <span style={{fontSize: '.75em', fontWeight: 'none'}}>{this.props.date}</span>
                    </h1>
                    <p>{this.props.description}</p>
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