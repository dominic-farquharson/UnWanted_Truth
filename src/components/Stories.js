import React, {Component} from 'react';
import Card from './Card';
import Footer from './Footer';
import ChaptersList from './ChaptersList';

// Stories Component
/*
const Stories = (props) => {
//   console.log(props);
  if(props.match.path==='Animorphs') {
    return <div>Animorphs</div>
  }
  if(props.match.path === '/Stories/1') {
    return <div><h1>This is page 1</h1></div>
  }
  return <div> <h1>Stories path: <code>{props.match.url}</code></h1></div>
}
*/

class Stories extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        // setting Tab Title
        document.title = 'Stories - UnWanted Truth';
    }

    componentWillUnmount() {
        // Changing to default Tab Title - when component unmounts
        document.title = 'UnWanted Truth';
    }

    printStories = () => {
        let stories = [
            {title:'Animorphs', description: 'based off of animorphs books', date: '4/17/17', path: '/Animorphs'},
            {title: 'Untitled 2', description: 'lorem ipsum slslslsl', date: '4/22/17', path: '/none'}, 
            {title: 'Untitled 3',description: 'lorem ipsum slslslslslslslsls', date: '4/25,17', path: '/none'}
        ];
        const articles = stories.map((element, i)=>{
            // Using spread operator
            return <Card key={i} {...element} />
        })
        // )
        return articles;
    }

    render() {
        // setting props to variable
        const route = this.props;
        // console.log('incoming route',route.match.path, route.match.pathname)
        console.log('stories component', this.props)
        

        // Animorphs route
        if(route.match.path==='/Animorphs') {
            // changing Tab Title
            document.title = 'Animorphs';

            /* Chapters List */
            const chapters = [
                {chapter:'chapter 1', url: 'Animorphs/1'},
                {chapter:'chapter 2', url: 'Animorphs/2'},
                {chapter:'chapter 3', url: 'Animorphs/3'},
                {chapter:'chapter 4', url: 'Animorphs/4'},
                {chapter:'The End', url: 'Animorphs/5'}
            ];
        
        // Chapters List component
            return <ChaptersList story='Animorphs' chapters={chapters} />
        } else if(route.match.path === '/Stories') {

            // Rendering All Story Cards
            return <article className="storiesList">{this.printStories()}</article>;
        } else {
          // rendering invidual article - Stories/:id
          return <Card path={route.match.url} />
        }

        // Stories
        // if(route.match.path === '/Stories/1') {        
        //     return <div><h1>This will be Story 1</h1></div>
        // }


        // Default
    }
}
export default Stories;