//import { Consumer } from "../state/productState.js";
import StarRating from "./Starrating.js";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductItem=(props) => {
    return (
       <tr>
        <td>
         
          <img src={props.product.imageUrl}  alt="Mobile Product" style={{width:60,margin:2}}/>
            </td>
        <td> {props.product.productName}   </td>
        <td> {props.product.productCode}   </td>
        <td> {props.product.productAvailable}   </td>
        <td> {props.product.price}   </td>
       <td><StarRating rating={props.product.starRating}/></td>
       <td>
        <Link to={`product/edit/${props.product.productId}`}>
            <i className="fa fa-pencil" 
            style={{cursor:'pointer',float:'right', color:'red'}}>
            </i>
            </Link> 
       </td>
       <td>
        <Link to={`product/delete/${props.product.productId}`} >
            <i className="fa fa-remove" 
            style={{cursor:'pointer',float:'right', color:'red'}}>
            </i>
            </Link> 
       </td>
       </tr>

    )
}

export default ProductItem;