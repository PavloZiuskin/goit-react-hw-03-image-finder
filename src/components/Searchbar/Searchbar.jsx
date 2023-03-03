import { Component } from "react";

export class Searchbar extends Component {
    state = { 
        searchName: ''
    }

    handleInput = e => {
        this.setState({searchName: e.currentTarget.value.toLowerCase()})
    }
    handleSubmit = e => {
        
        e.preventDefault()
        const { searchName } = this.state;
        if (searchName.trim() === '') {
            return
        }
        this.props.onSubmit(searchName)
        this.setState({searchName:''})
    }
    render() {
        return (
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                    <span className="button-label">Search</span>
                    </button>

                    <input
                        onChange={this.handleInput}
                        value={this.state.searchName}
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        />
                </form>)}
}