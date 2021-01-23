function CaroselItem(props) {
    const {
        image,
        text,
        memo
    } = props
    return (
        <div>
            <div class="slider-item" style={{ backgroundImage: `url(${image})` }} >
                <div class="overlay" />
                <div class="container">
                    <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                        <div class="col-md-12 text-center">
                            <h1 class="mb-2">{text}</h1>
                            <h2 class="subheading mb-4">{memo}</h2>
                            <p><a href="#" class="btn btn-primary">View Details</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaroselItem;