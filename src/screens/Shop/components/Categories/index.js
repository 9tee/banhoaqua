import { useState,useEffect } from 'react'

function Categories(props) {
    const [categories, setCategories] = useState([
        { item: 'All', style: 'active' }
    ])

    const onClick = (index,id) => {
        let temp = categories.map((item)=>{return {item:item.item, id: item.id}})
        temp[index].style = 'active'
        setCategories(temp)
        console.log(id)
        props.onCategoryChange(id)
    }

    useEffect(
        ()=>{
            let arr = props.categories.map((item)=>(
                { item: item.name, id: item.id}
            ));
            arr.unshift({ item: 'All', style: 'active' });
            setCategories(arr);
        }
    ,[props.categories])

    return (
        <div class="row justify-content-center">
            <div class="col-md-10 mb-5 text-center">
                <ul class="product-category">
                    {
                        categories.map((item, index) => (
                            <li key={index}><div
                                onClick={() => {onClick(index,item.id)}}
                                class={item.style}
                            >{item.item}</div></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
export default Categories;
