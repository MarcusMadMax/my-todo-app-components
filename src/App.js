import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="App">
        <div className="wrap">
          <div className="container todos">
            <form action="#">
              <div className="formGroup newToDo">
                <label htmlFor="newToDo"></label>
                <input type="text" id="newToDo" placeholder="Add" />
              </div>
              <div className="formGroup status">
                <label htmlFor="status"></label>
                <select name="status" id="status">
                  <option value="status">please select</option>
                  <option value=""></option>
                </select>
              </div>
              <button type="submit" className="button">Add</button>
            </form>
          </div>
          <div className="container todo">
            <h1>Go surfing</h1>
            <i class="far fa-edit"></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
