import React, {Component} from 'react';
import Footer from '../Footer';
import $ from 'jquery';

class Contact extends Component {
    constructor() {
        super();

        // initial state
        this.state = {
            name: '',
            subject: '',
            email: '',
            body: ''

        }

        // binding methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleSubject = this.handleSubject.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleEmailBody = this.handleEmailBody.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        let url = "https://formspree.io/me@unwantedtruth.com";
        
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name: this.state.name,
                subject: this.state.subject,
                email: this.state.email,
                body: this.state.body
            })
        })
        // errors
        .catch(_ => alert('There was a problem submitting your email!') )
        .then(_ => {
            alert('your email has been sent!');

            // clearing
            this.setState({
                name: '',
                subject:'',
                email:'',
                body:''
            })

        })
            
        
    }

    handleName(e) {
        this.setState({name: e.target.value});
    }

    handleSubject(e) {
        this.setState({subject: e.target.value})
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

    handleEmailBody(e) {
        this.setState({body: e.target.value})
    }

    render() {
        return (
             <section className="flex-container contact" style={{textAlign: 'center'}}>
                 <h2>Contact</h2>
                <form onSubmit={this.handleSubmit} action="#">
                    {/* Controlled */}
                    <input type="text" name="full_name" value={this.state.name} onChange={this.handleName} placeholder="Full Name" required/>                                        
                    <input type="text" name="subject" value={this.state.subject} onChange={this.handleSubject} placeholder="Subject" required/>                                        
                    <input type="email" name="email" value={this.state.email} onChange={this.handleEmail} placeholder="Email" required/>
                    <textarea placeholder="hello world" value={this.state.body} onChange={this.handleEmailBody} required></textarea>
                    <input type="submit" value="Send Email" />
                </form>
                <Footer />    
            </section>  
        )
    }
}

export default Contact;


