import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Breadcrumb } from '../../components';
import { Rate, List, Comment, Tooltip, Button, Form, Input, InputNumber, notification } from 'antd';
import { Suggestions } from './components';
import moment from 'moment';
import { connect } from 'react-redux';

import product_actions from '../../redux/actions/product';
import cart_actions from '../../redux/actions/cart';

const { TextArea } = Input;

function Product(props) {
    const [value, setValue] = useState(1)

    const { id } = useParams();
    const history = useHistory();

    useEffect(
        () => {
            props.onFetchProduct(id);
            props.onFetchComment({ pid: id });
        }
        , []
    )

    const onValueChange = (value) => {
        setValue(value);
    }

    const addCart = () => {
        props.onAddCart({ product_id: parseInt(id, 10), quantity: value }, succeed)
    }

    const onFinish = (values) => {
        values.product_id = parseInt(id,10);
        props.onCreateComment(values)
    }

    const succeed = () => {
        const key = 'cart';
        const btn = (
            <Button type="primary"
                onClick={() => {
                    notification.close(key)
                    history.push('/cart')
                }
                }
            >
                Go to cart
            </Button>
        );
        notification.open({
            message: 'Succeed',
            description:
                'Added succecfully to the cart',
            btn,
            key
        });
    };

    return (
        <>
            <Breadcrumb navi='Product' name='Product' />
            <section class="ftco-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mb-5  ">
                            <a href={props.product.image} class="image-popup" target="_blank"><img src={props.product.image} class="img-fluid" alt="Colorlib Template" /></a>
                        </div>
                        <div class="col-lg-6 product-details pl-md-5  ">
                            <h3>{props.product.name}</h3>
                            <div class="rating d-flex">
                                <Rate
                                    defaultValue={props.product.rate_avg}
                                    style={{ color: '#82ae46' }}
                                />
                            </div>
                            <p class="price"><span>${props.product.price}</span></p>
                            <p>
                                {props.product.description}
                            </p>
                            <div class="row mt-4">
                                <div class="w-100"></div>
                                <div class="input-group col-md-6 d-flex mb-3">
                                    <InputNumber
                                        min={1}
                                        max={props.product.remaining || 1}
                                        defaultValue={1}
                                        keyboard={false}
                                        onChange={onValueChange}
                                        precision={0}
                                    />
                                </div>
                                <div class="col-md-12">
                                    <p style={{ color: '#000' }}>{props.product.remaining} available</p>
                                </div>
                            </div>
                            <p><div class="btn btn-black py-3 px-5" onClick={addCart}>Add to Cart</div></p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ftco-section">
                <div class="container">
                    <div class="col-md-12 heading-section text-center  ">
                        <span class="subheading">Comments</span>
                    </div>
                    <Form
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name='comment'
                        >
                            <TextArea rows={4} placeholder='Add your comment here' />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" type="primary" style={{ float: 'right' }}>
                                Add Comment
                             </Button>
                        </Form.Item>
                    </Form>
                    <List
                        className="comment-list"
                        header={`Comments`}
                        itemLayout="horizontal"
                        dataSource={[...props.comment]}
                        renderItem={item => (
                            <li>
                                <Comment
                                    author={item.name}
                                    avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                                    content={item.comment}
                                    datetime={moment.unix(item.last_up_date).format("DD/MM/YYYY")}
                                />
                            </li>
                        )}
                    />
                </div>
            </section>

            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center mb-3 pb-3">
                        <div class="col-md-12 heading-section text-center  ">
                            <span class="subheading">Products</span>
                            <h2 class="mb-4">Related Products</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                </div>
                <Suggestions />
            </section>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        product: state.product.current,
        comment: state.product.comment,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProduct: (id) => {
            dispatch(product_actions.onFetchProduct(id))
        },
        onAddCart: (data, callback) => {
            dispatch(cart_actions.onAddCart(data, callback))
        },
        onFetchComment: (id) => {
            dispatch(product_actions.onFetchComment(id))
        },
        onCreateComment: (data) => {
            dispatch(product_actions.onCreateComment(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);