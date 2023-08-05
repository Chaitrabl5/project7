import React from 'react';
import axios from 'axios';

const Context = React.createContext()

const reducer=(state, action) =>{
    switch(action.type){
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => product.productId=== action.payload)

            }
            case 'ADD_PRODUCT':
            return {
                ...state,
                products: [ action.payload,...state.products ]
            }
            case 'UPDATE_PRODUCT':
            return {
                ...state,
                products: state.products.map(product => product.productId=== action.payload.productId?
                   (product= action.payload ): product)
            }
            case 'SEARCH_PRODUCTS':
                return {
                  ...state,
                 products: state.products.filter(product => product.productName.toLocaleLowerCase()
                 .indexOf(action.payload.toLocaleLowerCase()) !== -1)
                }
        default:
            return state;
    }
}
    
export class ProductsContainer extends React.Component {

    state={
        products: [],
        // searchQuery: '',
        // searchResult: [],
        // showInfo: false,
         show: false,
        dispatch:action=> this.setState(state=>reducer(state, action))
         }
    
    async componentDidMount(){
    const response = await axios.get('http://localhost:8888/products');
    this.setState({products: response.data});
    }


    // handleToggleImage = () => {
    //     this.setState((prevState) => ({
    //       show: !prevState.show,
    //     }));
    //   };


//    async handleSearch(){
//   const products= await axios.get('http://localhost:8888/products');
//         const sampleSearchResult =products.filter(
//             (item) => item.productName.toLowerCase().includes(this.state.searchQuery.toLowerCase())
//           );
//         this.setState({
//           searchResult: sampleSearchResult,
//        showInfo: true,
//         });
//       };
    
//       handleChange(event){
//         this.setState({
//           searchQuery: event.target.value,
//         });
//     };
    

    render(){
        return(
          <Context.Provider value={this.state}>
            {this.props.children}
            
            </Context.Provider>
        )
    }

}
export const Consumer = Context.Consumer;
