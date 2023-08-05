// import React,{Component} from 'react';
// import { Consumer } from '../state/productState';
// import axios from 'axios';
// import classnames from 'classnames';
// import TextInput from './TextInput'
// import {Rating} from '@mui/material'
// import withRouter from '../decorator/decorateRoute';

// class ProductAdd extends Component {
// state = {
//     productName:'',
//     price:0.0,
//     starRating:0.0,
//     errors:{}
// }
// onSubmit = async (dispatch,e)=>{
// const {productName,price,starRating} = this.state;//destructuring
// e.preventDefault()

// if(productName === ''){
//     this.setState({errors:{productName:"Product Name Is Required"}})
// return
// }

// if(price <= 0.0){
//     this.setState({errors:{price:"Price Is Required"}})
// return
// }

// if(starRating <= 0.0){
//     this.setState({errors:{starRating:"Star Rating Is Required"}})
// return
// }

// const newProduct = {
// productName,
// price,
// starRating
// }

// const res=await axios.post(`http://localhost:8888/products`,newProduct)
// dispatch({type:'ADD_PRODUCT',payload: res.data})
// this.setState({
//     productName:'',
//     price:0.0,
//     starRating:0.0
// })
// this.props.navigate('/')
// }
// onChange = (e)=>{ this.setState({[e.target.name]:e.target.value}) }
 
// render(){
//     const  {productName,price,starRating,errors}=this.state
//   return
//   (
//    <Consumer>
//     {
// value =>{
//     const {dispatch}=value
//     return(
//         <div className='card mb-3'>
// <div className='card-header'>Add New Product</div>
// <div className='card-body'>
// <form onSubmit={this.onSubmit.bind(this,dispatch)}>
// <TextInput label='ProductName'
// name='productName'
// placeholder='Enter Product Name'
// value={productName}
// onChange={this.onChange}
// error={errors.productName}/>
// <TextInput label='Price'
// name='price'
// placeholder='Enter Price'
// value={price}
// onChange={this.onChange}
// error={errors.price}/>
// <div className="form-group">
// <label htmlFor={starRating}>StarRating</label>
// <Rating name='starRating' id="starRating" value={Number(starRating)} precision={0.1} onChange={this.onChange}
// className={classnames('form-control form-control-lg',{
// 'is-invalid':errors.starRating
// })}/>
// {errors && <div className="invalid-feedback">{errors.starRating}</div>}

// </div>
// <input type='submit' value='Update price' className='btn btn-light btn-block'/>

// </form>
// </div>

// </div>
//     )
// }
//     }
//    </Consumer>

//   )
//     }
// }

// export default withRouter(ProductAdd)


import React,{Component} from 'react'
import {Consumer} from '../state/productState'
import axios from 'axios'
import classnames from 'classnames'
import TextInput from './TextInput'
import {Rating} from '@mui/material'
import withRouter from '../decorator/decorateRoute' 

class ProductEdit extends Component{
    state={
        productName:'',
        price: 0.0,
        starRating: 0.0,
        errors: {}
    }
async componentDidMount(){
    const {id}=this.props.params
    const res =await axios.get(`http://localhost:8888/products/${id}`)
  const product=res.data
  this.setState({
    productName : product.productName,
    price : product.price,
    starRating : product.rating

  })
}


    onSubmit = async (dispatch, e) =>{
        const {id}=this.props.params
        const {productName, price, starRating} = this.state
        e.preventDefault()
        if(productName === ''){
            this.setState({errors:{productName:"Product Name is required"}})
            return
        }
        if(price <= 0.0){
            this.setState({errors:{productName:"Price is required"}})
            return
        }
        if(starRating <= 0.0){
            this.setState({errors:{productName:"Star Rating is required"}})
            return
        }

        const newProduct ={
            productName,
            price,
            starRating
        }
        const res = await axios.put(`http://localhost:8888/products/${id}`, newProduct)
        dispatch({type:'UPDATE_PRODUCT',payload: res.data})
        this.setState({
            productName:'',
            price: 0.0,
            starRating: 0.0
        })
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
                                <div className='card mb-3'>
<div className='card-header'>Add New Product</div>
<div className='card-body'>
<form onSubmit={this.onSubmit.bind(this,dispatch)}>
<TextInput label='ProductName'
name='productName'
placeholder='Enter Product Name'
value={productName}
onChange={this.onChange}
error={errors.productName}/>
<TextInput label='Price'
name='price'
placeholder='Enter Price'
value={price}
onChange={this.onChange}
error={errors.price}/>
<div className="form-group">
<label htmlFor={starRating}>StarRating</label>
<Rating name='starRating' id="starRating" value={Number(starRating)} precision={0.1} onChange={this.onChange}
className={classnames('form-control form-control-lg',{
'is-invalid':errors.starRating
})}/>
{errors && <div className="invalid-feedback">{errors.starRating}</div>}

</div>
<input type='submit' value='Update price' className='btn btn-light btn-block'/>

</form>
</div>

</div>
                            )

                        }
                    }
                    </Consumer>
        )
                }
            }
                
export default withRouter(ProductEdit)

