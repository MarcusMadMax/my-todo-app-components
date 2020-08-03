import React, { Component } from 'react'

class NewEntry extends Component {
    constructor(props) {
        super(props)
        this.State = {
            genreClass6: 'faded',

            favMusicianInput: '',
            genreInput: '',
            favAlbumInput:'',
            favSongInput: '',

        }
    }

    handleGenreChange = (e) => {
        this.setState({
            genreClass: ''
        })
    }

    handleFavMusicianInputChange = (e) => {
        console.log('change')
        this.setState({favMusicianInput: e.target.value})
    }


    render() {
        return (
            <form action="#" method="GET">

                <div className="formGroup favMusic">
                    <label htmlFor="favMusic"></label>
                    <input type="text" id="favMusic" placeholder="Your favorit msician" onChange={this.handleFavMusicianInputChange} />
                </div>

                <div className="formGroup genre">
                    <label htmlFor="genre"></label>
                    <select name="genre" id="genre" className="genreClasss">
                        <option value="genre" selected="selected" disabled="disabled" className="first" onChange={this.handleGenreChange}>Genre </option>
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

                <button type="submit" className="button">Add</button>

            </form>
        )
    }
}

export default NewEntry