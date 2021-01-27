import Product from './product';
import SaleProduct from './sale_product';

function Products(props) {
    return (
        <div class="row">
            <SaleProduct
            name='Bell Pepper'
            image='images/product-1.jpg'
            price={120}
            salePercent={30}
            salePrice={80}
            />
            <Product
            name='Bell Pepper'
            image='images/product-1.jpg'
            price={120}
            />
        </div>
    );
}

export default Products;