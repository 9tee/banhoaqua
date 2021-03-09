import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Table } from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import styled from 'styled-components';

import { Breadcrumb } from '../../components';
import actions from '../../redux/actions/cart';

const Hover = styled.div`
    &:hover {
        cursor:pointer;
    }
`

function Cart(props) {
    const deteleCart = (index) => {
        props.onDeleteCart({pid: index});
    }

    const columns = [
        {
            render: (text,record) => (<Hover onClick={() => {deteleCart(record.id)}}><CloseOutlined /></Hover>),
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
            render: (text) => (<div>${`${text}`}</div>)
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Total',
            render: (text,record) => (<div>${`${record.price * record.quantity}`}</div>)
        }
    ];

    useEffect(
        props.onFetchCart
        ,[])

    

    return (
        <>
            <Breadcrumb navi='Cart' name='My cart'/>
            {
                props.cart.length !== 0
                    ?
                    <section class="ftco-section ftco-cart">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12  ">
                                    <div>
                                        <Table columns={columns} dataSource={[...props.cart]} pagination={false}/>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-end">
                                <div class="col-lg-4 mt-5 cart-wrap  ">
                                    <div class="cart-total mb-3">
                                        <h3>Cart Totals</h3>
                                        <p class="d-flex">
                                            <span>Subtotal</span>
                                            <span>${props.cart.reduce((sum,value) => (sum +value.price*value.quantity),0).toFixed(2)}</span>
                                        </p>
                                        <p class="d-flex">
                                            <span>Delivery</span>
                                            <span>$0.00</span>
                                        </p>
                                        <p class="d-flex total-price">
                                            <span>Total</span>
                                            <span>${props.cart.reduce((sum,value) => (sum +value.price*value.quantity),0).toFixed(2)}</span>
                                        </p>
                                    </div>
                                    <p><Link to="/checkout" class="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
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

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchCart: () => {
            dispatch(actions.onFetchCart())
        },
        onDeleteCart: (data) => {
            dispatch(actions.onDeleteCart(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);