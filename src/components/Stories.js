import React, {Component} from 'react';

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

    render() {
        // setting props to variable
        const route = this.props;
        // console.log('incoming route',route.match.path, route.match.pathname)
        console.log('path object',route.match)
        

        // Animorphs route
        if(route.match.path==='/Animorphs') {
            // changing Tab Title
            document.title = 'Animorphs';
            return <div>Animorphs</div>
        }

        // Stories
        // if(route.match.path === '/Stories/1') {        
        //     return <div><h1>This will be Story 1</h1></div>
        // }


        // Default
        return <div> <h1>Stories path: <code>{route.match.url}</code></h1></div>
    }
}
export default Stories;