import { Component } from 'react';


import {fetchApi}from 'components/FetchAPI/fetchApi'
import { ImageItem } from 'components/ImageItem/ImageItem';

export class ImageGallery extends Component {
    state = {
        searchValue: null,
        valueArr: null,
    }
    componentDidUpdate(prevProps, prevState) {
        const prevSearch = prevProps.searchName;
        const nextSearch = this.props.searchName;
        if (prevSearch !== nextSearch) {
            fetchApi(nextSearch, 1)
                .then(res => res.json())
                .then(data => {
                    this.setState({ valueArr: data })
                }
                )
       }
        
    }

    render(){
        return (
        this.state.valueArr && <ul className="gallery">
                {this.state.valueArr.hits.map(({id, type, webformatURL})=> {
                    return (
                        <li key={id} className="gallery-item">
                            <ImageItem
                                smallImg={webformatURL}
                                type={type} />
                        </li>)
                })}
            </ul>
        )
    }
} 