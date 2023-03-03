import {GalleryItem} from 'components/ImageGallery/ImageGallery.styled'
export const ImageItem = ({ onClick, smallImg, tag, largeImage, }) => {
     return (<GalleryItem onClick={onClick} >
          <img src={smallImg} alt={tag} data-large={largeImage}  />
     </GalleryItem>)}
     
