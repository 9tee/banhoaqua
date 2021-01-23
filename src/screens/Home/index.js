import { CustomCarousel, CircleIcon, Categories, Products } from './components'

function Home(props) {
    return (
        <>
            <CustomCarousel />
            <CircleIcon />
            <Categories/>
            <Products/>
        </>
    );
}

export default Home;