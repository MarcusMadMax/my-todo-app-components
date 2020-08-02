import React, {Component} from 'react';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="App">
        <div className="wrap">
          <div className="container">
            <div className="todos">
              <form action="#">
                <div className="formGroup newToDo">
                  <label for="newToDo"></label>
                  <input type="text" id="newToDo" placeholder="Add" />
                </div>
                <div className="formGroup status">
                  <label for="status"></label>
                  <select name="status" id="status">
                    <option value="status">please select</option>
                    <option value=""></option>
                  </select>
                </div>
                <button type="submit" className="button">Add</button>
              </form>
              <div className="todo">
                <div className="container">
                  <i className="far fa-trash-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
