import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
    const [dropdown, setDropdown] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    let dropdownHandle = () => {
        if (dropdown !== '') {
            setDropdown('')
        }
        else {
            setDropdown('show')
        }
    }

    let location = useLocation();

    return (
        <>
            <div class="py-1 bg-primary">
                <div class="container">
                    <div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
                        <div class="col-lg-12 d-block">
                            <div class="row d-flex">
                                <div class="col-md pr-4 d-flex topper align-items-center">
                                    <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
                                    <span class="text">097 800 4683</span>
                                </div>
                                <div class="col-md pr-4 d-flex topper align-items-center">
                                    <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
                                    <span class="text">sonnam99@gmail.com</span>
                                </div>
                                <div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                    <span class="text">3-5 Business days delivery &amp; Free Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div class="container">
                    <Link class="navbar-brand" to="/">Vegefoods</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="oi oi-menu"></span> Menu
	                </button>
                    <div class="collapse navbar-collapse" id="ftco-nav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"><Link to="/" class="nav-link">Home</Link></li>
                            <li class={`nav-item dropdown ${dropdown}`} onClick={dropdownHandle}>
                                <Link class="nav-link dropdown-toggle" to="#">Shop</Link>
                                <div class={`dropdown-menu ${dropdown}`} >
                                    <Link class="dropdown-item" to="/shop">Shop</Link>
                                    <Link class="dropdown-item" to="/wishlist">Wishlist</Link>
                                    <Link class="dropdown-item" to="/product">Single Product</Link>
                                    <Link class="dropdown-item" to="/cart">Cart</Link>
                                    <Link class="dropdown-item" to="/checkout">Checkout</Link>
                                </div>
                            </li>
                            <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
                            <li class="nav-item"><Link to="/blog" class="nav-link">Blog</Link></li>
                            <li class="nav-item"><Link to="/contact" class="nav-link">Contact</Link></li>
                            {
                                isLogin ?
                                    <>
                                        <li class="nav-item cta cta-colored"><Link to="/cart" class="nav-link"><span class="icon-shopping_cart"></span>[0]</Link></li>
                                        <li class="nav-item"><Link to="/login" class="nav-link">Logout</Link></li>
                                    </>
                                    :
                                    <li class="nav-item"><Link to={{pathname: "/login", state: location.pathname }}  class="nav-link">Login</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;