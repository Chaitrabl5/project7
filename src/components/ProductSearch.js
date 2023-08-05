


import React,{Component} from 'react'
import {Consumer} from '../state/productState'
import axios from 'axios'
import classnames from 'classnames'
import TextInput from './TextInput'
import {Rating} from '@mui/material'
import withRouter from '../decorator/decorateRoute' 

class ProductSearch extends Component{
    state={
        productName:'',
    }
async componentDidMount(){
    const res =await axios.get(`http://localhost:8888/products`)
  const product=res.data
  this.setState({
    productName : product.productName,
  })
}


    onSubmit = async (dispatch, e) =>{

        const res = await axios.get(`http://localhost:8888/products`)
        dispatch({type:'SEARCH_PRODUCTS',payload: res.data})
        this.props.navigate('/')

    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    render(){
        const {productName, price, starRating, errors} = this.state
        return(
                    <Consumer>
                        {value => {
                            const {dispatch} = value
                            return(
                                <div className="panel-group">

<div className='panel panel-primary'>

<div className="panel panel-header">

Products List

</div>

<div className='panel-body'>

<div className='row'>

<div className='col-md-2'>Filter by:</div>

<div className='col-md-4'>

<input type='text' onChange={this.onChange} />
<button >Search</button>

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
            }
                
export default withRouter(ProductSearch)

