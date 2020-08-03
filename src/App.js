import React, { Component } from 'react'
import './App.css'
import NewEntry from './NewEntry'
import Entry from './Entry'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      NewEntry:[
        {
          // id: Date.now(),
          id: 1,
          favMusician: 'Chris Cornell',
          genre: 'Rock',
          favAlbum: 'Higher Truth',
          favSong: 'Dead wishes',
        },
        {
          // id: Date.now(),
          id: 2,
          favMusician: 'Pearl Jam',
          genre: 'Rock',
          favAlbum: 'Ten',
          favSong: 'Jeremy',
        },
      ]
    }

  }



  render() {
    return (
      <div className="App">

        <header>
          <h1>My music app</h1>
        </header>

        <div className="wrap">

          <div className="container">

            <NewEntry />

          </div>

          <div className="musicEntries">
            <Entry />
            this.state.NewEntry.map()
          </div>

        </div>
      </div>
    )
  }
}

export default App
