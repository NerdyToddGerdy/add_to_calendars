// Grabs the React library to use on the one page.
import React from 'react';

// Grabs the css from ./App.css
import './App.css'; 

// creates the button HTML code and adds it into this code.
import { Button } from './Button';

// ReactDOM.render() activates this.
class Talker extends React.Component {

    // the function that writes the alert
    handleClick() {
        let speech = '';
        for (var i = 0; i < 10000; i++) {
            speech += 'blah ';            
        }
        alert(speech);
    }

    // this tells the button what to do and does it.
    render() {
        // If there is no text attribute, it will go to the default that is on './Button'
        // onclick runs function of handleClick()
        return <Button className="center" text="test" onClick={this.handleClick}/>;
    }
}



////////// ReactDOM.render() IS ON ./index.js ////////////
// ReactDOM.render(
//     <Talker />,
//     document.getElementById('app')
// );


// Allows the class of 'Talker' to be used outside this file
export default Talker;