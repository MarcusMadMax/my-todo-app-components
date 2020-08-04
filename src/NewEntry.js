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
        this.setState({favMusicianInput: e.target.value})
    }

    handleGenreInputChange = (e) => {
        this.setState({genreInput: e.target.value})
    }

    handleFavAlbum = (e) => {
        this.setState({favAlbumInput: e.target.value})
    }

    handleFavSong = (e) => {
        this.setState({favSongInput: e.target.value})
    }

    handleClick = (e) => {
        e.preventDefault()
        var data = {
            favMusician: this.state.favMusicianInput,
            genre: this.state.genreInput,
            favSong: this.state.favSongInput,
        }
        this.props.newEntries(data)
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
                    <select name="genre" id="genre" className="genreClasss" onChange={this.handleGenreInputChange}>
                        <option value="genre" selected="selected" disabled="disabled" className="first">Genre </option>
                        <option value="rock">Rock</option>
                        <option value="classic">Classic</option>
                        <option value="blues">Blues</option>
                        <option value="dub">Dub</option>
                        <option value="soul">Soul</option>
                        <option value="rap">Rap</option>
                    </select>
                </div>

                <div className="formGroup favAlbum">
                    <label htmlFor="favMusic"></label>
                    <input type="text" id="favAlbum" placeholder="Your favorit album" onChange={this.handleFavAlbum}/>
                </div>

                <div className="formGroup favAlbum">
                    <label htmlFor="favMusic"></label>
                    <input type="text" id="favAlbum" placeholder="Your favorit song" onChange={this.handleFavSong}/>
                </div>

                <button type="submit" className="button" onClick={this.handleClick}>Add</button>

            </form>
        )
    }
}

export default NewEntry