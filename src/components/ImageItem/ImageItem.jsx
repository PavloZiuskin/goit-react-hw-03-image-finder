
export const ImageItem = ({ onClick, smallImg, tag, largeImage, }) => {
     return (<li  className="gallery-item" onClick={onClick} >
          <img src={smallImg} alt={tag} data-large={largeImage}  />
     </li>)}
     
