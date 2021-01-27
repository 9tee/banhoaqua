import {Link} from 'react-router-dom';

function SaleProduct(props){
    return(
        <div class="col-md-6 col-lg-3">
                <div class="product">
                    <Link to="/product" class="img-prod"><img class="img-fluid" src={props.image} alt="Colorlib Template" />
                        <span class="status">{props.salePercent}%</span>
                        <div class="overlay"></div>
                    </Link>
                    <div class="text py-3 pb-4 px-3 text-center">
                        <h3><Link to="/product">{props.name}</Link></h3>
                        <div class="d-flex">
                            <div class="pricing">
                                <p class="price"><span class="mr-2 price-dc">${props.price.toFixed(2)}</span><span class="price-sale">${props.salePrice.toFixed(2)}</span></p>
                            </div>
                        </div>
                        <div class="bottom-area d-flex px-3">
                            <div class="m-auto d-flex">
                                <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                    <span><i class="ion-ios-menu"></i></span>
                                </a>
                                <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                    <span><i class="ion-ios-cart"></i></span>
                                </a>
                                <a href="#" class="heart d-flex justify-content-center align-items-center ">
                                    <span><i class="ion-ios-heart"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SaleProduct;