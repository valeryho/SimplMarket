import React, { Component } from 'react';

class List extends Component {
 state={
   list:[]
 }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/test')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (<div>{list.map((item) => {return(<div> {item }</div>);})}</div>) : 
        (<div><h2>No List Items Found</h2> </div>)}</div>);
  }
}

export default List;