import{BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from "react-icons/bs";
import { IconButton,ActivPage,PaginationContainer } from "components/Pagination/Pagination.styled"
export const Pagination =({onLoadMore, page, total})=>{  
    return (<PaginationContainer>
        <IconButton type="button"disabled={page===1} onClick={() => { onLoadMore(-1) }}><BsFillArrowLeftSquareFill/></IconButton>
        <ActivPage>{page }</ActivPage>
    <IconButton  type="button"disabled={page===total || total===0} onClick={()=>{onLoadMore(1)}}><BsFillArrowRightSquareFill/></IconButton></PaginationContainer>)
    
}