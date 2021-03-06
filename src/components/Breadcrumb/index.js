import {Link} from 'react-router-dom';

function Breadcrumb(props) {
    return (
        <div class="hero-wrap hero-bread" style={{backgroundImage: 'url(../images/bg_1.jpg)'}}>
            <div class="container">
                <div class="row no-gutters slider-text align-items-center justify-content-center">
                    <div class="col-md-9 text-center">
                        <p class="breadcrumbs"><span class="mr-2"><Link to="/">Home</Link></span> <span>{props.navi}</span></p>
                        <h1 class="mb-0 bread">{props.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;