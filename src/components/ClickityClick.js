import React from 'react';

class ClickityClick extends React.Component {
  constructor(){
    super();
    this.state={
      hasBeenClicked: false
    };
  }
  handleClick=()=>{
    this.setState({
      hasBeenClicked: true
    })

  };
  render(){
    return(
      <div>
      <p> I Have {this.state.hasBeenClicked ? null: 'not'}been clicked! </p>
      <button onClick={this.handleClick}>Click me! </button>
      </div>
    );
  }
}
export default ClickityClick;
