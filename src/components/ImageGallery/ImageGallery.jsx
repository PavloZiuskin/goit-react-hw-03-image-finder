import { Component } from 'react';


import { fetchApi } from 'components/FetchAPI/fetchApi';
import { ImageItem } from 'components/ImageItem/ImageItem';
import {Loader} from 'components/Loader/Loader'
import { Button } from 'components/Pagination/ButtonText';

export class ImageGallery extends Component {
    state = {
        searchValue: null,
        valueArr: null,
        loading: false,
        status: 'idle',
        error: '',
        page: 1,
        totalPages: null,
        openModal:null,
    }
    componentDidUpdate(prevProps, prevState) {
        const prevSearch = prevProps.searchName;
        const nextSearch = this.props.searchName;
        const prevPage = prevState.page;
        const nextPage = this.state.page;
        const openModal = this.props.onOpenModal;

        if (nextPage !== prevPage) {
            const { page, searchValue } = this.state;
            fetchApi(searchValue, page)
                .then(res => {
                    if (!res.ok) {
                        return Promise.reject(res.status)
                    }
                    return res.json()
                }
                )
                .then(data => {
                    this.setState({ valueArr: null })
                    this.setState({ valueArr: data, status: 'resolved' })
                }
            ).catch((error) => this.setState({ status: 'rejected', error }))
            return;
        }
        if (prevSearch !== nextSearch) {
            this.setState({openModal})
            this.setState({status: 'pending'})
            fetchApi(nextSearch, 1)
                .then(res => {
                    if (!res.ok) {
                        return Promise.reject(res.status)
                    }
                    return res.json()
                }
                )
                .then(data => {
                    this.setState(
                        {
                            valueArr: data,
                            status: 'resolved',
                            searchValue: nextSearch,
                            totalPages: Number.parseInt(data.totalHits / 12),
                            page: 1
                        })
                }
                ).catch((error)=>this.setState({status:'rejected', error}))
                return
       }
        
    }

    handleClick = (nextPage) => {
        
        this.setState(
            ({ page }) => ({ page: page + nextPage }));
    }

    render() {
        const { status,
            error,
            valueArr,
            page,
            totalPages,
            openModal} = this.state;
        const onLoadMore = this.handleClick;

        if (status === 'rejected') {
            return(<p>{ error}</p>)
        }
        if (status === 'pending') {
            return(<Loader />)
        }
        if (status === 'idle') {
            return(<p>Please entre search value</p>)
        }
        if (status === 'resolved' && valueArr.hits.length !== 0) {
            return (<div>
                        <ul className="gallery">
                                {valueArr.hits.map(({id, tag, webformatURL,largeImageURL})=> {
                                    return (
                                            <ImageItem
                                                onClick={openModal}
                                                smallImg={webformatURL}
                                                tag={tag}
                                                key={id}
                                                largeImage={largeImageURL}
                                            />
                                        )
                                })}
                        </ul>
                        <Button onLoadMore={onLoadMore} page={page} total={totalPages} />
                    </div>)
        }
        
    }
} 