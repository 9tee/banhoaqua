import { useState } from 'react';

function Pagination(props) {
    const [pageSize, setPageSize] = useState(4)
    const [pageIndex, setPageIndex] = useState(1)

    const arrowClick = (value) => {
        if(value){
            setPageIndex(pageIndex+1);
        }
        else{
            setPageIndex(pageIndex-1);
        }
    }

    const indexClick = (value) => {
        setPageIndex(value);
    }

    return (
        <div class="row mt-5">
            <div class="col text-center">
                <div class="block-27">
                    <ul>
                        {pageIndex=== 1 ? <></> : <li><div onClick={()=>arrowClick(false)}>&lt;</div></li> }
                        {(new Array(pageSize+1).fill({})).map((item, index) => (
                            index === pageIndex-1
                                ?
                                <li class="active" key={index}><span>{index+1}</span></li>
                                :
                                <li key={index}><div onClick={()=>indexClick(index+1)}>{index+1}</div></li>
                        ))}
                        {pageIndex === pageSize+1 ? <></> : <li><div onClick={()=>arrowClick(true)}>&gt;</div></li> }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Pagination;