import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Table } from 'antd';
import { Breadcrumb } from '../../components';

function Cart(props) {
    const [cart, setCart] = useState([]);

    const columns = [
        {
            render: () => (<span class="ion-ios-close" />),
        },
        {
            dataIndex: 'image',
            key: 'img',
            render: (text) => (<div class="img" style={{ backgroundImage: 'url(images/product-4.jpg)' }} />),
        },
        {
            title: 'Product name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        }
    ];

    return (
        <>
            <Breadcrumb navi='Cart' name='My cart'/>
            {
                cart.length !== 0
                    ?
                    <section class="ftco-section ftco-cart">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12  ">
                                    <div>
                                        <Table columns={columns} dataSource={cart} pagination={false}/>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-end">
                                <div class="col-lg-4 mt-5 cart-wrap  ">
                                    <div class="cart-total mb-3">
                                        <h3>Cart Totals</h3>
                                        <p class="d-flex">
                                            <span>Subtotal</span>
                                            <span>$20.60</span>
                                        </p>
                                        <p class="d-flex">
                                            <span>Delivery</span>
                                            <span>$0.00</span>
                                        </p>
                                        <p class="d-flex">
                                            <span>Discount</span>
                                            <span>$3.00</span>
                                        </p>
                                        <hr />
                                        <p class="d-flex total-price">
                                            <span>Total</span>
                                            <span>$17.60</span>
                                        </p>
                                    </div>
                                    <p><a href="checkout.html" class="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    <div>
                        <div class="col-md-12 text-center cart-empty">
                            <div>Your cart is empty, Keep shopping</div>
                            <p><Link to="/shop" class="btn btn-primary">Back to Shop</Link></p>
                        </div>
                    </div>
            }
        </>
    );
}

export default Cart;