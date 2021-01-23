import { useState } from 'react'

function Categories(props) {
    const [categories, setCategories] = useState([
        { item: 'All', style: 'active' },
        { item: 'Vegetables'},
        { item: 'Fruits'},
        { item: 'Juice'},
        { item: 'Dried'}
    ])

    const onClick = (index) => {
        let temp = categories.map((item)=>{return {item:item.item}})
        temp[index].style = 'active'
        setCategories(temp)
    }

    return (
        <div class="row justify-content-center">
            <div class="col-md-10 mb-5 text-center">
                <ul class="product-category">
                    {
                        categories.map((item, index) => (
                            <li><div
                                onClick={() => {onClick(index)}}
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
