import React from 'react';
import Card from './Card';
import Footer from './Footer';

const ChaptersList = (props) => {
    // chapters components
    let chapters = props.chapters.map((element, i)=> {
        return <Card key={i} chapterTitle={element['chapter']} path={element['url']} />
    });

    return (
        <article className="chaptersContainer">
            <h1>{props.story}</h1>
            <ul className="chaptersList">{chapters}</ul>
        </article>
    )
}

export default ChaptersList;