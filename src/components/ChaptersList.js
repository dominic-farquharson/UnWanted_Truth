import React from 'react';
import Card from './Card';
import Footer from './Footer';

const ChaptersList = (props) => {
    // chapters components
    let chapters = props.chapters.map((element, i)=> {
        return <Card key={i} chapterTitle={element} />
    });

    return (
        <article className="chaptersContainer">
            <h1>{props.story}</h1>
            <ul className="chaptersList">{chapters}</ul>
            {/*<h1>This should not be floated</h1>*/}
            {/*<Footer />*/}
        </article>
    )
}

export default ChaptersList;