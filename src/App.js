import React, { Component } from "react";
class App extends Component {
  state = {
    sortedDictionary: [],
  };
  componentDidMount() {
    var obj = [
      { id: 4, name: "abc" },
      { id: 10, name: "ab2" },
      { id: 5, name: "abc3" },
      { id: 6, name: "abc5" },
    ];
    let sortedDictionary = obj.sort((a, b) => {
      return a.id - b.id;
    });

    console.log(sortedDictionary);
    this.setState({ sortedDictionary });
  }
  render() {
    return (
      <React.Fragment>
        <h1>sorted array:</h1>
        {this.state.sortedDictionary.map((obj) => {
          return (
            <h1>
              {obj.id}:{obj.name}
            </h1>
          );
        })}
      </React.Fragment>
    );
  }
}

export default App;
