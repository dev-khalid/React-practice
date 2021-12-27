import React from 'react';

//with counter makes sure there is a counting functionality

 const withCounter = (OriginalComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState,props) => (
        {
        count: prevState.count + 1,
      }
      ));
    };
    render() {  
      return <OriginalComponent count={this.state.count} handler={this.incrementCount}/>
    }
  };
};

export default withCounter; 


//there is a conceptual gap in composition 