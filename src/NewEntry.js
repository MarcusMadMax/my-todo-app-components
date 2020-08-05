import React, { Component } from 'react'

class NewEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genreClass: 'faded',

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
        this.setState({
            genreInput: e.target.value,
            genreClass:''
        })
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
        this.props.addEntry(data)
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
                    <select name="genre" id="genre" className={this.state.genreClass} onChange={this.handleGenreInputChange}>
                        <option value="Genre" selected="selected" disabled="disabled" className="first">Genre </option>
                        <option value="Rock">Rock</option>
                        <option value="Classic">Classic</option>
                        <option value="Blues">Blues</option>
                        <option value="Dub">Dub</option>
                        <option value="Soul">Soul</option>
                        <option value="Rap">Rap</option>
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