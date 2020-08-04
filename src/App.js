import React, { Component } from 'react'
import './App.css'
import NewEntry from './NewEntry'
import Entry from './Entry'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      entries:[
        // {
        //   // id: Date.now(),
        //   id: 1,
        //   favMusician: 'Chris Cornell',
        //   genre: 'Rock',
        //   favAlbum: 'Higher Truth',
        //   favSong: 'Dead wishes',
        // },
        // {
        //   // id: Date.now(),
        //   id: 2,
        //   favMusician: 'Pearl Jam',
        //   genre: 'Heavy metal',
        //   favAlbum: 'Ten',
        //   favSong: 'Jeremy',
        // },
        // {
        //   // id: Date.now(),
        //   id: 3,
        //   favMusician: 'Pearl Jam',
        //   genre: 'Heavy metal',
        //   favAlbum: 'Ten',
        //   favSong: 'Jeremy',
        // },
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
