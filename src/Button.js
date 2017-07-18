import React from 'react';


// Can now be called w/ a captal 'B' inside <Button>
export class Button extends React.Component {
    render() {
        return(
            <button className="color" onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    }
}

Button.defaultProps = {text: "default"}