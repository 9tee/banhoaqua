import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../../components';
import { Rate, List, Comment, Tooltip, Button, Form, Input } from 'antd';
import { Suggestions } from './components';
import moment from 'moment';
import { connect } from 'react-redux';

import actions from '../../redux/actions/product';


const { TextArea } = Input;

function Product(props) {

    const { id } = useParams();

    useEffect(
        () => { props.onFetchProduct(id) }
        , []
    )

    const data = [
        {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
        {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
    ];


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
                                    <span class="input-group-btn mr-2">
                                        <button type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
                                            <i class="ion-ios-remove"></i>
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100" />
                                    <span class="input-group-btn ml-2">
                                        <button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                                            <i class="ion-ios-add"></i>
                                        </button>
                                    </span>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-12">
                                    <p style={{ color: '#000' }}>600 kg available</p>
                                </div>
                            </div>
                            <p><a href="cart.html" class="btn btn-black py-3 px-5">Add to Cart</a></p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ftco-section">
                <div class="container">
                    <div class="col-md-12 heading-section text-center  ">
                        <span class="subheading">Comments</span>
                    </div>
                    <Form>
                        <Form.Item>
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
                        dataSource={data}
                        renderItem={item => (
                            <li>
                                <Comment
                                    actions={item.actions}
                                    author={item.author}
                                    avatar={item.avatar}
                                    content={item.content}
                                    datetime={item.datetime}
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
        product: state.product.current
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProduct: (id) => {
            dispatch(actions.onFetchProduct(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);