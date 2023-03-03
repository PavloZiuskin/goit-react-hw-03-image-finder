import { Component } from "react";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    searchName: '',
  }
  handleFormSubmit = (searchName) => {
    this.setState({searchName})
    
  }
  render() {
    return (
      <div>
        <header className="searchbar">
          <Searchbar onSubmit={this.handleFormSubmit } />
        </header>
        <ImageGallery searchName={this.state.searchName } />
        
        
      </div>)}
}
