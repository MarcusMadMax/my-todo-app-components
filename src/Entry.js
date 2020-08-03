import React, { Component } from 'react'

class Entry extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="entry">
                <div className="constants">
                    <h4>Artist</h4>
                    <h4>Genre</h4>
                </div>
                <div className="entries">
                    <h5>Eric Clapton</h5>
                    <h5>Blues</h5>
                </div>
                <div className="favAlbum">
                    <img src="https://i.etsystatic.com/6254977/r/il/0c09a1/1765041177/il_570xN.1765041177_knm8.jpg" alt="Eric Clapton Cover" />
                </div>
                <div className="favSong">
                    <h4>My favorit song:</h4>
                    <h5>Tears in Heaven</h5>
                </div>
                {/* <div className="edit">
              <i className="far fa-edit"></i>
              <i className="far fa-trash-alt"></i>
            </div> */}
            </div>
        )
    }
}

export default Entry
