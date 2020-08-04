import React, { Component } from 'react'

class Entry extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="entries">
                <div className="edit">
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                </div>
                <div className="info">
                    <div className="constants">
                        <h4>Artist</h4>
                        <h5>{this.props.favMusician}</h5>

                        <h4>Genre</h4>
                        <h5>{this.props.genre}</h5>

                        <h4>My favorit song:</h4>
                        <h5>{this.props.favSong}</h5>

                    </div>
                    <div className="favAlbum">
                        <img src="https://i.etsystatic.com/6254977/r/il/0c09a1/1765041177/il_570xN.1765041177_knm8.jpg" alt="Eric Clapton Cover" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Entry
