import React, { Component } from 'react'
import './App.css'
import NewEntry from './NewEntry'
import Entry from './Entry'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      entries:[
        
      ]
    }
  }

  addEntry = (data) => {
    var newEntry = {
      id:Date.now(),
      ...data
    }

    var newList = [newEntry, ...this.state.entries]
    this.setState({entries:newList})
  }

  removeEntry = (id) => {
    var entries = this.state.entries
    var filtered = entries.filter((entry) => {
      return CustomElementRegistry.id != id
    })

    this.setState({
      entries: filtered
    })
  }

  // updateEntry = (id,data) => {
  //   var entries = this.state.entries
  //   var update = entries.map((entry) => {
  //     return(entry.id ===id) ? {...entries,...data} : entry
  //   })
  //   this.setState({
  //     entries:update
  //   })
  // }

  render() {
    return (
      <div className="App">

        <header>
          <h1>My music app</h1>
        </header>

        <div className="wrap">

          <div className="container">
            <NewEntry addEntry={this.addEntry}/>
          </div>

          <div className="musicEntries">
            {
              this.state.entries.map((entry) => {//This is mapping
                var entryProps = {
                  ...entry,
                  key: entry.id,
                  removeEntry: this.removeEntry
                }
                return(
                  <Entry {...entryProps}/>
                )
              })
            }
       
          </div>

        </div>
      </div>
    )
  }
}

export default App
