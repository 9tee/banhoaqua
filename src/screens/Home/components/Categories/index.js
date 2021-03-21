import {Link} from 'react-router-dom';

function Categories(props) {
    return (
        <section class="ftco-section ftco-category ftco-no-pt">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-6 order-md-last align-items-stretch d-flex">
                                <div class="category-wrap-2   img align-self-stretch d-flex" style={{ backgroundImage: 'url(images/category.jpg)' }}>
                                    <div class="text text-center">
                                        <h2>Vegetables</h2>
                                        <p>Protect the health of every home</p>
                                        <p><Link to="/shop" class="btn btn-primary">Shop now</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="category-wrap   img mb-4 d-flex align-items-end" style={{ backgroundImage: 'url(images/category-1.jpg)' }}>
                                    <div class="text px-3 py-1">
                                    </div>
                                </div>
                                <div class="category-wrap   img d-flex align-items-end" style={{ backgroundImage: 'url(images/category-2.jpg)' }}>
                                    <div class="text px-3 py-1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="category-wrap   img mb-4 d-flex align-items-end" style={{ backgroundImage: 'url(images/category-3.jpg)' }}>
                            <div class="text px-3 py-1">
                            </div>
                        </div>
                        <div class="category-wrap   img d-flex align-items-end" style={{ backgroundImage: 'url(images/category-4.jpg)' }}>
                            <div class="text px-3 py-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;