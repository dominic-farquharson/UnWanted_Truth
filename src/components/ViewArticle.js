import React, {Component} from 'react';

const ViewArticle = (props) => {
    console.log('this.props', props.match.path, props)
    return (
        <div>This is the story {renderArticles(props.match.path)}</div>
    )
}

const renderArticles = (id)=> {
    const split = id.split('/');
    if(id === '/Animorphs/1') {
    return <section>This is article{id}</section>
    }
}

export default ViewArticle;