import {useEffect} from 'react';
import { Breadcrumb } from '../../components';
import { Categories, Pagination, Products } from './components';
import {connect} from 'react-redux';
import actions from '../../redux/actions/category'

function Shop(props) {
	
	useEffect(
        props.fetchCategory
    ,[])

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

const mapStateToProps = (state) => {
    return{
        category: state.category.category
    }
}   

const mapDispatchToProps = (dispatch) => {
    return{
        fetchCategory: () => {
            dispatch(actions.onFetchCategory())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop);