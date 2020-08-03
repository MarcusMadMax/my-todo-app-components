import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      // genreClass:'faded'
    }

  }

  // handleGenreChange = (e)=>{
  //   this.setState({
  //     genreClass:''
  //   })
  // }

  render() {
    return (
      <div className="App">

        <header>
          <h1>My music app</h1>
        </header>

        <div className="wrap">

          <div className="container todos">
            <form action="#">

              <div className="formGroup favMusic">
                <label htmlFor="favMusic"></label>
                <input type="text" id="favMusic" placeholder="Your favorit msician" />
              </div>

              <div className="formGroup Genre">
                <label htmlFor="Genre">Choose a category</label>
                <select name="Genre" id="Genre" value="genre">
                  <option value="genre" disabled="disabled" className="first">Genre</option>
                  <option value="rock">Rock</option>
                  <option value="classic">Classic</option>
                  <option value="dub">Blues</option>
                  <option value="dub">Dub</option>
                  <option value="soul">Soul</option>
                  <option value="rap">Rap</option>
                </select>
              </div>

              <div className="formGroup favAlbum">
                <label htmlFor="favMusic"></label>
                <input type="text" id="favAlbum" placeholder="Your favorit album" />
              </div>

              <div className="formGroup favAlbum">
                <label htmlFor="favMusic"></label>
                <input type="text" id="favAlbum" placeholder="Your favorit song" />
              </div>

              <button type="submit" className="button">Add to list</button>

            </form>
          </div>

          <div className="musicEntries">

            <div className="entry">
              <div className="constants">
                <h5>Artist</h5>
                <h5>Genre</h5>
              </div>
              <div className="entries">
                <h3>Eric Clapton</h3>
                <h4>Blues</h4>
              </div>
              <div className="label">
                <img src="https://i.etsystatic.com/6254977/r/il/0c09a1/1765041177/il_570xN.1765041177_knm8.jpg" alt="Eric Clapton Cover" />
              </div>
              <div className="edit">
                <i className="far fa-edit"></i>
                <i className="far fa-trash-alt"></i>
              </div>
            </div>
            <div className="entry">
              <div className="constants">
                <h5>Artist</h5>
                <h5>Genre</h5>
              </div>
              <div className="entries">
                <h3>Eric Clapton</h3>
                <h4>Blues</h4>
              </div>
              <div className="label">
                <img src="https://i.etsystatic.com/6254977/r/il/0c09a1/1765041177/il_570xN.1765041177_knm8.jpg" alt="Eric Clapton Cover" />
              </div>
              <div className="edit">
                <i className="far fa-edit"></i>
                <i className="far fa-trash-alt"></i>
              </div>
            </div>

            <div className="entry">
              <div className="constants">
                <h5>Artist</h5>
                <h5>Genre</h5>
              </div>
              <div className="entries">
                <h3>Eric Clapton</h3>
                <h4>Blues</h4>
              </div>
              <div className="label">
                <img src="https://i.etsystatic.com/6254977/r/il/0c09a1/1765041177/il_570xN.1765041177_knm8.jpg" alt="Eric Clapton Cover" />
              </div>
              <div className="edit">
                <i className="far fa-edit"></i>
                <i className="far fa-trash-alt"></i>
              </div>
            </div>

            <div className="entry">
              <div className="constants">
                <h5>Artist</h5>
                <h5>Genre</h5>
              </div>
              <div className="entries">
                <h3>Eric Clapton</h3>
                <h4>Blues</h4>
              </div>
              <div className="label">
                <img src="https://i.etsystatic.com/6254977/r/il/0c09a1/1765041177/il_570xN.1765041177_knm8.jpg" alt="Eric Clapton Cover" />
              </div>
              <div className="edit">
                <i className="far fa-edit"></i>
                <i className="far fa-trash-alt"></i>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default App;
