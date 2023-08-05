import ProductItem from './ProductItem'
import {Consumer} from '../state/productState'
import { handleClick } from './MyFunctions';
const AvailableProducts = () =>{
    
return (
<Consumer>
{
value => {
const {products} = value
return (

<div className="panel-group">

<div className='panel panel-primary'>

<div className="panel panel-header">

Products List

</div>







<div className='panel-body'>

<div className='row'>

<div className='col-md-2'>Filter by:</div>

<div className='col-md-4'>

<input type='text' />
<button  >Search</button>

</div>

</div>

<div className='table-responsive'>
<table className="table">
<thead className="table-dark">
<tr> <th><button>Image</button></th>
    
<th>Product</th>
<th>Code</th>
<th>Available</th>
<th>Price</th>
<th>StarRating</th>

<th> Product Actions</th>
</tr>

</thead>
<tbody>
{products.map(product =>(<ProductItem product={product} key={product.productId} />))}
</tbody>

</table>
</div>
</div>
</div>
</div>
)
}
}
</Consumer>
)

}
export default AvailableProducts