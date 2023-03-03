import { Component } from 'react';
import {fetchApi}from 'components/FetchAPI/fetchApi'

export class ImageGallery extends Component {
    state = {
        searchValue: null,
        valueArr: [],
    }
    componentDidUpdate(prevProps, prevState) {
        const prevSearch = prevProps.searchName;
        const nextSearch = this.props.searchName;
        if (prevSearch !== nextSearch) {
            fetchApi(nextSearch, 1)
                .then(res => res.json())
                .then(data => (
                this.setState({valueArr: data.hits})))
       }
        
    }

    render(){
    return (
        <ul className="gallery">
                <li className="gallery-item">
                <p>{this.state.valueArr}</p></li></ul>)
    }
} 