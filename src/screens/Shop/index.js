import { Breadcrumb } from '../../components';
import { Categories, Pagination, Products } from './components';
function Shop(props) {
	return (
		<>
			<Breadcrumb />
			<section class="ftco-section">
				<div class="container">
					<Categories />
					<Products />
					<Pagination />
				</div>
			</section>
		</>
	);
}

export default Shop;